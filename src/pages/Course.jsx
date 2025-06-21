import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { loadInitData } from '../utils/dataLoader';
import { Tabs, Tab, Card, Row, Col, Badge } from 'react-bootstrap';

function Course() {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const data = await loadInitData();
        const foundCourse = data.courses.find(c => c.id === courseId);
        setCourse(foundCourse);
      } catch (error) {
        console.error("Không thể tải dữ liệu khóa học:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [courseId]);

  if (loading) {
    return <div className="text-center py-5"><div className="spinner-border"></div></div>;
  }

  if (!course) {
    return <div className="alert alert-danger">Không tìm thấy khóa học</div>;
  }

  const hasDocuments = course.doc && course.doc.length > 0;
  const hasQuizzes = course['choices-test'] && course['choices-test'].length > 0;

  return (
    <div className="course-page">
      <div className="course-header mb-4">
        <h1>{course.title}</h1>
        <p className="lead">{course.description}</p>
      </div>

      <Tabs defaultActiveKey="documents" className="mb-4">
        {hasDocuments && (
          <Tab eventKey="documents" title="Tài liệu">
            <div className="p-3">
              <h3 className="mb-3">Học liệu</h3>
              <Row xs={1} md={2} lg={3} className="g-4">
                {course.doc.map(doc => (
                  <Col key={doc.id}>
                    <Card className="h-100">
                      <Card.Body>
                        <Card.Title>{doc.title}</Card.Title>
                        <Card.Text>{doc.description}</Card.Text>
                        <Badge bg="secondary" className="mb-2">
                          {doc.file.endsWith('.MD') || doc.file.endsWith('.md') 
                            ? 'Markdown' 
                            : doc.file.split('.').pop().toUpperCase()}
                        </Badge>
                        <div>
                          <Link to={`/course/${courseId}/doc/${doc.id}`} className="btn btn-primary mt-2">
                            Đọc tài liệu
                          </Link>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </Tab>
        )}
        
        {hasQuizzes && (
          <Tab eventKey="quizzes" title="Bài kiểm tra">
            <div className="p-3">
              <h3 className="mb-3">Bài tập thực hành</h3>
              <Row xs={1} md={2} lg={3} className="g-4">
                {course['choices-test'].map(quiz => (
                  <Col key={quiz.id}>
                    <Card className="h-100">
                      <Card.Body>
                        <Card.Title>{quiz.title}</Card.Title>
                        <Card.Text>{quiz.description}</Card.Text>
                        <div className="d-flex gap-2 mt-3">
                          <Link to={`/course/${courseId}/quiz/${quiz.id}`} className="btn btn-success">
                            Làm bài kiểm tra
                          </Link>
                          <Link to={`/course/${courseId}/flashcard/${quiz.id}`} className="btn btn-info">
                            Thẻ ghi nhớ
                          </Link>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </Tab>
        )}
      </Tabs>
    </div>
  );
}

export default Course;