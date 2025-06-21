import { Link } from 'react-router-dom';
import { Card, Badge } from 'react-bootstrap';

function CourseCard({ course }) {
  // Tính toán thẻ hiển thị
  const hasDocuments = course.doc && course.doc.length > 0;
  const hasQuizzes = course['choices-test'] && course['choices-test'].length > 0;
  
  return (
    <Card className="h-100 shadow-sm hover-shadow">
      <Card.Img 
        variant="top" 
        src={course.thumbnail || 'https://via.placeholder.com/300x150?text=Khóa+học'} 
        alt={course.title}
        style={{ height: '150px', objectFit: 'cover' }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{course.title}</Card.Title>
        <Card.Text>{course.description}</Card.Text>
        
        <div className="mb-3">
          {hasDocuments && <Badge bg="primary" className="me-2">Tài liệu</Badge>}
          {hasQuizzes && <Badge bg="success" className="me-2">Trắc nghiệm</Badge>}
          {hasQuizzes && <Badge bg="info">Flashcard</Badge>}
        </div>
        
        <Link to={`/course/${course.id}`} className="btn btn-primary mt-auto">
          Khám phá khóa học
        </Link>
      </Card.Body>
    </Card>
  );
}

export default CourseCard;