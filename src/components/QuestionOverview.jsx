import { Card, Badge } from 'react-bootstrap';

function QuestionOverview({ questions, currentIndex, answers, markedQuestions, onSelectQuestion }) {
  return (
    <Card className="question-overview">
      <Card.Header>
        <h5 className="mb-0">Tổng quan câu hỏi</h5>
      </Card.Header>
      <Card.Body className="pt-2">
        <div className="d-flex flex-wrap gap-2 justify-content-center">
          {questions.map((_, index) => {
            let variant = "light";
            let textColor = "dark";
            
            if (index === currentIndex) {
              variant = "primary";
              textColor = "white";
            } else if (markedQuestions[index]) {
              variant = "warning";
            } else if (answers[index] !== undefined) {
              variant = "success";
              textColor = "white";
            }
            
            return (
              <Badge
                key={index}
                bg={variant}
                text={textColor}
                style={{ 
                  cursor: 'pointer', 
                  width: '2.5rem', 
                  height: '2.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1rem'
                }}
                onClick={() => onSelectQuestion(index)}
              >
                {index + 1}
              </Badge>
            );
          })}
        </div>
        
        <div className="mt-4">
          <div className="d-flex align-items-center mb-2">
            <Badge bg="light" text="dark" className="me-2" style={{ width: '2.5rem', height: '2.5rem' }}>?</Badge>
            <span>Chưa trả lời</span>
          </div>
          <div className="d-flex align-items-center mb-2">
            <Badge bg="success" className="me-2" style={{ width: '2.5rem', height: '2.5rem' }}>?</Badge>
            <span>Đã trả lời</span>
          </div>
          <div className="d-flex align-items-center mb-2">
            <Badge bg="warning" className="me-2" style={{ width: '2.5rem', height: '2.5rem' }}>?</Badge>
            <span>Đã đánh dấu</span>
          </div>
          <div className="d-flex align-items-center">
            <Badge bg="primary" className="me-2" style={{ width: '2.5rem', height: '2.5rem' }}>?</Badge>
            <span>Câu hiện tại</span>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default QuestionOverview;