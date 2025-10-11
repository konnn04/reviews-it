### **ĐỀ THI LUYỆN TẬP - MÔN KHAI PHÁ DỮ LIỆU (ĐỀ SỐ 2)**

**Thời gian:** 90 phút
**(Không sử dụng tài liệu, được dùng máy tính cầm tay)**

---

**Câu 1: Khai phá luật kết hợp (Apriori) (2.5 điểm)**

Một nền tảng xem phim trực tuyến ghi nhận lịch sử xem phim của người dùng trong một buổi tối. Mỗi "giao dịch" là một người dùng, và các "mặt hàng" là thể loại phim họ đã xem.

| ID Người dùng | Các thể loại đã xem |
| :--- | :--- |
| 1 | {Hành động, Khoa học viễn tưởng, Hài} |
| 2 | {Hài, Lãng mạn} |
| 3 | {Hành động, Khoa học viễn tưởng, Kinh dị} |
| 4 | {Hài, Lãng mạn, Kinh dị} |
| 5 | {Hành động, Khoa học viễn tưởng} |
| 6 | {Hài, Lãng mạn} |
| 7 | {Hành động, Kinh dị} |
| 8 | {Khoa học viễn tưởng, Lãng mạn} |

**Yêu cầu:**

a. Với ngưỡng hỗ trợ tối thiểu **`min_sup = 3`**, hãy xác định tất cả các tập mục phổ biến (frequent itemsets) bằng thuật toán Apriori. Trình bày rõ ràng các bước sinh tập ứng viên (Ck) và chọn tập phổ biến (Lk).

b. Từ các tập phổ biến đã tìm được, hãy sinh ra tất cả các luật kết hợp hợp lệ thỏa mãn ngưỡng tin cậy tối thiểu **`min_conf = 60%`**.

---

**Câu 2: Cây quyết định (ID3) (2.5 điểm)**

Công ty viễn thông muốn dự đoán khách hàng có khả năng "Rời mạng" (Churn) hay không dựa trên dữ liệu sau:

| ID | Gói cước | Hỗ trợ KH | Hợp đồng | Rời mạng |
| :- | :--- | :--- | :--- | :--- |
| 1 | Cơ bản | Kém | Theo tháng | Có |
| 2 | Cao cấp | Tốt | Dài hạn | Không |
| 3 | Cơ bản | Tốt | Theo tháng | Có |
| 4 | Cao cấp | Kém | Theo tháng | Có |
| 5 | Cơ bản | Kém | Dài hạn | Không |
| 6 | Cao cấp | Tốt | Dài hạn | Không |
| 7 | Cơ bản | Tốt | Dài hạn | Không |
| 8 | Cao cấp | Kém | Theo tháng | Có |
| 9 | Cơ bản | Tốt | Theo tháng | Không |
| 10 | Cao cấp | Tốt | Dài hạn | Không |

**Yêu cầu:**

a. Tính `Entropy(S)` của toàn bộ tập dữ liệu (với S là tập dữ liệu trên).
b. Tính Information Gain cho hai thuộc tính: `Hợp đồng` và `Gói cước`.
c. Thuộc tính nào được chọn làm nút gốc để xây dựng cây quyết định? Tại sao? Vẽ mức đầu tiên của cây quyết định.

---

**Câu 3: Phân loại Naive Bayes (2.5 điểm)**

Một phòng khám muốn xây dựng mô hình chẩn đoán bệnh dựa trên các triệu chứng.

| ID | Sốt | Ho | Mệt mỏi | Bệnh |
| :- | :--- | :--- | :--- | :--- |
| 1 | Cao | Có | Có | Cúm |
| 2 | Vừa | Có | Không | Cảm lạnh |
| 3 | Vừa | Không | Có | Cúm |
| 4 | Không | Có | Không | Cảm lạnh |
| 5 | Cao | Có | Có | Cúm |
| 6 | Vừa | Không | Không | Cảm lạnh |
| 7 | Cao | Không | Có | Cúm |
| 8 | Vừa | Có | Có | Cảm lạnh |

**Yêu cầu:**

a. Tính tất cả các xác suất tiên nghiệm `P(Bệnh)` và các xác suất có điều kiện `P(Triệu chứng | Bệnh)` cần thiết cho mô hình Naive Bayes. **Lưu ý:** Áp dụng kỹ thuật **làm mịn Laplace (α=1)** cho tất cả các phép tính xác suất có điều kiện để xử lý các trường hợp có tần suất bằng 0.

b. Sử dụng mô hình đã xây dựng, dự đoán loại bệnh cho một bệnh nhân mới có triệu chứng: `X = (Sốt = Cao, Ho = Có, Mệt mỏi = Không)`.

---

**Câu 4: Phân cụm K-Means (2.5 điểm)**

Cho một tập dữ liệu 2 chiều gồm 6 điểm: A(1, 1), B(2, 3), C(3, 2), D(8, 8), E(9, 7), F(10, 9).

**Yêu cầu:**

Thực hiện **một vòng lặp đầy đủ** của thuật toán K-Means với **K=2**.

a. **Bước gán cụm:** Với tâm cụm ban đầu được chọn là **Tâm 1 = A(1, 1)** và **Tâm 2 = E(9, 7)**, hãy phân tất cả các điểm (bao gồm cả A và E) vào hai cụm này dựa trên khoảng cách Euclidean.

b. **Bước cập nhật:** Tính toán lại tọa độ tâm cụm mới cho mỗi cụm dựa trên các điểm đã được gán ở câu a.

c. Dựa trên kết quả, thuật toán K-Means đã hội tụ (converged) chưa? Giải thích ngắn gọn.

---
---

### **BÀI GIẢI CHI TIẾT ĐỀ LUYỆN TẬP**

**Câu 1: Khai phá luật kết hợp (Apriori)**

**a. Xác định Frequent Itemsets (min_sup = 3)**

Tổng số giao dịch = 8.

**Vòng 1: Tìm L1**
1.  **C1:** `{{Hành động}, {KHVT}, {Hài}, {Lãng mạn}, {Kinh dị}}`
2.  **Đếm Support:**
    *   Support({Hành động}) = 4
    *   Support({KHVT}) = 4
    *   Support({Hài}) = 3
    *   Support({Lãng mạn}) = 4
    *   Support({Kinh dị}) = 3
3.  **L1:** Tất cả đều có Support ≥ 3.
    *   **L1 = `{{Hành động}, {KHVT}, {Hài}, {Lãng mạn}, {Kinh dị}}`**

**Vòng 2: Tìm L2**
1.  **C2 (sinh từ L1):** 10 cặp
    `{{Hành động, KHVT}, {Hành động, Hài}, {Hành động, Lãng mạn}, {Hành động, Kinh dị}, {KHVT, Hài}, {KHVT, Lãng mạn}, {KHVT, Kinh dị}, {Hài, Lãng mạn}, {Hài, Kinh dị}, {Lãng mạn, Kinh dị}}`
2.  **Đếm Support:**
    *   Support({Hành động, KHVT}) = 3 (TID 1, 3, 5)
    *   Support({Hành động, Hài}) = 1
    *   Support({Hành động, Lãng mạn}) = 0
    *   Support({Hành động, Kinh dị}) = 2
    *   Support({KHVT, Hài}) = 1
    *   Support({KHVT, Lãng mạn}) = 1
    *   Support({KHVT, Kinh dị}) = 1
    *   Support({Hài, Lãng mạn}) = 3 (TID 2, 4, 6)
    *   Support({Hài, Kinh dị}) = 1
    *   Support({Lãng mạn, Kinh dị}) = 1
3.  **L2:**
    *   **L2 = `{{Hành động, KHVT}, {Hài, Lãng mạn}}`**

**Vòng 3: Tìm L3**
1.  **C3 (sinh từ L2):** Thử kết hợp 2 itemset trong L2. Vì chúng không có item nào chung, không thể tạo ra ứng viên 3-item.
    *   **C3 = `{}` (Tập rỗng)**

Thuật toán dừng lại.

**Kết luận phần a:** Các tập phổ biến là L1 và L2. Tập phổ biến lớn nhất là **L2 = `{{Hành động, KHVT}, {Hài, Lãng mạn}}`**.

**b. Sinh và kiểm tra luật kết hợp (min_conf = 60%)**

Từ tập phổ biến lớn nhất (L2):
1.  **Từ itemset `{Hành động, KHVT}` (Support = 3):**
    *   `{Hành động} → {KHVT}`:
        *   `Confidence = Sup({Hành động, KHVT}) / Sup({Hành động}) = 3 / 4 = 75%`
        *   75% ≥ 60% → **Luật hợp lệ.**
    *   `{KHVT} → {Hành động}`:
        *   `Confidence = Sup({Hành động, KHVT}) / Sup({KHVT}) = 3 / 4 = 75%`
        *   75% ≥ 60% → **Luật hợp lệ.**

2.  **Từ itemset `{Hài, Lãng mạn}` (Support = 3):**
    *   `{Hài} → {Lãng mạn}`:
        *   `Confidence = Sup({Hài, Lãng mạn}) / Sup({Hài}) = 3 / 3 = 100%`
        *   100% ≥ 60% → **Luật hợp lệ.**
    *   `{Lãng mạn} → {Hài}`:
        *   `Confidence = Sup({Hài, Lãng mạn}) / Sup({Lãng mạn}) = 3 / 4 = 75%`
        *   75% ≥ 60% → **Luật hợp lệ.**

---

**Bài 2: Cây quyết định (ID3)**

**a. Tính Entropy(S)**
*   Tổng số mẫu S = 10.
*   Lớp 'Có': 4, Lớp 'Không': 6.
*   `Entropy(S) = - (4/10) * log2(4/10) - (6/10) * log2(6/10)`
    `= - (0.4 * -1.322) - (0.6 * -0.737) = 0.529 + 0.442 = **0.971**`

**b. Tính Information Gain**

**Gain(S, Hợp đồng):**
*   **Nhánh 'Theo tháng' (5 mẫu):** 4 'Có', 1 'Không'.
    `Entropy(Theo tháng) = - (4/5)*log2(4/5) - (1/5)*log2(1/5) ≈ 0.722`
*   **Nhánh 'Dài hạn' (5 mẫu):** 0 'Có', 5 'Không'.
    `Entropy(Dài hạn) = 0` (Vì nhánh này thuần khiết)
*   **Gain:**
    `Gain(S, Hợp đồng) = 0.971 - [ (5/10)*0.722 + (5/10)*0 ]`
    `= 0.971 - 0.361 = **0.61**`

**Gain(S, Gói cước):**
*   **Nhánh 'Cơ bản' (5 mẫu):** 2 'Có', 3 'Không'.
    `Entropy(Cơ bản) = - (2/5)*log2(2/5) - (3/5)*log2(3/5) ≈ 0.971`
*   **Nhánh 'Cao cấp' (5 mẫu):** 2 'Có', 3 'Không'.
    `Entropy(Cao cấp) = - (2/5)*log2(2/5) - (3/5)*log2(3/5) ≈ 0.971`
*   **Gain:**
    `Gain(S, Gói cước) = 0.971 - [ (5/10)*0.971 + (5/10)*0.971 ]`
    `= 0.971 - 0.971 = **0**`

**c. Chọn nút gốc và vẽ cây**
*   So sánh: `Gain(S, Hợp đồng) = 0.61` và `Gain(S, Gói cước) = 0`.
*   Thuộc tính **"Hợp đồng"** được chọn làm nút gốc vì nó có Information Gain cao hơn nhiều, cho thấy khả năng phân chia dữ liệu tốt hơn.
*   **Vẽ mức đầu tiên của cây:**
    ```mermaid
    graph TD
        A[Hợp đồng?] -->|Dài hạn| B(Rời mạng = Không);
        A -->|Theo tháng| C{...};

        style B fill:#f99,stroke:#333,stroke-width:2px
    ```
    *   Nhánh 'Dài hạn' trở thành nút lá vì nó hoàn toàn thuần khiết. Nhánh 'Theo tháng' cần được chia tiếp ở các bước sau.

---

**Bài 3: Phân loại Naive Bayes**

**a. Tính các xác suất (với làm mịn Laplace, α=1)**

Tổng số mẫu = 8.
**1. Xác suất tiên nghiệm P(Bệnh):**
*   `P(Bệnh=Cúm) = 4/8 = 1/2`
*   `P(Bệnh=Cảm lạnh) = 4/8 = 1/2`

**2. Xác suất có điều kiện P(Triệu chứng | Bệnh):**
*   `|V_Sốt|` = 3 ({Cao, Vừa, Không})
*   `|V_Ho|` = 2 ({Có, Không})
*   `|V_Mệt mỏi|` = 2 ({Có, Không})

*   **Với lớp 'Cúm' (count=4):**
    *   `P(Sốt=Cao | Cúm) = (3+1)/(4+1*3) = 4/7`
    *   `P(Ho=Có | Cúm) = (2+1)/(4+1*2) = 3/6 = 1/2`
    *   `P(Mệt mỏi=Không | Cúm) = (0+1)/(4+1*2) = 1/6`
*   **Với lớp 'Cảm lạnh' (count=4):**
    *   `P(Sốt=Cao | Cảm lạnh) = (0+1)/(4+1*3) = 1/7`
    *   `P(Ho=Có | Cảm lạnh) = (3+1)/(4+1*2) = 4/6 = 2/3`
    *   `P(Mệt mỏi=Không | Cảm lạnh) = (3+1)/(4+1*2) = 4/6 = 2/3`

**b. Dự đoán cho X = (Sốt = Cao, Ho = Có, Mệt mỏi = Không)**

*   **Score(Cúm):** `P(Cúm) * P(Cao|Cúm) * P(Có|Cúm) * P(Không|Cúm)`
    `= (1/2) * (4/7) * (1/2) * (1/6) = 4/168 ≈ **0.0238**`
*   **Score(Cảm lạnh):** `P(Cảm lạnh) * P(Cao|Cảm lạnh) * P(Có|Cảm lạnh) * P(Không|Cảm lạnh)`
    `= (1/2) * (1/7) * (2/3) * (2/3) = 4/126 ≈ **0.0317**`

**So sánh và kết luận:**
`Score(Cảm lạnh) ≈ 0.0317` cao hơn `Score(Cúm) ≈ 0.0238`. Do đó, mô hình dự đoán bệnh nhân bị **Cảm lạnh**.

---

**Bài 4: Phân cụm K-Means**

**a. Bước gán cụm**

Tâm 1 = (1, 1), Tâm 2 = (9, 7).

| Điểm | Khoảng cách đến Tâm 1(1,1) | Khoảng cách đến Tâm 2(9,7) | Cụm được gán |
| :--- | :--- | :--- | :--- |
| A(1,1) | `sqrt((1-1)²+(1-1)²) = 0` | `sqrt((1-9)²+(1-7)²) = 10` | **Cụm 1** |
| B(2,3) | `sqrt((2-1)²+(3-1)²) ≈ 2.24` | `sqrt((2-9)²+(3-7)²) ≈ 8.06` | **Cụm 1** |
| C(3,2) | `sqrt((3-1)²+(2-1)²) ≈ 2.24` | `sqrt((3-9)²+(2-7)²) ≈ 7.81` | **Cụm 1** |
| D(8,8) | `sqrt((8-1)²+(8-1)²) ≈ 9.9` | `sqrt((8-9)²+(8-7)²) ≈ 1.41` | **Cụm 2** |
| E(9,7) | `sqrt((9-1)²+(7-1)²) = 10` | `sqrt((9-9)²+(7-7)²) = 0` | **Cụm 2** |
| F(10,9) | `sqrt((10-1)²+(9-1)²) ≈ 12.04` | `sqrt((10-9)²+(9-7)²) ≈ 2.24` | **Cụm 2** |

**Kết quả gán cụm:**
*   **Cụm 1: {A(1,1), B(2,3), C(3,2)}**
*   **Cụm 2: {D(8,8), E(9,7), F(10,9)}**

**b. Bước cập nhật tâm cụm**

*   **Tâm cụm 1 mới:**
    *   x = `(1 + 2 + 3) / 3 = 6 / 3 = 2`
    *   y = `(1 + 3 + 2) / 3 = 6 / 3 = 2`
    *   **Tâm 1 mới = (2, 2)**
*   **Tâm cụm 2 mới:**
    *   x = `(8 + 9 + 10) / 3 = 27 / 3 = 9`
    *   y = `(8 + 7 + 9) / 3 = 24 / 3 = 8`
    *   **Tâm 2 mới = (9, 8)**

**c. Thuật toán đã hội tụ chưa? Giải thích.**

*   **Chưa.**
*   **Giải thích:** Thuật toán chỉ hội tụ khi vị trí của các tâm cụm không thay đổi sau bước cập nhật. Trong trường hợp này:
    *   Tâm 1 đã di chuyển từ (1, 1) đến (2, 2).
    *   Tâm 2 đã di chuyển từ (9, 7) đến (9, 8).
    Vì ít nhất một tâm cụm đã thay đổi vị trí, thuật toán chưa hội tụ và cần tiếp tục các vòng lặp tiếp theo.