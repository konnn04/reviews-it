import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { loadInitData, loadDocumentContent } from '../utils/dataLoader';
import { Card, Breadcrumb, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import 'katex/dist/katex.min.css';
import 'highlight.js/styles/github.css';
import hljs from 'highlight.js';

function DocumentView() {
  const { courseId, docId } = useParams();
  const [document, setDocument] = useState(null);
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [course, setCourse] = useState(null);
  const [baseImagePath, setBaseImagePath] = useState('');
  const markdownRef = useRef(null);
  const [isPdf, setIsPdf] = useState(false);
  const [pdfUrl, setPdfUrl] = useState('');

  useEffect(() => {
    const fetchDocument = async () => {
      try {
        const initData = await loadInitData();
        const foundCourse = initData.courses.find(c => c.id === courseId);
        setCourse(foundCourse);
        
        if (!foundCourse) {
          setError("Không tìm thấy khóa học");
          setLoading(false);
          return;
        }
        
        const foundDoc = foundCourse.doc.find(d => d.id === docId);
        setDocument(foundDoc);
        
        if (!foundDoc) {
          setError("Không tìm thấy tài liệu");
          setLoading(false);
          return;
        }

        const filePath = foundDoc.file;
        // Chuyển đổi thành chữ thường và kiểm tra phần mở rộng
        const fileExtension = filePath.toLowerCase().split('.').pop();
        
        // Kiểm tra nếu là file PDF
        if (fileExtension === 'pdf') {
          console.log("Đã phát hiện file PDF:", filePath);
          setIsPdf(true);
          setPdfUrl(`/data/${courseId}/${filePath}`);
          setLoading(false);
          return;
        } else if (fileExtension === 'md') {
          console.log("Đã phát hiện file Markdown:", filePath);
          // Tiếp tục xử lý markdown
        } else {
          console.log("Phát hiện loại file khác:", fileExtension);
          // Xử lý các loại file khác nếu cần
        }

        // Xử lý Markdown và các loại file khác
        const lastSlashIndex = filePath.lastIndexOf('/');
        const basePath = lastSlashIndex !== -1 ? filePath.substring(0, lastSlashIndex + 1) : '';
        setBaseImagePath(`/data/${courseId}/${basePath}`);
        
        try {
          const docContent = await loadDocumentContent(courseId, foundDoc.file);
          setContent(docContent);
        } catch (docError) {
          console.error("Lỗi khi tải nội dung tài liệu:", docError);
          setError(`Không thể tải nội dung tài liệu: ${docError.message}`);
        }
      } catch (error) {
        console.error("Không thể tải thông tin tài liệu:", error);
        setError("Không thể tải thông tin tài liệu");
      } finally {
        setLoading(false);
      }
    };

    fetchDocument();
  }, [courseId, docId]);

  // Xử lý highlight code khi nội dung đã được tải
  useEffect(() => {
    if (!isPdf && content && markdownRef.current) {
      const timer = setTimeout(() => {
        try {
          const codeBlocks = markdownRef.current.querySelectorAll('pre code');
          if (codeBlocks.length > 0) {
            codeBlocks.forEach((block) => {
              hljs.highlightElement(block);
            });
          }
        } catch (error) {
          console.error("Lỗi khi highlight code:", error);
        }
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [content, isPdf]);

  // Xử lý ảnh với đường dẫn tương đối
  const transformUrl = (src, alt, title) => {
    // Chỉ xử lý URL hình ảnh
    if (!alt && !title) {
      return src; // Đây không phải là URL hình ảnh
    }
    
    if (src.startsWith('http') || src.startsWith('data:')) {
      return src;
    }
    
    // Nếu src là đường dẫn tương đối, thêm đường dẫn cơ sở
    return `${baseImagePath}${src}`;
  };

  // Xử lý code block với highlight.js
  const components = {
    code({node, inline, className, children, ...props}) {
      const match = /language-(\w+)/.exec(className || '');
      return !inline && match ? (
        <pre>
          <code
            className={`language-${match[1]}`}
            {...props}
          >
            {String(children).replace(/\n$/, '')}
          </code>
        </pre>
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
  };

  if (loading) {
    return <div className="text-center py-5"><div className="spinner-border"></div></div>;
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  return (
    <div className="document-view">
      <Breadcrumb className="mb-4">
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Trang chủ</Breadcrumb.Item>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: `/course/${courseId}` }}>
          {course?.title || courseId}
        </Breadcrumb.Item>
        <Breadcrumb.Item active>{document?.title || docId}</Breadcrumb.Item>
      </Breadcrumb>

      <Card>
        <Card.Header>
          <h2>{document?.title}</h2>
          {document?.file && (
            <div className="text-muted small mt-1">
              Loại tệp: {isPdf ? 'PDF' : document.file.toLowerCase().endsWith('.md') ? 'Markdown' : document.file.split('.').pop().toUpperCase()}
            </div>
          )}
        </Card.Header>
        <Card.Body>
          {isPdf ? (
            <div className="pdf-viewer text-center">
              <div className="alert alert-info mb-3">
                Đây là tệp PDF. Để tránh làm chậm trình duyệt, PDF không được hiển thị trực tiếp.
              </div>
              <Button 
                variant="primary" 
                href={pdfUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mb-3"
              >
                Mở PDF trong tab mới
              </Button>
              <div>
                <Button 
                  variant="secondary" 
                  as="a" 
                  href={pdfUrl} 
                  download
                >
                  Tải xuống
                </Button>
              </div>
            </div>
          ) : (
            <div className="markdown-body" ref={markdownRef}>
              {content ? (
                <ReactMarkdown
                  remarkPlugins={[remarkGfm, remarkMath]}
                  rehypePlugins={[rehypeKatex, rehypeRaw]}
                  components={components}
                  urlTransform={transformUrl}
                >
                  {content}
                </ReactMarkdown>
              ) : (
                <div className="alert alert-warning">Không có nội dung để hiển thị</div>
              )}
            </div>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}

export default DocumentView;