# Đề ôn CSLT của MPC 2026

Các dạng ôn tập hàm [ở đây](https://konnn04.is-a.dev/reviews-it/#/course/cslt/doc/common_func_cases)

# Đề 1 - Con mèo cam

### CÂU 1: Cấu trúc điều khiển & Hàm (5.0 điểm)

**Yêu cầu:** Viết chương trình hoàn chỉnh thực hiện các yêu cầu sau. Lưu ý phải khai báo nguyên mẫu hàm trước khi định nghĩa hàm.

**1a. Hàm tính lũy thừa đan dấu (1.5 điểm)**
Viết hàm `TinhLuyThua` nhận vào số thực  và số nguyên dương . Hàm trả về kết quả của biểu thức :

$$S(x, n) = x - x^2 + x^3 - ... + (-1)^{n+1}x^n$$

**1b. Hàm kiểm tra số hoàn hảo (1.5 điểm)**
Viết hàm `SoHoanHao` nhận vào một số nguyên dương . Hàm trả về `true` nếu  là số hoàn hảo, ngược lại trả về `false`.

> **Giải thích:** Số hoàn hảo (Perfect Number) là số nguyên dương mà tổng các ước số nguyên dương thực sự của nó (không kể chính nó) bằng chính nó.
> *Ví dụ:*
> *  là số hoàn hảo vì ước của 6 là  $\{1, 2, 3\}$. Tổng $1 + 2 + 3 = 6$.
> *  là số hoàn hảo vì ước của 28 là $\{1, 2, 4, 7, 14\}$. Tổng $1 + 2 + 4 + 7 + 14 = 28$.

**1c. Xây dựng Menu (2.0 điểm)**
Viết hàm `main` hiển thị menu cho phép người dùng chọn chức năng:

1. Tính .
2. Kiểm tra số hoàn hảo.
3. Thoát.

*Yêu cầu:*

* Sử dụng cấu trúc `do-while` và `switch-case`  để xử lý menu.
* Sau khi thực hiện xong mỗi chức năng, hỏi người dùng có muốn tiếp tục không. Nếu chọn tiếp tục, xóa màn hình và hiện lại menu.

**Testcase mẫu:**

```
=== MENU TOAN HOC ===
1. Tinh S(x, n)
2. Kiem tra So hoan hao
3. Thoat
Moi chon: 1

Nhap x: 2
Nhap n: 3
Ket qua S(2, 3) = 6

Tiep tuc khong? (y/n): y
// (Xóa màn hình)
=== MENU TOAN HOC ===
1. Tinh S(x, n)
2. Kiem tra So hoan hao
3. Thoat
Moi chon: 2

Nhap so nguyen duong: 28
Ket qua: 28 LA so hoan hao.

Tiep tuc khong? (y/n): y
// (Xóa màn hình)
=== MENU TOAN HOC ===
1. Tinh S(x, n)
2. Kiem tra So hoan hao
3. Thoat
Moi chon: 2

Nhap so nguyen duong: 27
Ket qua: 27 KHONG LA so hoan hao.

Tiep tuc khong? (y/n): n
Bye!
```

### CÂU 2: Mảng một chiều & Thuật toán (5.0 điểm)

**Yêu cầu:** Viết chương trình xử lý mảng số nguyên. Lưu ý: Khi truyền mảng vào hàm, tham số mảng luôn được truyền bằng tham chiếu (pass-by-reference).

**2a. Khởi tạo và Xuất mảng ngẫu nhiên (2.0 điểm)**
Viết hàm thực hiện các công việc sau:

* Nhập vào số phần tử  (Yêu cầu kiểm tra điều kiện: . Nếu nhập sai yêu cầu nhập lại).
* Tạo mảng có  phần tử, giá trị của mỗi phần tử được sinh ngẫu nhiên trong khoảng từ **10 đến 90**.
* Xuất mảng vừa tạo ra màn hình, các phần tử cách nhau một khoảng trắng.

**2b. Sắp xếp mảng theo tính chất (3.0 điểm)**
Viết hàm sắp xếp lại mảng trên theo quy tắc "gom nhóm" sau (Lưu ý: Không sử dụng mảng phụ):

**2c. Xây dựng Menu xử lý mảng (2.0 điểm)**
Viết menu cho phép người dùng thao tác liên tục trên mảng vừa tạo:

1. Tạo mới mảng ngẫu nhiên (Nhập lại n và sinh lại mảng).
2. Xuất mảng hiện tại.
3. Thực hiện sắp xếp mảng (theo câu 2b) và hiển thị kết quả.
4. Thoát.

*Yêu cầu:*

* Menu lặp lại bằng do-while.
* Cần xử lý trường hợp người dùng chọn chức năng 2 hoặc 3 khi chưa tạo mảng (mảng rỗng hoặc n=0), chương trình nên thông báo "Vui lòng tạo mảng trước".
* Tất cả các **số nguyên tố** được đưa về phía bên **trái** của mảng và sắp xếp **tăng dần**.
* Tất cả các **số không phải nguyên tố** (hợp số, số 1) được đưa về phía bên **phải** của mảng và cũng sắp xếp **tăng dần**.

*Ví dụ:*

* Mảng ban đầu: `12 11 35 13 10 17`
* Kết quả sắp xếp: `11 13 17 10 12 35`
*(Giải thích: 11, 13, 17 là số nguyên tố nằm bên trái tăng dần; 10, 12, 35 không phải nguyên tố nằm bên phải tăng dần)*

**Testcase mẫu**
```
=== MENU MANG ===
1. Tao mang moi
2. Xuat mang
3. Sap xep mang
4. Thoat
Moi chon: 2
Thong bao: Vui long tao mang truoc!

Moi chon: 1
Nhap so luong phan tu n (10-90): 5
Da tao mang ngau nhien thanh cong.

Moi chon: 2
Mang hien tai: 12 11 35 13 17

Moi chon: 3
Da sap xep xong (Nguyen to tang dan trai - Hop so tang dan phai):
Ket qua: 11 13 17 12 35
(Giai thich: 11, 13, 17 la nguyen to; 12, 35 la hop so)

Moi chon: 4
Bye!
```

---

# Đề 2 - Con mèo tam thể

### CÂU 1: Cấu trúc điều khiển & Hàm (5.0 điểm)

**Yêu cầu:** Viết chương trình hoàn chỉnh thực hiện các yêu cầu sau. Khai báo nguyên mẫu hàm (function prototype) trước khi định nghĩa hàm.

**1a. Hàm Giai thừa và Tổ hợp (1.5 điểm)**

* Viết hàm `GiaiThua` nhận vào số nguyên dương . Hàm trả về giá trị $n!$ ($1 \times 2 \times ... \times n$). 
*(Lưu ý: Kiểu dữ liệu trả về phải đủ lớn để chứa kết quả, ví dụ `long long`).*
* Viết hàm `ToHop` nhận vào hai số nguyên $n$ và $k$ ($n \ge k \ge 0$). Hàm trả về giá trị tổ hợp chập  của  theo công thức:

$$C(n, k) = \frac{n!}{k!(n-k)!}$$

*(Yêu cầu sử dụng lại hàm `GiaiThua` đã viết ở trên).*

**1b. Hàm Nhị thức Newton (1.5 điểm)**
Viết hàm `TinhGiaTriNewton` nhận vào hai số thực  và số nguyên dương . Hàm thực hiện tính và trả về giá trị của biểu thức  $(a + b)^n$  dựa trên công thức khai triển Nhị thức Newton:

$$S = \sum_{k=0}^{n} C(n, k) \times a^{n-k} \times b^k$$

*(Gợi ý: Dùng vòng lặp chạy từ $k=0$ đến $n$, mỗi bước cộng dồn kết quả của $C(n,k) \times a^{n-k} \times b^k$ vào tổng $S$).*

**1c. Xây dựng Menu xử lý toán học (2.0 điểm)**
Viết hàm `main` hiển thị menu chức năng:

1. Tính tổ hợp $C(n, k)$ (Nhập $n, k$ và in kết quả).
2. Tính giá trị biểu thức $(a+b)^n$ theo Newton (Nhập $a, b, n$ và in kết quả).
3. Thoát.

*Yêu cầu kỹ thuật:* Sử dụng `do-while` và `switch-case`. Sau mỗi lần thực hiện xong chức năng, xóa màn hình và hiện lại menu cho đến khi người dùng chọn Thoát.

**Testcase mẫu:**

```
=== MENU TOAN HOC ===
1. Tinh To hop C(n, k)
2. Tinh Nhi thuc Newton
3. Thoat
Moi chon: 1

Nhap n: 5
Nhap k: 2
Ket qua C(5, 2) = 10

Tiep tuc khong? (y/n): y
// (Xóa màn hình)
=== MENU TOAN HOC ===
1. Tinh To hop C(n, k)
2. Tinh Nhi thuc Newton
3. Thoat
Moi chon: 2

Nhap a: 1
Nhap b: 2
Nhap n: 2
Ket qua (1 + 2)^2 = 9

Tiep tuc khong? (y/n): n
Bye!
```

### CÂU 2: Mảng một chiều & Thuật toán (5.0 điểm)

**Yêu cầu:** Viết chương trình xử lý mảng số nguyên. Tham số mảng phải được truyền bằng tham chiếu (pass-by-reference) nếu cần thiết.

**2a. Hàm khởi tạo mảng 4 chữ số (1.5 điểm)**
Viết các hàm thực hiện:

* `NhapN`: Nhập số phần tử $n$ ($1 \le n \le 50$).
* `TaoMang4ChuSo`: Tạo mảng  phần tử, giá trị của mỗi phần tử được sinh ngẫu nhiên là **số có 4 chữ số** (từ **1000** đến **9999**).
* `XuatMang`: Xuất mảng ra màn hình.

**2b. Hàm sắp xếp phân loại (1.5 điểm)**
Viết hàm sắp xếp mảng theo quy tắc đặc biệt sau (Lưu ý: **Không dùng mảng phụ**):

* Các số **lớn hơn 5000** được đưa về phía bên **trái** của mảng và sắp xếp **tăng dần**.
* Các số **nhỏ hơn hoặc bằng 5000** được đưa về phía bên **phải** của mảng và cũng sắp xếp **tăng dần**.

*Ví dụ:*

* Mảng ban đầu: `1200 6000 8500 4000 7000 3000`
* Kết quả sắp xếp: `6000 7000 8500 1200 3000 4000`
*(Giải thích: 6000, 7000, 8500 là nhóm > 5000 nằm bên trái tăng dần; 1200, 3000, 4000 là nhóm <= 5000 nằm bên phải tăng dần).*

**2c. Xây dựng Menu xử lý mảng (2.0 điểm)**
Viết menu cho phép người dùng thao tác:

1. Tạo mảng ngẫu nhiên (Nhập  và tạo mảng 4 chữ số).
2. Xuất mảng hiện tại.
3. Sắp xếp phân loại (theo câu 2b) và in kết quả.
4. Thoát.

*Yêu cầu kỹ thuật:*

* Tương tự đề 1, cần kiểm tra xem mảng đã được tạo chưa trước khi chọn chức năng 2 hoặc 3.

**Testcase mẫu:**

```
=== MENU MANG 4 CHU SO ===
1. Tao mang ngau nhien
2. Xuat mang
3. Sap xep phan loai
4. Thoat
Moi chon: 1

Nhap n: 6
Da tao mang voi cac so tu 1000-9999.

Moi chon: 2
Mang hien tai: 1200 6000 8500 4000 7000 3000

Moi chon: 3
Ket qua sap xep (>5000 trai, <=5000 phai):
6000 7000 8500 1200 3000 4000

Moi chon: 4
Bye!
```

---

# Đề 3 - Con mèo nem chua

### CÂU 1: Cấu trúc điều khiển & Hàm (5.0 điểm)

**Yêu cầu:** Viết chương trình thực hiện các yêu cầu sau. Bắt buộc khai báo nguyên mẫu hàm (function prototype) trước khi định nghĩa.

**1a. Hàm tính Giai thừa (1.5 điểm)**
Viết hàm `TinhGiaiThua` nhận vào một số nguyên dương $n$ ($n \ge 0$). Hàm trả về kết quả $n!$.
* *Quy ước:* $0! = 1$.
* *Lưu ý:* Cần chọn kiểu dữ liệu trả về phù hợp để tránh tràn số khi $n$ lớn (ví dụ `long long`).

**1b. Hàm tính Tổng Fibonacci (1.5 điểm)**
Dãy Fibonacci được định nghĩa: $F_0 = 0, F_1 = 1, F_n = F_{n-1} + F_{n-2} \quad (với \ n \ge 2)$.
Viết hàm `TinhTongFibonacci` nhận vào số nguyên $n$ ($n \ge 0$). Hàm tính và trả về tổng của các số Fibonacci từ phần tử thứ $0$ đến phần tử thứ $n$.
$$S = F_0 + F_1 + F_2 + ... + F_n$$
* *Ví dụ:* Nhập $n=4$. Dãy Fibonacci là: $0, 1, 1, 2, 3$.
    $\rightarrow$ Tổng $S = 0 + 1 + 1 + 2 + 3 = 7$.

**1c. Xây dựng Menu xử lý toán học (2.0 điểm)**
Viết hàm `main` hiển thị menu:
1.  Tính Giai thừa $n!$.
2.  Tính Tổng dãy Fibonacci đến $F_n$.
3.  Thoát.
* *Yêu cầu kỹ thuật:* Menu lặp lại liên tục bằng `do-while`. Sau mỗi lần thực hiện chức năng, xóa màn hình và hiển thị lại menu.

**Testcase mẫu:**

```
=== MENU TOAN HOC ===
1. Tinh Giai thua
2. Tinh Tong Fibonacci
3. Thoat
Moi chon: 1

Nhap n: 5
Ket qua 5! = 120

Tiep tuc khong? (y/n): y
// (Xóa màn hình)
=== MENU TOAN HOC ===
1. Tinh Giai thua
2. Tinh Tong Fibonacci
3. Thoat
Moi chon: 2

Nhap n: 4
Day Fibo: 0 1 1 2 3
Tong S = 7

Tiep tuc khong? (y/n): n
Bye!
```

### CÂU 2: Mảng một chiều & Thống kê (5.0 điểm)

**Yêu cầu:** Viết chương trình xử lý mảng số nguyên.

**2a. Khởi tạo mảng giới hạn (1.5 điểm)**
Viết các hàm thực hiện:
* `NhapN`: Nhập số phần tử $n$. Bắt buộc kiểm tra điều kiện **$20 \le n \le 100$**. Nếu nhập sai (ví dụ nhập 10 hoặc 101), yêu cầu nhập lại đến khi đúng.
* `TaoMangNgauNhien`: Tạo mảng $n$ phần tử. Giá trị các phần tử được sinh ngẫu nhiên trong khoảng từ **0 đến 36**.
* `XuatMang`: Xuất mảng ra màn hình, các phần tử cách nhau khoảng trắng.

**2b. Tìm số xuất hiện nhiều nhất (Tần suất) (1.5 điểm)**
Viết hàm thực hiện thống kê và in ra màn hình:
* Tìm số có số lần xuất hiện (tần suất) nhiều nhất trong mảng.
* Nếu có nhiều số cùng đạt tần suất lớn nhất đó, hãy **in ra tất cả** các số này kèm theo số lần xuất hiện của chúng.
* *Ví dụ:* Mảng `2 5 2 9 5 0`. Số 2 xuất hiện 2 lần, số 5 xuất hiện 2 lần.
    $\rightarrow$ Kết quả in ra: `2 5`  (do xuất hiện 2 lần).

**2c. Xây dựng Menu xử lý mảng (2.0 điểm)**
Viết menu thao tác mảng:
1.  Tạo mảng mới (Nhập $n$ và sinh mảng ngẫu nhiên).
2.  Xuất mảng hiện tại.
3.  Tìm và in số xuất hiện nhiều nhất (theo câu 2b).
4.  Thoát.
* *Yêu cầu kỹ thuật:* Kiểm tra mảng đã được tạo hay chưa trước khi thực hiện chức năng 2 và 3.

**Testcase mẫu:**

```
=== MENU THONG KE MANG ===
1. Tao mang moi
2. Xuat mang
3. Tim so xuat hien nhieu nhat
4. Thoat
Moi chon: 1

Nhap n (20-100): 10
Loi: N phai tu 20 den 100. Nhap lai: 20
Da tao mang ngau nhien (0-36).

Moi chon: 2
Mang hien tai: 2 5 36 9 5 0 2 10 11 15 20 25 30 2 5 1 1 1 0 0

Moi chon: 3
So xuat hien nhieu nhat la:
- So 2 (3 lan)
- So 5 (3 lan)
- So 0 (3 lan)
- So 1 (3 lan)

Moi chon: 4
Bye!
```
---

# Đề 4 - Con mèo béo

### CÂU 1: Cấu trúc điều khiển & Hàm (5.0 điểm)

**Yêu cầu:** Viết chương trình thực hiện các yêu cầu sau. Bắt buộc khai báo nguyên mẫu hàm (function prototype) trước khi định nghĩa.

**1a. Giải phương trình bậc 2 (1.5 điểm)**
Viết hàm `GiaiPhuongTrinhBac2` nhận vào 3 số thực $a, b, c$. Hàm thực hiện giải và biện luận nghiệm của phương trình:
$$ax^2 + bx + c = 0$$
* *Yêu cầu:*
    * Tính $\Delta = b^2 - 4ac$.
    * Biện luận các trường hợp: Vô nghiệm, Nghiệm kép, 2 Nghiệm phân biệt.
    * In kết quả trực tiếp trong hàm.

**1b. Kiểm tra số Armstrong (1.5 điểm)**
Viết hàm `KiemTraArmstrong` nhận vào một số nguyên dương $n$. Hàm trả về `true` nếu $n$ là số Armstrong, ngược lại trả về `false`.
> **Giải thích:** Số Armstrong là số mà tổng các chữ số của nó lũy thừa với số lượng chữ số bằng chính nó.
> *Ví dụ:*
> * $153$ có 3 chữ số. Tính $1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153$ $\rightarrow$ Là số Armstrong.
> * $1634$ có 4 chữ số. Tính $1^4 + 6^4 + 3^4 + 4^4 = 1634$ $\rightarrow$ Là số Armstrong.

**1c. Xây dựng Menu xử lý toán học (2.0 điểm)**
Viết hàm `main` hiển thị menu:
1.  Giải phương trình bậc 2 (Nhập a, b, c và giải).
2.  Kiểm tra số Armstrong (Nhập n và kiểm tra).
3.  Thoát.
* *Yêu cầu kỹ thuật:* Menu lặp lại bằng `do-while`, xóa màn hình sau mỗi lần chạy.

**Testcase mẫu**

```
=== MENU PHUONG TRINH & SO HOC ===
1. Giai PT Bac 2
2. Kiem tra So Armstrong
3. Thoat
Moi chon: 1

Nhap a, b, c: 1 -3 2
Phuong trinh co 2 nghiem phan biet:
x1 = 2
x2 = 1

Tiep tuc khong? (y/n): y
// (Xóa màn hình)
=== MENU PHUONG TRINH & SO HOC ===
1. Giai PT Bac 2
2. Kiem tra So Armstrong
3. Thoat
Moi chon: 2

Nhap n: 153
Ket qua: 153 LA so Armstrong

Tiep tuc khong? (y/n): y
// (Xóa màn hình)
=== MENU PHUONG TRINH & SO HOC ===
1. Giai PT Bac 2
2. Kiem tra So Armstrong
3. Thoat
Moi chon: 2

Nhap n: 152
Ket qua: 152 KHONG LA so Armstrong

Tiep tuc khong? (y/n): n
Bye!
```

### CÂU 2: Mảng một chiều & Thao tác thêm/xóa (5.0 điểm)

**Yêu cầu:** Viết chương trình xử lý mảng số nguyên. Lưu ý về việc truyền tham số biến $n$ (số phần tử) vì $n$ có thể thay đổi khi xóa.

**2a. Nhập mảng thủ công (1.5 điểm)**
Viết các hàm thực hiện:
* `NhapN`: Nhập số phần tử $n$. Kiểm tra điều kiện **$1 \le n \le 20$**. Nếu nhập sai (ví dụ 0 hoặc 25), yêu cầu nhập lại.
* `NhapMang`: Cho phép người dùng nhập tay giá trị cho từng phần tử của mảng.
* `XuatMang`: Xuất mảng ra màn hình.

**2b. Xóa phần tử tại vị trí k (2.0 điểm)**
Viết hàm `XoaPhanTu` thực hiện:
* Yêu cầu người dùng nhập chỉ số $k$ cần xóa ($0 \le k < n$).
* **Kiểm tra lỗi:** Nếu nhập $k$ sai (ví dụ $k < 0$ hoặc $k \ge n$), yêu cầu nhập lại cho đến khi đúng.
* **Thực hiện xóa:** Xóa phần tử tại chỉ số $k$ bằng cách dồn các phần tử phía sau sang trái.
* **Cập nhật:** Giảm số lượng phần tử $n$ đi 1 đơn vị.

**2c. Sắp xếp giảm dần (1.5 điểm)**
Viết hàm `SapXepGiam` để sắp xếp mảng theo thứ tự **giảm dần**.
* *Ví dụ:* Mảng `1 5 3 9` $\rightarrow$ Kết quả: `9 5 3 1`.

**2d. Xây dựng Menu xử lý mảng**
Viết menu thao tác mảng:
1.  Nhập mảng mới (Nhập n và nhập các giá trị).
2.  Xuất mảng hiện tại.
3.  Xóa một phần tử (theo câu 2b).
4.  Sắp xếp giảm dần (theo câu 2c).
5.  Thoát.

**Testcase mẫu:**

```
=== MENU MANG THU CONG ===
1. Nhap mang moi
2. Xuat mang
3. Xoa phan tu
4. Sap xep giam dan
5. Thoat
Moi chon: 1

Nhap n (1-20): 5
Nhap a[0]: 10
Nhap a[1]: 50
Nhap a[2]: 30
Nhap a[3]: 40
Nhap a[4]: 20

Moi chon: 3
Nhap vi tri k muon xoa (0-4): 2
Da xoa phan tu tai vi tri 2 (gia tri 30).

Moi chon: 2
Mang hien tai: 10 50 40 20 (Luu y: Mat so 30, mang con 4 so)

Moi chon: 4
Da sap xep giam dan.
Mang ket qua: 50 40 20 10

Moi chon: 5
Bye!
```
---

# Đề 5: Con mèo Doraemon

## CÂU 1: Xử lý Thời gian & Logic (5.0 điểm)

**Yêu cầu:** Viết chương trình thực hiện các yêu cầu sau. Khai báo nguyên mẫu hàm (function prototype) trước khi định nghĩa.

**1a. Hàm đếm ngày trong năm (2.0 điểm)**
Viết hàm `XuLyNgayThang` nhận vào 3 tham số: `ngay`, `thang`, `nam` và 1 tham số `flag` (kiểu `bool`, giá trị mặc định là `false`).
* Hàm cần kiểm tra tính hợp lệ của ngày tháng năm (lưu ý năm nhuận tháng 2 có 29 ngày).
* **Trường hợp `flag == false`:** Tính và trả về số ngày đã trôi qua từ đầu năm (01/01) đến ngày nhập vào.
* **Trường hợp `flag == true`:** Tính và trả về số ngày còn lại từ ngày nhập vào đến hết năm (31/12).

**1b. Sự kiện Nhật thực (1.5 điểm)**
Giả sử chu kỳ Nhật thực toàn phần (Saros) lặp lại chính xác sau **6585 ngày**. Mốc tính bắt đầu từ ngày **01/01/2026**.
Viết hàm thực hiện:
* Nhập vào ngày, tháng, năm hiện tại (Yêu cầu kiểm tra: Ngày nhập phải $\ge$ 01/01/2026).
* Tính và xuất ra số ngày còn lại để sự kiện Nhật thực tiếp theo xảy ra.
    * *Gợi ý:* `Số ngày còn lại = 6585 - (Số ngày trôi qua từ 01/01/2026 đến Ngày nhập)`.

**1c. Menu xử lý thời gian (1.5 điểm)**
Viết hàm `main` hiển thị menu cho phép chọn:
1.  Đếm số ngày đã trôi qua trong năm (Nhập ngày tháng năm).
2.  Đếm số ngày còn lại của năm (Nhập ngày tháng năm).
3.  Đếm ngược đến Nhật thực toàn phần.
4.  Thoát.
* *Yêu cầu:* Sử dụng `do-while` để lặp lại menu.

**Testcase mẫu**

```
=== MENU THOI GIAN ===
1. Dem ngay da qua
2. Dem ngay con lai
3. Dem nguoc Nhat thuc
4. Thoat
Moi chon: 1

Nhap ngay thang nam: 1 3 2024
Ket qua: Da troi qua 61 ngay tu dau nam.
(Giai thich: Nam 2024 nhuan. 31(T1) + 29(T2) + 1(T3) = 61)

Tiep tuc khong? (y/n): y
-----------------------------------(Xóa màn hình)
=== MENU THOI GIAN ===
1. Dem ngay da qua
2. Dem ngay con lai
3. Dem nguoc Nhat thuc
4. Thoat
Moi chon: 3

Moc Nhat thuc: 01/01/2026 (Chu ky 6585 ngay)
Nhap ngay hien tai (dd mm yyyy): 5 1 2026
So ngay da troi qua tu 01/01/2026: 4 ngay.
--> CON LAI: 6581 ngay nua se co Nhat thuc.

Tiep tuc khong? (y/n): n
Bye!
```

## CÂU 2: Mảng & Tính tiền điện (5.0 điểm)

**Yêu cầu:** Viết chương trình quản lý chỉ số điện kế.

**2a. Khởi tạo mảng chỉ số điện (1.5 điểm)**
Viết hàm `KhoiTaoDienKe` thực hiện:
* Nhập số lượng tháng ghi điện $n$ (Điều kiện: $10 \le n \le 20$).
* Tạo mảng $n$ phần tử biểu thị chỉ số điện tích lũy qua các tháng.
    * Phần tử đầu tiên (tháng 0) sinh ngẫu nhiên từ **1000 trở lên**.
    * Các phần tử tiếp theo phải **lớn hơn** phần tử liền trước, khoảng cách chênh lệch ngẫu nhiên từ **1 đến 200** (KWh).
* Xuất mảng kèm theo chú thích tháng (Ví dụ: `Thang 1: 1200`, `Thang 2: 1350`...).

**2b. Tính tổng tiền điện (2.0 điểm)**
Viết hàm tính toán tiền điện dựa trên mảng chỉ số đã tạo:
* Số điện tiêu thụ tháng $i$ = `A[i] - A[i-1]`.
* **Quy tắc tính tiền:**
    * Nếu tiêu thụ $\le 100$: Đơn giá **3.500đ**/kWh.
    * Nếu tiêu thụ $> 100$: 100 số đầu giá **3.500đ**, các số vượt mức (từ số 101 trở đi) giá phạt **4.000đ**.
* Hàm in ra bảng kê chi tiết từng tháng và Tổng tiền phải đóng của cả quá trình ($n-1$ tháng).

**2c. Menu Tiền điện (1.5 điểm)**
Viết menu thao tác:
1.  Tạo sổ theo dõi điện (Nhập n và sinh mảng).
2.  In bảng kê tiền điện và Tổng tiền.
3.  Thoát.

**Testcase mẫu:**
Tiền điện (Giả sử n = 5) Mảng sinh ra: 1000, 1050, 1160, 1260, 1280

```
=== MENU TIEN DIEN ===
1. Tao so theo doi
2. In bang ke tien dien
3. Thoat
Moi chon: 1

Nhap so luong thang (10-20): 5
Loi: N phai >= 10. (Gia su cho phep nhap 5 de test)
Da tao mang: 1000 1050 1160 1260 1280

Moi chon: 2
=== BANG KE CHI TIET ===
Thang 1: Tieu thu 50 kWh (1050 - 1000)
 -> Tien: 50 * 3500 = 175,000 d

Thang 2: Tieu thu 110 kWh (1160 - 1050)
 -> Vuot muc! (100 * 3500) + (10 * 4000)
 -> Tien: 350,000 + 40,000 = 390,000 d

Thang 3: Tieu thu 100 kWh (1260 - 1160)
 -> Tien: 100 * 3500 = 350,000 d

Thang 4: Tieu thu 20 kWh (1280 - 1260)
 -> Tien: 20 * 3500 = 70,000 d

----------------------------------
TONG CONG THANH TOAN: 985,000 d

Moi chon: 3
Bye!
```


--------- Chúc may mắn ----------
