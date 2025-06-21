# HỌC SÂU VÀ MẠNG NƠ-RON (DEEP LEARNING AND NEURAL NETWORKS)

---

Một giá trị trung bình là một giá trị điển hình, hoặc đại diện, của một tập dữ liệu. Vì các giá trị điển hình như vậy có xu hướng nằm ở trung tâm của một tập dữ liệu được sắp xếp theo độ lớn, các giá trị trung bình còn được gọi là các thước đo xu hướng trung tâm. Nhiều loại thước đo xu hướng trung tâm có thể được định nghĩa, chẳng hạn như trung bình cộng, trung vị, mode, trung bình nhân, trung bình điều hòa, trung bình bình phương (root mean square), trung bình cắt bỏ (trimmed mean), trung bình winsorized (winsorized mean), tứ phân vị, thập phân vị, và bách phân vị. Mỗi loại có những ưu điểm và nhược điểm, tùy thuộc vào dữ liệu và mục đích dự kiến.

**Định nghĩa (Trung bình cộng - The Arithmetic Mean):** Trung bình cộng, hay đơn giản là trung bình, của một tập hợp $N$ số $v_1, v_2, \dots, v_N$ được ký hiệu là $\bar{v}$ và được định nghĩa là [4]:
$$ \bar{v} = \frac{v_1 + v_2 + \dots + v_N}{N} = \frac{\sum_{j=1}^{N} v_j}{N} \quad (1.4) $$

Ví dụ, trung bình cộng của các số trong tập hợp
$$ h = \{133, 136, 149, 133, 123, 121, 140, 139, 117, 136, 108, 126, \\ 104, 116, 147, 140, 148, 150, 122, 135, 146, 133, 144, 117, 124, 135, \\ 117, 120, 121, 110, 124, 103, 137, 101, 119, 104, 113, 139, 133\} \quad (1.5) $$
là $\bar{v} = 127$. Trung bình hữu ích vì nó cho thấy "tâm khối lượng" tồn tại ở đâu đối với một tập hợp các giá trị quan sát được.

Nếu các số $v_1, v_2, \dots, v_K$ xuất hiện với tần số $f_1, f_2, \dots, f_K$ (dữ liệu nhóm), thì trung bình cộng là [5]
$$ \bar{v} = \frac{f_1 v_1 + f_2 v_2 + \dots + f_K v_K}{f_1 + f_2 + \dots + f_K} = \frac{\sum_{j=1}^{K} f_j v_j}{\sum_{j=1}^{K} f_j} = \frac{\sum_{j=1}^{K} f_j v_j}{N} \quad (1.6) $$
trong đó $\sum_{j=1}^{K} f_j = N$ là tổng tần số. Ví dụ, nếu các số 5, 8, 6, và 2 xuất hiện với tần số lần lượt là 3, 2, 4, và 1, thì trung bình cộng là $\bar{v} = \frac{(5)(3) + (8)(2) + (6)(4) + (2)(1)}{3+2+4+1} = 5.7$.

---

**Trung vị (Median)**

**Định nghĩa (Trung vị - The Median):** Trung vị của một tập hợp các số được sắp xếp theo thứ tự độ lớn (nghĩa là, trong một mảng) là giá trị ở giữa hoặc trung bình cộng của hai giá trị ở giữa. Đôi khi, trung vị được ký hiệu là $\tilde{v}$.
Nói một cách dễ hiểu, hãy sắp xếp các giá trị của một tập dữ liệu kích thước $n$ từ nhỏ nhất đến lớn nhất. Nếu $n$ lẻ, trung vị mẫu là giá trị ở vị trí $(n+1)/2$; nếu $n$ chẵn, đó là trung bình của các giá trị ở vị trí $n/2$ và $n/2 + 1$ (xem Hình 1.4 - *Hình không được cung cấp trong tài liệu này*). Ví dụ, tập hợp các số 2, 5, 6, 9, và 11 có trung vị là 6, (xếp hạng $n=5$ phép đo từ nhỏ nhất đến lớn nhất: 2, 5, 6, 9, 11), tuy nhiên, tập hợp các số 2, 9, 11, 5, 6 và 27 có trung vị là $\frac{1}{2}(6+9) = 7.5$, (xếp hạng các phép đo từ nhỏ nhất đến lớn nhất: 2, 5, 6, 9, 11, 27).

---

**Mode**

**Định nghĩa (Mode):** Mode của một tập hợp các số là giá trị xuất hiện với tần số lớn nhất.
Ví dụ, tập hợp các số 2, 4, 7, 8, 8, 8, 10, 10, 11, 12 và 18 có mode là 8, tuy nhiên, tập hợp các số 2, 3, 8, 11, 12, 14, và 16 không có mode. Tập hợp 1, 2, 3, 3, 3, 5, 5, 8, 8, và 9 có hai mode, 3 và 8.

**Định nghĩa (Quan hệ thực nghiệm - The Empirical Relation):** Đối với các đường cong tần số đơn mode bị lệch vừa phải (không đối xứng), chúng ta có quan hệ thực nghiệm [5]:
$$ \text{Trung bình} - \text{mode} = 3(\text{trung bình} - \text{trung vị}). \quad (1.8) $$

**Trung bình nhân (Geometric Mean)**

Trung bình nhân là một giá trị trung bình hoặc trung bình sử dụng tích của các giá trị của một tập hợp hữu hạn các số thực để chỉ ra một xu hướng trung tâm (trái ngược với trung bình cộng, sử dụng tổng của các giá trị).
**Định nghĩa (Trung bình nhân G - The Geometric Mean G):** Trung bình nhân $G$ của một tập hợp $N$ số dương $v_1, v_2, \dots, v_N$ là căn bậc $N$ của tích các số [7]:
$$ G = \sqrt[N]{v_1 v_2 v_3 \dots v_N}. \quad (1.9) $$

---

**Trung bình điều hòa (Harmonic Mean)**

**Định nghĩa (Trung bình điều hòa H - The Harmonic Mean H):** Trung bình điều hòa $H$ của một tập hợp $N$ số $v_1, v_2, \dots, v_N$ là nghịch đảo của trung bình cộng các nghịch đảo của các số [7]:
$$ H = \frac{1}{\frac{1}{N} \sum_{j=1}^{N} \frac{1}{v_j}} = \frac{N}{\sum_{j=1}^{N} \frac{1}{v_j}} \quad (1.11) $$
Ví dụ, trung bình điều hòa của các số 2, 4, và 8 là $H = \frac{3}{\frac{1}{2} + \frac{1}{4} + \frac{1}{8}} = \frac{3}{\frac{7}{8}} = \frac{24}{7} \approx 3.43$.

**Trung bình bình phương (Root Mean Square)**

**Định nghĩa (Trung bình bình phương (RMS) hay Trung bình bậc hai - The Root Mean Square (RMS) or Quadratic Mean):** RMS được tính bằng cách lấy căn bậc hai của trung bình các bình phương của một tập hợp các giá trị. RMS của một tập hợp các số $v_1, v_2, \dots, v_N$ được định nghĩa bởi [61]:
$$ \text{RMS} = \sqrt{\overline{v^2}} = \sqrt{\frac{\sum_{j=1}^{N} v_j^2}{N}} \quad (1.12) $$
Ví dụ, RMS của tập hợp 1, 3, 4, 5, và 7 là $\text{RMS} = \sqrt{\frac{1^2+3^2+4^2+5^2+7^2}{5}} = \sqrt{\frac{1+9+16+25+49}{5}} = \sqrt{\frac{100}{5}} = \sqrt{20} \approx 4.47$.

---

**Độ lệch chuẩn (Standard Deviation)**

Ngược lại với khoảng (range), độ lệch chuẩn xem xét tất cả các quan sát. Nói một cách gần đúng, độ lệch chuẩn đo lường sự biến thiên bằng cách chỉ ra trung bình các quan sát cách xa trung bình bao nhiêu. Đối với một tập dữ liệu có sự biến thiên lớn, các quan sát, trung bình, sẽ cách xa trung bình; vì vậy độ lệch chuẩn sẽ lớn. Đối với một tập dữ liệu có sự biến thiên nhỏ, các quan sát, trung bình, sẽ gần với trung bình; vì vậy độ lệch chuẩn sẽ nhỏ.

**Định nghĩa (Độ lệch chuẩn của một Tổng thể - The Standard Deviation of a Population):** Độ lệch chuẩn của một tập hợp $N$ số $v_1, v_2, \dots, v_N$ được ký hiệu là $S$ và được định nghĩa bởi [5]:
$$ S = \sqrt{\frac{\sum_{j=1}^{N} (v_j - \bar{v})^2}{N}} \quad (1.16) $$
Do đó $S$ đôi khi được gọi là độ lệch trung bình bình phương (root-mean-square deviation) (xem Hình 1.10 - *Hình không được cung cấp trong tài liệu này*).
Đôi khi độ lệch chuẩn của một mẫu dữ liệu được định nghĩa với $N-1$ thay thế $N$ trong mẫu số của biểu thức trong (1.16) vì giá trị kết quả thể hiện một ước tính tốt hơn về độ lệch chuẩn của một tổng thể mà từ đó mẫu được lấy. Đối với các giá trị lớn của $N$ (chắc chắn là $N > 30$), thực tế không có sự khác biệt giữa hai định nghĩa.

**Định nghĩa (Độ lệch chuẩn cho Mẫu - The Standard Deviation for Sample):** Độ lệch chuẩn của một tập hợp $N$ số $v_1, v_2, \dots, v_N$ được ký hiệu là $S$ và được định nghĩa bởi [10,12]:
$$ S = \sqrt{\frac{\sum_{j=1}^{N} (v_j - \bar{v})^2}{N-1}} \quad (1.17) $$
Do đó $S$ đôi khi được gọi là độ lệch trung bình bình phương.

---

**Phương sai (Variance)**

Phương sai là một thước đo độ phân tán của các điểm dữ liệu xung quanh giá trị trung bình. Phương sai là một công cụ hữu ích để hiểu và so sánh các tập dữ liệu. Ví dụ, nếu bạn có hai tập dữ liệu có cùng giá trị trung bình, nhưng phương sai khác nhau, bạn có thể nói rằng các điểm dữ liệu trong một tập dữ liệu phân tán rộng hơn các điểm dữ liệu trong tập dữ liệu kia.

**Định nghĩa (Phương sai - The Variance):** Phương sai của một tập dữ liệu được định nghĩa là bình phương của độ lệch chuẩn và do đó được cho bởi $S^2$ trong (1.17).

Ví dụ, phương sai của tập dữ liệu 3, 4, 6, 7, 10 là 6 (trung bình là $(3+4+6+7+10)/5 = 6$ và $S^2 = ((-3)^2 + (-2)^2 + (0)^2 + (1)^2 + (4)^2)/5 = (9+4+0+1+16)/5 = 30/5 = 6$).
Khi cần phân biệt độ lệch chuẩn của một tổng thể với độ lệch chuẩn của một mẫu rút ra từ tổng thể đó, chúng ta thường sử dụng ký hiệu $S$ cho mẫu và $\sigma$ cho tổng thể. Do đó $S^2$ và $\sigma^2$ sẽ lần lượt biểu thị phương sai mẫu và phương sai tổng thể.

**Định lý 1.2:** Độ lệch chuẩn của một tập hợp $N$ số $v_1, v_2, \dots, v_N$ được định nghĩa bởi [6]:
$$ S = \sqrt{\frac{\sum_{j=1}^{N} v_j^2}{N} - \left(\frac{\sum_{j=1}^{N} v_j}{N}\right)^2} = \sqrt{\overline{v^2} - \bar{v}^2}, \quad (1.18) $$
trong đó $\overline{v^2}$ biểu thị trung bình của các bình phương của các giá trị khác nhau của $v$, trong khi $\bar{v}^2$ biểu thị bình phương của trung bình của các giá trị khác nhau của $v$.

---

Nếu một thí nghiệm được lặp lại $n$ lần và một sự kiện $A$ được quan sát $f$ lần, trong đó $f$ là tần số, thì, theo khái niệm tần số tương đối của xác suất:
$$ P(A) = \frac{f}{n} = \frac{\text{Tần số của A}}{\text{Kích thước mẫu}} \quad (1.46) $$

**Các tiên đề của Xác suất (Axioms of Probability)**

Các tiên đề là các nguyên tắc cơ bản mà lý thuyết xác suất được xây dựng dựa trên đó. Phương pháp tiên đề định nghĩa các thuộc tính mà xác suất phải thỏa mãn để được coi là các thước đo hợp lệ của sự không chắc chắn. Các tiên đề Kolmogorov được giới thiệu bởi nhà toán học người Nga Andrey Kolmogorov vào năm 1933.

**Định nghĩa (Các tiên đề Kolmogorov, Các tiên đề của Xác suất - Kolmogorov Axioms, Axioms of Probability):** Xác suất là một số được gán cho mỗi thành viên của một tập hợp các sự kiện từ một thí nghiệm ngẫu nhiên thỏa mãn các thuộc tính sau:
(1) $P(S) = 1$ trong đó $S$ là không gian mẫu
(2) $0 \le P(E) \le 1$ cho bất kỳ sự kiện $E$ nào
(3) Đối với hai sự kiện bất kỳ $E_1$ và $E_2$ với $E_1 \cap E_2 = \emptyset$
$$ P(E_1 \cup E_2) = P(E_1) + P(E_2). \quad (1.47) $$

**Nhận xét:**
và đối với bất kỳ sự kiện $E$ nào,
$$ P(\emptyset) = 0, \quad (1.48) $$
$$ P(E') = 1 - P(E). \quad (1.49) $$

---

**Ví dụ 1.7**
Một đồng xu được tung hai lần. Xác suất để có ít nhất một mặt ngửa là bao nhiêu?
**Giải pháp**
Không gian mẫu cho thí nghiệm này là
$$ S = \{HH, HT, TH, TT\}. $$
Nếu đồng xu cân bằng, mỗi kết quả này đều có khả năng xảy ra như nhau. Do đó, chúng ta gán xác suất $\omega$ cho mỗi điểm mẫu. Khi đó $4\omega = 1$, hay $\omega = 1/4$. Nếu $A$ biểu thị sự kiện có ít nhất một mặt ngửa xảy ra, thì
$$ A = \{HH, HT, TH\} \text{ và } P(A) = \frac{1}{4} + \frac{1}{4} + \frac{1}{4} = \frac{3}{4}. $$
Do đó, nếu một thí nghiệm có thể dẫn đến bất kỳ một trong $N$ kết quả khác nhau có khả năng như nhau, và nếu chính xác $n$ trong số các kết quả này tương ứng với sự kiện $A$, thì xác suất của sự kiện $A$ là
$$ P(A) = \frac{n}{N} \quad (1.50) $$

**Hợp của các Sự kiện và Quy tắc Cộng (Unions of Events and Addition Rules)**
Các sự kiện kết hợp được tạo ra bằng cách áp dụng các phép toán tập hợp cơ bản cho các sự kiện riêng lẻ. Hợp của các sự kiện, chẳng hạn như $A \cup B$; giao của các sự kiện, chẳng hạn như $A \cap B$; và phần bù của các sự kiện, chẳng hạn như $A^c$—là mối quan tâm chung. Xác suất của một sự kiện kết hợp thường có thể được xác định từ xác suất của các sự kiện riêng lẻ tạo nên nó. Các phép toán tập hợp cơ bản cũng đôi khi hữu ích trong việc xác định xác suất của một sự kiện kết hợp.

**Định lý 1.5 (Xác suất của một Hợp - Probability of a Union):**
$$ P(A \cup B) = P(A) + P(B) - P(A \cap B). \quad (1.51) $$
Nếu $A$ và $B$ là các sự kiện xung khắc nhau (mutually exclusive events), ($A \cap B = \emptyset$ và $P(A \cap B) = 0$), thì
$$ P(A \cup B) = P(A) + P(B). \quad (1.52) $$
Đối với ba sự kiện, chúng ta có
$$ P(A \cup B \cup C) = P(A) + P(B) + P(C) - P(A \cap B) - P(A \cap C) - P(B \cap C) + P(A \cap B \cap C). \quad (1.53) $$
Hơn nữa, một tập hợp các sự kiện, $E_1, E_2, \dots, E_k$, được cho là xung khắc nhau nếu đối với tất cả các cặp,
$$ E_i \cap E_j = \emptyset. \quad (1.54) $$
Đối với một tập hợp các sự kiện xung khắc nhau,
$$ P(E_1 \cup E_2 \cup \dots \cup E_k) = P(E_1) + P(E_2) + \dots + P(E_k). \quad (1.55) $$

---

**1.8 Xác suất có điều kiện (Conditional Probability)**

Một khái niệm rất quan trọng trong lý thuyết xác suất là xác suất có điều kiện. Trong một số ứng dụng, người thực hành quan tâm đến xác suất cấu trúc dữ liệu theo những hạn chế nhất định. Xác suất của một sự kiện $B$ với kiến thức rằng kết quả sẽ là sự kiện $A$ được ký hiệu là $P(B|A)$ và được gọi là xác suất có điều kiện của $B$ khi biết $A$.

**Định nghĩa (Xác suất có điều kiện - Conditional Probability):** Xác suất có điều kiện của một sự kiện $B$ khi biết một sự kiện $A$ đã xảy ra, $P(A) > 0$, là
$$ P(B|A) = \frac{P(A \cap B)}{P(A)}. \quad (1.56) $$
Định nghĩa này có thể được hiểu trong một trường hợp đặc biệt trong đó tất cả các kết quả của một thí nghiệm ngẫu nhiên đều có khả năng như nhau. Nếu có $N$ kết quả tổng cộng,
Thì,
$$ P(A) = (\text{số kết quả trong } A)/N. \quad (1.57) $$
$$ P(A \cap B) = (\text{số kết quả trong } A \cap B)/N. \quad (1.58) $$
Do đó,
$$ \frac{P(A \cap B)}{P(A)} = \frac{\text{số kết quả trong } A \cap B}{\text{số kết quả trong } A}. \quad (1.59) $$
Do đó, $P(B|A)$ có thể được hiểu là tần số tương đối của sự kiện $B$ trong số các thử nghiệm tạo ra một kết quả trong sự kiện $A$.

**Định nghĩa (Quy tắc Nhân [15] - Multiplication Rule [15]):**
$$ P(A \cap B) = P(B|A)P(A) = P(A|B)P(B). \quad (1.60) $$

---

**Định nghĩa (Quy tắc Nhân [15] - Multiplication Rule [15]):**
$$ P(A \cap B) = P(B|A)P(A) = P(A|B)P(B). \quad (1.60) $$
Do đó, xác suất để cả $A$ và $B$ xảy ra bằng xác suất $A$ xảy ra nhân với xác suất có điều kiện $B$ xảy ra, khi biết $A$ xảy ra.

Đối với bất kỳ sự kiện $B$ nào, chúng ta có thể viết $B$ là hợp của phần của $B$ trong $A$ và phần của $B$ trong $A'$. Nghĩa là,
$$ B = (A \cap B) \cup (A' \cap B). \quad (1.61) $$
Kết quả này được hiển thị trong sơ đồ Venn trong Hình 1.12 (*Hình không được cung cấp trong tài liệu này*). Vì $A$ và $A'$ xung khắc nhau, $A \cap B$ và $A' \cap B$ cũng xung khắc nhau.
Do đó, quy tắc xác suất toàn phần sau đây được thu được.

**Định nghĩa (Quy tắc Xác suất Toàn phần [15] - Total Probability Rule [15]):** Đối với bất kỳ sự kiện $A$ và $B$ nào,
$$ P(B) = P(B \cap A) + P(B \cap A') $$
$$ = P(B|A)P(A) + P(B|A')P(A'). \quad (1.62) $$
Hơn nữa, giả sử $E_1, E_2, \dots, E_k$ là các tập hợp xung khắc và đầy đủ nhau. Khi đó
$$ P(B) = P(B \cap E_1) + P(B \cap E_2) + \dots + P(B \cap E_k) $$
$$ = P(B|E_1)P(E_1) + P(B|E_2)P(E_2) + \dots + P(B|E_k)P(E_k). \quad (1.63) $$

---

**Độc lập (Independence)**

Hai sự kiện được cho là độc lập nếu sự xảy ra (hoặc không xảy ra) của một sự kiện không ảnh hưởng đến xác suất xảy ra của sự kiện kia. Trong trường hợp này, xác suất có điều kiện $P(B|A)$ có thể bằng xác suất $P(B)$, nghĩa là, kiến thức rằng kết quả của thí nghiệm là sự kiện $A$ không ảnh hưởng đến xác suất kết quả là sự kiện $B$. Vì vậy, chúng ta có
$$ P(A \cap B) = P(B|A)P(A) = P(B)P(A), \quad (1.64) $$
và
$$ P(A|B) = \frac{P(A \cap B)}{P(B)} = \frac{P(A)P(B)}{P(B)} = P(A). \quad (1.65) $$
Những kết luận này dẫn đến một định nghĩa quan trọng.

**Định nghĩa (Độc lập, Hai Sự kiện - Independence, Two Events):** Hai sự kiện là độc lập nếu bất kỳ một trong các mệnh đề tương đương sau đây là đúng:
(1) $P(A|B) = P(A)$,
(2) $P(B|A) = P(B)$,
(3) $P(A \cap B) = P(A)P(B)$.

Dễ dàng chỉ ra rằng sự độc lập ngụ ý các kết quả liên quan như
$$ P(A' \cap B') = P(A')P(B'). \quad (1.66) $$

---

**Một số loại Ma trận [32, 35] (Some Types of Matrices [32, 35])**

**Định nghĩa (Ma trận Đơn vị - Identity Matrix):** Ma trận đơn vị kích thước $n$ là ma trận vuông $n \times n$ với các số một trên đường chéo chính và các số không ở các vị trí khác.
$$ I = \begin{pmatrix} 1 & 0 & \dots & 0 \\ 0 & 1 & \dots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \dots & 1 \end{pmatrix}. \quad (2.19) $$

**Định nghĩa (Ma trận Thực - Real Matrix):** Liên hợp phức của ma trận $\mathbf{M}$ được viết là $\mathbf{M}^*$ và các phần tử của $\mathbf{M}^*$ là các liên hợp phức của các phần tử của $\mathbf{M}$, tức là
$$ (\mathbf{M}^*)_{ij} = (\mathbf{M}_{ij})^*. \quad (2.20) $$
Đối với một ma trận thực, tất cả các phần tử đều là thực, và do đó
$$ \mathbf{M} = \mathbf{M}^*, \quad (\mathbf{M})_{ij} = \mathbf{M}_{ij}. \quad (2.21) $$

**Định nghĩa (Ma trận Đối xứng - Symmetric Matrix):** Chuyển vị của ma trận $\mathbf{M}$, ký hiệu là $\mathbf{M}^T$, thu được bằng cách đổi hàng thành cột (hoặc ngược lại). Đối với một ma trận đối xứng
$$ \mathbf{M}^T = \mathbf{M}, \quad \mathbf{M}_{ij} = \mathbf{M}_{ji}. \quad (2.22) $$

**Định nghĩa (Ma trận Phản đối xứng - Skew-Symmetric Matrix):** Ma trận phản đối xứng thỏa mãn
$$ \mathbf{M}^T = -\mathbf{M}, \quad \mathbf{M}_{ij} = -\mathbf{M}_{ji}. \quad (2.23) $$

**Định nghĩa (Ma trận Trực giao - Orthogonal Matrix):** Một ma trận trực giao thỏa mãn
$$ \mathbf{M}\mathbf{M}^T = \mathbf{M}^T\mathbf{M} = \mathbf{I}. \quad (2.24) $$
Điều này dẫn đến đặc tính tương đương: một ma trận $\mathbf{M}$ là trực giao nếu chuyển vị của nó bằng nghịch đảo của nó:
$$ \mathbf{M}^T = \mathbf{M}^{-1}. \quad (2.25) $$

---

**Định nghĩa (Chuyển vị Liên hợp hay Chuyển vị Hermite - Conjugate Transpose or Hermitian Transpose):** Chuyển vị Hermite của một ma trận phức $n \times m$ $\mathbf{M}$ là một ma trận $m \times n$ thu được bằng cách chuyển vị $\mathbf{M}$ và áp dụng liên hợp phức cho mỗi mục nhập.
$$ \mathbf{M}^H = (\mathbf{M}^T)^*. \quad (2.26) $$
Đối với ma trận thực, chuyển vị liên hợp chỉ là chuyển vị, $\mathbf{M}^H = \mathbf{M}^T$.

**Định nghĩa (Ma trận Unita - Unitary Matrix):** Một ma trận vuông phức $\mathbf{M}$ là unita nếu chuyển vị liên hợp $\mathbf{M}^H$ của nó cũng là nghịch đảo của nó, nghĩa là, nếu
$$ \mathbf{M}^H\mathbf{M} = \mathbf{M}\mathbf{M}^H = \mathbf{M}\mathbf{M}^{-1} = \mathbf{I}. \quad (2.27) $$

**Định nghĩa (Ma trận Tam giác Dưới và Tam giác Trên - Lower and Upper Triangular Matrix):** Một ma trận dạng
$$ \begin{pmatrix} l_{11} & 0 & \dots & 0 \\ l_{21} & l_{22} & \dots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ l_{n1} & l_{n2} & \dots & l_{nn} \end{pmatrix} \quad (2.28) $$
được gọi là ma trận tam giác dưới hoặc ma trận tam giác trái, và tương tự một ma trận dạng
$$ \begin{pmatrix} u_{11} & u_{12} & \dots & u_{1n} \\ 0 & u_{22} & \dots & u_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \dots & u_{nn} \end{pmatrix} \quad (2.29) $$
được gọi là ma trận tam giác trên hoặc ma trận tam giác phải. Trong ma trận tam giác dưới, tất cả các phần tử trên đường chéo chính là số không, trong ma trận tam giác trên, tất cả các phần tử dưới đường chéo chính là số không.

---

Các thực thể mà Dirac gọi là "kets" và "bras" lần lượt là các vectơ cột và vectơ hàng. Trong ký hiệu Dirac, "braket", $\langle \cdot | \cdot \rangle$, đề cập đến sự kết hợp của các phần tử "bra" và "ket". Tất nhiên, các phần tử của các vectơ này thường là các số phức. Trong cuốn sách này, để thuận tiện, chúng ta sẽ diễn đạt bằng các vectơ và ma trận của các số thực. Do đó, trong ngôn ngữ ma trận, hai vectơ này liên quan đơn giản bằng cách lấy chuyển vị. Tóm lại, Dirac đề cập đến một "bra," mà ông ký hiệu là $\langle a|$, một "ket," mà ông ký hiệu là $|b\rangle$, và một ma trận vuông $\mathbf{M}$. Chúng ta có thể liên kết các vectơ và ma trận này (trong 3 chiều) như sau:
$$ \langle a| = \mathbf{a}^T = (a_1, a_2, a_3), \quad |b\rangle = \mathbf{b} = \begin{pmatrix} b_1 \\ b_2 \\ b_3 \end{pmatrix}, \quad \mathbf{M} = \begin{pmatrix} M_{11} & M_{12} & M_{13} \\ M_{21} & M_{22} & M_{23} \\ M_{31} & M_{32} & M_{33} \end{pmatrix}. \quad (2.30) $$
Tích của một bra và một ket, ký hiệu là $\langle a | b \rangle$ của Dirac hoặc, phổ biến hơn, bằng cách bỏ một trong các đường thẳng đứng, như $\langle a | b \rangle$, đơn giản là một số được cho bởi tích trong của một vectơ hàng và một vectơ cột theo cách thông thường, tức là,

---

$$ \langle a | b \rangle = \mathbf{a}^T \mathbf{b} = (a_1, a_2, a_3) \begin{pmatrix} b_1 \\ b_2 \\ b_3 \end{pmatrix} = a_1 b_1 + a_2 b_2 + a_3 b_3 = \sum_{i=1}^3 a_i b_i. \quad (2.31) $$
Chúng ta cũng có thể hình thành tích của một ket nhân một bra, cho ra một ma trận vuông, như được hiển thị dưới đây,
$$ |b\rangle \langle a| = \mathbf{b} \mathbf{a}^T = \begin{pmatrix} b_1 \\ b_2 \\ b_3 \end{pmatrix} (a_1, a_2, a_3) = \begin{pmatrix} b_1 a_1 & b_1 a_2 & b_1 a_3 \\ b_2 a_1 & b_2 a_2 & b_2 a_3 \\ b_3 a_1 & b_3 a_2 & b_3 a_3 \end{pmatrix}. \quad (2.32) $$
Tích của một ma trận vuông nhân một ket tương ứng với tích của một ma trận vuông nhân một vectơ cột, tạo ra một vectơ cột khác (nghĩa là, một ket). Về mặt toán học, nếu chúng ta có một ma trận vuông $\mathbf{M}$ kích thước $n \times n$ và một vectơ ket $|b\rangle$ kích thước $n \times 1$, tích $\mathbf{M}|b\rangle = \mathbf{M}\mathbf{b}$ là một vectơ cột khác (ket) kích thước $n \times 1$. Phép nhân được thực hiện bằng cách lấy tích vô hướng của mỗi hàng của ma trận $\mathbf{M}$ với vectơ cột $|b\rangle$ (nghĩa là, sử dụng phép nhân hàng-cột hoặc tích trong của các hàng với cột). Mỗi phần tử của vectơ kết quả thu được bằng cách nhân các phần tử tương ứng của hàng và vectơ cột và cộng các tích lại.
Trong ký hiệu tổng quát, chúng ta có
$$ \mathbf{M}|b\rangle = \mathbf{M}\mathbf{b} = \begin{pmatrix} M_{11} & M_{12} & M_{13} \\ M_{21} & M_{22} & M_{23} \\ M_{31} & M_{32} & M_{33} \end{pmatrix} \begin{pmatrix} b_1 \\ b_2 \\ b_3 \end{pmatrix} = \begin{pmatrix} M_{11}b_1 + M_{12}b_2 + M_{13}b_3 \\ M_{21}b_1 + M_{22}b_2 + M_{23}b_3 \\ M_{31}b_1 + M_{32}b_2 + M_{33}b_3 \end{pmatrix} = \begin{pmatrix} \sum_{i=1}^3 M_{1i}b_i \\ \sum_{i=1}^3 M_{2i}b_i \\ \sum_{i=1}^3 M_{3i}b_i \end{pmatrix}. \quad (2.33.1) $$
Trong ký hiệu ma trận Dirac (2.33.1) trở thành,
$$ \mathbf{M}|b\rangle = \mathbf{M}\mathbf{b} = \begin{pmatrix} \langle \mathbf{m}^{(1)} | \mathbf{b}^{(1)} \rangle \\ \langle \mathbf{m}^{(2)} | \mathbf{b}^{(1)} \rangle \\ \langle \mathbf{m}^{(3)} | \mathbf{b}^{(1)} \rangle \end{pmatrix} \quad (2.33.2) $$
*(Lưu ý: Ký hiệu (2.33.2) trong OCR hơi khác so với hình ảnh gốc có thể có. Ở đây, $\langle \mathbf{m}^{(i)} |$ là vectơ hàng thứ $i$ của $\mathbf{M}$ và $|\mathbf{b}^{(1)}\rangle$ là vectơ cột $\mathbf{b}$.)*

---

trong đó,
$$ \langle \mathbf{m}^{(1)} | = (M_{11} \quad M_{12} \quad M_{13}), \quad \langle \mathbf{m}^{(2)} | = (M_{21} \quad M_{22} \quad M_{23}), \quad \langle \mathbf{m}^{(3)} | = (M_{31} \quad M_{32} \quad M_{33}), \quad (2.34) $$
$$ |\mathbf{b}^{(1)}\rangle = \begin{pmatrix} b_1 \\ b_2 \\ b_3 \end{pmatrix}. \quad (2.35) $$
Tuy nhiên, chúng ta cũng có phép nhân cột-hàng (tức là, một tổ hợp tuyến tính của các cột sử dụng $b_i$). Trong ký hiệu tổng quát, chúng ta có
$$ \mathbf{M}|b\rangle = \mathbf{M}\mathbf{b} = \begin{pmatrix} M_{11} & M_{12} & M_{13} \\ M_{21} & M_{22} & M_{23} \\ M_{31} & M_{32} & M_{33} \end{pmatrix} \begin{pmatrix} b_1 \\ b_2 \\ b_3 \end{pmatrix} = \begin{pmatrix} M_{11} \\ M_{21} \\ M_{31} \end{pmatrix} b_1 + \begin{pmatrix} M_{12} \\ M_{22} \\ M_{32} \end{pmatrix} b_2 + \begin{pmatrix} M_{13} \\ M_{23} \\ M_{33} \end{pmatrix} b_3 $$
$$ = \begin{pmatrix} M_{11}b_1 + M_{12}b_2 + M_{13}b_3 \\ M_{21}b_1 + M_{22}b_2 + M_{23}b_3 \\ M_{31}b_1 + M_{32}b_2 + M_{33}b_3 \end{pmatrix} = \begin{pmatrix} \sum_{i=1}^3 M_{1i}b_i \\ \sum_{i=1}^3 M_{2i}b_i \\ \sum_{i=1}^3 M_{3i}b_i \end{pmatrix}. \quad (2.36.1) $$
Trong ký hiệu ma trận Dirac (2.36.1) trở thành,

---

$$ \mathbf{M}|b\rangle = \mathbf{M}\mathbf{b} = |\mathbf{m}^{(1)}\rangle \langle \mathbf{b}_0 | (1) \rangle + |\mathbf{m}^{(2)}\rangle \langle \mathbf{b}_0 | (2) \rangle + |\mathbf{m}^{(3)}\rangle \langle \mathbf{b}_0 | (3) \rangle $$
$$ = \sum_{i=1}^3 |\mathbf{m}^{(i)}\rangle \langle \mathbf{b}_0 | i \rangle, \quad (2.36.2) $$
trong đó,
$$ |\mathbf{m}^{(1)}\rangle = \begin{pmatrix} M_{11} \\ M_{21} \\ M_{31} \end{pmatrix}, \quad |\mathbf{m}^{(2)}\rangle = \begin{pmatrix} M_{12} \\ M_{22} \\ M_{32} \end{pmatrix}, \quad |\mathbf{m}^{(3)}\rangle = \begin{pmatrix} M_{13} \\ M_{23} \\ M_{33} \end{pmatrix}. \quad (2.37) $$
$$ \langle \mathbf{b}_0 | (1) \rangle = (b_1), \quad \langle \mathbf{b}_0 | (2) \rangle = (b_2), \quad \langle \mathbf{b}_0 | (3) \rangle = (b_3). \quad (2.38) $$
Do đó, $\mathbf{M}|b\rangle$ là một tổ hợp tuyến tính của các cột của $\mathbf{M}$. Điều này là cơ bản. Tư duy này dẫn chúng ta đến không gian cột của ma trận $\mathbf{M}$ và ý tưởng về hạng của ma trận. Ý tưởng chính là lấy tất cả các tổ hợp của các cột. Tất cả các số thực $b_i$ đều được phép - không gian bao gồm $\mathbf{M}|b\rangle$ cho tất cả các vectơ $|b\rangle$. Bằng cách này, chúng ta nhận được vô số vectơ đầu ra $\mathbf{M}|b\rangle$.

Tích của một bra nhân một ma trận vuông tương ứng với tích của một vectơ hàng nhân một ma trận vuông, lại là một vectơ hàng (tức là, một "bra").
$$ \langle a | \mathbf{M} = \mathbf{a}^T \mathbf{M} = (a_1, a_2, a_3) \begin{pmatrix} M_{11} & M_{12} & M_{13} \\ M_{21} & M_{22} & M_{23} \\ M_{31} & M_{32} & M_{33} \end{pmatrix} $$
$$ = \left( \sum_{i=1}^3 a_i M_{i1}, \sum_{i=1}^3 a_i M_{i2}, \sum_{i=1}^3 a_i M_{i3} \right), \quad (2.39) $$
hoặc

---

$$ \langle a | \mathbf{M} = \mathbf{a}^T \mathbf{M} = (a_1, a_2, a_3) \begin{pmatrix} M_{11} & M_{12} & M_{13} \\ M_{21} & M_{22} & M_{23} \\ M_{31} & M_{32} & M_{33} \end{pmatrix} $$
$$ = a_1 (M_{11} \quad M_{12} \quad M_{13}) + a_2 (M_{21} \quad M_{22} \quad M_{23}) + a_3 (M_{31} \quad M_{32} \quad M_{33}) $$
$$ = (a_1 M_{11} + a_2 M_{21} + a_3 M_{31} \quad a_1 M_{12} + a_2 M_{22} + a_3 M_{32} \quad a_1 M_{13} + a_2 M_{23} + a_3 M_{33}) $$
$$ = \left( \sum_{i=1}^3 a_i M_{i1}, \sum_{i=1}^3 a_i M_{i2}, \sum_{i=1}^3 a_i M_{i3} \right) $$
$$ = \sum_{i=1}^3 \langle a^{(i)} | \mathbf{m}_{(i)} |, \quad (2.40) $$
trong đó
$$ \langle a^{(1)} | = (a_1), \quad \langle a^{(2)} | = (a_2), \quad \langle a^{(3)} | = (a_3). \quad (2.41) $$
$$ |\mathbf{m}_{(i)}\rangle \text{ là hàng thứ i của } \mathbf{M} $$
Do đó, $\langle a | \mathbf{M}$ là một tổ hợp tuyến tính của các hàng của $\mathbf{M}$. Tư duy này dẫn chúng ta đến không gian hàng của ma trận $\mathbf{M}$ và định nghĩa thứ hai về hạng của một ma trận. Ý tưởng chính là lấy tất cả các tổ hợp của các hàng. Tất cả các số thực $a_i$ đều được phép - không gian bao gồm $\langle a | \mathbf{M}$ cho tất cả các vectơ $\langle a |$. Bằng cách này, chúng ta nhận được vô số vectơ đầu ra $\langle a | \mathbf{M}$.

---

**MẠNG NƠ-RON TRUYỀN THẲNG NHIỀU LỚP (MULTILAYER FEED-FORWARD NEURAL NETWORKS)**

Trong bối cảnh phát triển nhanh chóng của AI và học máy [49-70], Mạng Nơ-ron Truyền thẳng (Feed-Forward Neural Networks - FFNNs) nổi bật như những cấu trúc nền tảng, cung cấp sức mạnh cho vô số ứng dụng trong các lĩnh vực khác nhau. Chương này đóng vai trò như một phần giới thiệu toàn diện về hoạt động bên trong của FFNN, đi sâu vào các khái niệm và cơ chế thiết yếu quan trọng để hiểu chức năng và hiệu quả của chúng. Chúng ta sẽ bắt đầu bằng cách xem xét cấu trúc của một FFNN, sau đó là cách chúng được huấn luyện và sử dụng để đưa ra dự đoán. Chúng ta cũng sẽ xem xét sơ lược các hàm mất mát (loss functions) được sử dụng trong các cài đặt khác nhau, các Hàm Kích hoạt (Activation Functions - AFs) được sử dụng trong một nơ-ron, và các loại trình tối ưu hóa (optimizers) khác nhau có thể được sử dụng để huấn luyện.

Quá trình huấn luyện là một giai đoạn quan trọng trong việc phát triển FFNN, cho phép chúng học từ dữ liệu và cải thiện hiệu suất theo thời gian. Quá trình huấn luyện có thể được chia thành hai thành phần chính, mỗi thành phần đóng một vai trò riêng biệt trong quá trình học của mạng (lan truyền tiến và lan truyền ngược).

Chúng ta bắt đầu với việc khám phá lan truyền tiến (forward propagation) trong NN, làm sáng tỏ cách dữ liệu đầu vào đi qua các lớp của mạng để tạo ra các dự đoán đầu ra. Thông qua việc kiểm tra từng bước, người đọc sẽ nắm bắt được các nguyên tắc cơ bản chi phối việc truyền thông tin trong các hệ thống phức tạp này.

Sau đó, sự chú ý chuyển sang các mạng đa lớp dưới dạng đồ thị tính toán, đưa ra những hiểu biết sâu sắc về cấu trúc tổ chức của NN và biểu diễn của chúng dưới dạng các nút và cạnh được kết nối với nhau. Mô tả đồ họa này đặt nền móng cho việc hiểu các quy trình tính toán thúc đẩy hoạt động của NN.

Một khía cạnh then chốt của việc huấn luyện NN là vi phân tự động (automatic differentiation) và các chế độ chính của nó [71-74]. Vi phân tự động minh họa các cơ chế mà qua đó gradient được tính toán một cách hiệu quả, cho phép mạng điều chỉnh và tối ưu hóa các tham số của nó trong quá trình học. Người đọc sẽ có được sự hiểu biết sâu sắc về vai trò của vi phân tự động trong việc tạo điều kiện thuận lợi cho các kỹ thuật tối ưu hóa dựa trên gradient.

---

![alt text](hh3.1.png)

**Hình 3.1.** Các giá trị trước và sau kích hoạt trong một nơ-ron.
*(Mô tả: Hình ảnh cho thấy các đầu vào x1...xn được nhân với trọng số w1...wn, cộng với một bias b, đi qua một hàm tổng (Σ) để tạo ra z (giá trị tiền kích hoạt). Sau đó z đi qua hàm kích hoạt σ để tạo ra đầu ra a (giá trị hậu kích hoạt).)*

**Tính toán tại Đơn vị/Nút/Nơ-ron (Unit/Node/Neuron Computations)**

NN là các mô hình tính toán lấy cảm hứng từ cấu trúc và hoạt động của não người. Chúng bao gồm các đơn vị được kết nối với nhau (còn được gọi là nút hoặc nơ-ron) được tổ chức thành các lớp, xem Hình 3.1 và Hình 3.2. Mỗi nút, hoặc nơ-ron, Hình 3.1, trong một NN là một đơn vị xử lý cơ bản nhận một hoặc nhiều đầu vào, thực hiện các phép toán trên các đầu vào này và tạo ra một đầu ra. Mỗi kết nối giữa các nút có một trọng số liên kết, xác định độ mạnh của kết nối. Ngoài ra, mỗi nút có một thuật ngữ độ lệch (bias term). Các trọng số và độ lệch được điều chỉnh trong quá trình huấn luyện để giảm thiểu sự khác biệt giữa đầu ra dự đoán và đầu ra thực tế.

---

Một nơ-ron đơn lẻ có một vectơ đầu vào $n$-chiều và có một tín hiệu đầu ra đơn. Về mặt toán học, một nơ-ron là một hàm nhận đầu vào là một vectơ $\mathbf{x} \in \mathbb{R}^n$, $\mathbf{x} = |\mathbf{x}\rangle = (x_1, x_2, \dots, x_n)^T$ và tạo ra một đại lượng vô hướng. Một đơn vị được tham số hóa bởi một vectơ trọng số $\mathbf{w} \in \mathbb{R}^n$, $\mathbf{w} = |\mathbf{w}\rangle = (w_1, w_2, \dots, w_n)^T$, trong đó $w_i$ là trọng số được liên kết với đầu vào $x_i$, và một thuật ngữ độ lệch được ký hiệu là $b$, xem Hình 3.1. Các nơ-ron áp dụng một AF, $\sigma$, cho tổng có trọng số của các đầu vào của chúng. Các hoạt động cơ bản của một nơ-ron có thể được biểu diễn bằng toán học như sau:
$$ z = \sum_{i=1}^n w_i x_i + b = \mathbf{w}^T \cdot \mathbf{x} + b = \langle \mathbf{w} | \mathbf{x} \rangle + b, \quad (3.1.1) $$
$$ a = \sigma(z). \quad (3.1.2) $$
Việc chia nhỏ các tính toán của nơ-ron thành hai giá trị riêng biệt được hiển thị trong Hình 3.1. Một nơ-ron thực sự tính toán hai hàm trong nơ-ron, đó là lý do tại sao chúng ta đã kết hợp ký hiệu tổng $\Sigma$ cũng như ký hiệu kích hoạt $\sigma$ trong một nơ-ron.

*   Trước khi áp dụng AF, $\sigma$, nút tính toán một giá trị được gọi là giá trị tiền kích hoạt ($z$). Giá trị này được tính bằng tổng có trọng số của các đầu vào ($x_i$) cộng với độ lệch ($b$), (3.1.1).
*   Giá trị tiền kích hoạt sau đó được truyền qua một AF $\sigma$, ký hiệu là $\sigma(z)$. Các AF phổ biến bao gồm Sigmoid ($\sigma(z) = 1/(1+e^{-z})$), và hyperbolic tangent ($\tanh(z)$). Kết quả của việc áp dụng AF là giá trị hậu kích hoạt $a$. Đây là đầu ra cuối cùng của nút. AF cho phép NN mô hình hóa các mối quan hệ phức tạp trong dữ liệu mà có thể không nắm bắt được bằng một phép biến đổi tuyến tính đơn giản.

---

![alt text](hh3.2.png)

**Hình 3.2.** FFNN có một lớp đầu vào (4 nơ-ron), chỉ một lớp ẩn (3 nơ-ron) và một lớp đầu ra (1 nơ-ron).
*(Mô tả: Sơ đồ cho thấy 4 nơ-ron đầu vào a^(0) kết nối với 3 nơ-ron trong lớp ẩn (tạo ra a^(1)). Các nơ-ron lớp ẩn này sau đó kết nối với 1 nơ-ron trong lớp đầu ra (tạo ra a^(2)). Các trọng số (w) và độ lệch (b) được hiển thị cho các kết nối.)*

Một điểm quan trọng xuất hiện từ Hình 3.1 là người ta có thể coi một nút có kích hoạt phi tuyến như hai nút tính toán riêng biệt, một nút cho biến đổi tuyến tính $z = \mathbf{w}^T \cdot \mathbf{x} + b$ và nút kia cho biến đổi phi tuyến $\sigma(z)$. Sự tách biệt về mặt khái niệm này có thể đơn giản hóa các kết quả phân tích và giúp dễ hiểu và phân tích hành vi của NN trong các tình huống nhất định.

---

**Mạng Nơ-ron Truyền thẳng (Feed-Forward Neural Networks)**

Trong các NN nhân tạo, một lớp là một khối xây dựng cơ bản giúp tổ chức và cấu trúc mạng. Mỗi lớp thường bao gồm một tập hợp các nơ-ron hoặc nút thực hiện các hoạt động cụ thể trên dữ liệu. Các lớp làm việc cùng nhau để xử lý dữ liệu đầu vào và tạo ra đầu ra. Kiến trúc cơ bản của một FFNN bao gồm ba loại lớp chính: lớp đầu vào, một hoặc nhiều lớp ẩn, và lớp đầu ra. Một FFNN là một loại NN nhân tạo trong đó thông tin di chuyển theo một hướng—dữ liệu đầu vào được đưa vào lớp đầu vào, và nó đi qua lớp mạng theo từng lớp cho đến khi đạt đến đầu ra cuối cùng. Đây là một trong những NN đơn giản nhất. Không có chu trình hoặc vòng lặp trong mạng, dữ liệu chảy theo hướng tiến. Hình 3.2 cho thấy một FFNN chỉ có một lớp ẩn. Một kiến trúc mặc định của FFNN giả định các lớp được kết nối đầy đủ, còn được gọi là lớp được kết nối đầy đủ hoặc lớp dày đặc. Đây là một loại kiến trúc NN trong đó mỗi nút trong một lớp được kết nối với mọi nút trong lớp tiếp theo. Các kết nối được biểu diễn bằng trọng số, và mỗi kết nối có tham số trọng số riêng.

Một cách biểu diễn một mạng các kết nối nơ-ron là Đồ thị Có hướng Không chu trình (Directed Acyclic Graph - DAG). Một đồ thị là một tập hợp các đỉnh hoặc nút (biểu diễn các yếu tố tính toán cơ bản) và một tập hợp các cạnh (biểu diễn các kết nối giữa các nút), trong đó chúng ta giả định rằng cả hai tập hợp đều có kích thước hữu hạn. Trong một đồ thị có hướng (hoặc digraph), các cạnh được gán một hướng sao cho thông tin số chảy dọc theo mỗi cạnh theo một hướng cụ thể. Một đồ thị không chu trình là một đồ thị trong đó không có vòng lặp hoặc phản hồi nào được phép.

Mỗi loại lớp có mục đích cụ thể và đóng góp vào chức năng và hiệu suất tổng thể của NN:

*   **Lớp Đầu vào (Input Layer):**
    *   Lớp đầu vào chịu trách nhiệm nhận dữ liệu thô ban đầu.
    *   Mỗi nút trong lớp đầu vào biểu thị một đặc điểm hoặc thuộc tính của dữ liệu đầu vào.
    *   Số lượng nút trong lớp đầu vào được xác định bởi số chiều của dữ liệu đầu vào.
*   **Lớp Ẩn (Hidden Layer):**
    *   Mỗi nơ-ron trong một lớp ẩn lấy đầu vào từ lớp trước, áp dụng một phép biến đổi (thường là một tổng có trọng số theo sau bởi một AF), và chuyển kết quả cho lớp tiếp theo.
    *   Số lượng lớp ẩn và số lượng nút trong mỗi lớp ẩn là các lựa chọn thiết kế phụ thuộc vào độ phức tạp của vấn đề.
*   **Lớp Đầu ra (Output Layer):**
    *   Lớp đầu ra tạo ra các kết quả cuối cùng của tính toán của NN.
    *   Số lượng nút trong lớp đầu ra phụ thuộc vào bản chất của tác vụ.

**Nhận xét:**

*   Số lượng đơn vị trong một lớp được gọi là chiều rộng của lớp. Chiều rộng của mỗi lớp không nhất thiết phải giống nhau, nhưng số chiều phải được căn chỉnh, như chúng ta sẽ thấy sau.
*   Số lượng lớp được gọi là độ sâu của mạng. Đây là nơi khái niệm "sâu" (trong "học sâu") bắt nguồn.
*   Vectơ đầu vào của NN là vectơ đầu vào của các nơ-ron trong lớp đầu tiên. Trong vectơ đầu vào này của các nơ-ron, có $(n-1)$ tín hiệu được áp dụng từ bên ngoài và một tín hiệu độ lệch đầu vào. Vectơ đầu vào của các nơ-ron trong lớp thứ hai bao gồm tất cả các đầu ra của các nơ-ron trong lớp đầu tiên và một tín hiệu độ lệch đầu vào. Các lớp khác trong mạng đa lớp nhận đầu vào của chúng chỉ từ tất cả các nơ-ron trong lớp trước và từ một tín hiệu độ lệch nguồn.
*   Đầu ra của lớp cuối cùng là đầu ra của mạng và là dự đoán được tạo ra dựa trên đầu vào.
*   Các nơ-ron độ lệch có thể được sử dụng cả trong các lớp ẩn và trong các lớp đầu ra.

---

Do đó, kiến trúc của một FFNN được định nghĩa bằng cách chỉ định số lượng lớp, số lượng nút trong mỗi lớp, và các AF.

**Hàm Kích hoạt (Activation Functions)**
Các AF đóng một vai trò quan trọng trong các NN nhân tạo bằng cách đưa vào tính phi tuyến, cho phép chúng mô hình hóa các mối quan hệ phức tạp giữa đầu vào và đầu ra [50] và [63]. Dưới đây là một số AF phổ biến được sử dụng trong NN:

Hàm Sigmoid (Sigmoid Function):
$$ \sigma_{\text{Sigmoid}}(z) = \frac{1}{1 + e^{-z}}. \quad (3.2) $$

Hàm Hyperbolic Tangent (Tanh):
$$ \sigma_{\text{Tanh}}(z) = \frac{e^z - e^{-z}}{e^z + e^{-z}}. \quad (3.3) $$

Đơn vị Tuyến tính Chỉnh lưu (Rectified Linear Unit - ReLU):
$$ \sigma_{\text{ReLU}}(z) = \max(z, 0). \quad (3.4) $$

---
![alt text](hh3.3.png)

*(Đánh dấu để bổ sung Hình 3.3: So sánh các AF phổ biến: Sigmoid, Tanh, ReLU, và ELU. Mỗi hàm thể hiện các đặc điểm riêng biệt cần thiết để định hình hành vi của các nơ-ron trong NN.)*

**Hình 3.3.** So sánh các AF phổ biến: Sigmoid, Tanh, ReLU, và ELU. Mỗi hàm thể hiện các đặc điểm riêng biệt cần thiết để định hình hành vi của các nơ-ron trong NN.

*(Mô tả: Bốn đồ thị hiển thị hình dạng của các hàm Sigmoid, Tanh, ReLU và ELU.)*

Đơn vị Tuyến tính Lũy thừa (Exponential Linear Unit - ELU):
$$ \sigma_{\text{ELU}}(z) = \begin{cases} z, & z > 0 \\ \alpha(e^z - 1), & z \le 0 \end{cases}. \quad (3.5) $$

---

Hàm Softmax (Softmax Function):
$$ \sigma_{\text{Softmax}}(z_i) = a_i = \frac{e^{z_i}}{\sum_j e^{z_j}} \quad \text{cho } i = 1, 2, \dots, n. \quad (3.6) $$
Các hàm này đóng vai trò then chốt trong việc định hình các mẫu kích hoạt của các nơ-ron, ảnh hưởng đến động lực học tập trong NN, xem Hình 3.3.

*   Hầu hết các kiến trúc NN duy trì tính đồng nhất trong AF được sử dụng trong một lớp. Trong suốt các lớp của mạng, cùng một AF thường được áp dụng, ngoại trừ lớp đầu ra. Tính nhất quán này tạo điều kiện thuận lợi cho quá trình huấn luyện và cho phép luồng thông tin trôi chảy qua mạng.
*   Mặc dù giả định này đúng với nhiều kiến trúc truyền thống, điều cần thiết là lưu ý rằng có những biến thể và tiến bộ trong kiến trúc NN, chẳng hạn như kết nối bỏ qua (skip connections), cơ chế chú ý (attention mechanisms), và kiến trúc như transformer, trong đó các phần khác nhau của mạng có thể sử dụng các AF khác nhau hoặc có các tương tác phức tạp hơn. Những tiến bộ này nhằm mục đích cải thiện khả năng học tập của NN, đặc biệt là trong việc xử lý các tác vụ phức tạp và nắm bắt các phụ thuộc tầm xa trong dữ liệu.

Việc lựa chọn AF là rất quan trọng và thường được hướng dẫn bởi các đặc điểm của dữ liệu và các giả định cơ bản về phân phối của các biến mục tiêu. Các loại vấn đề và dữ liệu khác nhau có thể yêu cầu các AF khác nhau để đảm bảo rằng mạng có thể học và biểu diễn hiệu quả các mẫu trong dữ liệu. Khả năng thích ứng này trong việc lựa chọn AF góp phần vào tính linh hoạt và khả năng áp dụng của NN trong các tác vụ và lĩnh vực khác nhau. Việc lựa chọn AF ở lớp đầu ra phụ thuộc vào bản chất của tác vụ.

---

*(Đánh dấu để bổ sung Hình 3.4: Ký hiệu vô hướng và kiến trúc (kiến trúc cơ bản của một FFNN với lớp đầu vào, ba lớp ẩn và lớp đầu ra). Sơ đồ của một FFNN đơn giản với thông tin chảy từ trái sang phải. Các đầu vào $a_k^{(0)}$ được nhân với trọng số, cộng với độ lệch, và được chuyển qua hàm $\sigma$ để nhận các giá trị trung gian $z_k^{(1)}$. Các $z_k^{(1)}$ sau đó được kết hợp với một độ lệch và được đưa vào lớp tiếp theo.)*


![alt text](hh3.4.png)

**Hình 3.4.** Ký hiệu vô hướng và kiến trúc (kiến trúc cơ bản của một FFNN với lớp đầu vào, ba lớp ẩn và lớp đầu ra). Sơ đồ của một FFNN đơn giản với thông tin chảy từ trái sang phải. Các đầu vào $a_k^{(0)}$ được nhân với trọng số, cộng với độ lệch, và được chuyển qua hàm $\sigma$ để nhận các giá trị trung gian $z_k^{(1)}$. Các $z_k^{(1)}$ sau đó được kết hợp với một độ lệch và được đưa vào lớp tiếp theo.

*(Mô tả: Sơ đồ chi tiết của một FFNN 4 lớp (1 đầu vào, 2 ẩn, 1 đầu ra) với các nơ-ron bias, các kết nối có trọng số (w) và các giá trị kích hoạt (a, z) tại mỗi lớp.)*

**Mạng Nơ-ron Sâu (Deep Neural Networks)**

Sức mạnh thực sự của NN phát sinh khi mạng có nhiều hơn một lớp ẩn. NN với nhiều lớp ẩn được gọi là Mạng Nơ-ron Sâu (Deep Neural Network - DNN). Ví dụ, một NN với 3 lớp ẩn được hiển thị trong Hình 3.4. Mạng này có 3 đơn vị ẩn trên mỗi lớp ẩn. Thuật ngữ "sâu" trong DNN đề cập đến độ sâu của mạng, được xác định bởi số lượng lớp ẩn. Các mạng sâu hơn có thể nắm bắt các mẫu và biểu diễn phức tạp hơn trong dữ liệu, cho phép chúng học các đặc điểm phân cấp. Khả năng học các đặc điểm trừu tượng và phức tạp này làm cho DNN trở nên mạnh mẽ đối với các tác vụ như nhận dạng hình ảnh, xử lý ngôn ngữ tự nhiên, v.v.

Số lượng kết nối ngày càng tăng giữa các nút trong các mạng sâu hơn cũng có nghĩa là có nhiều trọng số và độ lệch hơn để tối ưu hóa trong quá trình huấn luyện. Mặc dù điều này có thể đặt ra những thách thức về độ phức tạp tính toán và thời gian huấn luyện, những tiến bộ trong phần cứng và thuật toán tối ưu hóa đã cho phép huấn luyện thành công các DNN.

Việc huấn luyện FFNN bao gồm hai phần: tính toán đầu ra cho các đầu vào đã cho và các trọng số hiện tại, sau đó cập nhật các trọng số theo sai số, là một hàm của sự khác biệt giữa các đầu ra và các mục tiêu. Những điều này thường được gọi là đi tiến và đi lùi qua mạng.

---

**3.2 Lan truyền Tiến trong Mạng Nơ-ron (Forward Propagation in Neural Networks)**

Lan truyền tiến là quá trình truyền dữ liệu đầu vào qua NN để tính toán một đầu ra, và nó đặt nền móng cho các bước tiếp theo trong quá trình huấn luyện. Thuật ngữ "tiến" biểu thị hướng thông tin chảy qua mạng, từ lớp đầu vào đến lớp đầu ra. Sau đây là giải thích từng bước của quá trình lan truyền tiến:
1.  Quá trình bắt đầu với lớp đầu vào, nơi mạng nhận dữ liệu thô đầu vào.
2.  Tổng có trọng số của các đầu vào và độ lệch được tính toán cho mỗi nút trong lớp ẩn đầu tiên.
3.  Giá trị này sau đó được truyền qua một AF.
4.  Quá trình này được lặp lại cho mỗi lớp ẩn trong mạng. Đầu ra từ lớp trước đóng vai trò là đầu vào cho lớp tiếp theo.
5.  Đầu ra của lớp ẩn cuối cùng được truyền qua lớp đầu ra để tạo ra đầu ra cuối cùng của mạng. Loại AF được sử dụng trong lớp đầu ra phụ thuộc vào bản chất của vấn đề.
6.  Đầu ra sau đó được so sánh với các giá trị mục tiêu thực sự bằng cách sử dụng một hàm mất mát, đo lường sự khác biệt giữa đầu ra dự đoán và đầu ra thực tế.

Quá trình lan truyền tiến là không thể thiếu đối với cả việc huấn luyện và đưa ra dự đoán với NN. Trong quá trình huấn luyện, các trọng số và độ lệch được điều chỉnh bằng cách sử dụng các thuật toán tối ưu hóa (ví dụ: GD) để giảm thiểu hàm mất mát, cho phép mạng học từ dữ liệu. Khi mạng được huấn luyện, nó có thể được sử dụng để đưa ra dự đoán về dữ liệu mới, chưa từng thấy bằng cách thực hiện lan truyền tiến đơn giản với các trọng số và độ lệch đã học.

Trước khi đi sâu vào sự phức tạp của toán học, chúng ta hãy bắt đầu với một quan sát hữu ích: các lớp của một NN được kết nối đầy đủ có thể được coi là các hàm vectơ:
$$ \mathbf{a} = \sigma(\mathbf{z}), \quad (3.7) $$
trong đó đầu vào của lớp là $\mathbf{z}$ và đầu ra là $\mathbf{a}$. Cả hai đều là vectơ; mỗi nút trong một lớp tạo ra một đầu ra vô hướng duy nhất, khi được nhóm lại, sẽ trở thành $\mathbf{a}$, một vectơ biểu diễn đầu ra của lớp.

---

Các AF, chẳng hạn như hàm Sigmoid, có thể được áp dụng theo từng phần tử cho các đối số vectơ. Điều này có nghĩa là AF được áp dụng độc lập cho từng phần tử của vectơ, tạo ra một vectơ mới có cùng độ dài trong đó mỗi phần tử là kết quả của việc áp dụng AF cho phần tử tương ứng của vectơ đầu vào. Ví dụ, giả sử bạn có một vectơ $\mathbf{z} \in \mathbb{R}^n$, $\mathbf{z} = |\mathbf{z}\rangle = (z_1, z_2, \dots, z_n)^T$ và bạn muốn áp dụng AF $\sigma$ theo từng phần tử cho mỗi phần tử của vectơ. Vectơ kết quả $\mathbf{a}$ sẽ là
$$ \mathbf{a} = |\mathbf{a}\rangle = \sigma(\mathbf{z}) = \sigma(|\mathbf{z}\rangle) = (\sigma(z_1), \sigma(z_2), \dots, \sigma(z_n))^T. \quad (3.8) $$
Ứng dụng theo từng phần tử này là một hoạt động phổ biến trong NN, trong đó các AF thường được áp dụng độc lập cho các phần tử của các vectơ đầu vào trong mỗi lớp.

Do đó, người ta có thể biểu diễn các kiến trúc NN bằng các biến vectơ. Trong các biểu diễn dựa trên vectơ, thay vì biểu diễn các đơn vị riêng lẻ trong một lớp riêng biệt, toàn bộ lớp được coi là một vectơ được biểu diễn dưới dạng một hình chữ nhật. Việc sử dụng hình chữ nhật là một sự đơn giản hóa và trừu tượng hóa để truyền đạt ý tưởng về một lớp có nhiều đơn vị mà không cần vẽ tường minh các vòng tròn hoặc hình vuông riêng lẻ cho mỗi đơn vị, điều này có thể trở nên không thực tế và lộn xộn đối với các mạng lớn. Điều này có thể làm cho các phép toán và biểu thức toán học thuận tiện hơn. Ví dụ, sơ đồ kiến trúc trong Hình 3.4 (với các đơn vị vô hướng) đã được chuyển đổi thành một kiến trúc dựa trên vectơ trong Hình 3.5.

*(Đánh dấu để bổ sung Hình 3.5: Ký hiệu vectơ và kiến trúc (kiến trúc cơ bản của một FFNN với lớp đầu vào, ba lớp ẩn và lớp đầu ra).)*

![alt text](hh3.5.png)

**Hình 3.5.** Ký hiệu vectơ và kiến trúc (kiến trúc cơ bản của một FFNN với lớp đầu vào, ba lớp ẩn và lớp đầu ra).
*(Mô tả: Sơ đồ tương tự Hình 3.4 nhưng sử dụng ký hiệu vectơ cho các đầu vào (a^(0)), trọng số (W^(1)), các giá trị tiền kích hoạt (z^(1)), và các giá trị hậu kích hoạt (a^(1)) tại mỗi lớp. Các lớp được biểu diễn bằng các khối hình chữ nhật.)*

---

Để mô tả lan truyền tiến trong một DNN, chúng ta cần xác định một số ký hiệu cho trọng số và độ lệch. Lớp đầu vào có $n_0$ nơ-ron. Trong công trình này, chúng ta áp dụng một ký hiệu hệ thống để tăng cường sự rõ ràng và nhất quán trong các biểu thức toán học của chúng ta. Để duy trì một biểu diễn nhất quán trong suốt mô hình, chúng ta ký hiệu dữ liệu đầu vào vectơ tại lớp đầu vào là $\mathbf{a}^{(0)}$. Lựa chọn này phù hợp với ký hiệu $\mathbf{a}^{(l)}$, biểu thị đầu ra của các lớp ẩn ($l$). Bằng cách căn chỉnh ký hiệu đầu vào với ký hiệu của các lớp ẩn, chúng ta nhằm mục đích hợp lý hóa sự hiểu biết của chúng ta về các công thức toán học. Chiến lược ký hiệu này phục vụ để làm rõ chỉ số lớp, cung cấp một khuôn khổ mạch lạc cho cả lớp đầu vào và lớp ẩn trong các mô hình của chúng ta. Chúng ta coi lớp đầu vào là lớp số 0 có độ dài $n_0$. Cụ thể, các giá trị đầu vào được ký hiệu là $\mathbf{a}^{(0)}$, là một vectơ $n_0$-chiều:
$$ \mathbf{a}^{(0)} = |\mathbf{a}^{(0)}\rangle = \begin{pmatrix} a_1^{(0)} \\ a_2^{(0)} \\ \vdots \\ a_{n_0}^{(0)} \end{pmatrix}. \quad (3.9) $$
Mỗi lớp ẩn ($l$) có $n_l$ đơn vị, và lớp đầu ra ($L$) có $n_L$ đơn vị. Đối với mỗi lớp $l$, các giá trị kích hoạt $\mathbf{a}^{(l)}$ được tính bằng cách sử dụng tổng có trọng số của các đầu vào theo sau bởi một AF:
$$ \mathbf{z}^{(l)} = \mathbf{W}^{(l)} \cdot \mathbf{a}^{(l-1)} + \mathbf{b}^{(l)}, \quad \text{hoặc} \quad |\mathbf{z}^{(l)}\rangle = \mathbf{W}^{(l)} |\mathbf{a}^{(l-1)}\rangle + |\mathbf{b}^{(l)}\rangle, \quad (3.10) $$
$$ \mathbf{a}^{(l)} = \sigma(\mathbf{z}^{(l)}), \quad \text{hoặc} \quad |\mathbf{a}^{(l)}\rangle = \sigma(|\mathbf{z}^{(l)}\rangle), \quad (3.11) $$
trong đó: $\mathbf{W}^{(l)}$ là ma trận trọng số cho lớp $l$, $\mathbf{b}^{(l)}$ là vectơ độ lệch cho lớp $l$, và $\sigma^{(l)}$ là AF cho lớp $l$. Đầu ra của NN là kích hoạt của lớp cuối cùng: $\mathbf{a}^{(L)}$. Các phương trình ở trên bây giờ bao gồm rõ ràng thuật ngữ độ lệch $\mathbf{b}^{(l)}$ trong việc tính toán tổng có trọng số $\mathbf{z}^{(l)}$. Đặt
$$ \mathbf{W}^{(l)} = \begin{pmatrix} w_{11}^{(l)} & w_{12}^{(l)} & \dots & w_{1,n_{l-1}}^{(l)} \\ w_{21}^{(l)} & w_{22}^{(l)} & \dots & w_{2,n_{l-1}}^{(l)} \\ \vdots & \vdots & \ddots & \vdots \\ w_{n_l,1}^{(l)} & w_{n_l,2}^{(l)} & \dots & w_{n_l,n_{l-1}}^{(l)} \end{pmatrix}, \quad \mathbf{a}^{(l)} = |\mathbf{a}^{(l)}\rangle = \begin{pmatrix} a_1^{(l)} \\ a_2^{(l)} \\ \vdots \\ a_{n_l}^{(l)} \end{pmatrix}, \quad \text{và} \quad \mathbf{b}^{(l)} = |\mathbf{b}^{(l)}\rangle = \begin{pmatrix} b_1^{(l)} \\ b_2^{(l)} \\ \vdots \\ b_{n_l}^{(l)} \end{pmatrix}. \quad (3.12) $$

---

$$ \mathbf{W}^{(l)} = \begin{pmatrix} w_{11}^{(l)} & w_{12}^{(l)} & \dots & w_{1,n_{l-1}}^{(l)} \\ w_{21}^{(l)} & w_{22}^{(l)} & \dots & w_{2,n_{l-1}}^{(l)} \\ \vdots & \vdots & \ddots & \vdots \\ w_{n_l,1}^{(l)} & w_{n_l,2}^{(l)} & \dots & w_{n_l,n_{l-1}}^{(l)} \end{pmatrix}, \quad \mathbf{a}^{(l)} = |\mathbf{a}^{(l)}\rangle = \dots, \quad \text{và} \quad \mathbf{b}^{(l)} = |\mathbf{b}^{(l)}\rangle = \dots \quad (3.12) $$
trong đó $w_{ij}^{(l)}$ biểu thị trọng số kết nối nơ-ron thứ $j$ trong lớp $l-1$ với nơ-ron thứ $i$ trong lớp $l$. Số chiều của $\mathbf{W}^{(l)}$ sẽ là $n_l \times n_{l-1}$. Khi lập chỉ mục trọng số, chúng ta thường sử dụng $i$ để chỉ điểm đến và $j$ để chỉ nguồn - hãy nhớ trọng số được lập chỉ mục (đích, nguồn). Chúng ta có
$$ \mathbf{z}^{(l)} = \mathbf{W}^{(l)} \cdot \mathbf{a}^{(l-1)} + \mathbf{b}^{(l)} $$
$$ = \mathbf{W}^{(l)} |\mathbf{a}^{(l-1)}\rangle + |\mathbf{b}^{(l)}\rangle $$
$$ = \begin{pmatrix} w_{11}^{(l)} & \dots & w_{1,n_{l-1}}^{(l)} \\ w_{21}^{(l)} & \dots & w_{2,n_{l-1}}^{(l)} \\ \vdots & \ddots & \vdots \\ w_{n_l,1}^{(l)} & \dots & w_{n_l,n_{l-1}}^{(l)} \end{pmatrix} \begin{pmatrix} a_1^{(l-1)} \\ a_2^{(l-1)} \\ \vdots \\ a_{n_{l-1}}^{(l-1)} \end{pmatrix} + \begin{pmatrix} b_1^{(l)} \\ b_2^{(l)} \\ \vdots \\ b_{n_l}^{(l)} \end{pmatrix} $$
$$ = \begin{pmatrix} w_{11}^{(l)} a_1^{(l-1)} + \dots + w_{1,n_{l-1}}^{(l)} a_{n_{l-1}}^{(l-1)} + b_1^{(l)} \\ w_{21}^{(l)} a_1^{(l-1)} + \dots + w_{2,n_{l-1}}^{(l)} a_{n_{l-1}}^{(l-1)} + b_2^{(l)} \\ \vdots \\ w_{n_l,1}^{(l)} a_1^{(l-1)} + \dots + w_{n_l,n_{l-1}}^{(l)} a_{n_{l-1}}^{(l-1)} + b_{n_l}^{(l)} \end{pmatrix}. \quad (3.13.1) $$

---

$$ \mathbf{z}^{(l)} = \begin{pmatrix} \sum_{j=1}^{n_{l-1}} w_{1j}^{(l)} a_j^{(l-1)} + b_1^{(l)} \\ \sum_{j=1}^{n_{l-1}} w_{2j}^{(l)} a_j^{(l-1)} + b_2^{(l)} \\ \vdots \\ \sum_{j=1}^{n_{l-1}} w_{n_l j}^{(l)} a_j^{(l-1)} + b_{n_l}^{(l)} \end{pmatrix} = \begin{pmatrix} z_1^{(l)} \\ z_2^{(l)} \\ \vdots \\ z_{n_l}^{(l)} \end{pmatrix} \quad (3.13.2) $$
trong đó
$$ z_i^{(l)} = \sum_{j=1}^{n_{l-1}} w_{ij}^{(l)} a_j^{(l-1)} + b_i^{(l)}, \quad (3.13.3) $$
và
$$ \mathbf{a}^{(l)} = |\mathbf{a}^{(l)}\rangle = \sigma^{(l)}(|\mathbf{z}^{(l)}\rangle) = \sigma^{(l)}\begin{pmatrix} z_1^{(l)} \\ z_2^{(l)} \\ \vdots \\ z_{n_l}^{(l)} \end{pmatrix} = \begin{pmatrix} \sigma^{(l)}(z_1^{(l)}) \\ \sigma^{(l)}(z_2^{(l)}) \\ \vdots \\ \sigma^{(l)}(z_{n_l}^{(l)}) \end{pmatrix} = \begin{pmatrix} a_1^{(l)} \\ a_2^{(l)} \\ \vdots \\ a_{n_l}^{(l)} \end{pmatrix}. \quad (3.13.4) $$
Đầu ra của NN là kích hoạt của lớp cuối cùng: $\mathbf{a}^{(L)}$.
Ngoài ký hiệu hệ thống của chúng ta cho dữ liệu đầu vào vectơ, chúng ta giới thiệu một biểu diễn nhất quán cho các thuật ngữ độ lệch trong kiến trúc mô hình của chúng ta. Theo truyền thống, các thuật ngữ độ lệch được ký hiệu là $b_i^{(l)}$, trong đó ($i$) là chỉ số của nơ-ron trong

---
*(Trang này lặp lại nội dung của trang 33, bỏ qua)*

---

Tính $\mathbf{z}^{(2)}$ và $\mathbf{a}^{(2)}$ như sau:
$$ \mathbf{a}^{(1)} = |\mathbf{a}^{(1)}\rangle = \sigma(\mathbf{z}^{(1)}) = \begin{pmatrix} \sigma(z_1^{(1)}) \\ \sigma(z_2^{(1)}) \\ \sigma(z_3^{(1)}) \end{pmatrix}_{3 \times 1} \quad (3.16.2) $$
$$ \mathbf{z}^{(2)} = |\mathbf{z}^{(2)}\rangle = \begin{pmatrix} z_1^{(2)} \\ z_2^{(2)} \\ z_3^{(2)} \end{pmatrix}_{3 \times 1} = \begin{pmatrix} w_{11}^{(2)} & w_{12}^{(2)} & w_{13}^{(2)} \\ w_{21}^{(2)} & w_{22}^{(2)} & w_{23}^{(2)} \\ w_{31}^{(2)} & w_{32}^{(2)} & w_{33}^{(2)} \end{pmatrix}_{3 \times 3} \begin{pmatrix} a_1^{(1)} \\ a_2^{(1)} \\ a_3^{(1)} \end{pmatrix}_{3 \times 1} + \begin{pmatrix} w_{10}^{(2)} \\ w_{20}^{(2)} \\ w_{30}^{(2)} \end{pmatrix}_{3 \times 1} \quad (3.17.1) $$
$$ \mathbf{a}^{(2)} = |\mathbf{a}^{(2)}\rangle = \begin{pmatrix} a_1^{(2)} \\ a_2^{(2)} \\ a_3^{(2)} \end{pmatrix}_{3 \times 1} = \sigma(\mathbf{z}^{(2)}) = \begin{pmatrix} \sigma(z_1^{(2)}) \\ \sigma(z_2^{(2)}) \\ \sigma(z_3^{(2)}) \end{pmatrix}_{3 \times 1} \quad (3.17.2) $$
Tính $\mathbf{z}^{(3)}$ và $\mathbf{a}^{(3)}$ như sau:
$$ \mathbf{z}^{(3)} = |\mathbf{z}^{(3)}\rangle = \begin{pmatrix} z_1^{(3)} \\ z_2^{(3)} \\ z_3^{(3)} \end{pmatrix}_{3 \times 1} = \begin{pmatrix} w_{11}^{(3)} & w_{12}^{(3)} & w_{13}^{(3)} \\ w_{21}^{(3)} & w_{22}^{(3)} & w_{23}^{(3)} \\ w_{31}^{(3)} & w_{32}^{(3)} & w_{33}^{(3)} \end{pmatrix}_{3 \times 3} \begin{pmatrix} a_1^{(2)} \\ a_2^{(2)} \\ a_3^{(2)} \end{pmatrix}_{3 \times 1} + \begin{pmatrix} w_{10}^{(3)} \\ w_{20}^{(3)} \\ w_{30}^{(3)} \end{pmatrix}_{3 \times 1} \quad (3.18.1) $$
$$ \mathbf{a}^{(3)} = |\mathbf{a}^{(3)}\rangle = \begin{pmatrix} a_1^{(3)} \\ a_2^{(3)} \\ a_3^{(3)} \end{pmatrix}_{3 \times 1} = \sigma(\mathbf{z}^{(3)}) = \begin{pmatrix} \sigma(z_1^{(3)}) \\ \sigma(z_2^{(3)}) \\ \sigma(z_3^{(3)}) \end{pmatrix}_{3 \times 1} \quad (3.18.2) $$

---

Tính $\mathbf{z}^{(4)}$ và $\mathbf{a}^{(4)}$ như sau:
$$ \mathbf{z}^{(4)} = |z_1^{(4)}\rangle = (z_1^{(4)})_{1 \times 1} = (w_{11}^{(4)} \quad w_{12}^{(4)} \quad w_{13}^{(4)})_{1 \times 3} \begin{pmatrix} a_1^{(3)} \\ a_2^{(3)} \\ a_3^{(3)} \end{pmatrix}_{3 \times 1} + (w_{10}^{(4)})_{1 \times 1} \quad (3.19.1) $$
$$ \mathbf{a}^{(4)} = |a_1^{(4)}\rangle = (a_1^{(4)})_{1 \times 1} = \sigma(z_1^{(4)}) = \sigma(z_1^{(4)})_{1 \times 1}. \quad (3.19.2) $$
Đây là tất cả các phép toán diễn ra trong FFNN được minh họa trong Hình 3.4 và 3.5. Chúng ta đã khéo léo điều chỉnh ký hiệu trước đó bằng cách đặt dấu ngoặc và viết $\mathbf{a}^{(4)}$ dưới dạng vectơ, mặc dù nó rõ ràng là một đại lượng vô hướng. Điều này chỉ để giữ dòng chảy và tránh thay đổi ký hiệu.

Trong đại số tuyến tính, khi một ma trận hoặc vectơ được nhân với một ma trận khác, ma trận hoặc vectơ kết quả có thể có các chiều khác nhau. Phép nhân ma trận này có thể được coi là một ánh xạ, trong đó các điểm trong một không gian được biến đổi thành các điểm trong một không gian khác. Trong NN, các phép toán khác nhau được thực hiện trên các vectơ đầu vào. Các phép toán này bao gồm nhân ma trận, hàm kích hoạt và khả năng là độ lệch. Thành phần của các phép toán này về cơ bản thể hiện một loạt các phép biến đổi trên dữ liệu đầu vào. Vectơ đầu vào được biến đổi qua các lớp của mạng, liên quan đến nhân ma trận và kích hoạt phi tuyến, cuối cùng ánh xạ đầu vào từ một không gian Euclide này sang một không gian Euclide khác. Do đó, NN có thể được khái niệm hóa như các ánh xạ giữa các không gian khác nhau, trong đó các lớp của mạng hoạt động như các hàm biến đổi. Nhân ma trận là một hoạt động quan trọng trong quá trình này, góp phần vào việc ánh xạ dữ liệu đầu vào thành các dự đoán đầu ra.

Sử dụng quan sát này, chúng ta có thể tổng quát hóa và viết như sau:
$$ \mathcal{N}: \mathbb{R}^{n_0} \to \mathbb{R}^{n_L}, \quad (3.20) $$

---

trong đó $\mathcal{N}$ biểu thị NN, là một hàm bao gồm nhiều lớp. $\mathbb{R}^{n_0}$ biểu thị không gian đầu vào, trong đó $n_0$ là số chiều của vectơ đầu vào. Đây là không gian của tất cả các vectơ đầu vào có thể có. $\mathbb{R}^{n_L}$ biểu thị không gian đầu ra, trong đó $n_L$ là số chiều của vectơ đầu ra. Đây là không gian của tất cả các vectơ đầu ra có thể có. Hàm $\mathcal{N}$ bao gồm toàn bộ kiến trúc của NN, bao gồm một lớp đầu vào, các lớp ẩn, và một lớp đầu ra. Mỗi lớp liên quan đến nhân ma trận với trọng số, cộng độ lệch, và AF. Bây giờ, chúng ta có thể tóm tắt NN của Hình 3.4 trong các phương trình sau:
$$ \mathcal{N}: \mathbb{R}^4 \to \mathbb{R}^1. \quad (3.21.1) $$

*(Đánh dấu để bổ sung công thức phức tạp (3.21.2): Biểu diễn hàm lồng nhau của mạng.)*
$$ \mathcal{N}(\mathbf{a}^{(0)}) = \sigma^{(4)} \left( \mathbf{W}^{(4)} \cdot \sigma^{(3)} \left( \mathbf{W}^{(3)} \cdot \sigma^{(2)} \left( \mathbf{W}^{(2)} \cdot \sigma^{(1)} \left( \mathbf{W}^{(1)} \cdot \mathbf{a}^{(0)} + \mathbf{w}_0^{(1)} \right) + \mathbf{w}_0^{(2)} \right) + \mathbf{w}_0^{(3)} \right) + \mathbf{w}_0^{(4)} \right) \quad (3.21.2) $$
*(Mô tả: Công thức (3.21.2) là một biểu diễn hàm lồng nhau phức tạp của toàn bộ mạng nơ-ron, thể hiện các phép nhân ma trận, cộng độ lệch và các hàm kích hoạt qua các lớp. Nó có dạng một chuỗi các dấu ngoặc đơn và các ký hiệu toán học được sắp xếp theo chiều dọc và chiều ngang để thể hiện cấu trúc lớp.)*

---

**Lan truyền Tiến cho Tất cả các Ví dụ Huấn luyện (Forward Propagation for All Training Examples)**

Đặt $\mathbf{X}$ là ma trận biểu diễn dữ liệu đầu vào cho tất cả các ví dụ huấn luyện, trong đó mỗi cột tương ứng với một ví dụ khác nhau:
$$ \mathbf{X} = \begin{pmatrix} | & | & & | \\ \mathbf{x}^{(1)} & \mathbf{x}^{(2)} & \dots & \mathbf{x}^{(m)} \\ | & | & & | \end{pmatrix}. \quad (3.22) $$
Ở đây, $\mathbf{x}^{(i)}$ biểu thị vectơ đầu vào cho ví dụ huấn luyện thứ $i$, và $m$ là số lượng ví dụ huấn luyện, xem Hình 3.7 (*Hình không được cung cấp trong tài liệu này*). $\mathbf{X}$ là ma trận $n_0 \times m$, trong đó $n_0$ là số lượng đặc trưng đầu vào, và $m$ là số lượng ví dụ huấn luyện. Toàn bộ quá trình lan truyền tiến có thể được biểu diễn dưới dạng vectơ hóa cho tất cả các ví dụ huấn luyện (nếu bạn đang làm việc với một lô các ví dụ):
$$ \mathbf{Z}^{(l)} = \mathbf{W}^{(l)} \cdot \mathbf{A}^{(l-1)} + \mathbf{W}_0^{(l)}, \quad (3.23) $$
$$ \mathbf{A}^{(l)} = \sigma(\mathbf{Z}^{(l)}), \quad (3.24) $$
trong đó: $\mathbf{A}^{(0)} = \mathbf{X}$ là dữ liệu đầu vào, $\mathbf{A}^{(l)}$ là ma trận kích hoạt ($n_l \times m$) cho lớp $l$, và $\mathbf{Z}^{(l)}$ là ma trận tổng có trọng số ($n_l \times m$) cho lớp $l$. Đối với mỗi lớp $l$, $\mathbf{W}^{(l)}$ là ma trận trọng số ($n_l \times n_{l-1}$), $\mathbf{W}_0^{(l)}$ là ma trận độ lệch ($n_l \times m$) cho lớp $l$. Đầu ra cuối cùng của mạng được cho bởi $\mathbf{A}^{(L)}$, và kích thước của nó phụ thuộc vào số lượng đơn vị đầu ra: ($n_L \times m$) ma trận kích hoạt cho lớp đầu ra.

---

**Lan truyền Tiến và Thuật ngữ Độ lệch (cho AF $\sigma(1) \neq 1$) (Forward Propagation and Bias Term (for AF $\sigma(1) \neq 1$))**

Để kết hợp thuật ngữ độ lệch vào ma trận trọng số và vectơ kích hoạt, chúng ta có thể giới thiệu một nơ-ron đầu vào giả có giá trị cố định là 1. Bằng cách này, thuật ngữ độ lệch trở thành một phần của ma trận trọng số, và vectơ kích hoạt bao gồm thuật ngữ độ lệch một cách ngầm định. Chúng ta hãy ký hiệu ma trận trọng số tăng cường cho lớp $l$ là $\tilde{\mathbf{W}}^{(l)}$ và vectơ kích hoạt tăng cường là $\tilde{\mathbf{a}}^{(l)}$. Các phương trình cho ma trận trọng số tăng cường trở thành
$$ \tilde{\mathbf{W}}^{(l)} = \begin{pmatrix} w_{10}^{(l)} & w_{11}^{(l)} & w_{12}^{(l)} & \dots & w_{1,n_{l-1}}^{(l)} \\ w_{20}^{(l)} & w_{21}^{(l)} & w_{22}^{(l)} & \dots & w_{2,n_{l-1}}^{(l)} \\ \vdots & \vdots & \vdots & \ddots & \vdots \\ w_{n_l,0}^{(l)} & w_{n_l,1}^{(l)} & w_{n_l,2}^{(l)} & \dots & w_{n_l,n_{l-1}}^{(l)} \end{pmatrix}, \quad (3.25) $$
trong đó $w_{i0}^{(l)}$ là thuật ngữ độ lệch cho nơ-ron thứ $i$ trong lớp $l$, và $w_{ij}^{(l)}$ biểu thị trọng số kết nối nơ-ron thứ $j$ trong lớp $l-1$ với nơ-ron thứ $i$ trong lớp $l$. Vectơ kích hoạt tăng cường trở thành
$$ \tilde{\mathbf{a}}^{(l)} = \begin{pmatrix} 1 \\ a_1^{(l)} \\ a_2^{(l)} \\ \vdots \\ a_{n_l}^{(l)} \end{pmatrix}. \quad (3.26) $$
*(Lưu ý: $\tilde{\mathbf{a}}^{(l)}$ ở đây là đầu ra của lớp $l$ được tăng cường bằng 1. Đầu vào cho lớp $l$ sẽ là $\tilde{\mathbf{a}}^{(l-1)}$)*

---

*(Đánh dấu để bổ sung Hình 3.8: Ký hiệu vectơ và kiến trúc (kiến trúc cơ bản của một FFNN với lớp đầu vào, ba lớp ẩn và lớp đầu ra.) (không có thuật ngữ độ lệch trong trường hợp $\sigma(1) \neq 1$))*

![alt text](hh3.8.png)

**Hình 3.8.** Ký hiệu vectơ và kiến trúc (kiến trúc cơ bản của một FFNN với lớp đầu vào, ba lớp ẩn và lớp đầu ra.) (không có thuật ngữ độ lệch trong trường hợp $\sigma(1) \neq 1$)
*(Mô tả: Sơ đồ tương tự Hình 3.5, nhưng các vectơ kích hoạt đầu vào cho mỗi lớp (ví dụ: $\tilde{\mathbf{a}}^{(0)}$) có một thành phần '1' được thêm vào ở đầu để xử lý độ lệch thông qua ma trận trọng số tăng cường $\tilde{\mathbf{W}}^{(1)}$. Kích thước ma trận được hiển thị, ví dụ: $\tilde{\mathbf{a}}^{(0)}$ là (5x1), $\tilde{\mathbf{W}}^{(1)}$ là (3x5).)*

Ở đây, phần tử đầu tiên được cố định ở 1, biểu thị thuật ngữ độ lệch. Với những sự tăng cường này, các phương trình cho lan truyền tiến trở thành:
$$ \mathbf{z}^{(l)} = \tilde{\mathbf{W}}^{(l)} \cdot \tilde{\mathbf{a}}^{(l-1)}, \quad (3.27) $$
$$ \tilde{\mathbf{a}}^{(l)} = \sigma(\mathbf{z}^{(l)}). \quad (3.28) $$
*(Lưu ý: Trong (3.28), $\tilde{\mathbf{a}}^{(l)}$ nên được hiểu là $(\text{1 prepended to } \sigma(\mathbf{z}^{(l)}))$.)*

Bằng cách này, thuật ngữ độ lệch được coi như một trọng số khác trong ma trận trọng số, và vectơ kích hoạt bao gồm độ lệch một cách ngầm định, xem Hình 3.8. Bây giờ, rõ ràng tại sao chúng ta sử dụng ký hiệu $\mathbf{w}_0^{(l)}$ với thuật ngữ độ lệch. Điều này giúp đơn giản hóa việc triển khai và giúp duy trì tính nhất quán trong các biểu thức toán học.

Hơn nữa, chúng ta hãy biểu diễn toàn bộ quá trình lan truyền tiến dưới dạng vectơ hóa cho tất cả các ví dụ huấn luyện. Giới thiệu một hàng gồm các số một để biểu diễn thuật ngữ độ lệch trong lớp đầu vào:
$$ \tilde{\mathbf{X}} = \begin{pmatrix} 1 & 1 & \dots & 1 \\ \mathbf{x}^{(1)} & \mathbf{x}^{(2)} & \dots & \mathbf{x}^{(m)} \end{pmatrix}. \quad (3.29) $$
Bây giờ, $\tilde{\mathbf{X}}$ bao gồm thuật ngữ độ lệch. $\tilde{\mathbf{X}}$ là ma trận $(n_0+1) \times m$ (lớp đầu vào với một hàng bổ sung cho thuật ngữ độ lệch).
Tương tự,
$$ \tilde{\mathbf{A}}^{(l)} = \begin{pmatrix} 1 & 1 & \dots & 1 \\ \mathbf{a}_1^{(l)} & \mathbf{a}_2^{(l)} & \dots & \mathbf{a}_m^{(l)} \end{pmatrix}. \quad (3.30) $$
Ở đây, $\mathbf{a}_i^{(l)}$ biểu thị vectơ kích hoạt của lớp ($l$) cho ví dụ huấn luyện thứ $i$, và $m$ là số lượng ví dụ huấn luyện. Đối với mỗi lớp $l$, tổng có trọng số $\mathbf{Z}^{(l)}$ và kích hoạt $\tilde{\mathbf{A}}^{(l)}$ có thể được tính như sau:
$$ \mathbf{Z}^{(l)} = \tilde{\mathbf{W}}^{(l)} \cdot \tilde{\mathbf{A}}^{(l-1)}, \quad (3.31) $$
$$ \tilde{\mathbf{A}}^{(l)} = \sigma(\mathbf{Z}^{(l)}). \quad (3.32) $$
$\tilde{\mathbf{W}}^{(l)}$ là ma trận trọng số $n_l \times (n_{l-1}+1)$ cho lớp $l$, bao gồm các trọng số độ lệch. $\mathbf{Z}^{(l)}$ là ma trận tổng có trọng số $n_l \times m$ cho lớp $l$. $\tilde{\mathbf{A}}^{(l)}$ là ma trận $ (n_l+1) \times m $ bao gồm các trọng số độ lệch. Đầu ra cuối cùng của mạng được cho bởi $\tilde{\mathbf{A}}^{(L)}$, và kích thước của nó phụ thuộc vào số lượng đơn vị đầu ra: $\tilde{\mathbf{A}}^{(L)}$ là ma trận kích hoạt $(n_L+1) \times m$ cho lớp đầu ra.

---

*(Đánh dấu để bổ sung Hình 3.9: Ký hiệu vectơ và kiến trúc (kiến trúc cơ bản của một FFNN với lớp đầu vào, ba lớp ẩn và lớp đầu ra.) (không có thuật ngữ độ lệch trong trường hợp $\sigma(1) = 1$))*

![alt text](hh3.9.png)

**Hình 3.9.** Ký hiệu vectơ và kiến trúc (kiến trúc cơ bản của một FFNN với lớp đầu vào, ba lớp ẩn và lớp đầu ra.) (không có thuật ngữ độ lệch trong trường hợp $\sigma(1) = 1$)
*(Mô tả: Tương tự như Hình 3.8, nhưng nhấn mạnh trường hợp $\sigma(1)=1$. Ký hiệu $\bar{\mathbf{W}}^{(l)}$ được sử dụng cho ma trận trọng số bao gồm cột độ lệch.)*

$$ \bar{\mathbf{W}}^{(l)} = \begin{pmatrix} w_{10}^{(l)} & w_{11}^{(l)} & w_{12}^{(l)} & \dots & w_{1,n_{l-1}}^{(l)} \\ w_{20}^{(l)} & w_{21}^{(l)} & w_{22}^{(l)} & \dots & w_{2,n_{l-1}}^{(l)} \\ \vdots & \vdots & \vdots & \ddots & \vdots \\ w_{n_l,0}^{(l)} & w_{n_l,1}^{(l)} & w_{n_l,2}^{(l)} & \dots & w_{n_l,n_{l-1}}^{(l)} \end{pmatrix} = \begin{pmatrix} | & | & & | \\ \mathbf{w}_0^{(l)} & \mathbf{w}_1^{(l)} & \dots & \mathbf{w}_{n_{l-1}}^{(l)} \\ | & | & & | \end{pmatrix} \quad \text{hay} \quad \bar{\mathbf{W}}^{(l)} = \begin{pmatrix} \mathbf{w}_0^{(l)} & \mathbf{W}^{(l)} \end{pmatrix} \quad (3.33) $$

---

trong đó $w_{i0}^{(l)}$ là thuật ngữ độ lệch cho nơ-ron thứ $i$ trong lớp $l$, $\mathbf{0}^T$ là chuyển vị của vectơ không có chiều $1 \times n_{l-1}$, $\mathbf{w}_0^{(l)}$ biểu thị vectơ độ lệch được liên kết với các nơ-ron trong lớp $l$ và $\mathbf{W}^{(l)}$ là ma trận trọng số cho lớp $l$ với kích thước $n_l \times n_{l-1}$. Vectơ kích hoạt tăng cường trở thành
$$ \tilde{\mathbf{a}}^{(l)} = \begin{pmatrix} 1 \\ a_1^{(l)} \\ \vdots \\ a_{n_l}^{(l)} \end{pmatrix} = \begin{pmatrix} 1 \\ \mathbf{a}^{(l)} \end{pmatrix}. \quad (3.34) $$
Ở đây, phần tử đầu tiên được cố định ở 1, biểu thị thuật ngữ độ lệch. Đối với mỗi lớp của mạng nơ-ron, phần tử trên cùng của vectơ kích hoạt cho lớp $l$ bây giờ được cố định ở 1. Sau khi nhân vectơ kích hoạt này với $\bar{\mathbf{W}}^{(l)}$, phần tử trên cùng của vectơ kích hoạt trên lớp tiếp theo vẫn là 1, bởi vì $\sigma(1) = 1$ ví dụ ReLU $\sigma(1) = 1$. Với những sự tăng cường này, các phương trình cho lan truyền tiến trở thành:
$$ \tilde{\mathbf{z}}^{(l)} = \bar{\mathbf{W}}^{(l)} \cdot \tilde{\mathbf{a}}^{(l-1)}, \quad (3.35) $$
$$ \tilde{\mathbf{a}}^{(l)} = \sigma(\tilde{\mathbf{z}}^{(l)}), \quad (3.36) $$
và đầu ra cuối cùng của mạng được cho bởi
$$ \tilde{\mathbf{a}}^{(L)} = \sigma(\tilde{\mathbf{z}}^{(L)}), \quad (3.37) $$
$$ \tilde{\mathbf{z}}^{(L)} = \bar{\mathbf{W}}^{(L)} \cdot \tilde{\mathbf{a}}^{(L-1)}, \quad (3.38) $$
trong đó $\bar{\mathbf{W}}^{(l)}$ là ma trận trọng số $(n_l+1) \times (n_{l-1}+1)$ cho lớp $l$, bao gồm các trọng số độ lệch. $\tilde{\mathbf{Z}}^{(l)}$ là vectơ tổng có trọng số $(n_l+1) \times 1$ cho lớp $l$. $\tilde{\mathbf{a}}^{(l)}$ là vectơ kích hoạt $(n_l+1) \times 1$ cho lớp $l$, tức là, không có hàng $(1 \quad 0 \quad \dots \quad 0)$, bởi vì không có sự tồn tại của lớp tiếp theo. Bằng cách này, thuật ngữ độ lệch được coi như một trọng số khác trong ma trận trọng số, và vectơ kích hoạt bao gồm độ lệch một cách ngầm định, xem Hình 3.9. Cuối cùng, chúng ta hãy thể hiện quá trình lan truyền tiến dưới dạng vectơ hóa cho tất cả các ví dụ huấn luyện. Giới thiệu một hàng gồm các số một để biểu diễn thuật ngữ độ lệch:

---

Bây giờ, $\tilde{\mathbf{A}}^{(0)}$ bao gồm thuật ngữ độ lệch. $\tilde{\mathbf{A}}^{(l)}$ là ma trận $(n_l+1) \times m$ (lớp với một hàng bổ sung cho thuật ngữ độ lệch). Ở đây, $\mathbf{a}_i^{(l)}$ biểu thị vectơ kích hoạt của lớp ($l$) cho ví dụ huấn luyện thứ $i$, và $m$ là số lượng ví dụ huấn luyện. Đối với mỗi lớp $l$, tổng có trọng số $\tilde{\mathbf{Z}}^{(l)}$ và kích hoạt $\tilde{\mathbf{A}}^{(l)}$ có thể được tính như sau:
$$ \tilde{\mathbf{A}}^{(0)} = \begin{pmatrix} 1 & 1 & \dots & 1 \\ \mathbf{a}_1^{(0)} & \mathbf{a}_2^{(0)} & \dots & \mathbf{a}_m^{(0)} \end{pmatrix}. \quad (3.39) $$
$$ \tilde{\mathbf{Z}}^{(l)} = \bar{\mathbf{W}}^{(l)} \cdot \tilde{\mathbf{A}}^{(l-1)}, \quad \tilde{\mathbf{A}}^{(l)} = \sigma(\tilde{\mathbf{Z}}^{(l)}), \quad \text{hay} \quad \bar{\mathbf{Z}}^{(l)} = \bar{\mathbf{W}}^{(l)} \cdot \bar{\mathbf{A}}^{(l-1)}, \quad \bar{\mathbf{A}}^{(l)} = \sigma(\bar{\mathbf{Z}}^{(l)}). \quad (3.40) $$
$\bar{\mathbf{W}}^{(l)}$ là ma trận trọng số $(n_l+1) \times (n_{l-1}+1)$ cho lớp $l$, bao gồm các trọng số độ lệch. $\tilde{\mathbf{Z}}^{(l)}$ là ma trận tổng có trọng số $(n_l+1) \times m$ cho lớp $l$. $\tilde{\mathbf{A}}^{(l)}$ là ma trận kích hoạt $(n_l+1) \times m$ cho lớp $l$, bao gồm thuật ngữ độ lệch.

Bây giờ, chúng ta có thể tóm tắt NN của Hình 3.9 trong các phương trình sau:
$$ \mathcal{N}: \mathbb{R}^4 \to \mathbb{R}^1, \quad (3.41.1) $$

*(Đánh dấu để bổ sung công thức phức tạp (3.41.2): Biểu diễn hàm lồng nhau của mạng với trọng số tăng cường.)*
$$ \mathcal{N}(\tilde{\mathbf{a}}^{(0)}) = \sigma^{(4)} \left( \bar{\mathbf{W}}^{(4)} \cdot \sigma^{(3)} \left( \bar{\mathbf{W}}^{(3)} \cdot \sigma^{(2)} \left( \bar{\mathbf{W}}^{(2)} \cdot \sigma^{(1)} \left( \bar{\mathbf{W}}^{(1)} \cdot \tilde{\mathbf{a}}^{(0)} \right) \right) \right) \right) \quad (3.41.2) $$
*(Mô tả: Tương tự như (3.21.2), nhưng sử dụng $\bar{\mathbf{W}}$ cho ma trận trọng số tăng cường và $\tilde{\mathbf{a}}$ cho vectơ kích hoạt tăng cường.)*

---

**3.3 Mạng Đa lớp dưới dạng Đồ thị Tính toán của NN (Multilayer Network as a Computational NN Graph)**

Khi bạn tăng độ sâu và chiều rộng của một NN, thành phần của các hàm trở nên phức tạp hơn, dẫn đến sự tăng trưởng theo cấp số nhân của các thuật ngữ và phụ thuộc mới, dẫn đến sự tăng trưởng theo cấp số nhân trong biểu diễn toán học. Viết hàm này ở dạng đóng nhanh chóng trở nên không thực tế, và ngay cả khi bạn có thể viết nó ra, biểu thức kết quả sẽ dài và khó quản lý một cách không thể tin được. Ví dụ, hàm toàn cục được đánh giá bởi NN của Hình 3.4 như sau:
$$ \mathcal{N}(\mathbf{a}^{(0)}) = \sigma^{(4)} \left( \mathbf{W}^{(4)} \cdot \left[ \sigma^{(3)} \left( \mathbf{W}^{(3)} \cdot \left[ \sigma^{(2)} \left( \mathbf{W}^{(2)} \cdot \left[ \sigma^{(1)} \left( \mathbf{W}^{(1)} \cdot \mathbf{a}^{(0)} + \mathbf{w}_0^{(1)} \right) \right] + \mathbf{w}_0^{(2)} \right) \right] + \mathbf{w}_0^{(3)} \right) \right] + \mathbf{w}_0^{(4)} \right) $$
$$ = \sigma^{(4)} \left( \begin{pmatrix} w_{11}^{(4)} & w_{21}^{(4)} & w_{31}^{(4)} \end{pmatrix}_{1 \times 3} \cdot \sigma^{(3)} \left( \begin{pmatrix} w_{11}^{(3)} & w_{12}^{(3)} & w_{13}^{(3)} \\ w_{21}^{(3)} & w_{22}^{(3)} & w_{23}^{(3)} \\ w_{31}^{(3)} & w_{32}^{(3)} & w_{33}^{(3)} \end{pmatrix}_{3 \times 3} \cdot \sigma^{(2)} \left( \dots \right) + \begin{pmatrix} w_{10}^{(3)} \\ w_{20}^{(3)} \\ w_{30}^{(3)} \end{pmatrix}_{3 \times 1} \right) + w_{10}^{(4)} \right) $$
$$ = \mathbf{a}^{(4)}. \quad (3.42.1) $$
*(Đánh dấu để bổ sung phần còn lại của công thức (3.42.1) vì nó rất dài và phức tạp, liên quan đến việc mở rộng các ma trận và vectơ bên trong.)*

---

trong đó, ví dụ $\sigma^{(1)}(z) = \sigma^{(2)}(z) = \sigma^{(3)}(z) = \sigma^{(4)}(z) = 1/(1+\exp(-z))$ là các hàm Sigmoid. Vì các AF phải được áp dụng theo từng phần tử cho các đối số vectơ, thuật ngữ bên trong của (3.42.1) trở thành
*(Đánh dấu để bổ sung công thức (3.42.2): Mở rộng thuật ngữ bên trong với hàm Sigmoid.)*
$$ \sigma^{(1)} \left( \begin{pmatrix} w_{11}^{(1)} & w_{12}^{(1)} & w_{13}^{(1)} & w_{14}^{(1)} \\ w_{21}^{(1)} & w_{22}^{(1)} & w_{23}^{(1)} & w_{24}^{(1)} \\ w_{31}^{(1)} & w_{32}^{(1)} & w_{33}^{(1)} & w_{34}^{(1)} \end{pmatrix}_{3 \times 4} \begin{pmatrix} a_1^{(0)} \\ a_2^{(0)} \\ a_3^{(0)} \\ a_4^{(0)} \end{pmatrix}_{4 \times 1} + \begin{pmatrix} w_{10}^{(1)} \\ w_{20}^{(1)} \\ w_{30}^{(1)} \end{pmatrix}_{3 \times 1} \right) $$
$$ = \sigma^{(1)} \begin{pmatrix} w_{11}^{(1)}a_1^{(0)} + w_{12}^{(1)}a_2^{(0)} + w_{13}^{(1)}a_3^{(0)} + w_{14}^{(1)}a_4^{(0)} + w_{10}^{(1)} \\ w_{21}^{(1)}a_1^{(0)} + w_{22}^{(1)}a_2^{(0)} + w_{23}^{(1)}a_3^{(0)} + w_{24}^{(1)}a_4^{(0)} + w_{20}^{(1)} \\ w_{31}^{(1)}a_1^{(0)} + w_{32}^{(1)}a_2^{(0)} + w_{33}^{(1)}a_3^{(0)} + w_{34}^{(1)}a_4^{(0)} + w_{30}^{(1)} \end{pmatrix} $$
$$ = \begin{pmatrix} \frac{1}{1+e^{-(w_{11}^{(1)}a_1^{(0)} + \dots + w_{10}^{(1)})}} \\ \frac{1}{1+e^{-(w_{21}^{(1)}a_1^{(0)} + \dots + w_{20}^{(1)})}} \\ \frac{1}{1+e^{-(w_{31}^{(1)}a_1^{(0)} + \dots + w_{30}^{(1)})}} \end{pmatrix}. \quad (3.42.2) $$
Cố gắng tìm đạo hàm của hàm hợp phức tạp $\mathcal{N}(\mathbf{a}^{(0)})$ bằng đại số trở nên ngày càng tẻ nhạt khi chúng ta tăng độ phức tạp của NN.

---

Xem NN như một đồ thị tính toán là một sự trừu tượng hóa hữu ích giúp hiểu và triển khai NN. Đồ thị tính toán cung cấp một biểu diễn rõ ràng và có cấu trúc của các hoạt động của NN, giúp dễ dàng áp dụng quy tắc chuỗi và thực hiện các tính toán hiệu quả để tìm đạo hàm của các hàm hợp bằng cách sử dụng BP và vi phân tự động, như chúng ta sẽ thấy trong các phần tiếp theo.

Đồ thị tính toán tách phép tính lớn thành các bước nhỏ, và chúng ta có thể tìm đạo hàm của từng bước (mỗi phép tính) trên đồ thị. Sau đó, quy tắc chuỗi cho đạo hàm của đầu ra cuối cùng. Đây là một cải tiến cực kỳ hiệu quả đối với việc tính toán đạo hàm. Lúc đầu, có vẻ không thể tin được rằng việc tổ chức lại các phép tính có thể tạo ra sự khác biệt lớn như vậy. Cuối cùng, bạn phải tính đạo hàm cho từng bước và nhân theo quy tắc chuỗi. Nhưng phương pháp này thì có.

**Định nghĩa (Đồ thị Tính toán Có hướng Không chu trình - Directed Acyclic Computational Graph):** Một đồ thị tính toán có hướng không chu trình là một đồ thị có hướng của các nút, trong đó mỗi nút chứa một biến. Các cạnh có thể được liên kết với các tham số có thể học được. Một biến trong một nút hoặc là cố định bên ngoài (đối với các nút đầu vào không có cạnh đến), hoặc nó được tính toán như một hàm của các biến ở các đầu đuôi của các cạnh đi vào nút và các tham số có thể học được trên các cạnh đến.
**Nhận xét:**

*   Chúng ta đã sử dụng đồ thị xuyên suốt để biểu diễn NN. Sau đây, chúng ta sẽ sử dụng đồ thị để biểu diễn các biểu thức thay thế.
*   Một đồ thị là một tập hợp các nút (đỉnh) và các cạnh nối các nút này. Trong một đồ thị có hướng, mỗi cạnh có một hướng cụ thể, cho biết mối quan hệ giữa các nút được kết nối.
*   Đồ thị không chu trình có nghĩa là không có chu trình hoặc vòng lặp trong đồ thị. Nói cách khác, bạn không thể bắt đầu tại một nút và theo một chuỗi các cạnh để quay lại cùng một nút đó.
*   Mỗi nút trong đồ thị chứa một biến. Biến này có thể biểu thị các đại lượng hoặc dữ liệu khác nhau, tùy thuộc vào ngữ cảnh của đồ thị tính toán.
*   Đối với các nút đầu vào không có cạnh đến, các biến được cố định bên ngoài. Điều này có nghĩa là các giá trị của các biến này được cung cấp từ một nguồn bên ngoài thay vì được tính toán trong đồ thị.

*Được Việt hoá từ tài liệu của TS. Lê Quang Minh cung cấp.*