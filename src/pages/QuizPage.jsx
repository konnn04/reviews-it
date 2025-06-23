import { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { loadInitData, loadQuizData } from "../utils/dataLoader";
import {
  Card,
  Button,
  Form,
  Badge,
  Alert,
  ProgressBar,
  Row,
  Col,
} from "react-bootstrap";
import QuestionOverview from "../components/QuestionOverview";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "highlight.js/styles/github.css";
import hljs from "highlight.js";

function QuizPage() {
  const { courseId, quizId } = useParams();
  const [quiz, setQuiz] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [markedQuestions, setMarkedQuestions] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [timeLeft, setTimeLeft] = useState(null);
  const [timer, setTimer] = useState(null);
  const [settings, setSettings] = useState({
    questionCount: 10,
    timeLimit: 15, // phút
    randomize: true,
  });
  const [showSettings, setShowSettings] = useState(true);
  const [quizStarted, setQuizStarted] = useState(false);

  const questionRef = useRef(null);
  const resultsRef = useRef(null);

  const markdownComponents = {
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || "");
      return !inline && match ? (
        <pre>
          <code className={`language-${match[1]}`} {...props}>
            {String(children).replace(/\n$/, "")}
          </code>
        </pre>
      ) : (
        <code {...props}>{children}</code>
      );
    },
  };

  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const initData = await loadInitData();
        const foundCourse = initData.courses.find((c) => c.id === courseId);

        if (!foundCourse) {
          setError("Không tìm thấy khóa học");
          setLoading(false);
          return;
        }

        const foundQuiz = foundCourse["choices-test"].find(
          (q) => q.id === quizId
        );
        setQuiz(foundQuiz);

        if (!foundQuiz) {
          setError("Không tìm thấy bài kiểm tra");
          setLoading(false);
          return;
        }

        const quizData = await loadQuizData(courseId, foundQuiz.file);
        setQuestions(quizData);
      } catch (error) {
        console.error("Không thể tải bài kiểm tra:", error);
        setError("Không thể tải bài kiểm tra");
      } finally {
        setLoading(false);
      }
    };

    fetchQuizData();
  }, [courseId, quizId]);

  useEffect(() => {
    if (questionRef.current && !showSettings && !showResults) {
      const codeBlocks = questionRef.current.querySelectorAll("pre code");
      if (codeBlocks.length > 0) {
        codeBlocks.forEach((block) => {
          hljs.highlightElement(block);
        });
      }
    }
  }, [currentIndex, showSettings, showResults]);

  useEffect(() => {
    if (showResults && resultsRef.current) {
      const codeBlocks = resultsRef.current.querySelectorAll("pre code");
      if (codeBlocks.length > 0) {
        codeBlocks.forEach((block) => {
          hljs.highlightElement(block);
        });
      }
    }
  }, [showResults]);

  const startQuiz = () => {
    let selectedQuestions = [...questions];

    if (settings.randomize) {
      selectedQuestions.sort(() => Math.random() - 0.5);
    }

    selectedQuestions = selectedQuestions.slice(0, settings.questionCount);

    setQuestions(selectedQuestions);
    setTimeLeft(settings.timeLimit * 60);
    setShowSettings(false);
    setQuizStarted(true);
  };

  useEffect(() => {
    if (quizStarted && timeLeft > 0) {
      const timerInterval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerInterval);
            setShowResults(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      setTimer(timerInterval);

      return () => clearInterval(timerInterval);
    }
  }, [quizStarted, timeLeft]);

  const handleAnswer = (answer) => {
    setAnswers({
      ...answers,
      [currentIndex]: answer,
    });
  };

  const toggleMarkQuestion = () => {
    setMarkedQuestions({
      ...markedQuestions,
      [currentIndex]: !markedQuestions[currentIndex],
    });
  };

  const goToQuestion = (index) => {
    setCurrentIndex(index);
  };

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      clearInterval(timer);
      setShowResults(true);
    }
  };

  const prevQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((question, index) => {
      if (answers[index] === question.C) {
        score++;
      }
    });
    return score;
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border"></div>
      </div>
    );
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  if (showSettings) {
    return (
      <Card className="quiz-settings">
        <Card.Header>
          <h2>{quiz?.title} - Cài đặt Bài kiểm tra</h2>
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Số lượng câu hỏi</Form.Label>
              <Form.Control
                type="number"
                min="1"
                max={questions.length}
                value={settings.questionCount}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    questionCount: Math.min(
                      parseInt(e.target.value),
                      questions.length
                    ),
                  })
                }
              />
              <Form.Text className="text-muted">
                Tổng số câu: {questions.length}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Thời gian làm bài (phút)</Form.Label>
              <Form.Control
                type="number"
                min="1"
                value={settings.timeLimit}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    timeLimit: parseInt(e.target.value),
                  })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                label="Xáo trộn câu hỏi"
                checked={settings.randomize}
                onChange={(e) =>
                  setSettings({ ...settings, randomize: e.target.checked })
                }
              />
            </Form.Group>

            <Button variant="primary" onClick={startQuiz}>
              Bắt đầu làm bài
            </Button>
          </Form>
        </Card.Body>
      </Card>
    );
  }

  if (showResults) {
    const score = calculateScore();
    const percentage = Math.round((score / questions.length) * 100);

    return (
      <Card className="quiz-results">
        <Card.Header>
          <h2>Kết quả bài kiểm tra</h2>
        </Card.Header>
        <Card.Body ref={resultsRef}>
          <div className="text-center mb-4">
            <h3>
              Điểm của bạn: {score}/{questions.length} ({percentage}%)
            </h3>
            <ProgressBar
              now={percentage}
              variant={
                percentage >= 70
                  ? "success"
                  : percentage >= 40
                  ? "warning"
                  : "danger"
              }
              className="my-3"
              style={{ height: "30px" }}
            />

            {percentage >= 70 ? (
              <Alert variant="success">
                Xuất sắc! Bạn đã vượt qua bài kiểm tra.
              </Alert>
            ) : (
              <Alert variant="warning">
                Hãy tiếp tục luyện tập để cải thiện điểm số.
              </Alert>
            )}
          </div>

          <h4 className="mb-3">Xem lại câu hỏi:</h4>
          {questions.map((question, index) => (
            <Card
              key={index}
              className="mb-3"
              border={answers[index] === question.C ? "success" : "danger"}
            >
              <Card.Body>
                <Card.Title>
                  <Badge
                    bg={answers[index] === question.C ? "success" : "danger"}
                    className="me-2"
                  >
                    {answers[index] === question.C ? "Đúng" : "Sai"}
                  </Badge>
                  Câu hỏi {index + 1}
                </Card.Title>
                <div className="question-markdown mb-3">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm, remarkMath]}
                    rehypePlugins={[rehypeRaw, rehypeKatex]}
                    components={markdownComponents}
                  >
                    {question.Q}
                  </ReactMarkdown>
                </div>

                <div className="answers-review mt-3">
                  {question.A.map((answer, aIndex) => (
                    <div
                      key={aIndex}
                      className={`p-2 mb-2 rounded ${
                        aIndex === question.C
                          ? "bg-success text-white"
                          : aIndex === answers[index]
                          ? "bg-danger text-white"
                          : "bg-secondary"
                      }`}
                    >
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm, remarkMath]}
                        rehypePlugins={[rehypeRaw, rehypeKatex]}
                        components={markdownComponents}
                      >
                        {answer}
                      </ReactMarkdown>
                    </div>
                  ))}
                </div>

                {question.R && (
                  <Alert variant="info" className="mt-3">
                    <strong>Giải thích:</strong>
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm, remarkMath]}
                      rehypePlugins={[rehypeRaw, rehypeKatex]}
                      components={markdownComponents}
                    >
                      {question.R}
                    </ReactMarkdown>
                  </Alert>
                )}
              </Card.Body>
            </Card>
          ))}

          <div className="d-flex justify-content-between mt-4">
            <Link to={`/course/${courseId}`} className="btn btn-secondary">
              Trở về khóa học
            </Link>
            <Button
              variant="primary"
              onClick={() => {
                setShowSettings(true);
                setShowResults(false);
                setQuizStarted(false);
                setCurrentIndex(0);
                setAnswers({});
                setMarkedQuestions({});
              }}
            >
              Làm lại
            </Button>
          </div>
        </Card.Body>
      </Card>
    );
  }

  const currentQuestion = questions[currentIndex];

  if (!currentQuestion) {
    return <div className="alert alert-warning">Không có câu hỏi nào</div>;
  }

  return (
    <div className="quiz-page">
      <Card>
        <Card.Header className="d-flex justify-content-between align-items-center">
          <h2>{quiz?.title}</h2>
          <div className="timer">
            <Badge
              bg={
                timeLeft < 60 ? "danger" : timeLeft < 180 ? "warning" : "info"
              }
              className="p-2"
            >
              Thời gian: {formatTime(timeLeft)}
            </Badge>
          </div>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col md={8}>
              <div className="mb-3">
                <ProgressBar
                  now={((currentIndex + 1) / questions.length) * 100}
                  className="mb-2"
                />
                <div className="text-end text-muted">
                  Câu hỏi {currentIndex + 1} / {questions.length}
                </div>
              </div>

              <div className="question-content mb-4" ref={questionRef}>
                <div className="markdown-question">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm, remarkMath]}
                    rehypePlugins={[rehypeRaw, rehypeKatex]}
                    components={markdownComponents}
                  >
                    {currentQuestion.Q}
                  </ReactMarkdown>
                </div>
              </div>

              <div className="answers mb-4">
                {currentQuestion.A.map((answer, index) => (
                  <div
                    key={index}
                    className={`answer-option p-3 mb-2 border rounded ${
                      answers[currentIndex] === index ? "selected-answer" : ""
                    }`}
                    onClick={() => handleAnswer(index)}
                  >
                    <div className="d-flex align-items-center">
                      <div className="form-check me-2 mb-0">
                        <input
                          type="radio"
                          className="form-check-input"
                          checked={answers[currentIndex] === index}
                          readOnly
                        />
                      </div>
                      <div className="form-check-label w-100 cursor-pointer markdown-answer">
                        <ReactMarkdown
                          remarkPlugins={[remarkGfm, remarkMath]}
                          rehypePlugins={[rehypeRaw, rehypeKatex]}
                          components={markdownComponents}
                        >
                          {answer}
                        </ReactMarkdown>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="d-flex justify-content-between">
                <Button
                  variant="secondary"
                  onClick={prevQuestion}
                  disabled={currentIndex === 0}
                >
                  Trước
                </Button>
                <Button
                  variant={
                    markedQuestions[currentIndex]
                      ? "warning"
                      : "outline-warning"
                  }
                  onClick={toggleMarkQuestion}
                  className="mx-2"
                >
                  {markedQuestions[currentIndex] ? "Bỏ đánh dấu" : "Đánh dấu"}
                </Button>
                <Button variant="primary" onClick={nextQuestion}>
                  {currentIndex === questions.length - 1
                    ? "Kết thúc"
                    : "Tiếp theo"}
                </Button>
              </div>
            </Col>
            <Col md={4}>
              <QuestionOverview
                questions={questions}
                currentIndex={currentIndex}
                answers={answers}
                markedQuestions={markedQuestions}
                onSelectQuestion={goToQuestion}
              />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}

export default QuizPage;
