### **Câu 1 (2 điểm)**

**Cho dãy số gồm 12 số sau: 4, 7, 7, 10, 0, 4, 7, 2, 3, 6, 5, 4**

**Anh chị hãy thêm vào dãy số trên 1 số bất kỳ tùy ý, như vậy dãy số cuối cùng để thực hiện các yêu cầu dưới đây có tất cả là 13 số. Sau đó ghi lại dãy số trên (gồm 13 số) trong bài làm.**

*   **Bài làm:**
    *   Chọn số bất kỳ để thêm vào dãy: **8**.
    *   Dãy số mới gồm 13 phần tử là: **4, 7, 7, 10, 0, 4, 7, 2, 3, 6, 5, 4, 8**.

**Tính toán và ghi ra các kết quả sau: Mean, Min, Max, Median và Mod của dãy số này.**

*   **Flow tính toán:**
    1.  **Sắp xếp lại dãy số** để dễ tính toán Median, Min, Max:
        `0, 2, 3, 4, 4, 4, 5, 6, 7, 7, 7, 8, 10`
    2.  **Tính toán các giá trị:**
        *   **Min (Giá trị nhỏ nhất):** Giá trị đầu tiên của dãy đã sắp xếp.
            *   Kết quả: **Min = 0**
        *   **Max (Giá trị lớn nhất):** Giá trị cuối cùng của dãy đã sắp xếp.
            *   Kết quả: **Max = 10**
        *   **Mean (Giá trị trung bình):** Dựa trên công thức từ *Chương 2 - Slide 12*.
            *   Công thức: `μ = (1/n) * Σ(xi)`
            *   Áp dụng: `Mean = (4+7+7+10+0+4+7+2+3+6+5+4+8) / 13 = 67 / 13`
            *   Kết quả: **Mean ≈ 5.15**
        *   **Median (Trung vị):** Giá trị ở giữa của dãy đã sắp xếp. Với n=13 (số lẻ), vị trí của Median là `(n+1)/2 = (13+1)/2 = 7`.
            *   Dãy đã sắp xếp: `0, 2, 3, 4, 4, 4, **5**, 6, 7, 7, 7, 8, 10`
            *   Kết quả: **Median = 5**
        *   **Mod (Yếu vị):** Giá trị xuất hiện nhiều nhất trong dãy.
            *   Tần suất xuất hiện: số 4 xuất hiện 3 lần, số 7 xuất hiện 3 lần. Các số khác xuất hiện ít hơn.
            *   Kết quả: **Mod = {4, 7}** (Dữ liệu này là bimodal).

---

**Ghi ra kết quả rời rạc hóa dãy số trên nếu thực hiện rời rạc hóa bằng thuật toán Equal-Width với K=3.**

*   **Flow thực hiện (Dựa trên Chương 2 - Slide 76, 77):**
    1.  **Nguyên tắc:** Chia dãy số thành K khoảng có chiều rộng bằng nhau.
    2.  **Công thức tính chiều rộng (Width):** `Width = (Max - Min) / K`
    3.  **Áp dụng:**
        *   `Min = 0`, `Max = 10`, `K = 3`
        *   `Width = (10 - 0) / 3 ≈ 3.33`
    4.  **Xác định các khoảng (bins):**
        *   Bin 1: [0, 3.33]
        *   Bin 2: (3.33, 6.66]
        *   Bin 3: (6.66, 10]
    5.  **Rời rạc hóa dãy số ban đầu:** `4, 7, 7, 10, 0, 4, 7, 2, 3, 6, 5, 4, 8`
        *   4 -> Bin 2
        *   7 -> Bin 3
        *   7 -> Bin 3
        *   10 -> Bin 3
        *   0 -> Bin 1
        *   4 -> Bin 2
        *   7 -> Bin 3
        *   2 -> Bin 1
        *   3 -> Bin 1
        *   6 -> Bin 2
        *   5 -> Bin 2
        *   4 -> Bin 2
        *   8 -> Bin 3
    *   **Kết quả:** **`Bin 2, Bin 3, Bin 3, Bin 3, Bin 1, Bin 2, Bin 3, Bin 1, Bin 1, Bin 2, Bin 2, Bin 2, Bin 3`**

---

**Ghi ra kết quả rời rạc hóa dãy số trên nếu thực hiện rời rạc hóa bằng thuật toán Equal-Frequency với K=3.**

*   **Flow thực hiện (Dựa trên Chương 2 - Slide 78, 79):**
    1.  **Nguyên tắc:** Chia dãy số thành K nhóm sao cho mỗi nhóm có số lượng phần tử bằng nhau (hoặc gần bằng nhau nhất).
    2.  **Tính số phần tử mỗi nhóm:** `Số phần tử / K = 13 / 3 ≈ 4.33`. Ta có thể chia thành các nhóm có số lượng là 4, 4, và 5.
    3.  **Sử dụng dãy đã sắp xếp để xác định ngưỡng:** `0, 2, 3, 4, | 4, 4, 5, 6, | 7, 7, 7, 8, 10`
    4.  **Xác định các khoảng (bins) từ các điểm chia:**
        *   Bin 1 (4 phần tử đầu): Chứa các giá trị từ 0 đến 4. Khoảng: `[0, 4]`
        *   Bin 2 (4 phần tử tiếp): Chứa các giá trị từ 4 đến 6. Khoảng: `(4, 6]`
        *   Bin 3 (5 phần tử cuối): Chứa các giá trị từ 7 đến 10. Khoảng: `(6, 10]`
    5.  **Rời rạc hóa dãy số ban đầu:** `4, 7, 7, 10, 0, 4, 7, 2, 3, 6, 5, 4, 8`
        *   4 -> Bin 1
        *   7 -> Bin 3
        *   7 -> Bin 3
        *   10 -> Bin 3
        *   0 -> Bin 1
        *   4 -> Bin 1
        *   7 -> Bin 3
        *   2 -> Bin 1
        *   3 -> Bin 1
        *   6 -> Bin 2
        *   5 -> Bin 2
        *   4 -> Bin 1
        *   8 -> Bin 3
    *   **Kết quả:** **`Bin 1, Bin 3, Bin 3, Bin 3, Bin 1, Bin 1, Bin 3, Bin 1, Bin 1, Bin 2, Bin 2, Bin 1, Bin 3`**

---

### **Câu 2 (2 điểm)**

**Mô tả vắn tắt phương án chuyển đổi dữ liệu để có thể sử dụng cho thuật toán Luật Kết Hợp và viết lại bảng dữ liệu theo phương án đã đề xuất.**

*   **Phương án chuyển đổi dữ liệu:**
    Dựa trên nguyên tắc của bài toán "Phân tích giỏ hàng" (Market Basket Analysis) trong *Chương 3 - Slide 3*, để áp dụng thuật toán Luật Kết Hợp, chúng ta cần chuyển đổi dữ liệu về dạng giao dịch (transactional data).
    1.  **Coi mỗi học sinh (mỗi dòng trong bảng) là một "giao dịch" (Transaction).**
    2.  **Coi mỗi cặp (Tên cột = Giá trị) là một "mặt hàng" (Item).** Ví dụ, `Văn Hóa=Giỏi`, `Đạo đức=Tốt`, `Thể chất=Đạt` là các items riêng biệt.
    3.  Mỗi giao dịch sẽ là một tập hợp các "mặt hàng" tương ứng với thông tin của học sinh đó.

*   **Bảng dữ liệu sau khi chuyển đổi:**

| ID Giao dịch (MS) | Các "mặt hàng" (Itemset) |
| :--- | :--- |
| 1 | {Văn Hóa=Giỏi, Đạo đức=Tốt, Thể chất=Đạt} |
| 2 | {Văn Hóa=Khá, Đạo đức=Tốt, Thể chất=Không đạt} |
| 3 | {Văn Hóa=Trung bình, Đạo đức=Kém, Thể chất=Không đạt} |
| 4 | {Văn Hóa=Kém, Đạo đức=Tốt, Thể chất=Đạt} |
| 5 | {Văn Hóa=Khá, Đạo đức=Kém, Thể chất=Đạt} |

---

### **Câu 3 (2 điểm)**

**Anh chị hãy điền 1 số nguyên tùy ý trong phạm vi từ vào các ô có ký hiệu ??. Sau đó vẽ lại bảng này (với đầy đủ số liệu) vào bài làm anh chị.**

*   **Bài làm:**
    *   Chọn số cho `??` ở hàng A, cột B là **15**.
    *   Chọn số cho `??` ở hàng B, cột A là **12**.
    *   Ma trận sai lầm (Confusion Matrix) hoàn chỉnh:

| | **Dự đoán là A** | **Dự đoán là B** | **Tổng thực tế** |
| :--- | :---: | :---: | :---: |
| **Thực tế là A** | 40 | 15 | 55 |
| **Thực tế là B** | 12 | 35 | 47 |
| **Tổng dự đoán** | 52 | 50 | 102 |

**Anh chị hãy tính toán và ghi ra các kết quả của những đại lượng theo anh chị là cần thiết để có thể đánh giá thuật toán này (làm tròn tới 2 số thập phân).**

*   **Flow tính toán (Dựa trên Chương 4 - Slide 26 đến 32):**
    Ta sẽ tính các chỉ số Accuracy, Precision, Recall, và F1-score cho từng lớp và cả tổng thể.

    **1. Đánh giá tổng thể:**
    *   **Accuracy (Độ chính xác):** Tỷ lệ dự đoán đúng trên toàn bộ tập dữ liệu.
        *   Công thức: `Accuracy = (TP + TN) / (TP + TN + FP + FN)`
        *   Áp dụng (coi A là Positive): `Accuracy = (40 + 35) / (40 + 35 + 12 + 15) = 75 / 102`
        *   Kết quả: **Accuracy ≈ 0.74** (hoặc 73.53%)

    **2. Đánh giá cho Lớp A (coi Lớp A là "Positive"):**
    *   True Positive (TP) = 40 (Thực tế A, dự đoán A)
    *   False Negative (FN) = 15 (Thực tế A, dự đoán B)
    *   False Positive (FP) = 12 (Thực tế B, dự đoán A)
    *   True Negative (TN) = 35 (Thực tế B, dự đoán B)

    *   **Precision (Độ chuẩn xác cho lớp A):** Trong số những lần dự đoán là A, bao nhiêu là đúng?
        *   Công thức: `Precision = TP / (TP + FP)`
        *   Áp dụng: `Precision_A = 40 / (40 + 12) = 40 / 52`
        *   Kết quả: **Precision_A ≈ 0.77**
    *   **Recall (Độ phủ cho lớp A):** Trong tất cả các trường hợp thực tế là A, mô hình tìm thấy được bao nhiêu?
        *   Công thức: `Recall = TP / (TP + FN)`
        *   Áp dụng: `Recall_A = 40 / (40 + 15) = 40 / 55`
        *   Kết quả: **Recall_A ≈ 0.73**
    *   **F1-score (cho lớp A):** Trung bình điều hòa của Precision và Recall.
        *   Công thức: `F1 = 2 * (Precision * Recall) / (Precision + Recall)`
        *   Áp dụng: `F1_A = 2 * (0.77 * 0.73) / (0.77 + 0.73)`
        *   Kết quả: **F1_A ≈ 0.75**

    **3. Đánh giá cho Lớp B (coi Lớp B là "Positive"):**
    *   True Positive (TP) = 35 (Thực tế B, dự đoán B)
    *   False Negative (FN) = 12 (Thực tế B, dự đoán A)
    *   False Positive (FP) = 15 (Thực tế A, dự đoán B)
    *   True Negative (TN) = 40 (Thực tế A, dự đoán A)

    *   **Precision (Độ chuẩn xác cho lớp B):**
        *   Áp dụng: `Precision_B = 35 / (35 + 15) = 35 / 50`
        *   Kết quả: **Precision_B = 0.70**
    *   **Recall (Độ phủ cho lớp B):**
        *   Áp dụng: `Recall_B = 35 / (35 + 12) = 35 / 47`
        *   Kết quả: **Recall_B ≈ 0.74**
    *   **F1-score (cho lớp B):**
        *   Áp dụng: `F1_B = 2 * (0.70 * 0.74) / (0.70 + 0.74)`
        *   Kết quả: **F1_B ≈ 0.72**

**Vì sao không chỉ tính toán kết quả cho cả bộ dữ liệu...mà còn phải tính toán các kết quả cho từng lớp?**

*   **Giải thích:**
    Việc chỉ tính Accuracy tổng thể có thể gây hiểu lầm, đặc biệt là với **dữ liệu mất cân bằng (imbalanced data)**, như đã đề cập trong "cái bẫy của độ chính xác" ở *Chương 4 - Slide 28*.
    *   **Ví dụ minh họa:** Giả sử ta có một mô hình phát hiện bệnh hiếm. Trong 1000 người, có 1 người bị bệnh (lớp A) và 999 người không bị bệnh (lớp B). Nếu mô hình luôn dự đoán "Không bệnh", nó sẽ có Accuracy là 999/1000 = 99.9%.
    *   Mặc dù Accuracy rất cao, mô hình này hoàn toàn vô dụng vì nó không thể phát hiện được bất kỳ trường hợp bệnh nào.
    *   Khi tính cho từng lớp, ta sẽ thấy ngay vấn đề:
        *   **Recall của lớp A (Bệnh)** sẽ là `TP / (TP + FN) = 0 / (0 + 1) = 0`. Chỉ số này cho thấy mô hình đã bỏ sót tất cả các trường hợp bệnh.
    *   Do đó, việc tính toán các chỉ số như Precision, Recall, F1-score cho từng lớp giúp chúng ta hiểu rõ hơn hiệu năng của mô hình trên từng nhóm cụ thể, phát hiện các điểm yếu mà Accuracy tổng thể che giấu.

---

### **Câu 4 (2 điểm)**

**Anh chị điền các số nguyên trong phạm vi vào các ô ghi ký hiệu ??. Sau đó vẽ lại bảng này với đầy đủ số liệu vào bài làm.**

*   **Bài làm:**
    *   Điền `??` ở hàng 1 (Thu nhập) = **25**.
    *   Điền `??` ở hàng 3 (Tuổi) = **28**.
    *   Điền `??` ở hàng 4 (Thu nhập) = **26**.
    *   Bảng dữ liệu hoàn chỉnh:

| ID | Tuổi | Gia đình | Thu nhập | Số tiền vay | Kết quả |
| :- | :--- | :--- | :--- | :--- | :--- |
| 1 | 24 | Có | 25 | 180 | Yes |
| 2 | 30 | Không | 17 | 130 | Yes |
| 3 | 28 | Có | 22 | 250 | No |
| 4 | 35 | Có | 26 | 150 | Yes |
| 5 | 28 | Không | 23 | 210 | No |

**Dùng thuật toán KNN để cho biết xem có quyết định cho khách hàng có thông tin dưới đây vay tiền hay không? Anh chị toàn quyền chọn công thức tính khoảng cách và giá trị K.**

*   Khách hàng mới cần phân loại: `X_new = (Tuổi=23, Gia đình=Có, Thu nhập=32, Số tiền vay=250)`

*   **Flow thực hiện:**
    1.  **Lựa chọn tham số:**
        *   Chọn **K = 3**.
        *   Chọn công thức tính khoảng cách **Euclidean**.
    2.  **Tiền xử lý dữ liệu (Normalization):** Vì các cột `Tuổi`, `Thu nhập`, `Số tiền vay` có thang đo khác nhau, ta cần chuẩn hóa chúng để đảm bảo mỗi thuộc tính có "tiếng nói" ngang bằng nhau. Ta dùng phương pháp **Min-Max Normalization** (đưa giá trị về khoảng) như trong *Chương 2 - Slide 54*.
        *   **Chuyển đổi thuộc tính hạng mục:** `Gia đình`: Có = 1, Không = 0.
        *   **Tìm Min-Max cho các cột số:**
            *   Tuổi: Min=24, Max=35
            *   Thu nhập: Min=17, Max=26
            *   Số tiền vay: Min=130, Max=250
        *   **Công thức:** `v' = (v - min) / (max - min)`
        *   **Chuẩn hóa bảng dữ liệu:**
            *   ID 1: `Tuổi'=(24-24)/11=0`, `Thu nhập'=(25-17)/9=0.89`, `Số tiền vay'=(180-130)/120=0.42`
            *   ID 2: `Tuổi'=(30-24)/11=0.55`, `Thu nhập'=(17-17)/9=0`, `Số tiền vay'=(130-130)/120=0`
            *   ... (tương tự cho các dòng còn lại)
        *   **Chuẩn hóa điểm dữ liệu mới `X_new`:**
            *   `Tuổi=23`: `(23-24)/11 = -0.09`
            *   `Gia đình=Có`: `1`
            *   `Thu nhập=32`: `(32-17)/9 = 1.67`
            *   `Số tiền vay=250`: `(250-130)/120 = 1`
            *   `X_new' = (-0.09, 1, 1.67, 1)`

    3.  **Tính khoảng cách Euclidean từ `X_new'` đến tất cả các điểm đã chuẩn hóa:**
        *   `dist(X_new', ID1') = sqrt((-0.09-0)² + (1-1)² + (1.67-0.89)² + (1-0.42)²) ≈ 0.98`
        *   `dist(X_new', ID2') = sqrt((-0.09-0.55)² + (1-0)² + (1.67-0)² + (1-0)²) ≈ 2.29`
        *   `dist(X_new', ID3') = sqrt((-0.09-0.36)² + (1-1)² + (1.67-0.56)² + (1-1)²) ≈ 1.21`
        *   `dist(X_new', ID4') = sqrt((-0.09-1)² + (1-1)² + (1.67-1)² + (1-0.17)²) ≈ 1.56`
        *   `dist(X_new', ID5') = sqrt((-0.09-0.36)² + (1-0)² + (1.67-0.67)² + (1-0.67)²) ≈ 1.75`

    4.  **Tìm K hàng xóm gần nhất (K=3):**
        *   Sắp xếp các khoảng cách: 0.98 (ID1), 1.21 (ID3), 1.56 (ID4), 1.75 (ID5), 2.29 (ID2).
        *   3 hàng xóm gần nhất là: **ID1 (Yes)**, **ID3 (No)**, **ID4 (Yes)**.

    5.  **Dự đoán dựa trên bỏ phiếu đa số (Majority Voting):**
        *   Trong 3 hàng xóm, có 2 phiếu "Yes" và 1 phiếu "No".
        *   Đa số là "Yes".

    *   **Kết quả phân loại cuối cùng:** **Yes (Cho vay)**.

---

### **Câu 5 (2 điểm)**

**Với các hiểu biết về bài toán phân lớp cổ điển (Binary và Multi Class Classify)...anh chị thử đề xuất một vài cách để có thể áp dụng giải quyết cho bài toán nêu trên (phân lớp đa nhãn).**

*   **Bài làm:**
    Bài toán phân lớp đa nhãn (Multi-Label Classification) là nơi một đối tượng có thể thuộc về nhiều lớp cùng một lúc. Ta có thể giải quyết bài toán này bằng cách biến đổi nó thành các bài toán phân lớp cổ điển. Dưới đây là hai phương pháp phổ biến:

    **1. Phương pháp Biến đổi bài toán (Problem Transformation):**

    *   **a) Binary Relevance (Tương quan nhị phân):**
        *   **Ý tưởng:** Đây là phương pháp trực quan và đơn giản nhất. Ta sẽ coi bài toán đa nhãn như một tập hợp các bài toán phân lớp nhị phân độc lập.
        *   **Cách thực hiện:** Với mỗi nhãn lớp có thể có (ví dụ: Thể thao, Thời sự, Văn hóa, Công nghệ), ta xây dựng một bộ phân loại nhị phân riêng biệt.
            *   Bộ phân loại 1: Quyết định bài báo có thuộc chủ đề "Thể thao" hay không (Thể thao / Không phải Thể thao).
            *   Bộ phân loại 2: Quyết định bài báo có thuộc chủ đề "Thời sự" hay không (Thời sự / Không phải Thời sự).
            *   ... và cứ thế cho tất cả các nhãn.
        *   **Dự đoán:** Khi có một bài báo mới, ta sẽ cho nó đi qua tất cả các bộ phân loại này. Tập hợp các nhãn cuối cùng của bài báo sẽ là tất cả các nhãn mà các bộ phân loại tương ứng dự đoán là "Có".
        *   **Sơ đồ minh họa:**
            

    *   **b) Label Powerset (Tổ hợp nhãn):**
        *   **Ý tưởng:** Phương pháp này xử lý sự tương quan giữa các nhãn bằng cách coi mỗi *tổ hợp nhãn* duy nhất xuất hiện trong dữ liệu huấn luyện là một lớp mới.
        *   **Cách thực hiện:**
            1.  Xác định tất cả các tổ hợp nhãn duy nhất trong tập huấn luyện. Ví dụ: `{Thể thao, Thời sự}`, `{Công nghệ}`, `{Văn hóa, Thời sự, Công nghệ}`.
            2.  Tạo ra một lớp mới cho mỗi tổ hợp này. Ví dụ: `Lớp_1 = {Thể thao, Thời sự}`, `Lớp_2 = {Công nghệ}`.
            3.  Huấn luyện một bộ phân loại đa lớp (multi-class classifier) duy nhất trên các lớp mới này.
        *   **Dự đoán:** Khi có bài báo mới, bộ phân loại sẽ dự đoán nó thuộc về một trong các "lớp tổ hợp" đã tạo. Nhược điểm của phương pháp này là số lượng lớp có thể bùng nổ và nó không thể dự đoán một tổ hợp nhãn chưa từng xuất hiện trong tập huấn luyện.
        *   **Sơ đồ minh họa:**
            

---