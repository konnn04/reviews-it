# Review IT - Nền tảng học tập và ôn thi trực tuyến

![Badge](https://img.shields.io/badge/version-1.0.0-blue) ![Badge](https://img.shields.io/badge/license-Apache%202.0-green) ![Badge](https://img.shields.io/badge/react-19.1.0-61DAFB)

## Giới thiệu

Review IT là một nền tảng học tập trực tuyến giúp người dùng dễ dàng tiếp cận với các tài liệu học tập, làm bài kiểm tra trắc nghiệm và sử dụng thẻ ghi nhớ để ôn tập kiến thức. Ứng dụng hỗ trợ đa dạng tài liệu (Markdown, PDF) và có các tính năng tương tác giúp việc học tập trở nên hiệu quả hơn.

Các tính năng chính:
- Xem tài liệu học tập (hỗ trợ Markdown, PDF)
- Làm bài kiểm tra trắc nghiệm với tính năng đánh dấu câu hỏi
- Thẻ ghi nhớ (flashcards) để học và ôn tập
- Giao diện thân thiện, hỗ trợ chế độ sáng/tối
- Hoàn toàn được Việt hóa

## Công nghệ sử dụng

- **Frontend**: React 19, React Router, React Bootstrap
- **Hiển thị tài liệu**: React Markdown, KaTeX, Highlight.js
- **Styling**: Bootstrap 5, CSS tùy chỉnh
- **Công cụ phát triển**: Vite, ESLint
- **Khác**: Axios cho API calls, localStorage để lưu cài đặt

## Tính năng nổi bật
- **Tài liệu học tập**: Hỗ trợ xem tài liệu Markdown và PDF trực tiếp trên trình duyệt.
- **Bài kiểm tra trắc nghiệm**: Cho phép người dùng làm bài kiểm tra với các câu hỏi trắc nghiệm, có thể đánh dấu câu hỏi để ôn tập sau.
- **Thẻ ghi nhớ**: Tính năng thẻ ghi nhớ giúp người dùng học tập hiệu quả hơn bằng cách lặp lại các câu hỏi.
- **Giao diện người dùng**: Thiết kế hiện đại, dễ sử dụng với khả năng chuyển đổi giữa chế độ sáng và tối.

## Tính năng sắp tới
- **Hỗ trợ back-end**: Kết nối với API để lưu trữ tài liệu, kết quả bài kiểm tra và theo dõi tiến độ học tập.
- **Tính năng cộng đồng**: Cho phép người dùng chia sẻ tài liệu, bài kiểm tra và thảo luận.
- **Tính năng thống kê**: Cung cấp báo cáo chi tiết về tiến độ học tập và kết quả bài kiểm tra.

## Cấu trúc dự án

```
review-it/
├── public/                    # Tài nguyên công khai
│   └── data/                  # Dữ liệu khóa học, bài kiểm tra và tài liệu
│       └── init.json          # Cấu hình khởi tạo cho các khóa học
├── src/                       # Mã nguồn
│   ├── components/            # Các component React
│   │   ├── BackToTop.jsx      # Nút cuộn lên đầu trang
│   │   ├── CourseCard.jsx     # Card hiển thị khóa học
│   │   ├── Footer.jsx         # Footer cho trang web
│   │   ├── Header.jsx         # Header cho trang web
│   │   └── QuestionOverview.jsx # Tổng quan các câu hỏi trong bài kiểm tra
│   ├── context/               # React context
│   │   └── ThemeContext.jsx   # Context quản lý theme sáng/tối
│   ├── pages/                 # Các trang chính
│   │   ├── Course.jsx         # Trang chi tiết khóa học
│   │   ├── DocumentView.jsx   # Trang xem tài liệu (MD và PDF)
│   │   ├── FlashcardPage.jsx  # Trang học với thẻ ghi nhớ
│   │   ├── Home.jsx           # Trang chủ
│   │   └── QuizPage.jsx       # Trang làm bài kiểm tra
│   ├── utils/                 # Các tiện ích
│   │   ├── dataLoader.js      # Xử lý tải dữ liệu từ API
│   │   └── markdownRenderer.js # Xử lý hiển thị markdown
│   ├── App.css                # Style cho toàn bộ ứng dụng
│   ├── App.jsx                # Component gốc của ứng dụng
│   └── main.jsx               # Điểm khởi đầu của ứng dụng
├── .github/                   # Cấu hình GitHub
│   └── workflows/             # GitHub Actions
│       └── build.yml          # Quy trình CI/CD tự động
├── index.html                 # HTML gốc
├── vite.config.js             # Cấu hình Vite
├── eslint.config.js           # Cấu hình ESLint
├── package.json               # Quản lý dependencies
└── LICENSE                    # Thông tin giấy phép
```

## Cách khởi chạy

### Yêu cầu hệ thống

- Node.js (khuyến nghị phiên bản 18 trở lên)
- npm hoặc yarn

### Cài đặt

1. Clone dự án:

```bash
git clone https://github.com/yourusername/review-it.git
cd review-it
```

2. Cài đặt các dependencies:

```bash
npm install
# hoặc
yarn install
```

3. Chạy ứng dụng ở chế độ development:

```bash
npm run dev
# hoặc
yarn dev
```

4. Mở trình duyệt và truy cập:

```
http://localhost:5173/
```

### Build cho production

```bash
npm run build
# hoặc
yarn build
```

Sau khi build, các tệp tĩnh sẽ được tạo trong thư mục `dist/` và có thể được triển khai lên bất kỳ máy chủ web tĩnh nào.

## Thêm dữ liệu mới

Để thêm khóa học và tài liệu mới:

1. Chỉnh sửa tệp init.json để thêm thông tin khóa học
2. Thêm các tệp tài liệu (Markdown hoặc PDF) vào thư mục `public/data/{course_id}/`
3. Thêm các bài kiểm tra bằng cách tạo tệp JSON trong thư mục `public/data/{course_id}/`

## Giấy phép

Review IT được phát hành dưới giấy phép Apache License 2.0. Xem tệp LICENSE để biết thêm chi tiết.

```
Copyright 2025 Review IT Contributors

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```

## Liên hệ và đóng góp

Nếu bạn muốn đóng góp cho dự án hoặc báo cáo lỗi, vui lòng tạo issue trên [GitHub repository](https://github.com/konnn04/reviews-it).

---

Được phát triển với bởi [Konn04](https://github.com/konnn04)