import axios from 'axios';

export async function loadInitData() {
  try {
    const response = await axios.get('/data/init.json');
    return response.data;
  } catch (error) {
    console.error('Lỗi khi tải dữ liệu khởi tạo:', error);
    throw error;
  }
}

export async function loadDocumentContent(courseId, docFile) {
  try {
    const response = await axios.get(`/data/${courseId}/${docFile}`);
    return response.data;
  } catch (error) {
    console.error('Lỗi khi tải nội dung tài liệu:', error);
    throw error;
  }
}

export async function loadQuizData(courseId, quizFile) {
  try {
    const response = await axios.get(`/data/${courseId}/${quizFile}`);
    return response.data;
  } catch (error) {
    console.error('Lỗi khi tải dữ liệu bài kiểm tra:', error);
    throw error;
  }
}