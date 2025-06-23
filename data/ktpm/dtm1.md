

**THỜI GIAN LÀM BÀI: 90 PHÚT**
*(Không sử dụng tài liệu)*

## **PHẦN 1. TRẮC NGHIỆM (6 điểm)**

### **Câu 1. Hoạt động kiểm thử phần mềm nên bắt đầu khi:**
A. Lập trình viên bắt đầu viết mã nguồn phần mềm

B. Trong suốt giai đoạn thiết kế

C. Yêu cầu được lập tài liệu chính thức

D. Sớm nhất có thể trong vòng đời phát triển phần mềm.

### **Câu 2. Phát biểu nào sau đây không phải mục tiêu của kiểm thử?**
A. Tìm lỗi phần mềm.

B. Đánh giá phần mềm có sẵn sàng triển khai không.

C. Chứng tỏ phần mềm không làm việc.

D. Chứng minh phần mềm phát triển đúng.


### **Câu 3. Phát biểu nào sau đây không đúng về tester làm kiểm thử hộp đen?**
A. Hiểu các đặc tả yêu cầu của hệ thống.

B. Hiểu mã nguồn của hệ thống.

C. Có khả năng tìm ra lỗi hệ thống.

D. Có sáng tạo tìm ra những điểm yếu hệ thống.


### **Câu 4. Chức năng tìm kiếm sản phẩm của một trang web bán hàng trực tuyến cho phép tìm kiếm theo các mức giá từ 2tr đến dưới 5tr, từ 5tr đến dưới 10tr, và từ 10tr trở lên. Cho biết giá trị nào sau đây thuộc phân vùng không hợp lệ (invalid)?**
A. 15tr

B. 100tr

C. 5.5tr

D. 1tr

### **Câu 5. Kiểm thử luồng dữ liệu **KHÔNG** phát hiện được vấn đề nào sau đây?**
A. Biến khai báo nhưng không sử dụng.

B. Biến được định nghĩa nhiều lần trước khi sử dụng.

C. Biến được đặt tên không đúng chuẩn.

D. Xóa biến trước khi sử dụng.

### **Câu 6. Để phát hiện được những vấn đề của phần mềm trong môi trường thực tế nó hoạt động thì kiểm thử nào nên được triển khai?**
A. Alpha Testing

B. Regression Testing

C. Load Testing

D. Beta Testing

### **Câu 7. Một ô nhập liệu giá trị nguyên từ -10 đến 10, nhưng phải khác 0. Theo phương pháp phân vùng tương đương và phân tích giá trị biên thì những giá trị nào nên được kiểm thử?**
A. -10, -9, 1, 9, 10

B. -11, -10, 0, 10, 11

C. -11, -10, -5, 5, 10, 11

D. -11, -10, -1, 1, 10, 11

### **Câu 8. Một năm hợp lệ (quy ước năm hợp lệ là năm lớn hơn hoặc bằng 1970) gọi là năm nhuận nếu nó chia hết cho 400 hoặc chia hết cho 4 nhưng không chia hết cho 100. Theo phương pháp phân vùng tương đương, các test case nào nên được chọn trong các năm sau:**
a. 1969 |
b. 1970 |
c. 1600 | 
d. 2016 |
e. 1400 |
f. 2019 |

A. a, b, c, d, f

B. b, c, d, e

C. a, c, d, e, f

D. c, d, e, f

### **Câu 9. Vai trò nào đảm bảo tiến độ hoàn tất một Sprint trong quy trình Scrum?**
A. Product Owner

B. Scrum Master

C. Team Members

D. Project Manager

### **Câu 10. Kiểm thử phủ đường dẫn độc lập **KHÔNG** đảm bảo ...**
A. Phủ câu lệnh.

B. Phủ nhánh.

C. Phủ điều kiện.

D. Phủ quyết định.

### **Câu 11. Một đồ thị luồng có độ phức tạp Cyclomatic là 5, đồ thị có 7 cạnh, hỏi đồ thị có bao nhiêu đỉnh?**
A. 4

B. 5

C. 6

D. 7

### **Câu 12. Kiểm thử tự động sử dụng hiệu quả nhất trong loại kiểm thử nào?**
A. Regression Testing

B. System Testing

C. Functional Testing

D. Security Testing

### **Câu 13. Cho biết cần thiết kế những test case nào để đảm bảo phủ nhánh và phủ điều kiện của hàm ktNamNhuan()? Các giá trị của năm có thể chọn làm test case bên dưới.**
```cpp
bool ktNamNhuan(int nam)
{
    bool kq = false;
    if ((nam % 400 == 0) ||
        (nam % 4 == 0 && nam % 100 != 0))
        kq = true;
    return kq;
}
```
a. 1600 |
b. 1900 |
c. 2020 |
d. 2017 |
e. 2018 |
f. 2016 |

A. a, b, d, f

B. a, d, f

C. b, c, d, f

D. a, b, d, e

### **Câu 14. Một hệ thống quản lý cho phép gửi và nhận tin nhắn trong hệ thống, khi người dùng nhận tin mới có trạng thái là tin chưa đọc, nếu mở ra đọc thì tin đó thành trạng thái đã đọc. Sau khi đọc tin, người dùng cũng có thể chuyển nó thành tin chưa đọc để ghi nhớ. Ngoài ra, người dùng cũng có thể xóa tin nhắn, ban đầu tin xóa tạm nằm trong thùng rác, trong 24h kể từ lúc xóa người dùng có thể phục hồi lại trạng thái trước khi xóa, sau khoảng thời gian này tin sẽ bị xóa vĩnh viễn. Các trạng thái S1, S2, S3, S4 thể hiện trạng thái của tin như sau:**
S1 = chưa đọc

S2 = đã đọc

S3 = đã xóa tạm

S4 = đã xóa vĩnh viễn

**Cho biết chuỗi chuyển đổi nào sau đây không hợp lệ?**
A. S1 → S2 → S3 → S4

B. S1 → S3 → S2 → S4

C. S1 → S2 → S1 → S3 → S4

D. S1 → S3 → S1 → S3 → S4

### **Câu 15. Nếu sử dụng phương thức `find_elements()` của Selenium WebDriver để tìm thành phần HTML, nhưng không có thành phần HTML nào khớp thì điều gì xảy ra?**
A. Nó sẽ ném ra ngoại lệ.

B. Nó trả về danh sách rỗng.

C. Nó sẽ chờ (wait) cho đến khi thành phần HTML cần tìm được nạp.

D. Nó trả về giá trị null.

### **Câu 16. Kiểm thử luồng dữ liệu không phát hiện lỗi nào sau đây?**
A. Sử dụng biến không đúng mục đích.

B. Biến khai báo nhưng không sử dụng.

C. Biến sử dụng nhưng chưa khai báo.

D. Xóa biến trước khi sử dụng.

### **Câu 17. Phát biểu nào sau đây đúng nhất về kỹ thuật kiểm thử phân vùng tương đương?**
A. Kỹ thuật kiểm thử hộp đen thích hợp cho mọi cấp độ kiểm thử.

B. Kỹ thuật kiểm thử hộp đen được thực hiện bởi các developer.

C. Kỹ thuật kiểm thử hộp đen chỉ được sử dụng trong kiểm thử hệ thống.

D. Kỹ thuật kiểm thử hộp trắng thích hợp cho các bài toán có giá trị đầu vào xác định.

### **Câu 18. Cho hàm ktNguyenTo() minh hoạ bằng C++, Cho biết đâu là cặp DU (Definition-Use) của biến kq?**
```cpp
bool ktNguyenTo(int n)
{
    bool kq = false; // (1)
    if (n >= 2)
    {
        kq = true; // (2)
        for (int i = 2; i <= sqrt(n); i++) // (3)
        {
            if (n % i == 0)
            {
                kq = false; // (4)
                break;
            }
        }
    }
    return kq; // (5)
}
```
A. (1) và (3)

B. (2) và (5)

C. (2) và (4)

D. (3) và (5)

### **Câu 19. Cho biết test case nào sau đây phủ nhánh của hàm ktNguyenTo() trên?**
A. n = 1 và n = 15

B. n = 1 và n = 16

C. n = 2 và n = 15

D. n = 2 và n = 16

### **Câu 20. Một hệ thống thanh toán trực tuyến đang trong quá trình phát triển, loại kiểm thử nào phù hợp nhất nên được thực hiện trong giai đoạn này?**
A. System Testing

B. Beta Testing

C. Unit Testing

D. Regression Testing

### **Câu 21. Mã môn học tạo ra trong hệ quản lý học tập quy định dài 5 ký tự, trong đó 2 ký tự đầu tiên là MH, và tiếp theo là 3 chữ số, trong đó chữ số đầu tiên phải lớn hơn 0. Cho biết mã môn học nào sau đây thuộc phân vùng hợp lệ?**
A. MH100

B. Mh123

C. MH15

D. MH1111

### **Câu 22. Phát biểu nào sau đây đúng về incident?**
A. Các incident phát hiện bắt buộc phải fixed.

B. Incident là lỗi do lập trình viên gây ra.

C. Incident là kết quả sau khi thực thi các error hay fault.

D. Incident có thể là do tester thiết kế test case không đúng.

### **Câu 23. Để kiểm thử lập trình viên có triển khai đúng thuật toán yêu cầu trong bản đặc tả yêu cầu thì nên dùng kỹ thuật nào sau đây thích hợp nhất?**
A. Structural Testing

B. Gray-box Testing

C. Requirement-based Testing

D. Stress Testing

### **Câu 24. Chiến lược kiểm thử nào sau đây có thể phát hiện lặp trình viên vi phạm chuẩn lập trình?**
A. Chiến lược tăng trưởng (incremental).

B. Chiến lược big bang.

C. Chiến lược kiểm thử tĩnh (static).

D. Chiến lược kiểm thử động (dynamic).

---

## **PHẦN 2. TỰ LUẬN (4 điểm)**

### **Câu 1.**
Một hệ thống quản lý học tập có chức năng xét học bổng cho sinh viên vào cuối mỗi học kỳ, biết sinh viên có học bổng nếu không rớt môn nào trong học kỳ, có điểm trung bình học kỳ từ 7.0 trở lên. Biết điểm tính trên thang điểm 10, điểm qua môn tính từ 5 trở lên. Ngoài ra, đối với các môn học có điểm ≥ 4 và < 5 cũng sẽ được xem là qua môn nếu điểm trung bình học kỳ đó là từ 7.5 trở lên.

Sử dụng bảng quyết định và phân tích giá trị biên thiết kế test case kiểm thử một sinh viên có được nhận học bổng trong học kỳ hay không, biết đầu vào là điểm các môn học trong học kỳ dạng xét (các điểm được làm tròn 1 chữ số thập phân)?

### **Câu 2.**
Cho hàm sau được minh hoạ bằng ngôn ngữ C++
```cpp
bool xetHocBong(double diemMH[], int soMH)
{
    int i;
    double tongDiem = 0;
    for (i = 0; i < soMH; i++)
        if (diemMH[i] < 5)
            break;
        else
            tongDiem = tongDiem + diemMH[i];
    
    if (soMH > 0 && i == soMH)
    {
        double diemTB = tongDiem / soMH;
        if (diemTB >= 8)
            return true;
    }
    return false;
}
```
a) Vẽ đồ thị luồng và xác định độ phức tạp Cyclomatic.

b) Thiết kế test case phủ đường dẫn cơ sở của hàm.

c) Thiết kế test case phủ nhánh và điều kiện của hàm.