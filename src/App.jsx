import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'github-markdown-css/github-markdown.css';
import Header from './components/Header';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import Home from './pages/Home';
import Course from './pages/Course';
import DocumentView from './pages/DocumentView';
import QuizPage from './pages/QuizPage';
import FlashcardPage from './pages/FlashcardPage';
import { loadInitData } from './utils/dataLoader';
import './App.css';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [appData, setAppData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await loadInitData();
        setAppData(data);
      } catch (error) {
        console.error("Không thể tải dữ liệu ban đầu:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Đang tải...</span>
        </div>
      </div>
    );
  }

  return (
    <ThemeProvider>
      <Router>
        <div className="app-container d-flex flex-column min-vh-100">
          <Header title={appData?.name || "Nền Tảng Học Tập"} />
          <main className="flex-grow-1 container py-4">
            <Routes>
              <Route path="/" element={<Home appData={appData} />} />
              <Route path="/course/:courseId" element={<Course />} />
              <Route path="/course/:courseId/doc/:docId" element={<DocumentView />} />
              <Route path="/course/:courseId/quiz/:quizId" element={<QuizPage />} />
              <Route path="/course/:courseId/flashcard/:flashcardId" element={<FlashcardPage />} />
            </Routes>
          </main>
          <Footer />
          <BackToTop />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;