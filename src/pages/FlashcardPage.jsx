import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { loadInitData, loadQuizData } from "../utils/dataLoader";
import { Card, Button, Badge, Form } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "highlight.js/styles/github.css";
import hljs from "highlight.js";

function FlashcardPage() {
  const { courseId, flashcardId } = useParams();
  const [flashcards, setFlashcards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [title, setTitle] = useState("");
  const [settings, setSettings] = useState({
    cardCount: 20,
    randomize: true,
  });
  const [showSettings, setShowSettings] = useState(true);

  const frontCardRef = useState(null);
  const backCardRef = useState(null);

  useEffect(() => {
    const fetchFlashcardData = async () => {
      try {
        const initData = await loadInitData();
        const foundCourse = initData.courses.find((c) => c.id === courseId);

        if (!foundCourse) {
          setError("Không tìm thấy khóa học");
          setLoading(false);
          return;
        }

        const foundFlashcard = foundCourse["choices-test"].find(
          (q) => q.id === flashcardId
        );

        if (!foundFlashcard) {
          setError("Không tìm thấy bộ thẻ ghi nhớ");
          setLoading(false);
          return;
        }

        setTitle(foundFlashcard.title);

        const flashcardData = await loadQuizData(courseId, foundFlashcard.file);
        setFlashcards(flashcardData);
      } catch (error) {
        console.error("Không thể tải thẻ ghi nhớ:", error);
        setError("Không thể tải thẻ ghi nhớ");
      } finally {
        setLoading(false);
      }
    };

    fetchFlashcardData();
  }, [courseId, flashcardId]);

  useEffect(() => {
    if (flipped && backCardRef.current) {
      const codeBlocks = backCardRef.current.querySelectorAll("pre code");
      if (codeBlocks.length > 0) {
        codeBlocks.forEach((block) => {
          hljs.highlightElement(block);
        });
      }
    } else if (!flipped && frontCardRef.current) {
      const codeBlocks = frontCardRef.current.querySelectorAll("pre code");
      if (codeBlocks.length > 0) {
        codeBlocks.forEach((block) => {
          hljs.highlightElement(block);
        });
      }
    }
  }, [flipped, currentIndex, backCardRef, frontCardRef]);

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

  const startFlashcards = () => {
    let selectedCards = [...flashcards];

    if (settings.randomize) {
      selectedCards.sort(() => Math.random() - 0.5);
    }

    selectedCards = selectedCards.slice(0, settings.cardCount);

    setFlashcards(selectedCards);
    setShowSettings(false);
  };

  const nextCard = () => {
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setFlipped(false);
    }
  };

  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setFlipped(false);
    }
  };

  const toggleFlip = () => {
    setFlipped(!flipped);
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
      <Card className="flashcard-settings">
        <Card.Header>
          <h2>{title} - Cài đặt thẻ ghi nhớ</h2>
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Số lượng thẻ</Form.Label>
              <Form.Control
                type="number"
                min="1"
                max={flashcards.length}
                value={settings.cardCount}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    cardCount: Math.min(
                      parseInt(e.target.value),
                      flashcards.length
                    ),
                  })
                }
              />
              <Form.Text className="text-muted">
                Tổng số thẻ: {flashcards.length}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                label="Xáo trộn thẻ"
                checked={settings.randomize}
                onChange={(e) =>
                  setSettings({ ...settings, randomize: e.target.checked })
                }
              />
            </Form.Group>

            <Button variant="primary" onClick={startFlashcards}>
              Bắt đầu
            </Button>
          </Form>
        </Card.Body>
      </Card>
    );
  }

  if (flashcards.length === 0) {
    return <div className="alert alert-warning">Không có thẻ ghi nhớ nào</div>;
  }

  const currentCard = flashcards[currentIndex];

  return (
    <div className="flashcard-page">
      <h2 className="mb-4">{title}</h2>

      <div className="d-flex justify-content-between align-items-center mb-3">
        <Badge bg="primary">
          Thẻ {currentIndex + 1} / {flashcards.length}
        </Badge>
        <div>
          <Button
            variant="outline-secondary"
            size="sm"
            onClick={() => setShowSettings(true)}
            className="me-2"
          >
            Cài đặt
          </Button>
          <Link
            to={`/course/${courseId}`}
            className="btn btn-outline-secondary btn-sm"
          >
            Về khóa học
          </Link>
        </div>
      </div>

      <div
        className={`flashcard mb-4 ${flipped ? "flipped" : ""}`}
        onClick={toggleFlip}
        style={{
          perspective: "1000px",
          height: "400px",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            transition: "transform 0.6s",
            transformStyle: "preserve-3d",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* FRONT CARD - USE MARKDOWN */}
          <Card
            className="front"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backfaceVisibility: "hidden",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "20px",
            }}
          >
            <Card.Body className="d-flex justify-content-center align-items-center">
              <div className="markdown-content w-100" ref={frontCardRef}>
                {currentCard.I && (
                  <div className="mb-3 text-center">
                    <img
                      src={currentCard.I}
                      alt="Hình minh họa câu hỏi"
                      className="img-fluid rounded"
                      style={{ maxWidth: "100%", maxHeight: "200px" }}
                    />
                  </div>
                )}
                <ReactMarkdown
                  remarkPlugins={[remarkGfm, remarkMath]}
                  rehypePlugins={[rehypeRaw, rehypeKatex]}
                  components={markdownComponents}
                >
                  {currentCard.Q}
                </ReactMarkdown>
              </div>
            </Card.Body>
            <div className="text-center text-muted small">Nhấp để lật thẻ</div>
          </Card>

          {/* BACK CARD - USE MARKDOWN */}
          <Card
            className="back"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "20px",
            }}
          >
            <Card.Body className="d-flex flex-column justify-content-center">
              <Card.Title className="text-center mb-4">Đáp án:</Card.Title>
              <div className="text-center" ref={backCardRef}>
                <div className="bg-success text-white p-3 rounded mb-2 markdown-content">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm, remarkMath]}
                    rehypePlugins={[rehypeRaw, rehypeKatex]}
                    components={markdownComponents}
                  >
                    {currentCard.A[currentCard.C]}
                  </ReactMarkdown>
                </div>

                {currentCard.R && (
                  <div className="explanation mt-3">
                    <strong>Giải thích:</strong>
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm, remarkMath]}
                      rehypePlugins={[rehypeRaw, rehypeKatex]}
                      components={markdownComponents}
                    >
                      {currentCard.R}
                    </ReactMarkdown>
                  </div>
                )}
              </div>
            </Card.Body>
            <div className="text-center text-muted small">Nhấp để lật lại</div>
          </Card>
        </div>
      </div>

      <div className="d-flex justify-content-between">
        <Button
          variant="secondary"
          onClick={prevCard}
          disabled={currentIndex === 0}
        >
          Thẻ trước
        </Button>
        <Button
          variant="primary"
          onClick={nextCard}
          disabled={currentIndex === flashcards.length - 1}
        >
          Thẻ tiếp theo
        </Button>
      </div>
    </div>
  );
}

export default FlashcardPage;
