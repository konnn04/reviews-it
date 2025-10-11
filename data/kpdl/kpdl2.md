### **ĐỀ BÀI LUYỆN TẬP MỚI**

**Bài 1: Khai phá luật kết hợp (Apriori)**

Một quán cà phê ghi nhận các giao dịch mua hàng sau:

| TID | Các mặt hàng đã mua |
| :-- | :--- |
| 1 | {Espresso, Sữa tươi, Đường} |
| 2 | {Espresso, Sữa tươi, Bánh Croissant} |
| 3 | {Espresso, Sữa tươi, Đường} |
| 4 | {Sữa tươi, Bánh Croissant} |
| 5 | {Espresso, Sữa tươi, Đường} |
| 6 | {Espresso, Bánh Croissant} |
| 7 | {Sữa tươi, Đường} |
| 8 | {Espresso, Sữa tươi, Bánh Croissant, Đường} |

**Yêu cầu:**
a. Với ngưỡng hỗ trợ tối thiểu **`min_sup = 3`**, hãy xác định tất cả các tập mục phổ biến (frequent itemsets) L1, L2, L3,... bằng thuật toán Apriori.
b. Từ tập phổ biến lớn nhất tìm được, hãy sinh ra các luật kết hợp hợp lệ với ngưỡng tin cậy tối thiểu **`min_conf = 80%`**.

---

**Bài 2: Cây quyết định (ID3)**

Một trường đại học sử dụng dữ liệu sau để xây dựng mô hình dự đoán khả năng một sinh viên "Hoàn thành khóa học" đúng hạn.

| ID | Trình độ đầu vào | Tự học | Tham gia CLB | Hoàn thành khóa học |
| :- | :--- | :--- | :--- | :--- |
| 1 | Khá | Có | Có | Có |
| 2 | Giỏi | Không | Không | Có |
| 3 | Trung bình | Có | Có | Không |
| 4 | Khá | Có | Không | Có |
| 5 | Trung bình | Không | Có | Không |
| 6 | Giỏi | Có | Có | Có |
| 7 | Khá | Không | Không | Không |
| 8 | Giỏi | Có | Không | Có |

**Yêu cầu:**
a. Tính Entropy của toàn bộ tập dữ liệu `Entropy(S)`.
b. Tính Information Gain cho hai thuộc tính `Trình độ đầu vào` và `Tự học`.
c. Dựa trên kết quả câu b, thuộc tính nào sẽ được chọn làm nút gốc của cây quyết định? Vẽ mức đầu tiên của cây.

---

**Bài 3: Phân loại Naive Bayes**

Một hệ thống cần phân loại phương tiện dựa trên các đặc điểm quan sát được.

| Phương tiện | Loại bánh | Có động cơ | Màu sắc |
| :--- | :--- | :--- | :--- |
| Xe máy | 2 bánh | Có | Đen |
| Xe đạp | 2 bánh | Không | Xanh |
| Ô tô | 4 bánh | Có | Đỏ |
| Xe máy | 2 bánh | Có | Đỏ |
| Xe đạp | 2 bánh | Không | Đen |
| Ô tô | 4 bánh | Có | Xanh |

**Yêu cầu:**
a. Tính các xác suất tiên nghiệm và xác suất có điều kiện cần thiết để xây dựng mô hình Naive Bayes. **Sử dụng kỹ thuật làm mịn Laplace (Laplacian Smoothing) với α=1** để xử lý các trường hợp có tần suất bằng 0.
b. Dự đoán nhãn cho một phương tiện mới có đặc điểm: `X = (Loại bánh = 4 bánh, Có động cơ = Không, Màu sắc = Đen)`.

---

**Bài 4: Phân cụm K-Means**

Cho tập dữ liệu 2 chiều gồm 6 điểm: P1(2, 3), P2(2, 5), P3(8, 7), P4(9, 8), P5(3, 4), P6(7, 8).

**Yêu cầu:**
Thực hiện **một vòng lặp đầy đủ** của thuật toán K-Means với **K=2**.
a. **Bước gán cụm:** Với tâm cụm ban đầu là **C1 = P1(2, 3)** và **C2 = P4(9, 8)**, hãy phân các điểm còn lại vào hai cụm này dựa trên khoảng cách Euclidean.
b. **Bước cập nhật:** Tính toán lại tọa độ tâm cụm mới cho mỗi cụm dựa trên các điểm đã được gán ở câu a.
c. Dựa vào kết quả, thuật toán đã hội tụ chưa? Giải thích.

---
---

### **BÀI GIẢI CHI TIẾT**

**Bài 1: Khai phá luật kết hợp (Apriori)**

**a. Xác định Frequent Itemsets (min_sup = 3)**

Tổng số giao dịch = 8.

**Vòng 1: Tìm L1**
1.  **C1:** `{{Espresso}, {Sữa tươi}, {Đường}, {Bánh Croissant}}`
2.  **Đếm Support:**
    *   Support({Espresso}) = 5
    *   Support({Sữa tươi}) = 6
    *   Support({Đường}) = 4
    *   Support({Bánh Croissant}) = 4
3.  **L1:** Tất cả đều có Support ≥ 3.
    *   **L1 = `{{Espresso}, {Sữa tươi}, {Đường}, {Bánh Croissant}}`**

**Vòng 2: Tìm L2**
1.  **C2 (sinh từ L1):**
    `C2 = {{Espresso, Sữa tươi}, {Espresso, Đường}, {Espresso, Bánh Croissant}, {Sữa tươi, Đường}, {Sữa tươi, Bánh Croissant}, {Đường, Bánh Croissant}}`
2.  **Đếm Support:**
    *   Support({Espresso, Sữa tươi}) = 4 (TID 1, 2, 3, 5, 8) → 5
    *   Support({Espresso, Đường}) = 4 (TID 1, 3, 5, 8)
    *   Support({Espresso, Bánh Croissant}) = 3 (TID 2, 6, 8)
    *   Support({Sữa tươi, Đường}) = 4 (TID 1, 3, 5, 8)
    *   Support({Sữa tươi, Bánh Croissant}) = 3 (TID 2, 4, 8)
    *   Support({Đường, Bánh Croissant}) = 1 (TID 8)
3.  **L2:** Loại bỏ `{Đường, Bánh Croissant}` (Support=1).
    *   **L2 = `{{Espresso, Sữa tươi}, {Espresso, Đường}, {Espresso, Bánh Croissant}, {Sữa tươi, Đường}, {Sữa tươi, Bánh Croissant}}`**

**Vòng 3: Tìm L3**
1.  **C3 (sinh từ L2):**
    *   `{Espresso, Sữa tươi}` và `{Espresso, Đường}` → `{Espresso, Sữa tươi, Đường}`
    *   `{Espresso, Sữa tươi}` và `{Espresso, Bánh Croissant}` → `{Espresso, Sữa tươi, Bánh Croissant}`
    *   `{Sữa tươi, Đường}` và `{Sữa tươi, Bánh Croissant}` → `{Sữa tươi, Đường, Bánh Croissant}`
    *   Tập ứng viên ban đầu: `{{Espresso, Sữa tươi, Đường}, {Espresso, Sữa tươi, Bánh Croissant}, {Sữa tươi, Đường, Bánh Croissant}}`
2.  **Cắt tỉa C3:**
    *   **Ứng viên `{Espresso, Sữa tươi, Đường}`:** Các tập con 2-item là `{Espresso, Sữa tươi}`, `{Espresso, Đường}`, `{Sữa tươi, Đường}`. Tất cả đều có trong L2. → **Giữ lại**.
    *   **Ứng viên `{Espresso, Sữa tươi, Bánh Croissant}`:** Các tập con 2-item là `{Espresso, Sữa tươi}`, `{Espresso, Bánh Croissant}`, `{Sữa tươi, Bánh Croissant}`. Tất cả đều có trong L2. → **Giữ lại**.
    *   **Ứng viên `{Sữa tươi, Đường, Bánh Croissant}`:** Các tập con 2-item là `{Sữa tươi, Đường}`, `{Sữa tươi, Bánh Croissant}`, `{Đường, Bánh Croissant}`. `{Đường, Bánh Croissant}` **không có** trong L2. → **Loại bỏ**.
    *   **C3 sau khi cắt tỉa = `{{Espresso, Sữa tươi, Đường}, {Espresso, Sữa tươi, Bánh Croissant}}`**
3.  **Đếm Support cho C3:**
    *   Support({Espresso, Sữa tươi, Đường}) = 4 (TID 1, 3, 5, 8)
    *   Support({Espresso, Sữa tươi, Bánh Croissant}) = 2 (TID 2, 8)
4.  **L3:** Loại bỏ `{Espresso, Sữa tươi, Bánh Croissant}` (Support=2).
    *   **L3 = `{{Espresso, Sữa tươi, Đường}}`**

**Vòng 4: Tìm L4**
*   L3 chỉ có một phần tử, không thể tạo C4. Thuật toán dừng.

**Kết quả phần a:** Tập phổ biến lớn nhất là **L3 = `{{Espresso, Sữa tươi, Đường}}`**.

**b. Sinh và kiểm tra luật kết hợp (min_conf = 80%)**

Từ `{Espresso, Sữa tươi, Đường}` (Support=4):
1.  **Luật `{Espresso, Sữa tươi} → {Đường}`:**
    *   `Confidence = Sup({Espresso, Sữa tươi, Đường}) / Sup({Espresso, Sữa tươi}) = 4 / 5 = 80%`
    *   80% ≥ 80% → **Luật hợp lệ.**
2.  **Luật `{Espresso, Đường} → {Sữa tươi}`:**
    *   `Confidence = Sup({Espresso, Sữa tươi, Đường}) / Sup({Espresso, Đường}) = 4 / 4 = 100%`
    *   100% ≥ 80% → **Luật hợp lệ.**
3.  **Luật `{Sữa tươi, Đường} → {Espresso}`:**
    *   `Confidence = Sup({Espresso, Sữa tươi, Đường}) / Sup({Sữa tươi, Đường}) = 4 / 4 = 100%`
    *   100% ≥ 80% → **Luật hợp lệ.**
4.  **Luật `{Espresso} → {Sữa tươi, Đường}`:**
    *   `Confidence = Sup({Espresso, Sữa tươi, Đường}) / Sup({Espresso}) = 4 / 5 = 80%`
    *   80% ≥ 80% → **Luật hợp lệ.**
5.  **Luật `{Sữa tươi} → {Espresso, Đường}`:**
    *   `Confidence = Sup({Espresso, Sữa tươi, Đường}) / Sup({Sữa tươi}) = 4 / 6 ≈ 66.7%`
    *   66.7% < 80% → Không hợp lệ.
6.  **Luật `{Đường} → {Espresso, Sữa tươi}`:**
    *   `Confidence = Sup({Espresso, Sữa tươi, Đường}) / Sup({Đường}) = 4 / 4 = 100%`
    *   100% ≥ 80% → **Luật hợp lệ.**

---

**Bài 2: Cây quyết định (ID3)**

**a. Tính Entropy(S)**
*   Tổng số mẫu S = 8.
*   Lớp 'Có': 5, Lớp 'Không': 3.
*   `Entropy(S) = - (5/8) * log2(5/8) - (3/8) * log2(3/8) ≈ **0.954**` (tính toán tương tự đề trước)

**b. Tính Information Gain**

**Gain(S, Trình độ đầu vào):**
*   **Nhánh 'Khá' (3 mẫu):** 2 'Có', 1 'Không'.
    `Entropy(Khá) = - (2/3)*log2(2/3) - (1/3)*log2(1/3) ≈ 0.918`
*   **Nhánh 'Giỏi' (3 mẫu):** 3 'Có', 0 'Không'.
    `Entropy(Giỏi) = 0`
*   **Nhánh 'Trung bình' (2 mẫu):** 0 'Có', 2 'Không'.
    `Entropy(TB) = 0`
*   **Gain:**
    `Gain(S, Trình độ) = 0.954 - [ (3/8)*0.918 + (3/8)*0 + (2/8)*0 ]`
    `= 0.954 - 0.344 = **0.61**`

**Gain(S, Tự học):**
*   **Nhánh 'Có' (5 mẫu):** 4 'Có', 1 'Không'.
    `Entropy(Có) = - (4/5)*log2(4/5) - (1/5)*log2(1/5) ≈ 0.722`
*   **Nhánh 'Không' (3 mẫu):** 1 'Có', 2 'Không'.
    `Entropy(Không) = - (1/3)*log2(1/3) - (2/3)*log2(2/3) ≈ 0.918`
*   **Gain:**
    `Gain(S, Tự học) = 0.954 - [ (5/8)*0.722 + (3/8)*0.918 ]`
    `= 0.954 - [ 0.451 + 0.344 ] = 0.954 - 0.795 = **0.159**`

**c. Chọn nút gốc và vẽ cây**
*   So sánh: `Gain(S, Trình độ) = 0.61` và `Gain(S, Tự học) = 0.159`.
*   Vì `0.61 > 0.159`, thuộc tính **"Trình độ đầu vào"** được chọn làm nút gốc.
*   **Vẽ mức đầu tiên của cây:**
    ```mermaid
    graph TD
        A[Trình độ đầu vào?] -->|Giỏi| B(Hoàn thành = Có);
        A -->|Trung bình| C(Hoàn thành = Không);
        A -->|Khá| D{...};

        style B fill:#9f9,stroke:#333,stroke-width:2px
        style C fill:#f99,stroke:#333,stroke-width:2px
    ```
    *   Nhánh 'Giỏi' và 'Trung bình' trở thành nút lá vì chúng đã thuần khiết. Nhánh 'Khá' cần được chia tiếp ở các bước sau.

---

**Bài 3: Phân loại Naive Bayes**

**a. Tính các xác suất cần thiết (với làm mịn Laplace, α=1)**

Tổng số mẫu = 6.
**1. Xác suất tiên nghiệm P(C):**
*   `P(Loại=Xe máy) = 2/6`
*   `P(Loại=Xe đạp) = 2/6`
*   `P(Loại=Ô tô) = 2/6`

**2. Xác suất có điều kiện P(Xi | C):**
Công thức: `P(Xi=v | C) = (count(v, C) + α) / (count(C) + α * |V_i|)`
*   `|V_bánh|` = 2 ({2 bánh, 4 bánh})
*   `|V_động cơ|` = 2 ({Có, Không})
*   `|V_màu|` = 3 ({Đen, Xanh, Đỏ})

*   **Với lớp 'Xe máy' (count=2):**
    *   `P(4 bánh|Xe máy) = (0+1)/(2+1*2) = 1/4`
    *   `P(Không|Xe máy) = (0+1)/(2+1*2) = 1/4`
    *   `P(Đen|Xe máy) = (1+1)/(2+1*3) = 2/5`
*   **Với lớp 'Xe đạp' (count=2):**
    *   `P(4 bánh|Xe đạp) = (0+1)/(2+1*2) = 1/4`
    *   `P(Không|Xe đạp) = (2+1)/(2+1*2) = 3/4`
    *   `P(Đen|Xe đạp) = (1+1)/(2+1*3) = 2/5`
*   **Với lớp 'Ô tô' (count=2):**
    *   `P(4 bánh|Ô tô) = (2+1)/(2+1*2) = 3/4`
    *   `P(Không|Ô tô) = (0+1)/(2+1*2) = 1/4`
    *   `P(Đen|Ô tô) = (0+1)/(2+1*3) = 1/5`

**b. Dự đoán cho X = (4 bánh, Không, Đen)**

*   **Score(Xe máy):** `(2/6) * P(4 bánh|Xe máy) * P(Không|Xe máy) * P(Đen|Xe máy)`
    `= (2/6) * (1/4) * (1/4) * (2/5) = 4/480 ≈ 0.0083`
*   **Score(Xe đạp):** `(2/6) * P(4 bánh|Xe đạp) * P(Không|Xe đạp) * P(Đen|Xe đạp)`
    `= (2/6) * (1/4) * (3/4) * (2/5) = 12/480 = 0.025`
*   **Score(Ô tô):** `(2/6) * P(4 bánh|Ô tô) * P(Không|Ô tô) * P(Đen|Ô tô)`
    `= (2/6) * (3/4) * (1/4) * (1/5) = 6/480 = 0.0125`

**So sánh và kết luận:**
`Score(Xe đạp) = 0.025` là cao nhất. Do đó, mô hình dự đoán phương tiện mới là **Xe đạp**.

---

**Bài 4: Phân cụm K-Means**

**a. Bước gán cụm (Assignment Step)**

Tính khoảng cách Euclidean từ mỗi điểm đến C1(2,3) và C2(9,8).

| Điểm | Khoảng cách đến C1(2,3) | Khoảng cách đến C2(9,8) | Cụm được gán |
| :--- | :--- | :--- | :--- |
| P1(2,3) | `sqrt((2-2)²+(3-3)²) = 0` | `sqrt((2-9)²+(3-8)²) ≈ 8.6` | **Cụm 1** |
| P2(2,5) | `sqrt((2-2)²+(5-3)²) = 2` | `sqrt((2-9)²+(5-8)²) ≈ 7.6` | **Cụm 1** |
| P3(8,7) | `sqrt((8-2)²+(7-3)²) ≈ 7.2` | `sqrt((8-9)²+(7-8)²) ≈ 1.4` | **Cụm 2** |
| P4(9,8) | `sqrt((9-2)²+(8-3)²) ≈ 8.6` | `sqrt((9-9)²+(8-8)²) = 0` | **Cụm 2** |
| P5(3,4) | `sqrt((3-2)²+(4-3)²) ≈ 1.4` | `sqrt((3-9)²+(4-8)²) ≈ 7.2` | **Cụm 1** |
| P6(7,8) | `sqrt((7-2)²+(8-3)²) ≈ 7.1` | `sqrt((7-9)²+(8-8)²) = 2` | **Cụm 2** |

**Kết quả gán cụm:**
*   **Cụm 1: {P1(2,3), P2(2,5), P5(3,4)}**
*   **Cụm 2: {P3(8,7), P4(9,8), P6(7,8)}**

**b. Bước cập nhật tâm cụm (Update Step)**

*   **Tâm cụm 1 mới:**
    *   x = `(2 + 2 + 3) / 3 = 7/3 ≈ 2.33`
    *   y = `(3 + 5 + 4) / 3 = 12 / 3 = 4`
    *   **Tâm 1 mới = (2.33, 4)**
*   **Tâm cụm 2 mới:**
    *   x = `(8 + 9 + 7) / 3 = 24 / 3 = 8`
    *   y = `(7 + 8 + 8) / 3 = 23 / 3 ≈ 7.67`
    *   **Tâm 2 mới = (8, 7.67)**

**c. Thuật toán đã hội tụ chưa? Giải thích.**

*   **Chưa.**
*   **Giải thích:** Thuật toán K-Means chỉ hội tụ khi tâm của các cụm không còn thay đổi sau bước cập nhật. Trong trường hợp này:
    *   Tâm 1 đã thay đổi từ (2, 3) thành (2.33, 4).
    *   Tâm 2 đã thay đổi từ (9, 8) thành (8, 7.67).
    Vì các tâm cụm đã thay đổi, thuật toán cần tiếp tục lặp lại (bắt đầu một vòng lặp mới với việc gán lại các điểm vào các tâm mới này) cho đến khi các tâm ổn định.