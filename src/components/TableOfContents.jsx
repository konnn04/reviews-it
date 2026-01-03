import { useEffect, useState, useRef } from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

function TableOfContents({ contentRef }) {
  const [headings, setHeadings] = useState([]);
  const [activeId, setActiveId] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const tocNavRef = useRef(null);

  useEffect(() => {
    if (!contentRef?.current) return;

    // Extract headings from the content
    const headingElements = contentRef.current.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const headingData = Array.from(headingElements).map((heading, index) => {
      // Create ID if doesn't exist
      if (!heading.id) {
        heading.id = `heading-${index}`;
      }
      return {
        id: heading.id,
        text: heading.textContent,
        level: parseInt(heading.tagName.substring(1)),
      };
    });
    
    setHeadings(headingData);
  }, [contentRef]);

  useEffect(() => {
    if (!contentRef?.current || headings.length === 0) return;

    const observerOptions = {
      rootMargin: '-80px 0px -80% 0px',
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all heading elements
    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [headings, contentRef]);

  // Auto scroll TOC to active item
  useEffect(() => {
    if (!activeId || !tocNavRef.current) return;

    const activeElement = tocNavRef.current.querySelector(`a[href="#${activeId}"]`);
    if (activeElement) {
      const tocContainer = tocNavRef.current.closest('.table-of-contents');
      if (tocContainer) {
        const containerRect = tocContainer.getBoundingClientRect();
        const elementRect = activeElement.getBoundingClientRect();
        
        // Check if element is outside visible area
        if (elementRect.top < containerRect.top || elementRect.bottom > containerRect.bottom) {
          activeElement.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
          });
        }
      }
    }
  }, [activeId]);

  const scrollToHeading = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      
      // Close mobile menu after clicking
      if (window.innerWidth < 992) {
        setIsOpen(false);
      }
    }
  };

  if (headings.length === 0) {
    return null;
  }

  return (
    <>
      {/* Mobile toggle button */}
      <Button
        className="toc-toggle d-lg-none"
        onClick={() => setIsOpen(!isOpen)}
        variant="primary"
      >
        <i className={`bi ${isOpen ? 'bi-x-lg' : 'bi-list'}`}></i>
      </Button>

      {/* Table of contents */}
      <div className={`table-of-contents ${isOpen ? 'open' : ''}`}>
        <div className="toc-header">
          <h5>Mục lục</h5>
        </div>
        <nav className="toc-nav" ref={tocNavRef}>
          <ul className="toc-list">
            {headings.map((heading) => (
              <li
                key={heading.id}
                className={`toc-item toc-level-${heading.level} ${
                  activeId === heading.id ? 'active' : ''
                }`}
              >
                <a
                  href={`#${heading.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToHeading(heading.id);
                  }}
                >
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="toc-overlay d-lg-none" 
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}

TableOfContents.propTypes = {
  contentRef: PropTypes.object,
};

export default TableOfContents;
