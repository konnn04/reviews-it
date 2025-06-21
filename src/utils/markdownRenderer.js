import hljs from 'highlight.js';

export const customCodeRenderer = (props) => {
  const {node, inline, className, children, ...otherProps} = props;
  const match = /language-(\w+)/.exec(className || '');
  
  if (!inline && match) {
    // Xử lý code block
    const language = match[1];
    const highlighted = hljs.highlight(
      String(children).replace(/\n$/, ''),
      { language, ignoreIllegals: true }
    ).value;
    
    return (
      <pre className={`language-${language}`}>
        <code
          className={`hljs language-${language}`}
          dangerouslySetInnerHTML={{ __html: highlighted }}
          {...otherProps}
        />
      </pre>
    );
  }
  
  // Xử lý inline code
  return (
    <code className={className} {...otherProps}>
      {children}
    </code>
  );
};

/**
 * Tùy chỉnh cách xử lý hình ảnh trong markdown
 */
export const customImageRenderer = (basePath) => (props) => {
  const {src, alt, title, ...otherProps} = props;
  
  // Xử lý đường dẫn hình ảnh
  let imageSrc = src;
  if (!src.startsWith('http') && !src.startsWith('data:')) {
    imageSrc = `${basePath}${src}`;
  }
  
  return (
    <img
      src={imageSrc}
      alt={alt || ''}
      title={title || alt || ''}
      className="img-fluid"
      loading="lazy"
      {...otherProps}
    />
  );
};

/**
 * Các thành phần tùy chỉnh cho ReactMarkdown
 */
export const createCustomComponents = (basePath) => ({
  code: customCodeRenderer,
  img: customImageRenderer(basePath)
});