### **TỔNG HỢP LÝ THUYẾT ÔN TẬP MÔN KHAI PHÁ DỮ LIỆU**

### **Chương 1: Tổng quan về Khai phá dữ liệu**

1.  **Khái niệm Khai phá dữ liệu (Data Mining):**
    *   Là quá trình nghiên cứu nhằm **thu thập, làm sạch, xử lý, phân tích** dữ liệu để khám phá ra các **thông tin, tri thức ẩn, có giá trị** mà không thể tìm thấy bằng các phương pháp thông thường.
    *   Đây là một bước quan trọng trong quy trình lớn hơn gọi là **Khám phá tri thức trong cơ sở dữ liệu (KDD - Knowledge Discovery in Databases)**.

2.  **Các bài toán (thuật toán) chính:**
    *   **Phân loại (Classification):** Xây dựng mô hình để gán nhãn cho các đối tượng dữ liệu mới dựa trên một tập dữ liệu đã được gán nhãn từ trước. *Ví dụ: Phân loại email là Spam hay không Spam.*
    *   **Gom cụm (Clustering):** Tự động nhóm các đối tượng dữ liệu có tính chất tương tự nhau vào cùng một cụm mà không cần biết trước nhãn. *Ví dụ: Phân khúc khách hàng thành các nhóm "chi tiêu cao", "tiết kiệm".*
    *   **Luật kết hợp (Association Rule Mining):** Tìm ra các mối liên hệ, sự phụ thuộc giữa các đối tượng trong dữ liệu. *Ví dụ: Tìm ra rằng "khách hàng mua Bia thường mua kèm Khoai tây chiên".*
    *   **Phát hiện bất thường (Outlier/Anomaly Detection):** Xác định các điểm dữ liệu khác biệt đáng kể so với phần còn lại. *Ví dụ: Phát hiện giao dịch thẻ tín dụng gian lận.*

3.  **Các thuật ngữ quan trọng:**
    *   **Overfitting (Quá khớp):** Xảy ra khi mô hình học "quá kỹ" trên dữ liệu huấn luyện, bao gồm cả nhiễu. Kết quả là mô hình hoạt động rất tốt trên dữ liệu đã học nhưng dự đoán rất kém trên dữ liệu mới.
    *   **Underfitting (Dưới khớp):** Xảy ra khi mô hình quá đơn giản, không nắm bắt được các quy luật cơ bản trong dữ liệu, dẫn đến hiệu suất kém trên cả dữ liệu huấn luyện và dữ liệu mới.
    *   **Độ hỗ trợ (Support):** Đo lường mức độ phổ biến của một tập hợp các mục (itemset) trong toàn bộ dữ liệu.
    *   **Độ tin cậy (Confidence):** Đo lường mức độ chắc chắn của một luật kết hợp. Ví dụ: `Confidence(A → B)` cho biết xác suất mua B khi đã mua A.

4.  **Ứng dụng thực tế:**
    *   **Kinh doanh:** Phân tích giỏ hàng, đề xuất sản phẩm, phân khúc khách hàng, dự đoán khách hàng rời bỏ.
    *   **Tài chính:** Phát hiện gian lận thẻ tín dụng, đánh giá rủi ro tín dụng.
    *   **Y tế:** Chẩn đoán bệnh, phân tích gen, dự đoán dịch bệnh.
    *   **Web:** Cá nhân hóa nội dung, phân tích hành vi người dùng.

---

### **Chương 2: Tiền xử lý dữ liệu**

1.  **Tầm quan trọng:**
    *   Dữ liệu trong thực tế thường **bẩn**: thiếu, nhiễu, không nhất quán.
    *   Nguyên tắc vàng: **"Garbage In, Garbage Out!"** (Dữ liệu rác đầu vào sẽ cho ra kết quả rác).
    *   Tiền xử lý dữ liệu giúp cải thiện chất lượng dữ liệu, từ đó nâng cao hiệu suất và độ chính xác của mô hình. Đây là bước chiếm nhiều thời gian nhất (60-80%) trong một dự án KPDL.

2.  **Các bước tiền xử lý chính:**
    *   **Làm sạch dữ liệu (Data Cleaning):**
        *   **Xử lý dữ liệu thiếu (Missing Data):**
            *   *Cách 1: Xóa bỏ:* Xóa hàng hoặc cột có dữ liệu thiếu (chỉ nên dùng khi tỷ lệ thiếu rất nhỏ).
            *   *Cách 2: Điền giá trị (Imputation):* Điền bằng các giá trị thống kê như `Mean` (cho dữ liệu số phân phối đối xứng), `Median` (cho dữ liệu số có outlier), hoặc `Mode` (cho dữ liệu hạng mục).
        *   **Xử lý dữ liệu nhiễu (Noisy Data):** Phát hiện và xử lý các giá trị ngoại lai (outliers) hoặc sai sót bằng các phương pháp như Binning (chia giỏ) hoặc dùng các thuật toán gom cụm.
    *   **Chuẩn hóa dữ liệu (Data Normalization/Scaling):**
        *   *Mục đích:* Đưa các thuộc tính có thang đo khác nhau (ví dụ: Tuổi [0-100] và Thu nhập [10M-1B]) về cùng một thang đo chung để tránh thuộc tính có thang đo lớn lấn át thuộc tính có thang đo nhỏ.
        *   *Phương pháp phổ biến:*
            *   **Min-Max Normalization:** Đưa giá trị về một khoảng xác định, thường là `[0, 1]`. Công thức: `v' = (v - min) / (max - min)`
            *   **Z-score Standardization:** Biến đổi dữ liệu sao cho có `mean = 0` và `standard deviation = 1`. Công thức: `v' = (v - μ) / σ`
    *   **Rời rạc hóa (Discretization):**
        *   *Mục đích:* Chuyển đổi dữ liệu số liên tục (như Tuổi) thành dữ liệu hạng mục (như "Thanh niên", "Trung niên", "Cao tuổi").
        *   *Phương pháp:*
            *   **Equal-Width Binning (Chia theo chiều rộng):** Chia thành các khoảng có chiều rộng bằng nhau. Rất nhạy cảm với outlier.
            *   **Equal-Frequency Binning (Chia theo tần suất):** Chia thành các khoảng sao cho mỗi khoảng có số lượng phần tử bằng nhau.
    *   **Giảm chiều dữ liệu (Dimensionality Reduction):**
        *   *Mục đích:* Giảm số lượng thuộc tính (cột) để giảm độ phức tạp tính toán, tránh "lời nguyền số chiều" (curse of dimensionality) và loại bỏ các thuộc tính không liên quan.
        *   *Phương pháp:*
            *   **Feature Selection (Lựa chọn đặc trưng):** Chọn ra một tập con các thuộc tính quan trọng nhất từ tập ban đầu.
            *   **Feature Extraction (Trích xuất đặc trưng):** Tạo ra các thuộc tính mới từ sự kết hợp của các thuộc tính cũ (ví dụ: PCA).

---

### **Chương 3: Khai thác các mẫu phổ biến (Luật kết hợp)**

1.  **Các khái niệm cốt lõi:**
    *   **Itemset (Tập mục):** Một tập hợp chứa một hoặc nhiều mục (item). Ví dụ: `{Sữa, Bánh mì}`.
    *   **Support (Độ hỗ trợ):** Tỷ lệ giao dịch chứa một itemset nào đó.
        *   **Công thức:** `Support(X) = (Số giao dịch chứa X) / (Tổng số giao dịch)`
    *   **Frequent Itemset (Tập mục phổ biến):** Một itemset có `Support ≥ min_sup` (ngưỡng hỗ trợ tối thiểu).
    *   **Association Rule (Luật kết hợp):** Một biểu thức có dạng `X → Y`, trong đó X và Y là các itemset không giao nhau.
    *   **Confidence (Độ tin cậy):** Đo lường xác suất xảy ra Y khi X đã xảy ra.
        *   **Công thức:** `Confidence(X → Y) = Support(X U Y) / Support(X)`

2.  **Thuật toán Apriori:**
    *   **Nguyên lý Apriori:** Nếu một itemset là phổ biến, thì tất cả các tập con của nó cũng phải phổ biến. Ngược lại, nếu một itemset không phổ biến, thì tất cả các tập cha chứa nó cũng không phổ biến (đây là cơ sở cho bước cắt tỉa).
    *   **Quy trình thuật toán:** Là một quy trình lặp theo từng mức:
        1.  **Bước 1 (k=1):** Quét CSDL, đếm support cho từng item để tìm ra tập phổ biến 1-item (L1).
        2.  **Lặp lại cho k = 2, 3, ...:**
            *   **a. Sinh ứng viên (Join Step):** Từ tập phổ biến L(k-1), tạo ra tập ứng viên Ck.
            *   **b. Cắt tỉa (Prune Step):** Loại bỏ những ứng viên trong Ck có tập con (k-1)-item không thuộc L(k-1).
            *   **c. Đếm Support:** Quét CSDL để đếm support cho các ứng viên còn lại trong Ck.
            *   **d. Chọn tập phổ biến:** Lọc các ứng viên trong Ck có support ≥ min_sup để tạo ra Lk.
        3.  **Dừng lại** khi Lk rỗng hoặc không thể sinh thêm ứng viên.

---

### **Chương 4: Phân loại dữ liệu (Classification)**

1.  **Thuật toán ID3 (Cây quyết định):**
    *   **Ý tưởng:** Xây dựng một cấu trúc dạng cây để ra quyết định. Mỗi nút trong (internal node) đại diện cho một thuộc tính, mỗi nhánh (branch) đại diện cho một giá trị của thuộc tính, và mỗi nút lá (leaf node) đại diện cho một lớp quyết định.
    *   **Tiêu chí chọn thuộc tính (Nút gốc):** Thuật toán chọn thuộc tính tốt nhất để phân chia dữ liệu tại mỗi nút dựa trên việc tối đa hóa **Information Gain (Lợi ích thông tin)**.
    *   **Các công thức cần nhớ:**
        *   **Entropy (Đo độ hỗn loạn/bất thuần):**
            `Entropy(S) = - Σ pi * log2(pi)`
            Trong đó `pi` là xác suất của lớp thứ `i` trong tập S. Entropy = 0 nghĩa là tập dữ liệu hoàn toàn "thuần khiết" (chỉ chứa 1 lớp).
        *   **Information Gain (Lợi ích thông tin):**
            `Gain(S, A) = Entropy(S) - Σ (|Sv| / |S|) * Entropy(Sv)`
            Trong đó `A` là thuộc tính được xem xét, `Sv` là tập con của S tương ứng với giá trị `v` của thuộc tính A. Gain càng cao, thuộc tính đó càng tốt để phân chia.

2.  **Thuật toán Naive Bayes:**
    *   **Ý tưởng:** Là một thuật toán phân loại dựa trên xác suất, sử dụng **Định lý Bayes**.
    *   **Định lý Bayes (dạng phân loại):**
        `P(C | X) ∝ P(C) * P(X | C)`
        Trong đó:
        *   `P(C | X)`: Xác suất lớp C đúng khi biết mẫu dữ liệu X (posterior).
        *   `P(C)`: Xác suất của lớp C (prior).
        *   `P(X | C)`: Xác suất xuất hiện mẫu X trong lớp C (likelihood).
    *   **Giả định "Ngây thơ" (Naive Assumption):** Thuật toán giả định rằng các thuộc tính (features) là **độc lập có điều kiện** với nhau khi biết lớp. Điều này cho phép đơn giản hóa việc tính toán:
        `P(X | C) = Π P(xi | C)` (Tích các xác suất của từng thuộc tính)
    *   **Quy trình dự đoán:**
        1.  Tính `Score(C) = P(C) * Π P(xi | C)` cho tất cả các lớp.
        2.  Chọn lớp có `Score(C)` cao nhất làm kết quả dự đoán.
    *   **Làm mịn Laplace (Laplacian Smoothing):** Dùng để xử lý trường hợp một giá trị thuộc tính chưa từng xuất hiện trong một lớp nào đó trong dữ liệu huấn luyện (xác suất bằng 0). Công thức: `P(xi=v | C) = (count(v, C) + α) / (count(C) + α * |V_i|)` (thường α=1).

---

### **Chương 5: Gom cụm dữ liệu (Clustering)**

1.  **Thuật toán K-Means:**
    *   **Ý tưởng:** Phân chia N điểm dữ liệu vào K cụm sao cho tổng bình phương khoảng cách từ mỗi điểm đến tâm cụm của nó là nhỏ nhất (Minimize Sum of Squared Errors - SSE).
    *   **Khoảng cách thường dùng:** **Euclidean**. `Distance = sqrt( (x2-x1)² + (y2-y1)² )`.
    *   **Quy trình thuật toán:**
        1.  **Khởi tạo (Initialization):** Chọn K điểm dữ liệu ngẫu nhiên làm các tâm cụm (centroids) ban đầu.
        2.  **Lặp lại cho đến khi hội tụ:**
            *   **a. Bước gán cụm (Assignment Step):** Với mỗi điểm dữ liệu, tính khoảng cách từ nó đến K tâm cụm. Gán điểm dữ liệu đó vào cụm có tâm gần nhất.
            *   **b. Bước cập nhật (Update Step):** Tính toán lại vị trí của mỗi tâm cụm bằng cách lấy trung bình cộng tọa độ của tất cả các điểm đã được gán vào cụm đó.
        3.  **Dừng lại** khi các tâm cụm không còn thay đổi đáng kể sau bước cập nhật (hoặc sau một số vòng lặp nhất định).

### **Gợi ý cách học và làm bài**

*   **Học thuộc công thức:** Nắm vững các công thức tính `Support`, `Confidence`, `Entropy`, `Information Gain`, `Xác suất Naive Bayes`, và `Khoảng cách Euclidean`.
*   **Hiểu quy trình:** Ghi nhớ các bước thực hiện của từng thuật toán (Apriori, ID3, K-Means). Vẽ sơ đồ quy trình ra giấy để dễ nhớ.
*   **Trình bày rõ ràng:** Khi làm bài tập, hãy trình bày từng bước một cách mạch lạc (ví dụ: Vòng 1, C1, Đếm support, L1...).
*   **Kiểm tra tính toán:** Được dùng máy tính nên hãy tận dụng để tính toán chính xác. Nếu tính nhầm nhưng cách làm và công thức đúng, bạn vẫn có thể được điểm thành phần. Chúc bạn ôn tập tốt và đạt kết quả cao