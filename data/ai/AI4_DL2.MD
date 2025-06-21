# HỌC SÂU VÀ MẠNG NƠ-RON 2 (DEEP LEARNING AND NEURAL NET 2)
---

## 3.4 Vi Phân Tự Động và Các Chế Độ Chính Của Nó (Automatic Differentiation and Its Main Modes)

Vi Phân Tự Động (Automatic Differentiation - AD) là một kỹ thuật được sử dụng trong toán học tính toán và khoa học máy tính để đánh giá đạo hàm của các hàm một cách hiệu quả và chính xác [71-74]. Nó đóng một vai trò quan trọng trong học máy, tối ưu hóa và tính toán khoa học. AD còn được gọi là vi phân thuật toán hoặc autodiff. Lan truyền ngược (Backpropagation - BP) thực sự là một trường hợp đặc biệt của vi phân tự động. Có thể sẽ dễ hiểu hơn ý tưởng cơ bản của BP bằng cách xem xét thuật toán tổng quát hơn trước. Vì lý do đó, trước tiên chúng ta sẽ nói về autodiff.

**Ý tưởng cốt lõi [71]:** Vi phân tự động khai thác thực tế rằng tất cả các phép tính số, bất kể phức tạp đến đâu, cuối cùng đều là sự kết hợp của một tập hợp hữu hạn các phép toán số học cơ bản (cộng, trừ, nhân, chia, v.v.) và các hàm cơ bản (hàm mũ, logarit, lượng giác, v.v.), mà đạo hàm của chúng đã được biết đến, và kết hợp các đạo hàm của các phép toán thông qua quy tắc chuỗi sẽ cho ra đạo hàm của thành phần tổng thể. Bằng cách đó, AD có thể tự động và chính xác tính toán gradient, ngay cả đối với các hàm có thành phần phức tạp và các phép toán lồng nhau.

Ví dụ: Xét hàm vô hướng
$$ f(x) = \exp(\exp(x) + \exp(x)^2) + \sin(\exp(x) + \exp(x)^2). \quad (3.43) $$
Bằng cách giới thiệu các biến trung gian, bạn có thể chia nhỏ các biểu thức phức tạp thành các bước đơn giản hơn, giúp áp dụng quy tắc chuỗi và tính toán đạo hàm dễ dàng hơn. Giả sử
$$ a = \exp(x), \quad b = a^2, \quad c = a+b, \quad d = \exp(c), \quad e = \sin(c), \quad (3.44.1) $$
và cuối cùng chúng ta có

---

$$ f = d+e. \quad (3.44.2) $$
Nền tảng của vi phân tự động là sự phân tách các vi phân được cung cấp bởi quy tắc chuỗi của đạo hàm riêng của các hàm hợp. Đối với thành phần đơn giản
$$ y = g_3(g_2(g_1(x))) $$
$$ = g_3(g_2(v_0)) $$
$$ = g_3(v_1) $$
$$ = v_3, \quad (3.45) $$
trong đó
$$ v_0 = x, \quad v_1 = g_1(v_0), \quad v_2 = g_2(v_1), \quad v_3 = g_3(v_2) = y, \quad (3.46) $$
quy tắc chuỗi cho
$$ \frac{\partial y}{\partial x} = \frac{\partial y}{\partial v_2} \left( \frac{\partial v_2}{\partial v_1} \frac{\partial v_1}{\partial x} \right) $$
$$ = \left( \frac{\partial y}{\partial v_2} \frac{\partial v_1}{\partial v_1} \right) \frac{\partial v_1}{\partial x}. \quad (3.47) $$
Thông thường, hai chế độ vi phân tự động riêng biệt được trình bày.

**Chế độ Tiến (Forward Mode):**

*   Tích lũy tiến (còn gọi là chế độ từ dưới lên, chế độ tiến, hoặc chế độ tiếp tuyến)
*   Trong chế độ tiến, phép tính tiến hành từ các biến đầu vào đến các biến đầu ra.
*   Tích lũy tiến chỉ định rằng người ta duyệt qua quy tắc chuỗi từ trong ra ngoài (nghĩa là, đầu tiên tính $\partial v_1 / \partial x$ và sau đó $\partial v_2 / \partial v_1$ và cuối cùng là $\partial y / \partial v_2$).

---

*   Nói một cách ngắn gọn hơn, tích lũy tiến tính toán quan hệ đệ quy: $\frac{\partial v_i}{\partial x} = \frac{\partial v_i}{\partial v_{i-1}} \frac{\partial v_{i-1}}{\partial x}$ với $v_3 = y$.
*   Trong AD tích lũy tiến, đầu tiên người ta cố định biến độc lập mà theo đó phép vi phân được thực hiện và tính toán đạo hàm của từng biểu thức con một cách đệ quy. Điều này liên quan đến việc thay thế lặp đi lặp lại đạo hàm của các hàm bên trong trong quy tắc chuỗi:
    $$ \frac{\partial y}{\partial x} = \frac{\partial y}{\partial v_{n-1}} \frac{\partial v_{n-1}}{\partial x} $$
    $$ = \frac{\partial y}{\partial v_{n-1}} \left( \frac{\partial v_{n-1}}{\partial v_{n-2}} \frac{\partial v_{n-2}}{\partial x} \right) $$
    $$ = \frac{\partial y}{\partial v_{n-1}} \left( \frac{\partial v_{n-1}}{\partial v_{n-2}} \left( \frac{\partial v_{n-2}}{\partial v_{n-3}} \frac{\partial v_{n-3}}{\partial x} \right) \right) $$
    $$ = \dots \quad (3.48) $$
*   Trong tích lũy tiến, đại lượng quan tâm là tiếp tuyến, ký hiệu bằng dấu chấm $\dot{v}_i$; nó là đạo hàm của một biểu thức con đối với một biến độc lập đã chọn
    $$ \dot{v}_i = \frac{\partial v_i}{\partial x}. \quad (3.49) $$
*   Tích lũy tiến đặc biệt hữu ích khi số lượng biến đầu vào nhỏ hơn nhiều so với số lượng biến đầu ra (đối với các hàm $f: \mathbb{R}^n \to \mathbb{R}^m$ với $n \ll m$).

---

**Chế độ Ngược (hay Chế độ Lùi) (Reverse Mode (or Backward Mode)):**

*   Tích lũy ngược (còn gọi là chế độ từ trên xuống, chế độ ngược, hoặc chế độ phụ trợ)
*   Trong chế độ ngược, phép tính tiến hành ngược từ các biến đầu ra đến các biến đầu vào.
*   Tích lũy ngược có sự duyệt từ ngoài vào trong (đầu tiên tính $\partial y / \partial v_2$ và sau đó $\partial v_2 / \partial v_1$ và cuối cùng là $\partial v_1 / \partial x$).

---

*   Nói một cách ngắn gọn hơn, tích lũy ngược tính toán quan hệ đệ quy: $\frac{\partial y}{\partial v_i} = \frac{\partial y}{\partial v_{i+1}} \frac{\partial v_{i+1}}{\partial v_i}$ với $v_0 = x$.
*   Trong AD tích lũy ngược, biến phụ thuộc cần được vi phân được cố định và đạo hàm được tính toán đối với từng biểu thức con một cách đệ quy. Đạo hàm của các hàm bên ngoài được thay thế lặp đi lặp lại trong quy tắc chuỗi:
    $$ \frac{\partial y}{\partial x} = \frac{\partial y}{\partial v_1} \frac{\partial v_1}{\partial x} $$
    $$ = \left( \frac{\partial y}{\partial v_2} \frac{\partial v_2}{\partial v_1} \right) \frac{\partial v_1}{\partial x} $$
    $$ = \left( \left( \frac{\partial y}{\partial v_3} \frac{\partial v_3}{\partial v_2} \right) \frac{\partial v_2}{\partial v_1} \right) \frac{\partial v_1}{\partial x} $$
    $$ = \dots \quad (3.50) $$
*   Trong tích lũy ngược, đại lượng quan tâm là phụ trợ, ký hiệu bằng một thanh ngang $\bar{v}_i$; nó là đạo hàm của một biến phụ thuộc đối với một biểu thức con
    $$ \bar{v}_i = \frac{\partial y}{\partial v_i}. \quad (3.51) $$
*   Tích lũy ngược đặc biệt hiệu quả khi số lượng biến đầu ra nhỏ hơn nhiều so với số lượng biến đầu vào (đối với các hàm $f: \mathbb{R}^n \to \mathbb{R}^m$ với $n \gg m$).

---

**Ví dụ về Chế độ Tiến (Example of Forward Mode)**

Các bước của chế độ tiến:
*   Biểu diễn hàm của bạn dưới dạng một thành phần của các phép toán cơ bản (cộng, nhân, v.v.).
*   Chọn các biến mà bạn muốn tính đạo hàm theo (các mầm - seeds) (thường là các biến đầu vào).
*   Thực thi đồ thị tính toán theo hướng tiến, đánh giá cả giá trị hàm và đạo hàm của các phép toán cơ bản (giá trị hàm đối với mầm).
*   Lưu trữ các giá trị trung gian (giá trị hàm và đạo hàm) tại mỗi nút trong đồ thị tính toán.
*   Sử dụng quy tắc chuỗi để lan truyền các đạo hàm qua đồ thị tính toán.
*   Kết hợp các giá trị trung gian đã lưu trữ để tính đạo hàm của hàm tổng thể đối với từng biến đầu vào.
*   Trích xuất các đạo hàm quan tâm. Các đạo hàm này biểu thị gradient của hàm đối với các biến đầu vào đã chọn.

Ở phía bên trái của **Bảng 3.1** chúng ta thấy biểu diễn của phép tính $y = f(x_1, x_2) = \ln(x_1) + x_1 x_2 - \sin(x_2)$ dưới dạng một dấu vết đánh giá của các phép toán cơ bản—còn được gọi là danh sách Wengert và được biểu diễn đồ họa trong **Hình 3.13**. Để tính đạo hàm của $f$ đối với $x_1$, chúng ta bắt đầu bằng cách liên kết với mỗi biến trung gian $v_i$ một đạo hàm $\dot{v}_i = \frac{\partial v_i}{\partial x_1}$. Áp dụng quy tắc chuỗi cho mỗi phép toán cơ bản trong dấu vết nguyên thủy tiến, chúng ta tạo ra dấu vết tiếp tuyến (đạo hàm) tương ứng, được đưa ra ở phía bên phải trong **Bảng 3.1**.

![alt text](hh3.13.png)

*(Đánh dấu để bổ sung Hình 3.13: Ví dụ về tích lũy tiến với đồ thị tính toán của y = f(x1, x2) = ln(x1) + x1x2 - sin(x2).)*
**Hình 3.13.** Ví dụ về tích lũy tiến với đồ thị tính toán của $y = f(x_1, x_2) = \ln(x_1) + x_1x_2 - \sin(x_2)$. Việc lựa chọn biến độc lập mà theo đó phép vi phân được thực hiện ảnh hưởng đến các giá trị mầm $\dot{v}_{-1}$ và $\dot{v}_0$. Quan tâm đến đạo hàm của hàm này đối với $x_1$, các giá trị mầm phải được đặt thành: $\dot{v}_{-1} = \dot{x}_1 = 1, \dot{v}_0 = \dot{x}_2 = 0$.
*(Mô tả: Đồ thị tính toán cho thấy các đầu vào x1, x2 đi qua các phép toán trung gian v-1, v0, v1, v2, v3, v4, v5 để tạo ra đầu ra cuối cùng f(x1, x2). Các mũi tên chỉ hướng tiến. Các công thức tính đạo hàm riêng (ví dụ: $\dot{v}_1 = \partial v_1 / \partial x_1$) được hiển thị dọc theo các cạnh.)*

---

**Bảng 3.1.** Ví dụ AD chế độ tiến, với $y = f(x_1, x_2) = \ln(x_1) + x_1 x_2 - \sin(x_2)$ được đánh giá tại $(x_1, x_2) = (2,5)$ và đặt $\dot{x}_1=1$ để tính $\partial y / \partial x_1$, xem Hình 3.13. Đánh giá ban đầu của các giá trị nguyên thủy ở bên trái được tăng cường bởi các phép toán tiếp tuyến ở bên phải, trong đó mỗi dòng bổ sung cho đánh giá ban đầu ở bên trái của nó.

| Dấu vết Nguyên thủy Tiến          | Dấu vết Tiếp tuyến (Đạo hàm) Tiến           |
| ----------------------------------- | -------------------------------------------------- |
| $v_{-1} = x_1 = 2$                  | $\dot{v}_{-1} = \dot{x}_1 = 1$                       |
| $v_0 = x_2 = 5$                     | $\dot{v}_0 = \dot{x}_2 = 0$                          |
| $v_1 = \ln v_{-1} = \ln 2$          | $\dot{v}_1 = \dot{v}_{-1} / v_{-1} = 1/2$             |
| $v_2 = v_{-1} \times v_0 = 2 \times 5$ | $\dot{v}_2 = \dot{v}_{-1} \times v_0 + v_{-1} \times \dot{v}_0 = 1 \times 5 + 0 \times 2 = 5$ |
| $v_3 = \sin v_0 = \sin 5$           | $\dot{v}_3 = \dot{v}_0 \cos v_0 = 0 \times \cos 5 = 0$ |
| $v_4 = v_1 + v_2 = 0.693 + 10$      | $\dot{v}_4 = \dot{v}_1 + \dot{v}_2 = 0.5 + 5 = 5.5$    |
| $v_5 = v_4 - v_3 = 10.693 + 0.959$  | $\dot{v}_5 = \dot{v}_4 - \dot{v}_3 = 5.5 - 0 = 5.5$    |
| $y = v_5 = 11.652$                  | $\dot{y} = \dot{v}_5 = 5.5$                          |

**Ví dụ về Chế độ Ngược (Example of Reverse Mode)**

Quay lại ví dụ $y = f(x_1, x_2) = \ln(x_1) + x_1 x_2 - \sin(x_2)$, xem **Hình 3.14**. Trong **Bảng 3.2**, chúng ta thấy các câu lệnh phụ trợ ở phía bên phải, và phép toán cơ bản ban đầu ở phía bên trái. Nói một cách đơn giản, chúng ta quan tâm đến việc tính toán sự đóng góp $\bar{v}_i = \frac{\partial y}{\partial v_i}$ của sự thay đổi trong mỗi biến $v_i$ vào sự thay đổi trong đầu ra $y$. Sau lượt tiến ở phía bên trái, chúng ta chạy lượt ngược của các phụ trợ ở phía bên phải, bắt đầu với $\bar{v}_5 = \bar{y} = \frac{\partial y}{\partial y} = 1$. Cuối cùng, chúng ta nhận được các đạo hàm $\frac{\partial y}{\partial x_1} = \bar{x}_1$ và $\frac{\partial y}{\partial x_2} = \bar{x}_2$ chỉ trong một lượt ngược.


![alt text](hh3.14.png)

*(Đánh dấu để bổ sung Hình 3.14: Ví dụ về tích lũy ngược với đồ thị tính toán của y = f(x1, x2) = ln(x1) + x1x2 - sin(x2).)*
**Hình 3.14.** Ví dụ về tích lũy ngược với đồ thị tính toán của $y = f(x_1, x_2) = \ln(x_1) + x_1x_2 - \sin(x_2)$. Tích lũy ngược đánh giá hàm trước và tính toán các đạo hàm đối với tất cả các biến độc lập trong một lượt bổ sung. Phụ trợ, $\bar{v}_i$, là đạo hàm của một biến phụ thuộc đối với một biểu thức con $\bar{v}_i = \frac{\partial y}{\partial v_i}$.
*(Mô tả: Tương tự như Hình 3.13, nhưng các mũi tên chỉ hướng ngược (từ đầu ra đến đầu vào). Các công thức tính đạo hàm riêng (ví dụ: $\bar{v}_4 = \partial y / \partial v_4$) được hiển thị dọc theo các cạnh.)*

---

**Bảng 3.2.** Ví dụ AD chế độ ngược, với $y = f(x_1, x_2) = \ln(x_1) + x_1 x_2 - \sin(x_2)$ được đánh giá tại $(x_1, x_2) = (2,5)$. Sau khi đánh giá thuận các giá trị nguyên thủy ở bên trái, các phép toán phụ trợ ở bên phải được đánh giá (xem Hình 3.14). Lưu ý rằng cả $\partial y / \partial x_1$ và $\partial y / \partial x_2$ đều được tính toán trong cùng một lượt ngược, bắt đầu từ $\bar{v}_5 = \bar{y} = \frac{\partial y}{\partial y} = 1$.

| Dấu vết Nguyên thủy Tiến          | Dấu vết Phụ trợ (Đạo hàm) Ngược                                                                                                                                                                    |      |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---- |
| $v_{-1} = x_1 = 2$                  | $\bar{v}_5 = \bar{y}$                                                                                                                                                                                    | = 1  |
| $v_0 = x_2 = 5$                     | $\bar{v}_4 = \bar{v}_5 \frac{\partial v_5}{\partial v_4} = \bar{v}_5 \times (1)$                                                                                                                             | = 1  |
| $v_1 = \ln v_{-1} = \ln 2$          | $\bar{v}_3 = \bar{v}_5 \frac{\partial v_5}{\partial v_3} = \bar{v}_5 \times (-1)$                                                                                                                           | = -1 |
| $v_2 = v_{-1} \times v_0 = 2 \times 5$ | $\bar{v}_1 = \bar{v}_4 \frac{\partial v_4}{\partial v_1} = \bar{v}_4 \times 1$                                                                                                                             | = 1  |
| $v_3 = \sin v_0 = \sin 5$           | $\bar{v}_2 = \bar{v}_4 \frac{\partial v_4}{\partial v_2} = \bar{v}_4 \times 1$                                                                                                                             | = 1  |
| $v_4 = v_1 + v_2 = 0.693 + 10$      | $\bar{v}_0 = \frac{\partial y}{\partial v_0} + \bar{v}_2 \frac{\partial v_2}{\partial v_0} = \bar{v}_3 \cos v_0 + \bar{v}_2 v_{-1}$                                                                                      | = 1.716 |
| $v_5 = v_4 - v_3 = 10.693 + 0.959$  | $\bar{v}_{-1} = \frac{\partial y}{\partial v_{-1}} + \bar{v}_1 \frac{\partial v_1}{\partial v_{-1}} = \bar{v}_2 v_0 + \frac{\bar{v}_1}{v_{-1}}$                                                                              | = 5.5 |
| $y = v_5 = 11.652$                  | $\bar{x}_2 = \bar{v}_0$                                                                                                                                                                                  | = 1.716 |
|                                     | $\bar{x}_1 = \bar{v}_{-1}$                                                                                                                                                                                  | = 5.5 |

---

**Nhận xét:**

*   Tích lũy ngược duyệt qua quy tắc chuỗi từ ngoài vào trong. Hàm ví dụ có giá trị vô hướng, và do đó chỉ có một mầm cho phép tính đạo hàm, và chỉ cần một lượt của đồ thị tính toán để tính toán gradient (hai thành phần) so với tích lũy tiến. Đây chỉ là một nửa công việc so với tích lũy tiến, nhưng tích lũy ngược đòi hỏi phải lưu trữ các biến trung gian $v_i$ cũng như các lệnh đã tạo ra chúng trong một cấu trúc dữ liệu được gọi là "băng" (tape) hoặc danh sách Wengert, có thể tiêu tốn bộ nhớ đáng kể nếu đồ thị tính toán lớn.
*   Chế độ tiến yêu cầu một đồ thị mới cho mỗi đầu vào $x_i$, để tính đạo hàm riêng $\frac{\partial y}{\partial x_i}$.
*   Chế độ ngược bắt đầu với đầu ra $y$. Nó tính toán các đạo hàm đối với cả hai đầu vào. Các phép tính đi ngược qua đồ thị. Điều đó có nghĩa là nó không theo đường trống bắt đầu bằng $\partial x_2 / \partial x_1 = 0$ trong đồ thị tiến cho các đạo hàm $x_1$. Và nó sẽ không theo đường trống $\partial x_1 / \partial x_2 = 0$ trong đồ thị tiến cho các đạo hàm $x_2$.
*   Một vấn đề lớn hơn và thực tế hơn với $N$ đầu vào sẽ có $N$ đồ thị tiến, với $N-1$ đường trống (vì $N$ đầu vào là độc lập). Đạo hàm của $x_i$ đối với mọi đầu vào khác $x_j$ là $\partial x_i / \partial x_j = 0$. Thay vì $N$ đồ thị tiến từ $N$ đầu vào, chúng ta sẽ có một đồ thị ngược từ một đầu ra. Đây là thành công của chế độ ngược.
*   Bởi vì thực hành học máy chủ yếu liên quan đến gradient của một mục tiêu có giá trị vô hướng đối với một số lượng lớn các tham số, điều này thiết lập chế độ ngược, trái ngược với chế độ tiến, là kỹ thuật chủ đạo dưới dạng thuật toán BP.

cho mục đích tối ưu hóa dựa trên gradient, chẳng hạn như GD. Các giải pháp dạng đóng, cung cấp một biểu thức rõ ràng cho các đạo hàm này, thường khó nắm bắt do tính chất phức tạp của thành phần các hàm trong đồ thị. Chế độ ngược của vi phân tự động hoặc BP giải quyết vấn đề này bằng cách áp dụng đệ quy quy tắc chuỗi. Trong một đồ thị tính toán đại diện cho một NN, quy tắc chuỗi cần được áp dụng nhiều lần. Điều này là do đầu ra thường là một hàm phức tạp của nhiều biến trung gian, và quy tắc chuỗi giúp chia nhỏ đạo hàm đối với từng biến. Thay vì viết rõ ràng toàn bộ hàm và vi phân nó đối với từng tham số, BP cho phép thuật toán duyệt ngược đồ thị tính toán, tính toán các đạo hàm tại mỗi bước. Bằng cách này, độ phức tạp của phép tính được quản lý tự động, và người ta có thể tính toán hiệu quả các gradient cần thiết để tối ưu hóa mà không cần phải xử lý biểu thức dạng đóng rõ ràng. Về bản chất, BP tận dụng cấu trúc của đồ thị tính toán để tính toán gradient một cách hiệu quả, giúp có thể huấn luyện các NN sâu và rộng mà không cần phải viết ra và vi phân toàn bộ hàm theo cách thủ công. Thuật toán BP là một nền tảng của học sâu hiện đại.

---

## 3.5 Quá Trình Huấn Luyện và Hàm Mất Mát/Chi Phí (Training Process and Loss/Cost Functions)

Các hàm mất mát, còn được gọi là hàm chi phí hoặc hàm mục tiêu, đóng một vai trò quan trọng trong việc huấn luyện NN. Các hàm này đo lường mức độ hoạt động tốt của mô hình bằng cách định lượng sự khác biệt giữa các giá trị dự đoán và các giá trị thực tế cơ bản. Mất mát về cơ bản là một thước đo sai số của mô hình. Việc lựa chọn một hàm mất mát cụ thể phụ thuộc vào bản chất của vấn đề bạn đang cố gắng giải quyết. Các tác vụ khác nhau, chẳng hạn như hồi quy hoặc phân loại, có thể yêu cầu các hàm mất mát khác nhau.

**Sai số Bình phương Trung bình (Mean Squared Error)**

Hàm mất mát bậc hai, còn được gọi là sai số bình phương trung bình hoặc MSE, thực sự thường được sử dụng, đặc biệt là trong các bài toán hồi quy và khi sử dụng kỹ thuật bình phương tối thiểu. Công thức toán học là:
$$ L_{MSE} = -\frac{1}{n} \sum_{i=1}^n (y_j - a_j)^2, \quad (3.52.1) $$
hoặc
$$ L_{MSE} = c \sum_{j=1}^n (y_j - a_j)^2, \quad (3.52.2) $$
trong đó $n$ là số lượng các trường hợp trong tập dữ liệu, $y_j$ là giá trị thực tế và $a_j$ là giá trị dự đoán, cho trường hợp thứ $j$ và $c$ là một hằng số (giá trị của hằng số không ảnh hưởng đến quyết định và có thể bỏ qua bằng cách đặt nó bằng 1). Đạo hàm đối với $a_i$ là (trong trường hợp $c = 1/2$):
$$ \frac{\partial L_{MSE}}{\partial a_i} = \frac{1}{2} \frac{\partial}{\partial a_i} \sum_{j=1}^n (y_j - a_j)^2 $$
$$ = \frac{1}{2} \frac{\partial}{\partial a_i} (y_i - a_i)^2 $$
$$ = a_i - y_i. \quad (3.53) $$
Thuật ngữ tổng trên $j=1$ đến $n$ bị bỏ vì đạo hàm $\frac{\partial}{\partial a_i} (y_j - a_j)^2$ sẽ bằng không cho tất cả $j$ ngoại trừ trường hợp $j=i$. Mất mát bậc hai có một số thuộc tính mong muốn:

*   Dạng bậc hai đơn giản hóa các phép toán, giúp dễ dàng tìm ra các giải pháp phân tích và đạo hàm. Điều này đặc biệt thuận lợi trong các thuật toán tối ưu hóa.
*   Mất mát đối xứng đối với các sai số trên và dưới mục tiêu. Một sai số $y_i - a_i$ và $a_i - y_i$ cả hai đều đóng góp cùng một lượng vào mất mát.
*   Việc sử dụng mất mát bậc hai rất phù hợp cho các vấn đề trong đó mục tiêu là giảm thiểu sự khác biệt bình phương trung bình giữa dự đoán và thực tế. Tuy nhiên, nó nhạy cảm với các giá trị ngoại lệ, và nếu dữ liệu của bạn chứa các giá trị ngoại lệ, các hàm mất mát khác như Huber loss hoặc Tukey's bisquare loss có thể mạnh mẽ hơn.

---

**Binary Cross-Entropy (Mất mát Logistic) (Binary Cross-Entropy (Logistic Loss)):**

Binary Cross-Entropy (BCE), còn được gọi là mất mát logistic, là một hàm mất mát thường được sử dụng trong các bài toán phân loại nhị phân. Nó đặc biệt liên quan đến các vấn đề trong đó mục tiêu là phân loại các trường hợp thành một trong hai lớp, thường được ký hiệu là 0 hoặc 1. Mất mát được tính cho từng trường hợp, và mất mát tổng thể là trung bình trên tất cả các trường hợp trong tập dữ liệu. Công thức cho mất mát BCE như sau:
$$ L_{BCE} = -\frac{1}{n} \sum_{j=1}^n \{ y_j \log(a_j) + (1-y_j) \log(1-a_j) \}, \quad (3.54) $$
trong đó $n$ là số lượng các trường hợp trong tập dữ liệu, $y_j$ là nhãn thực cho trường hợp thứ $j$ (0 hoặc 1) và $a_j$ là xác suất dự đoán rằng trường hợp thứ $j$ thuộc về lớp 1. Hàm mất mát này thường được sử dụng trong hồi quy logistic và các mô hình NN với AF Sigmoid trong lớp đầu ra để phân loại nhị phân. Đạo hàm đối với $a_i$ là:
$$ \frac{\partial L_{BCE}}{\partial a_i} = \frac{\partial}{\partial a_i} \left\{ -\frac{1}{n} \sum_{j=1}^n (y_j \log(a_j) - (1-y_j) \log(1-a_j)) \right\} $$
$$ = \frac{\partial}{\partial a_i} \left\{ -\frac{1}{n} (y_i \log(a_i) - (1-y_i) \log(1-a_i)) \right\} $$
$$ = -\frac{1}{n} \left( y_i \frac{1}{a_i} - (1-y_i) \frac{(-1)}{(1-a_i)} \right) $$
$$ = -\frac{1}{n} \left( \frac{y_i}{a_i} - \frac{1-y_i}{1-a_i} \right) $$
$$ = \frac{1}{n} \frac{a_i - y_i}{a_i(1-a_i)}. \quad (3.55) $$

---

Sức mạnh của NN nằm ở khả năng học và tối ưu hóa các tham số một cách đồng thời thông qua một quá trình gọi là huấn luyện. Quá trình huấn luyện cơ bản cho một NN sử dụng GD và một hàm mất mát có thể được mô tả như sau:

*   Trong quá trình huấn luyện, mạng được cung cấp dữ liệu đầu vào cùng với các đầu ra mục tiêu tương ứng. Sau đó, các phép tính được thực hiện theo hướng tiến để xác định các giá trị dự đoán của đầu ra. Nếu các giá trị dự đoán này khác với các giá trị quan sát được trong dữ liệu huấn luyện, hãy tính toán giá trị mất mát. Hàm mất mát đo lường sự khác biệt giữa đầu ra dự đoán của NN và đầu ra thực (ground truth) cho một đầu vào nhất định. Về mặt toán học, nó thường được ký hiệu là $L_i$, trong đó chỉ số dưới $i$ cho biết trường hợp huấn luyện cụ thể. Mục tiêu tổng thể trong quá trình huấn luyện là giảm thiểu mất mát trung bình hoặc tổng mất mát trên tất cả các trường hợp huấn luyện, $\mathcal{L}$. Mất mát này thường được biểu thị bằng tổng các mất mát riêng lẻ trên toàn bộ tập dữ liệu huấn luyện. Hàm mục tiêu $\mathcal{L}$, đại diện cho mục tiêu của việc tối ưu hóa, là tổng hoặc trung bình của các mất mát riêng lẻ:
    $$ \mathcal{L} = \frac{1}{n} \sum_{i=1}^n L_i, \quad (3.56) $$
    trong đó $n$ là số lượng các trường hợp huấn luyện.
*   Một cách tượng trưng, chúng ta có thể viết hàm mất mát là $\mathcal{L}(\theta)$, trong đó $\theta$ là một vectơ của tất cả các trọng số và độ lệch trong mạng. Mục tiêu của chúng ta là di chuyển qua không gian mà hàm mất mát xác định để tìm cực tiểu, $\theta$ cụ thể dẫn đến mất mát nhỏ nhất, $\mathcal{L}$. Gradient của hàm mất mát đối với các tham số $\theta$ cho chúng ta biết hàm mất mát thay đổi như thế nào đối với từng tham số. GD là một thuật toán tối ưu hóa được sử dụng để giảm thiểu hàm mục tiêu trong NN. Nó hoạt động bằng cách điều chỉnh lặp đi lặp lại các trọng số của NN theo hướng ngược lại với gradient của hàm mục tiêu đối với các trọng số (di chuyển lặp đi lặp lại về phía cực tiểu của hàm). Sự điều chỉnh này tỷ lệ thuận với tốc độ học, một siêu tham số xác định kích thước bước trong bản cập nhật trọng số, xem lại Chương 2.
*   Do đó, để huấn luyện một NN thông qua GD, chúng ta cần biết mỗi giá trị trọng số và độ lệch đóng góp như thế nào vào hàm mất mát; nghĩa là, chúng ta cần biết $\partial \mathcal{L} / \partial w$ và $\partial \mathcal{L} / \partial b$, đối với một số trọng số $w$ và độ lệch $b$.

---

*   Các trọng số của NN được cập nhật theo hướng làm giảm mất mát. Quy tắc cập nhật chung cho một trọng số $w_{ij}$ được đưa ra bởi:
    $$ w_{ij} \text{ mới} = w_{ij} \text{ cũ} - \alpha \frac{\partial \mathcal{L}}{\partial w_{ij}}, \quad \Delta w_{ij} = -\alpha \frac{\partial \mathcal{L}}{\partial w_{ij}} \quad (3.57) $$
    trong đó $\alpha$ là một tham số tự do ($\alpha$ là "tốc độ học" mà chúng ta đặt trước khi huấn luyện; nó cho phép chúng ta điều chỉnh kích thước bước của mình theo vấn đề hiện tại), và $\partial \mathcal{L} / \partial w_{ij}$ là đạo hàm riêng của hàm mục tiêu đối với trọng số $w_{ij}$. Quá trình tính toán gradient, cập nhật trọng số và lặp lại quá trình này được thực hiện cho đến khi hiệu suất của mạng hội tụ đến một mức chấp nhận được hoặc một tiêu chí dừng được xác định trước được đáp ứng. Đây là bản chất của học có giám sát trong NN.
*   Giai đoạn này được gọi là giai đoạn ngược. Lý do gọi nó là giai đoạn ngược là các đạo hàm của mất mát đối với các trọng số gần đầu ra (nơi hàm mất mát được tính toán) dễ tính toán hơn và được tính toán trước. Các đạo hàm ngày càng phức tạp hơn khi chúng ta di chuyển về phía các trọng số cách xa đầu ra (theo hướng ngược).
*   Mục tiêu của BP là tính toán các đạo hàm riêng $\partial \mathcal{L} / \partial w$ và $\partial \mathcal{L} / \partial b$ của hàm chi phí $\mathcal{L}$ đối với bất kỳ trọng số $w$ hoặc độ lệch $b$ nào trong mạng.
*   Hãy nhớ từ Chương 2, các quy tắc chuỗi đơn biến và đa biến cho phép bạn tìm đạo hàm của một hàm hợp. Đặt $f(u)$ là một hàm của $u$, và $u=g(x)$ là một hàm khác của $x$. Hàm hợp là $h(x) = f(g(x))$. Quy tắc chuỗi đơn biến có thể được biểu thị dưới dạng:
    $$ \frac{dh(x)}{dx} = \frac{df(u)}{du} \frac{du}{dx}, \quad (3.58) $$
    hoặc
    $$ \frac{\partial f(g(x))}{\partial x} = \frac{\partial f(g(x))}{\partial g(x)} \frac{\partial g(x)}{\partial x}. \quad (3.59) $$

---

Quy tắc này phát biểu rằng đạo hàm của hàm hợp $h(x)$ đối với $x$ là tích của đạo hàm của $f$ đối với biến trung gian $u$ của nó, và đạo hàm của $g(x)$ đối với $x$. Đạo hàm $df(u)/du$ biểu thị gradient cục bộ của $f$ đối với đối số trung gian $u$ của nó, và $du/dx$ biểu thị gradient cục bộ của $g$ đối với đối số trung gian $x$ của nó. Trong NN, quy tắc chuỗi đơn biến này được áp dụng lặp đi lặp lại trong quá trình lan truyền ngược trong BP. Mỗi lớp của mạng tương ứng với một hàm, và quy tắc chuỗi được sử dụng để tính toán gradient đối với các tham số của mỗi lớp bằng cách kết hợp các gradient cục bộ tại mỗi bước. Quy tắc chuỗi đa biến được định nghĩa như sau:
$$ \frac{\partial f(g_1(x), \dots, g_k(x))}{\partial x} = \sum_{i=1}^k \frac{\partial f(g_1(x), \dots, g_k(x))}{\partial g_i(x)} \frac{\partial g_i(x)}{\partial x}. \quad (3.60) $$
Trong quá trình huấn luyện một NN, một epoch (hoặc vòng) đề cập đến một lượt đi hoàn chỉnh qua toàn bộ tập dữ liệu huấn luyện. Trong mỗi epoch, NN xử lý mọi ví dụ huấn luyện trong tập dữ liệu, tính toán mất mát, thực hiện BP để tính toán gradient. Đối với mỗi epoch, các tham số được cập nhật dựa trên các gradient tích lũy của mất mát đối với các trọng số, xem Ví dụ 3.1 để làm rõ.
Số lượng epoch là một siêu tham số xác định số lần thuật toán học sẽ hoạt động qua toàn bộ tập dữ liệu huấn luyện. Việc chọn đúng số lượng epoch là rất quan trọng. Quá ít epoch có thể dẫn đến việc mô hình không nắm bắt được các mẫu cơ bản trong dữ liệu, trong khi quá nhiều epoch có thể dẫn đến việc học quá mức (overfitting), trong đó mô hình học dữ liệu huấn luyện quá tốt nhưng không khái quát hóa được cho dữ liệu mới, chưa từng thấy.
Bằng cách học các tham số tối ưu, NN có thể nắm bắt các mẫu và mối quan hệ phức tạp trong dữ liệu, cho phép chúng khái quát hóa tốt cho các ví dụ chưa từng thấy. Việc tối ưu hóa đồng thời các tham số cho phép NN tạo ra các thành phần hàm phi tuyến và biểu cảm cao, làm cho chúng hiệu quả cho một loạt các tác vụ, chẳng hạn như nhận dạng hình ảnh, xử lý ngôn ngữ tự nhiên, v.v. Đây là điều làm cho NN mạnh mẽ hơn các khối xây dựng riêng lẻ hoặc các mô hình tham số cơ bản của chúng.

---

**Ví dụ 3.1**
Chúng ta hãy định nghĩa một NN đơn giản, chấp nhận hai giá trị đầu vào, có hai nút trong lớp ẩn của nó, và có một nút đầu ra duy nhất, như được hiển thị trong **Hình 3.15**. Chúng ta sẽ sử dụng AF Sigmoid $\sigma(z) = \frac{1}{1+e^{-z}}$ trong lớp ẩn. Lưu ý rằng đầu ra có AF đồng nhất $\sigma(z)=z$. Để huấn luyện mạng, chúng ta sẽ sử dụng hàm mất mát sai số bình phương, $L_{MSE} = \frac{1}{2}(y-a_2^{(2)})^2$, trong đó $y$ là giá trị thực tế và $a_1^{(2)}$ là giá trị dự đoán của mạng cho đầu vào liên quan đến $y$, cụ thể là $a_1^{(0)}$ và $a_2^{(0)}$.

![alt text](hh3.15.png)

*(Đánh dấu để bổ sung Hình 3.15: Một NN đơn giản.)*
**Hình 3.15.** Một NN đơn giản.
*(Mô tả: Sơ đồ của một NN 3 lớp với 2 nơ-ron đầu vào, 2 nơ-ron trong lớp ẩn và 1 nơ-ron đầu ra. Các kết nối có trọng số, độ lệch và các đạo hàm riêng liên quan đến hàm mất mát L được hiển thị.)*

---

**Giải pháp**
Lượt tiến bao gồm việc tính toán các kích hoạt tại mỗi lớp. Các phương trình cho lượt tiến như sau:
$$ z_1^{(1)} = w_{11}^{(1)} a_1^{(0)} + w_{12}^{(1)} a_2^{(0)} + w_{10}^{(1)}, $$
$$ a_1^{(1)} = \sigma(z_1^{(1)}) = \frac{1}{1+e^{-(w_{11}^{(1)}a_1^{(0)} + w_{12}^{(1)}a_2^{(0)} + w_{10}^{(1)})}}, $$
$$ z_2^{(1)} = w_{21}^{(1)} a_1^{(0)} + w_{22}^{(1)} a_2^{(0)} + w_{20}^{(1)}, $$
$$ a_2^{(1)} = \sigma(z_2^{(1)}) = \frac{1}{1+e^{-(w_{21}^{(1)}a_1^{(0)} + w_{22}^{(1)}a_2^{(0)} + w_{20}^{(1)})}}, $$
$$ z_1^{(2)} = w_{11}^{(2)} a_1^{(1)} + w_{12}^{(2)} a_2^{(1)} + w_{10}^{(2)}, $$
$$ a_1^{(2)} = \sigma(z_1^{(2)}) = w_{11}^{(2)} a_1^{(1)} + w_{12}^{(2)} a_2^{(1)} + w_{10}^{(2)}. $$
Nếu nhãn được liên kết với ví dụ huấn luyện $\mathbf{a}^{(0)} = (a_1^{(0)}, a_2^{(0)})^T$ là $y$, và đầu ra của mạng cho đầu vào này là $a_1^{(2)}$, thì chúng ta có thể định nghĩa một hàm mất mát đo lường sự khác biệt giữa đầu ra dự đoán và nhãn thực tế, $L_{MSE} = \frac{1}{2}(y-a_1^{(2)})^2$. Đối số của hàm mất mát là $a_1^{(2)}$; $y$ là một hằng số cố định.
Hàm mất mát có thể được coi là một hàm của các trọng số và độ lệch, ký hiệu là $\theta$ (bao gồm $w_{11}^{(1)}, w_{12}^{(1)}, w_{21}^{(1)}, w_{22}^{(1)}, w_{10}^{(1)}, w_{20}^{(1)}, w_{11}^{(2)}, w_{12}^{(2)}, w_{10}^{(2)}$) cùng với vectơ đầu vào không đổi $\mathbf{a}^{(0)} = (a_1^{(0)}, a_2^{(0)})^T$ và $y$ liên quan. Về mặt toán học, điều này có thể được biểu thị dưới dạng:
$$ \mathcal{L} = L_{MSE}(\theta, \mathbf{a}^{(0)}, y). $$

---

Trong quá trình huấn luyện, mục tiêu là giảm thiểu hàm mất mát này đối với các trọng số và độ lệch $(\theta)$. Điều này liên quan đến lượt tiến để tính toán đầu ra dự đoán $a_1^{(2)}$ với tập hợp trọng số và độ lệch hiện tại, sau đó là lượt ngược, BP, để tính toán gradient của mất mát đối với $\theta$. Các gradient này sau đó được sử dụng trong một thuật toán tối ưu hóa để cập nhật các trọng số và độ lệch một cách lặp đi lặp lại. Để thực hiện tối ưu hóa dựa trên gradient, bạn cần tính toán các đạo hàm riêng của hàm mất mát đối với từng trọng số và độ lệch trong mạng.
Chúng ta cũng cần một biểu thức cho đạo hàm của AF Sigmoid của chúng ta. Đạo hàm của sigmoid là
$$ \frac{d}{dz}\sigma(z) = \frac{d}{dz} \frac{1}{1+e^{-z}} $$
$$ = \frac{d}{dz} \frac{e^z}{e^z+1} $$
$$ = \frac{e^z(1+e^z) - e^z e^z}{(1+e^z)^2} $$
$$ = \frac{e^z(1+e^z-e^z)}{(1+e^z)^2} $$
$$ = \frac{1}{(1+e^z)} \frac{e^z}{(1+e^z)} $$
$$ = \left(1 - \frac{1}{(1+e^z)}\right) \frac{1}{(1+e^z)} $$
$$ = (1-\sigma(x))\sigma(x). $$
Đạo hàm của hàm Sigmoid có thể được viết dưới dạng chính hàm Sigmoid của nó. Đây là một thuộc tính thuận tiện khi thực hiện BP trong NN vì trong lượt tiến, bạn đã tính toán $\sigma(z)$ là kích hoạt

---

của nơ-ron. Vì vậy, bạn có thể sử dụng lại giá trị này trong lượt ngược để tính toán hiệu quả đạo hàm mà không cần tính toán lại Sigmoid.
BP hoạt động ngược từ lớp đầu ra đến lớp đầu vào, áp dụng quy tắc chuỗi tại mỗi bước để tính toán các đạo hàm riêng. Biểu thức cho đạo hàm riêng cho tham số được chỉ định $a_1^{(2)}$ là:
$$ \frac{\partial \mathcal{L}}{\partial a_1^{(2)}} = \frac{\partial}{\partial a_1^{(2)}} \left( \frac{1}{2}(y-a_1^{(2)})^2 \right) $$
$$ = a_1^{(2)} - y. $$
Nhớ lại $y$ là nhãn cho ví dụ huấn luyện hiện tại, và chúng ta tính toán $a_1^{(2)}$ trong lượt tiến là đầu ra của mạng. Vì vậy, khi làm việc thông qua thuật toán BP, bạn có thể thay thế $\frac{\partial \mathcal{L}}{\partial a_1^{(2)}}$ bằng $(a_1^{(2)}-y)$ trong các biểu thức liên quan, giúp các phép tính đơn giản hơn. Sự đơn giản hóa này là một bước phổ biến trong quy trình BP.
**Lớp đầu ra:**
$$ \frac{\partial \mathcal{L}}{\partial w_{11}^{(2)}} = \frac{\partial \mathcal{L}}{\partial a_1^{(2)}} \frac{\partial a_1^{(2)}}{\partial w_{11}^{(2)}} = (a_1^{(2)}-y)(a_1^{(1)}), $$
$$ \frac{\partial \mathcal{L}}{\partial w_{12}^{(2)}} = \frac{\partial \mathcal{L}}{\partial a_1^{(2)}} \frac{\partial a_1^{(2)}}{\partial w_{12}^{(2)}} = (a_1^{(2)}-y)(a_2^{(1)}), $$
$$ \frac{\partial \mathcal{L}}{\partial w_{10}^{(2)}} = \frac{\partial \mathcal{L}}{\partial a_1^{(2)}} \frac{\partial a_1^{(2)}}{\partial w_{10}^{(2)}} = (a_1^{(2)}-y)(1). $$
**Nơ-ron đầu tiên trong lớp ẩn:**
$$ \frac{\partial \mathcal{L}}{\partial w_{11}^{(1)}} = \frac{\partial \mathcal{L}}{\partial a_1^{(2)}} \frac{\partial a_1^{(2)}}{\partial a_1^{(1)}} \frac{\partial a_1^{(1)}}{\partial z_1^{(1)}} \frac{\partial z_1^{(1)}}{\partial w_{11}^{(1)}} = (a_1^{(2)}-y)(w_{11}^{(2)})((1-a_1^{(1)})a_1^{(1)})(a_1^{(0)}), $$
$$ \frac{\partial \mathcal{L}}{\partial w_{12}^{(1)}} = \frac{\partial \mathcal{L}}{\partial a_1^{(2)}} \frac{\partial a_1^{(2)}}{\partial a_1^{(1)}} \frac{\partial a_1^{(1)}}{\partial z_1^{(1)}} \frac{\partial z_1^{(1)}}{\partial w_{12}^{(1)}} = (a_1^{(2)}-y)(w_{11}^{(2)})((1-a_1^{(1)})a_1^{(1)})(a_2^{(0)}), $$

---

$$ \frac{\partial \mathcal{L}}{\partial w_{10}^{(1)}} = \frac{\partial \mathcal{L}}{\partial a_1^{(2)}} \frac{\partial a_1^{(2)}}{\partial a_1^{(1)}} \frac{\partial a_1^{(1)}}{\partial z_1^{(1)}} \frac{\partial z_1^{(1)}}{\partial w_{10}^{(1)}} = (a_1^{(2)}-y)(w_{11}^{(2)})((1-a_1^{(1)})a_1^{(1)})(1). $$
**Nơ-ron thứ hai trong lớp ẩn:**
$$ \frac{\partial \mathcal{L}}{\partial w_{21}^{(1)}} = \frac{\partial \mathcal{L}}{\partial a_1^{(2)}} \frac{\partial a_1^{(2)}}{\partial a_2^{(1)}} \frac{\partial a_2^{(1)}}{\partial z_2^{(1)}} \frac{\partial z_2^{(1)}}{\partial w_{21}^{(1)}} = (a_1^{(2)}-y)(w_{12}^{(2)})((1-a_2^{(1)})a_2^{(1)})(a_1^{(0)}), $$
$$ \frac{\partial \mathcal{L}}{\partial w_{22}^{(1)}} = \frac{\partial \mathcal{L}}{\partial a_1^{(2)}} \frac{\partial a_1^{(2)}}{\partial a_2^{(1)}} \frac{\partial a_2^{(1)}}{\partial z_2^{(1)}} \frac{\partial z_2^{(1)}}{\partial w_{22}^{(1)}} = (a_1^{(2)}-y)(w_{12}^{(2)})((1-a_2^{(1)})a_2^{(1)})(a_2^{(0)}), $$
$$ \frac{\partial \mathcal{L}}{\partial w_{20}^{(1)}} = \frac{\partial \mathcal{L}}{\partial a_1^{(2)}} \frac{\partial a_1^{(2)}}{\partial a_2^{(1)}} \frac{\partial a_2^{(1)}}{\partial z_2^{(1)}} \frac{\partial z_2^{(1)}}{\partial w_{20}^{(1)}} = (a_1^{(2)}-y)(w_{12}^{(2)})((1-a_2^{(1)})a_2^{(1)})(1), $$
trong đó chúng ta sử dụng $\frac{\partial a_1^{(1)}}{\partial z_1^{(1)}} = (1-\sigma(z_1^{(1)}))\sigma(z_1^{(1)}) = (1-a_1^{(1)})a_1^{(1)}$ và $\frac{\partial a_2^{(1)}}{\partial z_2^{(1)}} = (1-a_2^{(1)})a_2^{(1)}$.
Trong bối cảnh cập nhật thuật ngữ độ lệch ($w_{10}^{(2)}$), quy tắc cập nhật cho mỗi epoch có thể được viết như sau:
$$ w_{10}^{(2)} = w_{10}^{(2)} - \alpha \frac{1}{m} \sum_{i=1}^m \frac{\partial \mathcal{L}}{\partial w_{10}^{(2)}} \bigg|_{a_i^{(0)}}. $$
Ở đây: $w_{10}^{(2)}$ là giá trị hiện tại của thuật ngữ độ lệch. $\alpha$ là tốc độ học. $m$ là số lượng mẫu trong tập huấn luyện. $\mathcal{L}$ là hàm mất mát. $\frac{\partial \mathcal{L}}{\partial w_{10}^{(2)}} \bigg|_{a_i^{(0)}}$ là đạo hàm riêng của mất mát đối với $w_{10}^{(2)}$ được đánh giá cho ví dụ huấn luyện thứ $i$. Thuật ngữ tổng là sự tích lũy của các đạo hàm riêng của mất mát đối với $w_{10}^{(2)}$ trên tất cả các mẫu huấn luyện. Sự tích lũy này đại diện cho sự đóng góp tổng thể của thuật ngữ độ lệch vào mất mát trên toàn bộ tập huấn luyện. Việc chia cho $m$ là để lấy trung bình trên tất cả các mẫu, và toàn bộ thuật ngữ $\frac{1}{m} \sum_{i=1}^m \frac{\partial \mathcal{L}}{\partial w_{10}^{(2)}} \bigg|_{a_i^{(0)}}$ là lượng mà thuật ngữ độ lệch được điều chỉnh trong bước cập nhật. Quá trình này được lặp lại cho từng tham số trong NN (trọng số và độ lệch) trong mỗi epoch để dần dần cải thiện hiệu suất của mô hình. Tốc độ học ($\alpha$) kiểm soát kích thước của bước được thực hiện theo hướng dốc nhất trong bối cảnh mất mát.

**Cập nhật trọng số (sau khi tính tổng gradient trên một batch):**
*(Các công thức cập nhật trọng số tương tự như trên được lặp lại cho tất cả các trọng số $w_{11}^{(2)}, w_{12}^{(2)}, w_{10}^{(2)}, w_{11}^{(1)}, w_{12}^{(1)}, w_{10}^{(1)}, w_{21}^{(1)}, w_{22}^{(1)}, w_{20}^{(1)}$)*

---

## 3.6 Bốn Phương Trình Cơ Bản Đằng Sau Lan Truyền Ngược (The Four Fundamental Equations Behind Backpropagation)

Ý tưởng chính đằng sau BP là cập nhật các trọng số và độ lệch của mạng theo hướng làm giảm sai số hoặc hàm chi phí. Để đạt được điều này, thuật toán tính toán các đạo hàm riêng của hàm chi phí đối với các trọng số $(\partial \mathcal{L} / \partial w_{jk}^{(l)})$ và độ lệch $(\partial \mathcal{L} / \partial w_{j0}^{(l)})$ trong mỗi lớp của NN. Các đạo hàm $\partial \mathcal{L} / \partial w_{jk}^{(l)}$ và $\partial \mathcal{L} / \partial w_{j0}^{(l)}$, biểu thị hàm chi phí thay đổi như thế nào đối với các trọng số và độ lệch, tương ứng.

---

BP dựa trên bốn phương trình cơ bản giúp tính toán sai số và gradient của hàm chi phí. Các phương trình này được suy ra bằng cách sử dụng quy tắc chuỗi và được áp dụng trong lượt ngược của quá trình huấn luyện. Biến phụ trợ $\delta^{(l)}$ thường được sử dụng trong BP để biểu thị đạo hàm của mất mát $(\mathcal{L})$ đối với tổng có trọng số của các đầu vào $z^{(l)}$ cho lớp $l$, nghĩa là, biến phụ trợ $\delta^{(l)}$ biểu thị tốc độ thay đổi của mất mát đối với đầu ra tiền kích hoạt của lớp $l$. Ở đây, $l$ có thể nhận các giá trị từ 0 đến lớp $L$ cuối cùng. Về mặt toán học:
$$ \delta^{(l)} = \frac{\partial \mathcal{L}}{\partial z^{(l)}} \quad (3.61) $$
Chúng ta hãy xem lại và cập nhật các ký hiệu của mình, chọn tích hợp $\mathbf{b}^{(l)}$ làm độ lệch cho lớp $l$, $\mathbf{z}^{(l)}$ là đầu vào có trọng số cho lớp $l$, $\mathbf{a}^{(l)}$ là đầu ra của lớp $l$ sau khi áp dụng AF, $\mathcal{L}$ là hàm chi phí, $\mathbf{W}^{(l)}$ là trọng số cho lớp $l$, như thường được thực hiện trong hầu hết các tài liệu. Chiến lược của chúng ta bao gồm việc trình bày ban đầu các phương trình với một ví dụ truyền thẳng để chứng minh ứng dụng của chúng trong một không gian cụ thể, Ví dụ 3.2. Sau đó, chúng ta sẽ cung cấp một bằng chứng toàn diện cho trường hợp tổng quát. Bốn phương trình cơ bản như sau:

**1. Sai số trong Lớp Đầu ra $\delta^{(L)}$ (Error in the Output Layer $\delta^{(L)}$).**

Các thành phần của $\delta^{(L)}$ được cho bởi
$$ \delta_j^{(L)} = \frac{\partial \mathcal{L}}{\partial a_j^{(L)}} \sigma'(z_j^{(L)}). \quad (3.62) $$
Thuật ngữ đầu tiên ở bên phải, $\partial \mathcal{L} / \partial a_j^{(L)}$, chỉ đo lường chi phí thay đổi nhanh như thế nào như một hàm của kích hoạt thứ $j$. Thuật ngữ thứ hai ở bên phải, $\sigma'(z_j^{(L)})$, đo lường AF $\sigma$ thay đổi nhanh như thế nào tại $z_j^{(L)}$. Lưu ý rằng mọi thứ trong (3.62) đều dễ tính toán. Cụ thể, chúng ta tính toán $z_j^{(L)}$ trong khi tính toán hành vi của mạng, và dễ dàng tính toán $\sigma'(z_j^{(L)})$. Dạng chính xác của $\partial \mathcal{L} / \partial a_j^{(L)}$, tất nhiên, sẽ phụ thuộc vào dạng của hàm chi phí.
Tuy nhiên, miễn là hàm chi phí đã biết thì sẽ có ít rắc rối khi tính toán $\partial \mathcal{L} / \partial a_j^{(L)}$. Ví dụ, nếu

---

## 3.7 Hạ Gradient Theo Batch, Ngẫu Nhiên và Mini-Batch (Batch, Stochastic, and Mini-Batch Gradient Descent)

### 3.7.1 Hạ Gradient Toàn Batch (Hạ Gradient) (Full-Batch Gradient Descent (Gradient Descent))

Làm thế nào chúng ta có thể áp dụng Hạ Gradient Toàn Batch (FBGD) (GD truyền thống) để học trong một NN? Ý tưởng là sử dụng GD để tìm các trọng số $\mathbf{W}^{(l)}$ và độ lệch $\mathbf{b}^{(l)}$ nhằm giảm thiểu hàm chi phí. Trong GD, người ta cố gắng giảm thiểu hàm chi phí của NN bằng cách di chuyển các tham số theo hướng âm của gradient của mất mát trên tất cả các điểm, bởi vì đây là hướng dốc nhất. Hầu hết các vấn đề học máy có thể được đặt lại dưới dạng các vấn đề tối ưu hóa trên một tổng tuyến tính cộng của các hàm mất mát trên các điểm dữ liệu riêng lẻ. Tuy nhiên, mất mát trên toàn bộ tập dữ liệu thực sự được định nghĩa là tổng (trung bình) của các mất mát trên các điểm dữ liệu huấn luyện riêng lẻ. Người ta có thể viết hàm mất mát của một NN dưới dạng các mất mát cụ thể theo điểm:
$$ \mathcal{L} = \frac{1}{m} \sum_{i=1}^m \mathcal{L}_{x_i}, \quad (3.87) $$
trong đó $m$ là số lượng tất cả các đầu vào huấn luyện ($x_i$), $i \in 1, \dots, m$, và $\mathcal{L}_{x_i}$ là mất mát được đóng góp bởi điểm thứ $i$. Để hiểu điều này, chúng ta hãy xem lại hàm chi phí bậc hai. Lưu ý rằng hàm chi phí này là trung bình trên các chi phí $\mathcal{L}_{x_i} = \frac{(y_i - a_i^{(L)})^2}{2}$ cho các ví dụ huấn luyện riêng lẻ. Trong thực tế, để tính toán gradient $\nabla \mathcal{L}$ chúng ta cần tính toán riêng các gradient $\nabla \mathcal{L}_{x_i}$ cho mỗi đầu vào huấn luyện $i$, và sau đó lấy trung bình chúng,
$$ \nabla \mathcal{L} = \frac{1}{m} \sum_{i=1}^m \nabla \mathcal{L}_{x_i}. \quad (3.88) $$
Do đó, trong GD truyền thống, người ta sẽ cố gắng thực hiện các bước GD (trong ký hiệu vectơ) như sau:
$$ \mathbf{w}^{(l)} = \mathbf{w}^{(l)} - \alpha \frac{\partial \mathcal{L}}{\partial \mathbf{W}^{(l)}} \quad (3.89.1) $$
$$ \mathbf{b}^{(l)} = \mathbf{b}^{(l)} - \alpha \frac{\partial \mathcal{L}}{\partial \mathbf{b}^{(l)}} \quad (3.89.2) $$

---

Tương ứng, dễ dàng chỉ ra rằng bản cập nhật thực sự của NN phải như sau:
$$ \mathbf{w}^{(l)} = \mathbf{w}^{(l)} - \alpha \frac{1}{m} \sum_{i=1}^m \frac{\partial \mathcal{L}_{x_i}}{\partial \mathbf{W}^{(l)}} \quad (3.90.1) $$
$$ \mathbf{b}^{(l)} = \mathbf{b}^{(l)} - \alpha \frac{1}{m} \sum_{i=1}^m \frac{\partial \mathcal{L}_{x_i}}{\partial \mathbf{b}^{(l)}} \quad (3.90.2) $$
Bằng cách áp dụng lặp đi lặp lại quy tắc cập nhật này, chúng ta có thể " lăn xuống đồi ", và hy vọng tìm thấy một cực tiểu của hàm chi phí.
Nói cách khác, NN được thiết kế để trở thành một thuật toán theo batch. Tất cả các ví dụ huấn luyện được trình bày cho NN, và tổng trung bình của các hàm chi phí của tất cả các ví dụ huấn luyện sau đó được tính toán, và điều này được sử dụng để cập nhật các trọng số. Do đó, chỉ có một tập hợp các bản cập nhật trọng số cho mỗi epoch (đi qua tất cả các ví dụ huấn luyện). Điều này có nghĩa là chúng ta chỉ cập nhật các trọng số một lần cho mỗi lần lặp của thuật toán, điều này có nghĩa là các trọng số được di chuyển theo hướng mà hầu hết các đầu vào muốn chúng di chuyển, thay vì bị kéo xung quanh bởi từng đầu vào riêng lẻ.

Trực giác cơ bản đằng sau FBGD có thể được minh họa bằng một kịch bản giả định. Một người bị mắc kẹt trên núi và đang cố gắng đi xuống để tìm cực tiểu toàn cục. Sương mù dày đặc đến mức tầm nhìn cực kỳ thấp. Do đó, không thể nhìn thấy con đường xuống núi, vì vậy anh ta phải sử dụng thông tin cục bộ để tìm cực tiểu. Anh ta có thể sử dụng phương pháp FBGD, bao gồm việc nhìn vào độ dốc của ngọn đồi ở vị trí hiện tại của mình, và sau đó tiến hành theo hướng dốc nhất (tức là, xuống dốc).

![alt text](hh3.17.png)

*(Đánh dấu để bổ sung Hình 3.17: FBGD nhạy cảm với các điểm yên ngựa có thể dẫn đến hội tụ sớm.)*
**Hình 3.17.** FBGD nhạy cảm với các điểm yên ngựa có thể dẫn đến hội tụ sớm.
*(Mô tả: Đồ thị cho thấy hàm mất mát L theo trọng số w1. Hàm có một cực tiểu cục bộ và một điểm yên ngựa. Các mũi tên chỉ ra đường đi của FBGD, có thể bị kẹt ở điểm yên ngựa.)*

*   Hãy hình dung cảnh quan núi non là bề mặt hàm chi phí, trong đó mục tiêu là tìm điểm thấp nhất, đại diện cho cực tiểu của hàm chi phí. Những ngọn núi tượng trưng cho không gian đa chiều của các giá trị tham số có thể có trong một mô hình NN. Mỗi điểm trong không gian này tương ứng với một tập hợp các tham số xác định mô hình.
*   Người trên núi đại diện cho thuật toán tối ưu hóa, cụ thể là FBGD trong bối cảnh này.
*   Tầm nhìn thấp cho thấy người đó (thuật toán) không thể nhìn thấy toàn bộ bề mặt hàm chi phí. Thay vào đó, anh ta dựa vào thông tin cục bộ thu được từ một tập hợp con của cảnh quan. Trong học máy, thông tin cục bộ này tương ứng với gradient của hàm chi phí tại các giá trị tham số hiện tại. Gradient cung cấp thông tin về độ dốc hoặc độ dốc của địa hình tại vị trí hiện tại.
*   Trong FBGD, người đó không chỉ đánh giá độ dốc của ngọn đồi tại một điểm mà còn xem xét toàn bộ cảnh quan.
*   Người đó đánh giá độ dốc nhất bằng cách xem xét độ dốc trung bình của toàn bộ cảnh quan trong batch. Trong FBGD, thuật toán tính toán gradient trung bình của hàm chi phí đối với các tham số mô hình bằng cách sử dụng tất cả các điểm dữ liệu trong batch.
*   Người đó sau đó di chuyển xuống dốc dựa trên gradient trung bình, nhằm đạt được các độ cao thấp hơn. Trong FBGD, thuật toán cập nhật các tham số mô hình theo hướng ngược lại với gradient trung bình, tìm cách giảm giá trị trung bình của hàm chi phí trên toàn bộ batch.

---

*   FBGD tiếp tục quá trình này một cách lặp đi lặp lại, xem xét toàn bộ tập dữ liệu trong mỗi lần lặp.
*   Qua các lần lặp, FBGD nhằm mục đích hội tụ đến cực tiểu toàn cục của hàm chi phí, tận dụng thông tin toàn diện được cung cấp bởi toàn bộ tập dữ liệu trong mỗi bước.

Thật không may, khi số lượng đầu vào huấn luyện rất lớn, điều này có thể mất nhiều thời gian, và do đó việc học diễn ra chậm. Lưu ý rằng các kích hoạt và đạo hàm trung gian cho mỗi trường hợp huấn luyện sẽ cần được duy trì đồng thời trên hàng trăm nghìn nút NN. Điều này có thể cực kỳ lớn trong hầu hết các cài đặt thực tế. Do đó, không thực tế khi chạy đồng thời tất cả các ví dụ qua mạng để tính toán gradient đối với toàn bộ tập dữ liệu trong một lần. Khi kích thước tập huấn luyện tăng lên hàng tỷ ví dụ, thời gian để thực hiện một bước gradient duy nhất trở nên quá dài. Nếu chúng ta đang sử dụng FBGD (xem xét tất cả dữ liệu), chúng ta thực hiện các bước dẫn chúng ta theo hướng chính xác. Nhưng mỗi bước đều tốn kém, vì vậy chúng ta chỉ có thể thực hiện một vài bước.

Hơn nữa, đối với một bề mặt lỗi bậc hai đơn giản (hàm chi phí), FBGD hoạt động khá tốt. Nhưng trong hầu hết các trường hợp, bề mặt lỗi của chúng ta có thể phức tạp hơn rất nhiều. Hãy xem xét kịch bản trong Hình 3.17. Chúng ta chỉ có một trọng số duy nhất, và chúng ta sử dụng khởi tạo ngẫu nhiên và FBGD để tìm cài đặt tối ưu của nó. Tuy nhiên, bề mặt lỗi có một vùng phẳng (còn được gọi là điểm yên ngựa trong không gian nhiều chiều), và nếu không may, chúng ta có thể thấy mình bị mắc kẹt trong khi thực hiện FBGD.

**Nhận xét:**

*   Vì FBGD sử dụng toàn bộ tập dữ liệu để tính toán gradient, nó yêu cầu lưu trữ toàn bộ tập dữ liệu trong bộ nhớ. Đây có thể là một hạn chế đối với các tập dữ liệu rất lớn.
*   FBGD giả định rằng hàm chi phí là trơn và liên tục. Nếu hàm chi phí có nhiều cực tiểu cục bộ, FBGD có thể bị kẹt trong một giải pháp dưới tối ưu.

---

*   FBGD tiếp tục lặp lại cho đến khi đáp ứng một số tiêu chí hội tụ nhất định. Đây có thể là một số lượng lần lặp được xác định trước hoặc một ngưỡng cho sự thay đổi trong hàm chi phí. Thông thường, các nhà thực hành theo dõi hàm chi phí và dừng huấn luyện khi sự thay đổi nhỏ hơn một dung sai được xác định trước.
*   Ưu điểm chính của FBGD là nó sử dụng toàn bộ tập dữ liệu để tính toán gradient trong mỗi lần lặp, điều này dẫn đến sự hội tụ ổn định hơn.
*   Một nhược điểm là nó có thể chậm khi xử lý các tập dữ liệu lớn hoặc khi mô hình phức tạp. Để giải quyết điều này, các biến thể như hạ gradient ngẫu nhiên và hạ gradient ngẫu nhiên theo mini-batch thường được sử dụng, trong đó việc học được thực hiện bằng cách chỉ sử dụng một tập hợp con dữ liệu trong mỗi lần lặp. Các phương pháp này cung cấp một sự cân bằng giữa tính ổn định của FBGD và hiệu quả tính toán của GD đối với các điểm dữ liệu riêng lẻ.

### 3.7.2 Hạ Gradient Ngẫu Nhiên (Stochastic Gradient Descent)

Hạ Gradient Ngẫu Nhiên (Stochastic Gradient Descent - SGD) là một phần mở rộng của thuật toán GD, đôi khi được gọi là GD lặp hoặc trực tuyến. Một vấn đề thường gặp trong học máy là các tập huấn luyện lớn là cần thiết để khái quát hóa tốt, nhưng các tập huấn luyện lớn cũng tốn kém hơn về mặt tính toán. Hiếm khi người ta sử dụng tất cả các điểm cùng một lúc, và người ta có thể chọn ngẫu nhiên một điểm để cập nhật các tham số nhằm giảm mất mát cụ thể theo điểm đó. Trong một NN, quá trình này là tự nhiên vì các phương pháp đơn giản mà chúng ta đã giới thiệu cho đến nay xử lý các điểm từng điểm một trong các lượt tiến và ngược để lặp đi lặp lại xử lý các mất mát cụ thể theo điểm. Trong SGD, tất cả các cập nhật cho các trọng số của một NN được thực hiện theo kiểu cụ thể theo điểm. Việc cập nhật từng điểm được giới thiệu cho đến nay thực sự là một sự xấp xỉ thực tế của bản cập nhật thực sự bằng cách sử dụng $\mathcal{L}_{x_i}$ thay vì $\mathcal{L}$.
$$ \mathbf{w}^{(l)} = \mathbf{w}^{(l)} - \alpha \frac{\partial \mathcal{L}_{x_i}}{\partial \mathbf{W}^{(l)}} \quad (3.91.1) $$
$$ \mathbf{b}^{(l)} = \mathbf{b}^{(l)} - \alpha \frac{\partial \mathcal{L}_{x_i}}{\partial \mathbf{b}^{(l)}} \quad (3.91.2) $$
Giả sử một thứ tự ngẫu nhiên của các điểm, mỗi bản cập nhật có thể được xem như một sự xấp xỉ xác suất của bản cập nhật thực sự.
Những ưu điểm chính của SGD là nó nhanh và hiệu quả về bộ nhớ, mặc dù phải trả giá bằng độ chính xác. Vấn đề chính với SGD là cách tiếp cận từng điểm đôi khi có thể hoạt động theo một cách không ổn định, bởi vì các điểm riêng lẻ trong quá trình huấn luyện có thể bị gán nhãn sai hoặc có các lỗi khác.

---

**Nhận xét:**

*   Thuật toán SGD là thuật toán tuần tự, trong đó các lỗi được tính toán và các trọng số được cập nhật sau mỗi đầu vào. Điều này không được đảm bảo là hiệu quả trong việc học, nhưng nó đơn giản hơn để lập trình khi sử dụng các vòng lặp, và do đó nó phổ biến hơn.
*   Khi chúng ta sử dụng SGD, chúng ta thực hiện $m$ bản cập nhật mỗi epoch, vì vậy chúng ta nhận được các bản cập nhật hoặc các bước cho một số lượng epoch cố định. Nhưng vì hành vi ngẫu nhiên hoặc ngẫu nhiên của việc chỉ sử dụng một điểm dữ liệu cho mỗi bản cập nhật, các bước chúng ta thực hiện bị nhiễu. Chúng không phải lúc nào cũng đi đúng hướng. Nhưng tổng số bước lớn hơn cuối cùng sẽ đưa chúng ta đến gần câu trả lời hơn.
*   Vì mỗi gradient được tính toán dựa trên một ví dụ huấn luyện duy nhất, bề mặt lỗi nhiễu hơn trong FBGD, điều này cũng có thể có lợi thế là SGD có thể thoát khỏi các cực tiểu cục bộ nông dễ dàng hơn. Cách tiếp cận SGD được minh họa bằng **Hình 3.18**, trong đó thay vì một bề mặt lỗi tĩnh, bề mặt lỗi của chúng ta là động. Kết quả là, việc đi xuống trên bề mặt ngẫu nhiên này cải thiện đáng kể khả năng điều hướng các vùng phẳng của chúng ta.
*   Trong thuật toán SGD, thứ tự cập nhật trọng số có thể quan trọng, đó là lý do tại sao thuật toán bao gồm một đề xuất về việc ngẫu nhiên hóa thứ tự của các vectơ đầu vào ở mỗi lần lặp (đó là lý do tại sao chúng ta muốn xáo trộn tập huấn luyện cho mỗi epoch để ngăn chặn các chu kỳ). Điều này có thể cải thiện đáng kể tốc độ mà thuật toán học.
*   Trong các triển khai SGD, tốc độ học cố định $\alpha$ thường được thay thế bằng một tốc độ học thích ứng giảm dần theo thời gian.

![alt text](hh3.18.png)

*(Đánh dấu để bổ sung Hình 3.18: Bề mặt lỗi SGD dao động đối với bề mặt lỗi batch, cho phép tránh điểm yên ngựa.)*
**Hình 3.18.** Bề mặt lỗi SGD dao động đối với bề mặt lỗi batch, cho phép tránh điểm yên ngựa.
*(Mô tả: Tương tự Hình 3.17, nhưng bề mặt lỗi được hiển thị dao động (các đường nét đứt), cho thấy tính ngẫu nhiên của SGD có thể giúp thoát khỏi các điểm yên ngựa.)*

*   Một ưu điểm khác của SGD là chúng ta có thể sử dụng nó để học trực tuyến. Trong học trực tuyến, mô hình của chúng ta được huấn luyện khi dữ liệu huấn luyện mới đến. Điều này đặc biệt hữu ích nếu chúng ta đang tích lũy một lượng lớn dữ liệu—ví dụ, dữ liệu khách hàng trong các ứng dụng web điển hình. Sử dụng học trực tuyến, hệ thống có thể thích ứng ngay lập tức với những thay đổi và dữ liệu huấn luyện có thể bị loại bỏ sau khi cập nhật mô hình nếu không gian lưu trữ là một vấn đề.
*   Các bản cập nhật thường xuyên cho phép dễ dàng kiểm tra xem việc học mô hình đang diễn ra như thế nào. (Bạn không phải đợi cho đến khi tất cả các tập dữ liệu đã được xem xét.)

Trực giác cơ bản đằng sau SGD có thể được minh họa bằng một kịch bản giả định.
*   Hãy tưởng tượng người của chúng ta trên núi phải đối mặt với những thay đổi thời tiết không thể đoán trước. Đôi khi sương mù tan trong giây lát, cho phép tầm nhìn rõ ràng hơn, nhưng nó cũng có thể quay trở lại đột ngột. Sự không chắc chắn này tương ứng với bản chất ngẫu nhiên của SGD.
*   Trong SGD, tầm nhìn thậm chí còn hạn chế hơn. Bây giờ người đó dựa vào những khoảnh khắc rõ ràng ngắn ngủi (các điểm dữ liệu riêng lẻ được chọn ngẫu nhiên) để thu thập thông tin về độ dốc của địa hình.
*   Thông tin thu được từ một điểm dữ liệu duy nhất nhiễu hơn so với gradient trung bình được tính toán trên toàn bộ batch. Nó có thể cung cấp một ước tính tốt hoặc đưa vào một số ngẫu nhiên.

---

*   Khi tầm nhìn được cải thiện, người đó nhanh chóng đánh giá độ dốc và thực hiện một bước xuống dốc. Tuy nhiên, bước này bây giờ dựa trên thông tin chỉ từ một điểm dữ liệu.
*   SGD cập nhật các tham số mô hình thường xuyên hơn nhưng với mức độ không chắc chắn cao hơn so với FBGD.
*   Do tính chất ngẫu nhiên, người đó thực hiện các bước nhanh chóng, ít chính xác hơn xuống dốc. Điều này cho phép thuật toán khám phá cảnh quan một cách linh hoạt hơn và thoát khỏi các cực tiểu cục bộ tiềm năng.
*   SGD có thể không nhất quán đi thẳng về phía cực tiểu toàn cục vì thông tin nhiễu thu được từ các điểm dữ liệu riêng lẻ. Thay vào đó, nó đi lang thang xung quanh, cho phép khám phá.
*   Người đó thích ứng với các điều kiện thời tiết thay đổi bằng cách điều chỉnh kích thước bước và hướng thường xuyên hơn. Tương tự, SGD điều chỉnh tốc độ học của nó một cách linh hoạt dựa trên độ nhiễu của các điểm dữ liệu riêng lẻ.
*   SGD đánh đổi một số độ chính xác để tăng hiệu quả. Nó có thể không đi theo con đường dốc nhất một cách chính xác, nhưng nó ít tốn kém hơn về mặt tính toán, đặc biệt là với các tập dữ liệu lớn.

### 3.7.3 Hạ Gradient Ngẫu Nhiên Theo Mini-Batch (Mini-Batch Stochastic Gradient Descent)

Điểm mấu chốt của hạ gradient ngẫu nhiên theo mini-batch (MBSGD) là gradient là một kỳ vọng. Kỳ vọng có thể được ước tính gần đúng bằng cách sử dụng một tập hợp nhỏ các mẫu. MBSGD có thể được sử dụng để tăng tốc độ học. Ý tưởng là ước tính gradient $\nabla \mathcal{L}$ bằng cách tính toán $\mathcal{L}_{x_j}$ cho một mẫu nhỏ các đầu vào được chọn ngẫu nhiên. Bằng cách lấy trung bình trên mẫu nhỏ này, hóa ra chúng ta có thể nhanh chóng có được một ước tính tốt về $\nabla \mathcal{L}$ thực sự, và điều này giúp tăng tốc độ hạ gradient, và do đó là học.
Cụ thể, ở mỗi bước của thuật toán, chúng ta có thể lấy mẫu một mini-batch các ví dụ $B = \{\mathbf{x}_1, \mathbf{x}_2, \dots, \mathbf{x}_{m'}\}$ được rút ra đồng nhất từ tập huấn luyện. Kích thước mini-batch $m'$ thường được chọn là một số lượng ví dụ tương đối nhỏ,

---

dao động từ một đến vài trăm. Quan trọng là, $m'$ thường được giữ cố định khi kích thước tập huấn luyện $m$ tăng lên. Chúng ta có thể phù hợp với một tập huấn luyện có hàng tỷ ví dụ bằng cách sử dụng các bản cập nhật được tính toán chỉ trên một trăm ví dụ. Miễn là kích thước mẫu $m'$ đủ lớn, chúng ta mong đợi rằng giá trị trung bình của $\nabla \mathcal{L}_{x_j}$ sẽ xấp xỉ bằng trung bình trên tất cả $\nabla \mathcal{L}_i$, nghĩa là,
$$ \frac{1}{m'} \sum_{j=1}^{m'} \nabla \mathcal{L}_{x_j} \approx \frac{1}{m} \sum_{i=1}^m \nabla \mathcal{L}_i = \nabla \mathcal{L}, \quad (3.92) $$
trong đó tổng thứ hai là trên toàn bộ tập dữ liệu huấn luyện. Đổi vế ta được
$$ \nabla \mathcal{L} \approx \frac{1}{m'} \sum_{j=1}^{m'} \nabla \mathcal{L}_{x_j}, \quad (3.93) $$
xác nhận rằng chúng ta có thể ước tính gradient tổng thể bằng cách tính toán gradient chỉ cho mini-batch được chọn ngẫu nhiên.
Để kết nối điều này một cách rõ ràng với việc học trong NN, giả sử $\mathbf{w}^{(l)}$ và $\mathbf{b}^{(l)}$ ký hiệu các trọng số và độ lệch trong NN của chúng ta. Sau đó, MBSGD hoạt động bằng cách chọn ra một mini-batch các đầu vào huấn luyện được chọn ngẫu nhiên, và huấn luyện với những đầu vào đó,
$$ \mathbf{w}^{(l)} = \mathbf{w}^{(l)} - \alpha \frac{1}{m'} \sum_{j=1}^{m'} \frac{\partial \mathcal{L}_{x_j}}{\partial \mathbf{W}^{(l)}}, \quad (3.94.1) $$
$$ \mathbf{b}^{(l)} = \mathbf{b}^{(l)} - \alpha \frac{1}{m'} \sum_{j=1}^{m'} \frac{\partial \mathcal{L}_{x_j}}{\partial \mathbf{b}^{(l)}}, \quad (3.94.2) $$
trong đó các tổng là trên tất cả các ví dụ huấn luyện $\mathbf{x}_j$ trong mini-batch hiện tại. Sau đó, chúng ta chọn một mini-batch khác được chọn ngẫu nhiên và huấn luyện với những ví dụ đó. Cứ như vậy, cho đến khi chúng ta đã sử dụng hết các đầu vào huấn luyện, được cho là hoàn thành một epoch huấn luyện. Tại thời điểm đó, chúng ta bắt đầu lại với một epoch huấn luyện mới.

---

**Nhận xét:**
*(Tóm tắt các điểm chính về MBSGD)*
*   MBSGD tìm một điểm cân bằng giữa FBGD và SGD, chia tập huấn luyện thành các batch ngẫu nhiên.
*   Việc chia tỷ lệ hàm chi phí và cập nhật mini-batch có thể khác nhau.
*   MBSGD có thể tăng tốc đáng kể việc ước tính gradient so với GD đầy đủ, mặc dù có một số dao động.
*   Tính dự phòng trong dữ liệu học máy thường có nghĩa là gradient từ một mẫu nhỏ là một ước tính khá tốt.
*   Từ góc độ triển khai, một mini-batch có thể được biểu diễn dưới dạng ma trận, cho phép các phép toán ma trận hiệu quả (đặc biệt là trên GPU).
*   SGD là một trường hợp cực đoan hơn của MBSGD (sử dụng một điểm dữ liệu duy nhất).
*   Ưu điểm so với FBGD là hội tụ nhanh hơn thông qua các bản cập nhật trọng số thường xuyên hơn; hội tụ mượt mà hơn SGD.

---

*(Tóm tắt các điểm chính về kích thước mini-batch và hiệu suất)*
*   Kích thước mini-batch nhỏ hơn dẫn đến gradient gần với gradient "thực" hơn.
*   Lý tưởng nhất, mỗi mini-batch nên chứa một ví dụ của mỗi lớp để giảm lỗi lấy mẫu.
*   MBSGD giới thiệu một siêu tham số mới: kích thước batch.
*   Mối quan hệ giữa tốc độ học và kích thước batch là hình chữ U (tốc độ học so với tốc độ huấn luyện).
*   Tần suất cập nhật mô hình cao hơn FBGD nhưng thấp hơn SGD, cho phép hội tụ mạnh mẽ hơn.
*   Số lượng cập nhật tham số mỗi epoch giảm khi tăng kích thước mini-batch.
*   MBSGD, với việc lựa chọn kích thước batch phù hợp, có được những lợi ích của cả hai phương pháp: tốc độ và khả năng tránh cực tiểu cục bộ của SGD và sự ổn định của FBGD.

![alt text](hh3.19.png)

*(Đánh dấu để bổ sung Hình 3.19: So sánh các thuật toán SGD, MBSGD và FBGD dựa trên kích thước batch.)*
**Hình 3.19.** So sánh các thuật toán SGD, MBSGD và FBGD dựa trên kích thước batch.
*(Mô tả: Ba cột đại diện cho SGD, MBSGD và FBGD. Mỗi cột hiển thị dữ liệu huấn luyện được chia thành các khối (điểm dữ liệu đơn lẻ cho SGD, mini-batch cho MBSGD, toàn bộ dữ liệu cho FBGD) và một mũi tên chỉ vào "Cập nhật Trọng số".)*

Về nguyên tắc (với việc điều chỉnh phù hợp), một NN có thể học với bất kỳ kích thước mini-batch nào. Trong thực tế, chúng ta cần chọn một kích thước mini-batch cân bằng những điều sau: Yêu cầu bộ nhớ, hiệu quả tính toán và hiệu quả tối ưu hóa. Về hiệu quả tính toán, các thư viện học sâu hiện đại song song hóa việc học ở cấp độ các phép toán toán học như nhân ma trận và các phép toán vectơ (cộng, nhân theo từng phần tử, v.v.). Điều này có nghĩa là kết quả mini-batch quá nhỏ sẽ dẫn đến việc sử dụng phần cứng kém (đặc biệt là trên GPU), và quá lớn một mini-batch có thể không hiệu quả—một lần nữa, chúng ta lấy trung bình gradient trên tất cả các ví dụ trong mini-batch. Để có hiệu suất (điều này quan trọng nhất trong trường hợp GPU), chúng ta nên sử dụng bội số của 32 cho kích thước batch, hoặc bội số của 16, 8, 4, hoặc 2 nếu bội số của 32 không thể được sử dụng. Lý do cho điều này rất đơn giản: thiết kế bộ nhớ và phần cứng thường được tối ưu hóa để hoạt động trên các mảng có kích thước là lũy thừa của hai, so với các kích thước khác. Ví dụ, chúng ta nên sử dụng kích thước lớp là 128 thay vì 125, hoặc 256 thay vì 250, v.v. Về hiệu quả tối ưu hóa, cần lưu ý rằng chúng ta không thể chọn tổng kích thước mini-batch một cách độc lập với các siêu tham số khác như tốc độ học—một mini-batch lớn hơn có nghĩa là gradient mượt mà hơn (tức là, gradient chính xác/nhất quán hơn), cùng với việc điều chỉnh phù hợp, cho phép tốc độ học nhanh hơn cho một số lượng cập nhật tham số nhất định. Tất nhiên, sự đánh đổi là mỗi bản cập nhật tham số sẽ mất nhiều thời gian hơn để tính toán. Một kích thước mini-batch lớn hơn có thể giúp mạng của chúng ta học trong một số trường hợp khó khăn, chẳng hạn như đối với các tập dữ liệu nhiễu hoặc mất cân bằng.

---

Tóm lại, giả sử tập dữ liệu chứa 1280 điểm dữ liệu và mỗi mini-batch chứa 128 điểm, chúng ta có thể tính toán số lượng mini-batch cần thiết để bao gồm toàn bộ tập dữ liệu: Số lượng mini-batch = Tổng số điểm dữ liệu / Kích thước mini-batch = 1280 / 128 = 10. Vì vậy, trong mỗi epoch huấn luyện, có 10 mini-batch, với mỗi mini-batch chứa 128 điểm dữ liệu. Thiết lập này đảm bảo rằng mỗi điểm dữ liệu được nhìn thấy chính xác một lần trong mỗi epoch.

*   Dữ liệu huấn luyện được xáo trộn để đưa vào tính ngẫu nhiên, và sau đó được chia thành các mini-batch, mỗi mini-batch chứa 128 điểm dữ liệu. Bước này đảm bảo rằng mỗi mini-batch đại diện cho các tập hợp con dữ liệu khác nhau trong mỗi epoch, hỗ trợ việc khái quát hóa. Việc lấy mẫu được thực hiện mà không cần thay thế, nghĩa là vào cuối một epoch, mỗi điểm dữ liệu đã được thuật toán nhìn thấy duy nhất một lần.
*   Mỗi mini-batch được truyền qua mạng bằng cách sử dụng lan truyền tiến. Dữ liệu đầu vào được xử lý theo từng lớp cho đến khi lớp đầu ra tạo ra các giá trị dự đoán, ký hiệu là $\hat{y}$.
*   Các giá trị dự đoán ($\hat{y}$) được so sánh với các nhãn thực ($y$) bằng cách sử dụng một hàm chi phí. Hàm này đánh giá mức độ hoạt động tốt của mô hình trên mini-batch hiện tại.
*   Với chi phí được tính toán, mô hình cập nhật các tham số của nó (trọng số và độ lệch) bằng cách sử dụng GD. Gradient của các tham số đối với chi phí được tính toán thông qua BP. Các điều chỉnh được thực hiện cho các tham số được chia tỷ lệ theo siêu tham số tốc độ học ($\alpha$).
*   Sau khi hoàn thành việc huấn luyện trên tất cả các mini-batch một lần (tức là, sau 10 chu kỳ trong trường hợp này), epoch huấn luyện đầu tiên kết thúc. Quá trình huấn luyện sau đó chuyển sang epoch tiếp theo, trong đó toàn bộ tập dữ liệu được bổ sung, xáo trộn và chia lại thành các mini-batch.
*   Việc huấn luyện tiếp tục cho nhiều epoch cho đến khi đạt được số lượng epoch mong muốn. Mỗi epoch liên quan đến việc lặp đi lặp lại qua toàn bộ tập dữ liệu với nhiều mini-batch và cập nhật các tham số mô hình tương ứng. Quá trình lặp đi lặp lại này cho phép mô hình dần dần cải thiện hiệu suất của nó qua các epoch liên tiếp.

---

## 3.8 Hàm Kích hoạt Tuyến tính (Linear Activation Function)

Trước khi kết thúc chương này, chúng ta phải đặt một câu hỏi quan trọng: tại sao NN hoạt động tốt như vậy? Một trong những lý do cơ bản cho hiệu quả của NN là khả năng đưa vào tính phi tuyến. Tính phi tuyến là cần thiết vì nó cho phép NN mô hình hóa các mẫu phức tạp và các mối quan hệ trong dữ liệu. Nếu không có tính phi tuyến, NN sẽ bị giới hạn trong việc mô hình hóa các hàm tuyến tính, hạn chế nghiêm trọng sức mạnh biểu cảm của chúng. Trong phần này, chúng ta sẽ đi sâu vào điểm này một cách chi tiết. Trong phần tiếp theo, chúng ta sẽ khám phá các lý do khác cho sự thành công của NN.

AF tuyến tính, còn được gọi là AF đồng nhất, là một trong những AF đơn giản nhất trong NN. Nó được định nghĩa là: $\sigma_{linear}(x) = cx$, cho $c=1$, tức là, hàm đồng nhất. Hàm này vô hạn trơn, nhưng tất cả các đạo hàm sau đạo hàm thứ hai đều bằng không. Phạm vi của hàm là $[-\infty, \infty]$.

Ở mức độ cơ bản nhất, một NN là một đồ thị tính toán thực hiện các thành phần của các hàm đơn giản hơn để cung cấp một hàm phức tạp hơn. Phần lớn sức mạnh của học sâu phát sinh từ thực tế là sự lặp lại thành phần của các hàm có sức mạnh biểu cảm đáng kể. Tuy nhiên, không phải tất cả các hàm cơ sở đều tốt như nhau trong việc đạt được mục tiêu này. Trên thực tế, các hàm nén phi tuyến được sử dụng trong NN không được chọn một cách tùy tiện mà được thiết kế cẩn thận vì một số loại thuộc tính. Ví dụ, hãy tưởng tượng một tình huống trong đó AF đồng nhất được sử dụng trong mỗi lớp, để chỉ các hàm tuyến tính được tính toán. Trong trường hợp như vậy, NN kết quả không mạnh hơn một NN một lớp.

**Định lý 3.1:** Một NN đa lớp chỉ sử dụng AF đồng nhất trong tất cả các lớp của nó sẽ rút gọn thành một NN một lớp.
**Chứng minh:**
Xét một NN chứa $L$ lớp ẩn, và do đó chứa tổng cộng $(L+1)$ lớp tính toán (bao gồm cả lớp đầu ra). Các ma trận trọng số $(L+1)$ tương ứng giữa các lớp liên tiếp được ký hiệu là $\mathbf{W}^{(1)} \dots \mathbf{W}^{(L+1)}$. Đặt $\mathbf{x}$ là vectơ cột $d$-chiều tương ứng với đầu vào, $\mathbf{a}^{(1)} \dots \mathbf{a}^{(L)}$ là các vectơ cột kích hoạt hậu tương ứng với các lớp ẩn, và $\mathbf{O}$ là vectơ cột $m$-chiều tương ứng với đầu ra.

---

**Trường hợp 1: (không có độ lệch)**
Chúng ta có các điều kiện đệ quy sau cho các NN đa lớp:
$$ \mathbf{a}^{(1)} = \sigma(\mathbf{W}^{(1)} \cdot \mathbf{x}) = \mathbf{W}^{(1)} \cdot \mathbf{x}, $$
$$ \mathbf{a}^{(p+1)} = \sigma(\mathbf{W}^{(p+1)} \cdot \mathbf{a}^{(p)}) = \mathbf{W}^{(p+1)} \cdot \mathbf{a}^{(p)} \quad \forall p \in \{1 \dots L-1\}, $$
$$ \mathbf{O} = \sigma(\mathbf{W}^{(L+1)} \cdot \mathbf{a}^{(L)}) = \mathbf{W}^{(L+1)} \cdot \mathbf{a}^{(L)}. $$
Trong tất cả các trường hợp trên, AF $\sigma(\cdot)$ đã được đặt thành hàm đồng nhất. Sau đó, bằng cách loại bỏ các biến lớp ẩn, chúng ta thu được như sau:
$$ \mathbf{O} = \sigma(\mathbf{W}^{(L+1)} \cdot \mathbf{a}^{(L)}) $$
$$ = \mathbf{W}^{(L+1)} \cdot \mathbf{a}^{(L)} $$
$$ = \mathbf{W}^{(L+1)} \cdot (\mathbf{W}^{(L)} \cdot \mathbf{a}^{(L-1)}) $$
$$ = \mathbf{W}^{(L+1)} \cdot (\mathbf{W}^{(L)} \cdot (\mathbf{W}^{(L-1)} \cdot \mathbf{a}^{(L-2)})) $$
$$ = \mathbf{W}^{(L+1)} \cdot (\mathbf{W}^{(L)} \cdot (\mathbf{W}^{(L-1)} \cdot (\mathbf{W}^{(L-2)} \cdot \mathbf{a}^{(L-3)}))) $$
$$ \dots $$
$$ = \mathbf{W}^{(L+1)} \cdot \left( \mathbf{W}^{(L)} \cdot \left( \mathbf{W}^{(L-1)} \cdot \left( \mathbf{W}^{(L-2)} \cdot \left( \dots \left( \mathbf{W}^{(2)} \cdot (\mathbf{W}^{(1)} \cdot \mathbf{x}) \right) \dots \right) \right) \right) \right) $$
$$ = \mathbf{W}^{(L+1)} \cdot \mathbf{W}^{(L)} \cdot \mathbf{W}^{(L-1)} \cdot \dots \cdot \mathbf{W}^{(2)} \cdot \mathbf{W}^{(1)} \cdot \mathbf{x} $$
$$ = \left( \prod_{i=1}^{L+1} \mathbf{W}^{(i)} \right) \cdot \mathbf{x}. $$

---

Đặt
$$ \bar{\mathbf{W}} = \prod_{i=1}^{L+1} \mathbf{W}^{(i)}. $$
Cuối cùng, chúng ta có thể biểu diễn điều này dưới dạng một NN một lớp:
$$ \mathbf{O} = \bar{\mathbf{W}} \cdot \mathbf{x}. $$
**Trường hợp 2: (có độ lệch)**
Chúng ta có các điều kiện đệ quy sau cho các NN đa lớp:
$$ \mathbf{a}^{(1)} = \sigma(\mathbf{W}^{(1)} \cdot \mathbf{x} + \mathbf{b}^{(1)}) = \mathbf{W}^{(1)} \cdot \mathbf{x} + \mathbf{b}^{(1)}, $$
$$ \mathbf{a}^{(p+1)} = \sigma(\mathbf{W}^{(p+1)} \cdot \mathbf{a}^{(p)} + \mathbf{b}^{(p+1)}) = \mathbf{W}^{(p+1)} \cdot \mathbf{a}^{(p)} + \mathbf{b}^{(p+1)} \quad \forall p \in \{1 \dots L-1\}, $$
$$ \mathbf{O} = \sigma(\mathbf{W}^{(L+1)} \cdot \mathbf{a}^{(L)} + \mathbf{b}^{(L+1)}) = \mathbf{W}^{(L+1)} \cdot \mathbf{a}^{(L)} + \mathbf{b}^{(L+1)}. $$
Trong tất cả các trường hợp trên, AF $\sigma(\cdot)$ đã được đặt thành hàm đồng nhất. Sau đó, bằng cách loại bỏ các biến lớp ẩn, chúng ta thu được như sau:
$$ \mathbf{O} = \sigma(\mathbf{W}^{(L+1)} \cdot \mathbf{a}^{(L)} + \mathbf{b}^{(L+1)}) $$
$$ = \mathbf{W}^{(L+1)} \cdot \mathbf{a}^{(L)} + \mathbf{b}^{(L+1)} $$
$$ = \mathbf{W}^{(L+1)} \cdot (\mathbf{W}^{(L)} \cdot \mathbf{a}^{(L-1)} + \mathbf{b}^{(L)}) + \mathbf{b}^{(L+1)} $$
$$ = \mathbf{W}^{(L+1)} \cdot (\mathbf{W}^{(L)} \cdot (\mathbf{W}^{(L-1)} \cdot \mathbf{a}^{(L-2)} + \mathbf{b}^{(L-1)}) + \mathbf{b}^{(L)}) + \mathbf{b}^{(L+1)} $$
$$ = \mathbf{W}^{(L+1)} \cdot (\mathbf{W}^{(L)} \cdot (\mathbf{W}^{(L-1)} \cdot (\mathbf{W}^{(L-2)} \cdot \mathbf{a}^{(L-3)} + \mathbf{b}^{(L-2)}) + \mathbf{b}^{(L-1)}) + \mathbf{b}^{(L)}) + \mathbf{b}^{(L+1)} $$
$$ = \mathbf{W}^{(L+1)} \cdot (\mathbf{W}^{(L)} \cdot (\dots (\mathbf{W}^{(2)} \cdot (\mathbf{W}^{(1)} \cdot \mathbf{x} + \mathbf{b}^{(1)}) + \mathbf{b}^{(2)}) \dots ) + \mathbf{b}^{(L)}) + \mathbf{b}^{(L+1)} $$
$$ = \mathbf{b}^{(L+1)} + \mathbf{W}^{(L+1)} \cdot \mathbf{b}^{(L)} + \mathbf{W}^{(L+1)}\mathbf{W}^{(L)}\cdot \mathbf{b}^{(L-1)} + \dots + \mathbf{W}^{(L+1)}\mathbf{W}^{(L)}\dots\mathbf{W}^{(2)}\cdot \mathbf{b}^{(1)} $$
$$ + \mathbf{W}^{(L+1)} \cdot \mathbf{W}^{(L)} \cdot \mathbf{W}^{(L-1)} \cdot \dots \cdot \mathbf{W}^{(2)} \cdot \mathbf{W}^{(1)} \cdot \mathbf{x}. $$

---

$$ = \left( \prod_{i=1}^{L+1} \mathbf{W}^{(i)} \right) \cdot \mathbf{x} + \left( \sum_{i=1}^L \left( \left( \prod_{j=i+1}^{L+1} \mathbf{W}^{(j)} \right) \cdot \mathbf{b}^{(i)} \right) + \mathbf{b}^{(L+1)} \right). $$
Ở đây, $\prod_{i=1}^{L+1} \mathbf{W}^{(i)}$ biểu thị tích của tất cả các ma trận trọng số từ $i=1$ đến $L+1$ (nghĩa là, ma trận trọng số mới), và $\sum_{i=1}^L ((\prod_{j=i+1}^{L+1} \mathbf{W}^{(j)}) \cdot \mathbf{b}^{(i)}) + \mathbf{b}^{(L+1)}$ biểu thị tổng của tất cả các thuật ngữ độ lệch (nghĩa là, độ lệch mới). Đặt
$$ \bar{\mathbf{W}} = \prod_{i=1}^{L+1} \mathbf{W}^{(i)}, $$
$$ \bar{\mathbf{b}} = \sum_{i=1}^L \left( \left( \prod_{j=i+1}^{L+1} \mathbf{W}^{(j)} \right) \cdot \mathbf{b}^{(i)} \right) + \mathbf{b}^{(L+1)}. $$
Cuối cùng, chúng ta có thể biểu diễn điều này dưới dạng một NN một lớp:
$$ \mathbf{O} = \bar{\mathbf{W}} \cdot \mathbf{x} + \bar{\mathbf{b}}. $$
Vì vậy, việc chỉ sử dụng AF đồng nhất trong tất cả các lớp sẽ thu gọn toàn bộ NN thành một NN một lớp với một ma trận trọng số và vectơ độ lệch kết hợp.

*Được Việt hoá từ tài liệu của TS. Lê Quang Minh cung cấp.*