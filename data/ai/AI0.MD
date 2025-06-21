
# TÓM TẮT KIẾN THỨC TRÍ TUỆ NHÂN TẠO VÀ HỌC SÂU 

## I. GIỚI THIỆU VỀ TRÍ TUỆ NHÂN TẠO (AI)

*   **Định nghĩa AI (Tổng quan):** AI là một lĩnh vực của khoa học máy tính nhằm tạo ra các hệ thống có khả năng thực hiện các nhiệm vụ thường đòi hỏi trí thông minh của con người, như học hỏi, giải quyết vấn đề, nhận dạng mẫu, hiểu ngôn ngữ tự nhiên và ra quyết định.
*   **Phép thử Turing (Turing Test):**
    *   **Mục đích:** Cung cấp một định nghĩa hoạt động (operational definition) cho trí thông																nh.
    *   **Tiêu chí:** Một máy tính được coi là thông minh nếu một người thẩm vấn, sau khi tương tác bằng văn bản, không thể phân biệt được máy tính đó với một con người.
*   **Các khả năng cốt lõi của một hệ thống AI toàn diện (theo yêu cầu của Turing Test và các ứng dụng hiện đại):**
    *   **Xử lý ngôn ngữ tự nhiên (Natural Language Processing - NLP):** Khả năng hiểu, diễn giải và tạo ra ngôn ngữ của con người (ví dụ: tiếng Anh, tiếng Việt) một cách có ý nghĩa.
    *   **Biểu diễn tri thức (Knowledge Representation):** Phương pháp để lưu trữ thông tin về thế giới, các đối tượng, sự kiện, mối quan hệ và quy tắc một cách có cấu trúc để máy tính có thể sử dụng hiệu quả.
    *   **Suy luận tự động (Automated Reasoning):** Khả năng sử dụng thông tin đã lưu trữ (tri thức) để suy ra các thông tin mới, trả lời câu hỏi, giải quyết vấn đề và đưa ra kết luận logic.
    *   **Học máy (Machine Learning - ML):** Khả năng cho phép hệ thống tự động cải thiện hiệu suất dựa trên kinh nghiệm (dữ liệu) mà không cần được lập trình tường minh cho từng trường hợp cụ thể. Điều này bao gồm khả năng thích ứng với hoàn cảnh mới, phát hiện các mẫu tiềm ẩn và ngoại suy từ dữ liệu đã biết.

## II. NỀN TẢNG CỦA TRÍ TUỆ NHÂN TẠO

AI là một lĩnh vực đa ngành, kế thừa và phát triển từ nhiều lĩnh vực khoa học khác:

*   **Triết học (Philosophy):**
    *   Đặt ra các câu hỏi nền tảng: Liệu các quy tắc hình thức có thể dẫn đến kết luận hợp lệ? Tâm trí (mind) phát sinh từ bộ não vật lý (physical brain) như thế nào? Tri thức (knowledge) đến từ đâu? Tri thức dẫn đến hành động (action) như thế nào?
    *   Các nhà tư tưởng như Aristotle (tam đoạn luận), Ramon Lull (suy luận cơ học), Thomas Hobbes (suy luận như tính toán) đã đặt những viên gạch đầu tiên.
*   **Toán học (Mathematics):** Cung cấp ngôn ngữ và công cụ hình thức cho AI.
    *   **Logic:**
        *   **Logic Mệnh đề (Propositional Logic) / Logic Boole (Boolean Logic):** (George Boole) Xử lý các mệnh đề đúng/sai và các phép toán logic cơ bản.
        *   **Logic Bậc nhất (First-Order Logic):** (Gottlob Frege, Alfred Tarski) Mở rộng logic mệnh đề để bao gồm các đối tượng, thuộc tính và quan hệ, cho phép biểu diễn tri thức phức tạp hơn.
    *   **Lý thuyết Tính toán (Theory of Computation):**
        *   **Thuật toán (Algorithm):** (Euclid, al-Khowarazmi) Một chuỗi các bước hữu hạn, được xác định rõ ràng để giải quyết một vấn đề.
        *   **Định lý Bất toàn của Gödel (Gödel's Incompleteness Theorems):** Chỉ ra những giới hạn cố hữu của các hệ thống hình thức đủ mạnh (ví dụ, có những mệnh đề đúng không thể chứng minh được trong hệ thống).
        *   **Máy Turing (Turing Machine) và Luận đề Church-Turing (Church-Turing Thesis):** (Alan Turing, Alonzo Church) Cung cấp một mô hình toán học hình thức cho khái niệm "tính toán được" (computable). Máy Turing có thể tính toán bất kỳ hàm nào có thể tính toán được bằng thuật toán. Cũng chỉ ra rằng có những hàm không thể tính toán được (ví dụ: bài toán dừng).
    *   **Tính Khả giải và Độ phức tạp Tính toán (Tractability and Computational Complexity):**
        *   **Tính Khả giải (Tractability):** Phân biệt giữa các vấn đề có thể giải quyết trong thời gian đa thức (tractable) và các vấn đề đòi hỏi thời gian theo cấp số nhân (intractable) khi kích thước đầu vào tăng lên.
        *   **Lý thuyết NP-đầy đủ (NP-Completeness):** (Cook, Karp) Xác định một lớp các vấn đề khó mà nếu giải được một vấn đề trong lớp này bằng thuật toán thời gian đa thức, thì tất cả các vấn đề khác cũng có thể. Nhiều vấn đề trong AI thuộc lớp này.
    *   **Lý thuyết Xác suất (Probability Theory):**
        *   (Gerolamo Cardano, Blaise Pascal, Pierre Fermat, James Bernoulli, Pierre Laplace) Cung cấp khuôn khổ toán học để lập mô hình và suy luận trong điều kiện không chắc chắn.
        *   **Quy tắc Bayes (Bayes' Rule):** (Thomas Bayes) Một công cụ cơ bản để cập nhật xác suất của một giả thuyết dựa trên bằng chứng mới. Nền tảng cho nhiều hệ thống AI suy luận không chắc chắn.
*   **Kinh tế học (Economics):**
    *   **Lý thuyết Quyết định (Decision Theory):** Kết hợp lý thuyết xác suất và lý thuyết hữu dụng (utility theory - đo lường mức độ ưa thích) để đưa ra quyết định tối ưu nhằm tối đa hóa lợi ích kỳ vọng trong điều kiện không chắc chắn.
    *   **Lý thuyết Trò chơi (Game Theory):** (Von Neumann, Morgenstern) Phân tích các tình huống tương tác chiến lược giữa nhiều tác nhân hợp lý, nơi hành động của một tác nhân ảnh hưởng đến kết quả của các tác nhân khác.
    *   **Nghiên cứu Vận hành (Operations Research):** Phát triển các phương pháp tối ưu hóa cho các vấn đề ra quyết định phức tạp, đặc biệt là các quyết định tuần tự (ví dụ: **Quy trình Quyết định Markov - Markov Decision Processes (MDPs)** của Richard Bellman).
    *   **Thỏa mãn (Satisficing):** (Herbert Simon) Khái niệm về việc đưa ra các quyết định "đủ tốt" thay vì cố gắng đạt được sự tối ưu tuyệt đối, đặc biệt khi việc tìm kiếm giải pháp tối ưu quá tốn kém hoặc không thực tế.
*   **Khoa học Thần kinh (Neuroscience):**
    *   Nghiên cứu cấu trúc và chức năng của hệ thần kinh, đặc biệt là não bộ.
    *   Công trình của Broca về các vùng não cục bộ hóa chức năng. Golgi và Ramon y Cajal nghiên cứu cấu trúc nơ-ron.
    *   Cung cấp nguồn cảm hứng cho việc thiết kế các **mạng nơ-ron nhân tạo (Artificial Neural Networks - ANNs)**, mô phỏng cách các nơ-ron sinh học xử lý thông tin.
    *   Các kỹ thuật như Điện não đồ (EEG) và Hình ảnh Cộng hưởng Từ Chức năng (fMRI) giúp quan sát hoạt động của não.
*   **Tâm lý học (Psychology):**
    *   Nghiên cứu cách con người và động vật suy nghĩ và hành động.
    *   **Thuyết Hành vi (Behaviorism):** (Watson) Tập trung vào các hành vi có thể quan sát được (kích thích-phản ứng) và bác bỏ việc nghiên cứu các quá trình tâm thần bên trong.
    *   **Tâm lý học Nhận thức (Cognitive Psychology):** (William James, Helmholtz, Bartlett, Craik) Xem xét bộ não như một thiết bị xử lý thông tin. Nhấn mạnh vai trò của các **biểu diễn bên trong (internal representations)** và các **quá trình nhận thức (cognitive processes)** (như niềm tin, mục tiêu) trong việc định hình hành vi. Craik đề xuất mô hình ba bước của tác nhân dựa trên tri thức: chuyển đổi kích thích thành biểu diễn, thao tác biểu diễn, chuyển đổi biểu diễn thành hành động.
*   **Kỹ thuật Máy tính (Computer Engineering):**
    *   Cung cấp nền tảng phần cứng (máy tính điện tử kỹ thuật số) cần thiết để xây dựng và chạy các hệ thống AI.
    *   Những phát minh quan trọng bao gồm máy tính cơ điện (Heath Robinson), máy tính điện tử dựa trên đèn chân không (Colossus), Z-3 (Konrad Zuse), ABC (Atanasoff-Berry Computer), và ENIAC.
*   **Ngôn ngữ học (Linguistics):** Nghiên cứu ngôn ngữ, cấu trúc và ý nghĩa của nó, cung cấp kiến thức nền tảng cho Xử lý Ngôn ngữ Tự nhiên.

## III. LỊCH SỬ PHÁT TRIỂN CỦA TRÍ TUỆ NHÂN TẠO

*   **Giai đoạn Hình thành (1943-1955):**
    *   **Mô hình Nơ-ron Nhân tạo của McCulloch và Pitts (1943):** Đề xuất mô hình toán học đầu tiên của một nơ-ron, cho thấy các mạng nơ-ron có thể thực hiện các phép toán logic.
    *   **Học Hebbian (Donald Hebb, 1949):** "Neurons that fire together, wire together" – một quy tắc học tập đơn giản dựa trên việc tăng cường kết nối giữa các nơ-ron hoạt động đồng thời.
    *   **SNARC (1950):** (Minsky và Edmonds) Máy tính mạng nơ-ron đầu tiên, mô phỏng một mạng 40 nơ-ron.
*   **Sự Ra đời Chính thức (1956):**
    *   **Hội thảo Dartmouth:** Được tổ chức bởi John McCarthy, Marvin Minsky, Nathaniel Rochester, và Claude Shannon. Đây là sự kiện khai sinh chính thức của lĩnh vực AI, nơi thuật ngữ "trí tuệ nhân tạo" được đặt ra. Mục tiêu là khám phá khả năng mô phỏng mọi khía cạnh của trí thông minh bằng máy móc.
*   **Thời kỳ Lạc quan Ban đầu và Kỳ vọng Lớn (1952-1969): "Look, Ma, no hands!"**
    *   **Logic Theorist (Newell, Shaw, Simon):** Chương trình chứng minh các định lý trong logic mệnh đề.
    *   **General Problem Solver (GPS) (Newell, Simon):** Nỗ lực tạo ra một chương trình có thể giải quyết nhiều loại vấn đề khác nhau bằng cách bắt chước các chiến lược giải quyết vấn đề của con người.
    *   **Giả thuyết Hệ thống Ký hiệu Vật lý (Physical Symbol System Hypothesis) (Newell & Simon):** Phát biểu rằng một hệ thống ký hiệu vật lý (như máy tính chạy chương trình) có các phương tiện cần thiết và đủ cho hành động thông minh nói chung.
    *   **Chương trình Chơi Cờ đam của Arthur Samuel (1952-1959):** Một trong những chương trình học máy sớm nhất, có khả năng học chơi cờ đam ở trình độ cao, thậm chí đánh bại người tạo ra nó.
    *   **Ngôn ngữ Lisp (John McCarthy, 1958):** Ngôn ngữ lập trình bậc cao được thiết kế cho AI, trở thành ngôn ngữ thống trị trong lĩnh vực này trong nhiều thập kỷ.
    *   **Advice Taker (John McCarthy, 1958):** Một chương trình giả định được thiết kế để sử dụng tri thức chung và suy luận logic để giải quyết vấn đề, có khả năng tiếp nhận "lời khuyên" mới để cải thiện.
    *   **Perceptron (Frank Rosenblatt, 1957-1962):** Một mô hình mạng nơ-ron một lớp sớm, có khả năng học phân loại các mẫu tuyến tính. **Định lý hội tụ Perceptron** chứng minh rằng thuật toán học Perceptron có thể tìm ra các trọng số phù hợp nếu tồn tại một giải pháp tuyến tính.
*   **Những Thăng Trầm Sau đó và Sự Phát triển Hiện đại:**
    *   **Mùa đông AI (AI Winters):** Những giai đoạn cắt giảm tài trợ và giảm sự quan tâm do những kỳ vọng ban đầu không được đáp ứng.
    *   **Hệ chuyên gia (Expert Systems):** (Thập niên 70-80) Các chương trình AI mô phỏng kiến thức và khả năng ra quyết định của chuyên gia con người trong một lĩnh vực hẹp.
    *   **Sự trỗi dậy của Học máy (Machine Learning):** Đặc biệt là các phương pháp dựa trên thống kê.
        *   **Mô hình Markov Ẩn (Hidden Markov Models - HMMs):** Trở nên thống trị trong nhận dạng giọng nói, dựa trên lý thuyết toán học vững chắc và khả năng học từ lượng lớn dữ liệu.
        *   **Mạng Nơ-ron Quay trở lại:** Với sự phát triển của thuật toán lan truyền ngược, tăng cường sức mạnh tính toán và lượng dữ liệu lớn.
    *   **Khai phá Dữ liệu (Data Mining):** Sự phát triển của các kỹ thuật để khám phá các mẫu hữu ích từ các tập dữ liệu lớn.
    *   **Học Sâu (Deep Learning):** Một nhánh của học máy sử dụng các mạng nơ-ron có nhiều lớp ẩn (mạng sâu) để học các biểu diễn dữ liệu phân cấp. Đã đạt được những thành công đột phá trong nhiều lĩnh vực.

## IV. TÁC NHÂN THÔNG MINH (INTELLIGENT AGENTS)

*   **Tác nhân (Agent):** Bất cứ thứ gì có thể được xem là nhận thức (perceiving) môi trường của nó thông qua **cảm biến (sensors)** và hành động (acting) lên môi trường đó thông qua **bộ truyền động (actuators)**.
*   **Nhận thức (Percept):** Thông tin đầu vào mà tác nhân nhận được từ môi trường tại một thời điểm cụ thể.
*   **Chuỗi nhận thức (Percept Sequence):** Lịch sử đầy đủ của tất cả các nhận thức mà tác nhân đã trải qua cho đến thời điểm hiện tại.
*   **Hàm tác nhân (Agent Function):** Một hàm toán học ánh xạ bất kỳ chuỗi nhận thức nào đã cho thành một hành động mà tác nhân sẽ thực hiện. $f: \mathcal{P}^* \to \mathcal{A}$ (trong đó $\mathcal{P}^*$ là tập hợp tất cả các chuỗi nhận thức có thể có, $\mathcal{A}$ là tập hợp các hành động).
*   **Chương trình tác nhân (Agent Program):** Việc triển khai cụ thể của hàm tác nhân, chạy trên một kiến trúc vật lý.
*   **Tính hợp lý (Rationality):**
    *   **Tác nhân hợp lý (Rational Agent):** Là một tác nhân hành động sao cho tối đa hóa **thước đo hiệu suất (performance measure)** kỳ vọng của nó, dựa trên bằng chứng được cung cấp bởi chuỗi nhận thức và bất kỳ kiến thức tích hợp nào mà tác nhân có.
    *   **Thước đo hiệu suất:** Một tiêu chí để đánh giá mức độ thành công của hành vi của tác nhân trong môi trường.
    *   **Yếu tố quyết định tính hợp lý:** Thước đo hiệu suất, kiến thức tiên nghiệm về môi trường, các hành động có thể thực hiện, chuỗi nhận thức đã có.
    *   **Tính hợp lý vs. Toàn tri (Omniscience):** Tác nhân hợp lý không cần phải toàn tri (biết mọi thứ, bao gồm cả kết quả tương lai của hành động). Tính hợp lý là về việc đưa ra quyết định tốt nhất dựa trên thông tin hiện có.
    *   **Thu thập thông tin (Information Gathering) và Khám phá (Exploration):** Một tác nhân hợp lý có thể cần thực hiện các hành động để thu thập thêm thông tin về môi trường nhằm đưa ra quyết định tốt hơn trong tương lai.
    *   **Học tập (Learning):** Một tác nhân hợp lý nên có khả năng học hỏi từ kinh nghiệm để cải thiện hiệu suất của mình.
    *   **Tính tự chủ (Autonomy):** Khả năng của một tác nhân hoạt động dựa trên kinh nghiệm của chính nó thay vì chỉ dựa vào kiến thức tiên nghiệm của người thiết kế.
*   **Môi trường Tác vụ (Task Environments) - PEAS:** Một cách để đặc tả vấn đề mà tác nhân phải đối mặt.
    *   **P (Performance Measure):** Thước đo hiệu suất.
    *   **E (Environment):** Môi trường mà tác nhân hoạt động.
    *   **A (Actuators):** Các bộ truyền động mà tác nhân sử dụng để hành động.
    *   **S (Sensors):** Các cảm biến mà tác nhân sử dụng để nhận thức môi trường.
*   **Các Thuộc tính của Môi trường Tác vụ:**
    *   **Quan sát được hoàn toàn (Fully observable) vs. Quan sát được một phần (Partially observable):** Liệu tác nhân có thể truy cập vào trạng thái hoàn chỉnh của môi trường tại mọi thời điểm thông qua cảm biến của nó hay không. Nếu không, là quan sát được một phần. Nếu không có cảm biến, là **không quan sát được (unobservable)**.
    *   **Xác định (Deterministic) vs. Ngẫu nhiên (Stochastic):** Liệu trạng thái tiếp theo của môi trường có được xác định hoàn toàn bởi trạng thái hiện tại và hành động của tác nhân hay không. Nếu có yếu tố ngẫu nhiên, là ngẫu nhiên. Môi trường **phi xác định (nondeterministic)** là môi trường có nhiều kết quả có thể xảy ra cho một hành động mà không có xác suất cụ thể.
    *   **Theo từng giai đoạn (Episodic) vs. Tuần tự (Sequential):** Trong môi trường theo từng giai đoạn, kinh nghiệm của tác nhân được chia thành các "giai đoạn" độc lập, và hành động trong một giai đoạn không ảnh hưởng đến các giai đoạn sau. Trong môi trường tuần tự, quyết định hiện tại có thể ảnh hưởng đến các quyết định và trạng thái trong tương lai.
    *   **Tĩnh (Static) vs. Động (Dynamic):** Môi trường tĩnh không thay đổi trong khi tác nhân đang cân nhắc hành động. Môi trường động có thể thay đổi. Môi trường **bán động (semidynamic)** không thay đổi trạng thái nhưng thước đo hiệu suất của tác nhân có thể thay đổi theo thời gian.
    *   **Rời rạc (Discrete) vs. Liên tục (Continuous):** Áp dụng cho không gian trạng thái, cách xử lý thời gian, và tập hợp các nhận thức và hành động của tác nhân.
    *   **Một tác nhân (Single agent) vs. Nhiều tác nhân (Multiagent):** Liệu tác nhân có hoạt động một mình hay có các tác nhân khác trong môi trường (có thể hợp tác hoặc cạnh tranh).
    *   **Biết trước (Known) vs. Chưa biết (Unknown):** Liệu tác nhân có biết đầy đủ "quy luật vật lý" (các quy tắc chuyển đổi trạng thái và kết quả của hành động) của môi trường hay không.
*   **Cấu trúc của Tác nhân (Structure of Agents):**
    *   `tác nhân = kiến trúc + chương trình`
    *   **Kiến trúc (Architecture):** Phần cứng vật lý (máy tính, cảm biến, bộ truyền động).
    *   **Chương trình tác nhân (Agent Program):** Phần mềm thực thi hàm tác nhân, nhận đầu vào là nhận thức hiện tại và trả về một hành động.
*   **Các Loại Chương trình Tác nhân Cơ bản:**
    *   **Tác nhân phản xạ đơn giản (Simple Reflex Agents):** Hoạt động dựa trên các quy tắc điều kiện-hành động (condition-action rules), ánh xạ trực tiếp nhận thức hiện tại sang hành động. Không có bộ nhớ về quá khứ.
    *   **Tác nhân phản xạ dựa trên mô hình (Model-based Reflex Agents):** Duy trì một **trạng thái nội bộ (internal state)** để theo dõi phần không quan sát được của thế giới. Sử dụng một **mô hình (model)** về cách thế giới hoạt động (thế giới tiến hóa như thế nào, hành động của tác nhân ảnh hưởng đến thế giới như thế nào) để cập nhật trạng thái nội bộ.
    *   **(Các loại tác nhân khác như Tác nhân dựa trên mục tiêu (Goal-based Agents) và Tác nhân dựa trên hữu dụng (Utility-based Agents) không có trong các file OCR này nhưng là phần quan trọng của AI.)**

## V. GIẢI QUYẾT VẤN ĐỀ BẰNG TÌM KIẾM (SOLVING PROBLEMS BY SEARCHING)

*   **Giải quyết vấn đề như tìm kiếm:** Nhiều vấn đề trong AI có thể được hình thành như việc tìm kiếm một chuỗi các hành động để đạt được một mục tiêu mong muốn từ một trạng thái ban đầu.
*   **Các bước chính:**
    1.  **Hình thành mục tiêu (Goal Formulation):** Xác định trạng thái hoặc tập hợp các trạng thái mong muốn mà tác nhân muốn đạt được.
    2.  **Hình thành vấn đề (Problem Formulation):** Định nghĩa vấn đề một cách hình thức, bao gồm:
        *   **Trạng thái ban đầu (Initial State):** Trạng thái mà tác nhân bắt đầu.
        *   **Hành động (Actions):** Tập hợp các hành động có thể có mà tác nhân có thể thực hiện trong một trạng thái cụ thể. ACTIONS(s) trả về các hành động áp dụng được trong trạng thái s.
        *   **Mô hình chuyển tiếp (Transition Model):** Một hàm RESULT(s, a) xác định trạng thái kết quả khi thực hiện hành động 'a' trong trạng thái 's'. **Trạng thái kế tiếp (Successor)** là trạng thái có thể đạt được từ một trạng thái bằng một hành động.
        *   **Kiểm tra mục tiêu (Goal Test):** Một hàm xác định xem một trạng thái nhất định có phải là trạng thái mục tiêu hay không.
        *   **Hàm chi phí đường đi (Path Cost Function):** Gán một chi phí số cho mỗi đường đi từ trạng thái ban đầu đến một nút. **Chi phí bước (Step cost) c(s, a, s')** là chi phí của việc thực hiện hành động 'a' để đi từ trạng thái 's' đến 's'.
*   **Không gian trạng thái (State Space):** Tập hợp tất cả các trạng thái có thể đạt được từ trạng thái ban đầu thông qua bất kỳ chuỗi hành động nào. Có thể được biểu diễn dưới dạng đồ thị.
*   **Đường đi (Path):** Một chuỗi các trạng thái được kết nối bởi một chuỗi các hành động.
*   **Giải pháp (Solution):** Một đường đi từ trạng thái ban đầu đến một trạng thái mục tiêu.
*   **Giải pháp tối ưu (Optimal Solution):** Một giải pháp có chi phí đường đi thấp nhất trong số tất cả các giải pháp.
*   **Quá trình tìm kiếm:**
    *   Tác nhân xây dựng một **cây tìm kiếm (search tree)** với trạng thái ban đầu là nút gốc.
    *   Các nút trong cây tìm kiếm tương ứng với các trạng thái trong không gian trạng thái.
    *   Các nhánh của cây đại diện cho các hành động.
    *   **Mở rộng (Expanding) một nút:** Tạo ra các nút con (trạng thái kế tiếp) bằng cách áp dụng tất cả các hành động hợp lệ cho trạng thái tương ứng với nút đó.
    *   **Biên giới (Frontier) / Danh sách mở (Open List):** Tập hợp các nút lá của cây tìm kiếm chưa được mở rộng, đại diện cho các lựa chọn tiếp theo để khám phá.
*   **Các loại vấn đề ví dụ:**
    *   **Vấn đề đồ chơi (Toy Problems):** Các vấn đề đơn giản hóa để minh họa các khái niệm tìm kiếm (ví dụ: thế giới máy hút bụi, câu đố 8 ô, bài toán 8 quân hậu, bài toán của Knuth).
    *   **Vấn đề thế giới thực (Real-World Problems):** Các vấn đề phức tạp hơn (ví dụ: tìm đường, vấn đề du lịch, bài toán người bán hàng du lịch - TSP, bố trí VLSI, điều hướng robot).

## VI. CÁC KHÁI NIỆM THỐNG KÊ CƠ BẢN TRONG HỌC MÁY

*   **Thước đo Xu hướng Trung tâm:**
    *   **Trung bình cộng (Arithmetic Mean - $\bar{v}$):** Tổng các giá trị chia cho số lượng. Nhạy cảm với giá trị ngoại lệ.
    *   **Trung vị (Median - $\tilde{v}$):** Giá trị ở giữa của tập dữ liệu đã sắp xếp. Ít bị ảnh hưởng bởi giá trị ngoại lệ.
    *   **Mode:** Giá trị xuất hiện thường xuyên nhất. Có thể có nhiều mode hoặc không có mode nào.
    *   **Trung bình nhân (Geometric Mean - G):** $\sqrt[N]{v_1 v_2 \dots v_N}$. Thích hợp cho các đại lượng có tính chất nhân (ví dụ: tỷ lệ tăng trưởng).
    *   **Trung bình điều hòa (Harmonic Mean - H):** $N / \sum (1/v_j)$. Thích hợp cho trung bình của các tỷ lệ (ví dụ: tốc độ).
    *   **Trung bình bình phương (Root Mean Square - RMS):** $\sqrt{(\sum v_j^2) / N}$. Liên quan đến độ lớn trung bình.
*   **Thước đo Độ phân tán:**
    *   **Độ lệch chuẩn (Standard Deviation - S hoặc $\sigma$):** Đo lường mức độ phân tán trung bình của dữ liệu so với giá trị trung bình. $S = \sqrt{\sum (v_j - \bar{v})^2 / N}$ (cho tổng thể) hoặc $S = \sqrt{\sum (v_j - \bar{v})^2 / (N-1)}$ (cho mẫu).
    *   **Phương sai (Variance - $S^2$ hoặc $\sigma^2$):** Bình phương của độ lệch chuẩn.
*   **Lý thuyết Xác suất (Probability Theory):**
    *   **Khái niệm Tần số Tương đối của Xác suất:** $P(A) = f/n$ (tần số xuất hiện sự kiện A chia cho tổng số lần thử).
    *   **Các Tiên đề Kolmogorov của Xác suất:**
        1.  $P(S) = 1$ (S là không gian mẫu).
        2.  $0 \le P(E) \le 1$ (E là một sự kiện bất kỳ).
        3.  $P(E_1 \cup E_2) = P(E_1) + P(E_2)$ nếu $E_1$ và $E_2$ xung khắc (không có phần tử chung).
    *   **Xác suất Có điều kiện (Conditional Probability):** $P(B|A) = P(A \cap B) / P(A)$. Xác suất của B xảy ra khi biết A đã xảy ra.
    *   **Quy tắc Nhân (Multiplication Rule):** $P(A \cap B) = P(B|A)P(A) = P(A|B)P(B)$.
    *   **Quy tắc Xác suất Toàn phần (Total Probability Rule):** Cho phép tính xác suất của một sự kiện bằng cách chia nó thành các trường hợp xung khắc và có điều kiện.
    *   **Độc lập (Independence):** Hai sự kiện A và B là độc lập nếu $P(A \cap B) = P(A)P(B)$, hoặc tương đương $P(A|B) = P(A)$ và $P(B|A) = P(B)$.

## VII. ĐẠI SỐ TUYẾN TÍNH CƠ BẢN (MA TRẬN)

*   **Các loại Ma trận Đặc biệt:**
    *   **Ma trận Đơn vị (Identity Matrix - I):** Ma trận vuông với các số 1 trên đường chéo chính và 0 ở các vị trí khác. $\mathbf{A}\mathbf{I} = \mathbf{I}\mathbf{A} = \mathbf{A}$.
    *   **Ma trận Thực (Real Matrix):** Tất cả các phần tử là số thực.
    *   **Ma trận Đối xứng (Symmetric Matrix):** Ma trận vuông mà $\mathbf{M}^T = \mathbf{M}$ (chuyển vị bằng chính nó).
    *   **Ma trận Phản đối xứng (Skew-Symmetric Matrix):** Ma trận vuông mà $\mathbf{M}^T = -\mathbf{M}$.
    *   **Ma trận Trực giao (Orthogonal Matrix):** Ma trận vuông mà $\mathbf{M}^T = \mathbf{M}^{-1}$ (chuyển vị bằng nghịch đảo). Các cột (và hàng) của nó tạo thành một tập hợp các vectơ trực chuẩn.
    *   **Chuyển vị Liên hợp (Conjugate Transpose) / Chuyển vị Hermite (Hermitian Transpose - $\mathbf{M}^H$):** $(\mathbf{M}^T)^*$. Đối với ma trận thực, $\mathbf{M}^H = \mathbf{M}^T$.
    *   **Ma trận Unita (Unitary Matrix):** Ma trận vuông phức mà $\mathbf{M}^H = \mathbf{M}^{-1}$. Tương tự ma trận trực giao cho không gian phức.
    *   **Ma trận Tam giác Dưới/Trên (Lower/Upper Triangular Matrix):** Các phần tử bằng 0 ở phía trên/dưới đường chéo chính.
*   **Ký hiệu Dirac (Bra-Ket Notation) (thường dùng trong cơ học lượng tử, được giới thiệu ở đây để minh họa phép toán vectơ):**
    *   **Ket ($|b\rangle$):** Biểu diễn một vectơ cột.
    *   **Bra ($\langle a|$):** Biểu diễn một vectơ hàng (trong không gian thực, là chuyển vị của ket tương ứng $\mathbf{a}^T$).
    *   **Tích trong (Inner Product / Braket $\langle a | b \rangle$):** $\mathbf{a}^T \mathbf{b}$, kết quả là một số vô hướng (scalar).
    *   **Tích ngoài (Outer Product $|b\rangle \langle a|$):** $\mathbf{b} \mathbf{a}^T$, kết quả là một ma trận.
    *   **Phép toán Ma trận-Vectơ:**
        *   $\mathbf{M}|b\rangle = \mathbf{M}\mathbf{b}$: Nhân ma trận với vectơ cột, kết quả là một vectơ cột (là tổ hợp tuyến tính của các cột của $\mathbf{M}$ với các hệ số là các phần tử của $\mathbf{b}$).
        *   $\langle a | \mathbf{M} = \mathbf{a}^T \mathbf{M}$: Nhân vectơ hàng với ma trận, kết quả là một vectơ hàng (là tổ hợp tuyến tính của các hàng của $\mathbf{M}$ với các hệ số là các phần tử của $\mathbf{a}^T$).

## VIII. MẠNG NƠ-RON TRUYỀN THẲNG NHIỀU LỚP (MULTILAYER FEED-FORWARD NEURAL NETWORKS - FFNNs)

*   **Khái niệm Cơ bản:** FFNNs là các mô hình tính toán lấy cảm hứng từ cấu trúc não bộ, bao gồm các đơn vị xử lý (nơ-ron) được kết nối thành các lớp. Thông tin chỉ di chuyển theo một hướng (truyền thẳng) từ lớp đầu vào qua các lớp ẩn đến lớp đầu ra.
*   **Nơ-ron (Neuron) / Nút (Node) / Đơn vị (Unit):**
    *   **Đầu vào:** Nhận một hoặc nhiều tín hiệu đầu vào.
    *   **Trọng số (Weights - $\mathbf{w}$):** Mỗi kết nối đầu vào có một trọng số liên kết, thể hiện tầm quan trọng của đầu vào đó.
    *   **Độ lệch (Bias - $b$):** Một tham số có thể học được, cho phép nơ-ron kích hoạt ngay cả khi tất cả các đầu vào bằng không, tăng tính linh hoạt của mô hình.
    *   **Giá trị Tiền Kích hoạt (Pre-activation Value - $z$):** Tổng có trọng số của các đầu vào cộng với độ lệch: $z = \sum w_i x_i + b = \mathbf{w}^T \mathbf{x} + b$.
    *   **Hàm Kích hoạt (Activation Function - AF - $\sigma$):** Một hàm phi tuyến được áp dụng cho giá trị tiền kích hoạt để tạo ra đầu ra của nơ-ron: $a = \sigma(z)$.
    *   **Giá trị Hậu Kích hoạt (Post-activation Value - $a$):** Đầu ra của nơ-ron.
*   **Các Lớp (Layers):**
    *   **Lớp Đầu vào (Input Layer):** Nhận dữ liệu thô ban đầu. Số nơ-ron bằng số chiều của dữ liệu đầu vào.
    *   **Lớp Ẩn (Hidden Layer(s)):** Nằm giữa lớp đầu vào và lớp đầu ra. Thực hiện các phép biến đổi phi tuyến phức tạp trên dữ liệu để học các biểu diễn trừu tượng hơn. Một NN có thể có nhiều lớp ẩn.
    *   **Lớp Đầu ra (Output Layer):** Tạo ra kết quả cuối cùng của mạng. Số nơ-ron và hàm kích hoạt của lớp này phụ thuộc vào loại bài toán (ví dụ: một nơ-ron với hàm sigmoid cho phân loại nhị phân, nhiều nơ-ron với hàm softmax cho phân loại đa lớp).
*   **Mạng Nơ-ron Sâu (Deep Neural Network - DNN):** Một FFNN có nhiều lớp ẩn. Độ "sâu" của mạng đề cập đến số lượng lớp này. Mạng sâu có khả năng học các biểu diễn phân cấp và phức tạp của dữ liệu.
*   **Hàm Kích hoạt (Activation Functions - AFs):**
    *   **Vai trò:** Đưa tính phi tuyến vào mạng, cho phép NN học các hàm phức tạp hơn là các phép biến đổi tuyến tính đơn thuần. Nếu không có AF phi tuyến, một NN đa lớp sẽ tương đương với một NN một lớp.
    *   **Các loại phổ biến:**
        *   **Sigmoid:** $\sigma(z) = 1 / (1 + e^{-z})$. Phạm vi (0, 1). Gặp vấn đề vanishing gradient.
        *   **Tanh (Hyperbolic Tangent):** $\sigma(z) = (e^z - e^{-z}) / (e^z + e^{-z})$. Phạm vi (-1, 1). Trung tâm là 0, có thể tốt hơn sigmoid trong một số trường hợp, nhưng vẫn bị vanishing gradient.
        *   **ReLU (Rectified Linear Unit):** $\sigma(z) = \max(0, z)$. Đơn giản, hiệu quả tính toán, giúp giảm vanishing gradient. Có thể gặp vấn đề "dying ReLU" (nơ-ron không bao giờ kích hoạt).
        *   **ELU (Exponential Linear Unit):** Một biến thể của ReLU, xử lý vấn đề dying ReLU và có giá trị trung bình gần 0 hơn.
        *   **Softmax:** $\sigma(\mathbf{z})_i = e^{z_i} / \sum_j e^{z_j}$. Chuyển đổi một vectơ các giá trị thực thành một phân phối xác suất trên nhiều lớp. Thường dùng cho lớp đầu ra trong bài toán phân loại đa lớp.
*   **Lan truyền Tiến (Forward Propagation):**
    *   Quá trình tính toán đầu ra của mạng dựa trên một đầu vào nhất định.
    *   Dữ liệu đầu vào được truyền qua từng lớp của mạng, từ lớp đầu vào đến lớp đầu ra.
    *   Tại mỗi nơ-ron trong mỗi lớp, giá trị tiền kích hoạt ($z$) được tính bằng tổng có trọng số của các đầu ra từ lớp trước cộng với độ lệch. Sau đó, hàm kích hoạt ($\sigma$) được áp dụng để tạo ra đầu ra của nơ-ron đó ($a$).
    *   Có thể biểu diễn bằng các phép toán ma trận cho hiệu quả tính toán: $\mathbf{z}^{(l)} = \mathbf{W}^{(l)} \mathbf{a}^{(l-1)} + \mathbf{b}^{(l)}$ và $\mathbf{a}^{(l)} = \sigma(\mathbf{z}^{(l)})$.
*   **Biểu diễn Mạng Nơ-ron dưới dạng Đồ thị Tính toán:** Giúp trực quan hóa dòng chảy tính toán và là cơ sở cho việc tính toán đạo hàm bằng lan truyền ngược.

## IX. VI PHÂN TỰ ĐỘNG (AUTOMATIC DIFFERENTIATION - AD) VÀ LAN TRUYỀN NGƯỢC (BACKPROPAGATION)

*   **Vi Phân Tự Động (AD):**
    *   Một tập hợp các kỹ thuật để đánh giá đạo hàm của một hàm được chỉ định bởi một chương trình máy tính một cách số học và chính xác.
    *   **Ý tưởng cốt lõi:** Mọi phép tính số, dù phức tạp, đều là sự kết hợp của các phép toán số học cơ bản và các hàm cơ bản mà đạo hàm của chúng đã biết. AD áp dụng quy tắc chuỗi một cách tự động.
    *   **Chế độ Tiến (Forward Mode / Tangent Mode):**
        *   Tính toán $\partial v_i / \partial x$ (đạo hàm của các biến trung gian $v_i$ theo biến đầu vào $x$).
        *   Duyệt quy tắc chuỗi từ trong ra ngoài.
        *   Hiệu quả khi số lượng biến đầu vào nhỏ hơn nhiều so với số lượng biến đầu ra.
    *   **Chế độ Ngược (Reverse Mode / Adjoint Mode):**
        *   Tính toán $\partial y / \partial v_i$ (đạo hàm của biến đầu ra $y$ theo các biến trung gian $v_i$).
        *   Duyệt quy tắc chuỗi từ ngoài vào trong.
        *   Thường yêu cầu hai lượt qua đồ thị tính toán: một lượt tiến để tính giá trị các biến, và một lượt ngược để tính đạo hàm.
        *   Hiệu quả khi số lượng biến đầu ra nhỏ hơn nhiều so với số lượng biến đầu vào (ví dụ: hàm mất mát vô hướng trong NN).
*   **Lan truyền Ngược (Backpropagation - BP):**
    *   Là một ứng dụng cụ thể của chế độ ngược của vi phân tự động để huấn luyện mạng nơ-ron.
    *   Mục tiêu: Tính toán hiệu quả gradient của hàm mất mát đối với tất cả các trọng số và độ lệch trong mạng.
    *   Hoạt động bằng cách lan truyền tín hiệu lỗi từ lớp đầu ra ngược trở lại các lớp trước đó, sử dụng quy tắc chuỗi để tính toán sự đóng góp của mỗi tham số vào lỗi tổng thể.

## X. QUÁ TRÌNH HUẤN LUYỆN MẠNG NƠ-RON VÀ HÀM MẤT MÁT

*   **Hàm Mất mát (Loss Function) / Hàm Chi phí (Cost Function) - $\mathcal{L}$:**
    *   Một hàm đo lường sự khác biệt ("sai số") giữa đầu ra dự đoán của mạng ($a^{(L)}$ hoặc $\hat{y}$) và giá trị mục tiêu thực tế ($y$).
    *   Mục tiêu của quá trình huấn luyện là tìm các giá trị tham số (trọng số và độ lệch) sao cho hàm mất mát được giảm thiểu.
    *   **Các loại phổ biến:**
        *   **Sai số Bình phương Trung bình (Mean Squared Error - MSE):** $\mathcal{L}_{MSE} = (1/n) \sum (y_j - \hat{y}_j)^2$. Thường dùng cho các bài toán hồi quy. Đạo hàm đơn giản: $\partial \mathcal{L}_{MSE} / \partial \hat{y}_i = (\hat{y}_i - y_i)$.
        *   **Binary Cross-Entropy (BCE) / Mất mát Logistic:** $\mathcal{L}_{BCE} = -(1/n) \sum [y_j \log(\hat{y}_j) + (1-y_j) \log(1-\hat{y}_j)]$. Thường dùng cho các bài toán phân loại nhị phân (đầu ra là xác suất).
*   **Quá trình Huấn luyện (Training Process):**
    1.  **Khởi tạo Tham số:** Khởi tạo các trọng số và độ lệch của mạng (thường là ngẫu nhiên với giá trị nhỏ).
    2.  **Lặp lại qua các Epoch:**
        *   **Epoch:** Một lượt đi hoàn chỉnh qua toàn bộ tập dữ liệu huấn luyện.
        *   **Đối với mỗi Mini-batch (hoặc mỗi mẫu trong SGD):**
            *   **Lan truyền Tiến (Forward Propagation):** Đưa dữ liệu đầu vào qua mạng để tính toán đầu ra dự đoán $\hat{y}$.
            *   **Tính toán Mất mát (Compute Loss):** Sử dụng hàm mất mát để so sánh $\hat{y}$ với $y$ thực tế và tính giá trị mất mát $\mathcal{L}$.
            *   **Lan truyền Ngược (Backward Propagation - BP):** Tính toán gradient của hàm mất mát đối với từng trọng số và độ lệch trong mạng ($\partial \mathcal{L} / \partial w$, $\partial \mathcal{L} / \partial b$).
            *   **Cập nhật Tham số (Update Parameters):** Điều chỉnh các trọng số và độ lệch theo hướng ngược lại của gradient để giảm mất mát. Quy tắc cập nhật phổ biến (cho Hạ Gradient):
                $w_{new} = w_{old} - \alpha \cdot (\partial \mathcal{L} / \partial w)$
                $b_{new} = b_{old} - \alpha \cdot (\partial \mathcal{L} / \partial b)$
                trong đó $\alpha$ là **tốc độ học (learning rate)**, một siêu tham số kiểm soát kích thước của bước cập nhật.
*   **Bốn Phương Trình Cơ Bản của Lan Truyền Ngược (Core Equations of Backpropagation):**
    *   Các phương trình này (không được trình bày chi tiết ở đây nhưng là nền tảng của BP) mô tả cách tính toán "sai số" ($\delta^{(l)}$) cho mỗi lớp $l$, bắt đầu từ lớp đầu ra và lan truyền ngược lại. Sai số $\delta_j^{(l)}$ đại diện cho $\partial \mathcal{L} / \partial z_j^{(l)}$ (đạo hàm của mất mát theo giá trị tiền kích hoạt của nơ-ron $j$ ở lớp $l$).
    1.  **Sai số ở Lớp Đầu ra ($\delta^{(L)}$):** Phụ thuộc vào đạo hàm của hàm mất mát theo kích hoạt ở lớp đầu ra và đạo hàm của hàm kích hoạt ở lớp đầu ra. Ví dụ, với MSE và AF $\sigma$: $\delta_j^{(L)} = (a_j^{(L)} - y_j) \sigma'(z_j^{(L)})$.
    2.  **Sai số ở Lớp Ẩn ($\delta^{(l)}$):** Được tính dựa trên sai số của lớp tiếp theo ($\delta^{(l+1)}$) và các trọng số kết nối giữa lớp $l$ và $l+1$.
    3.  **Gradient đối với Độ lệch ($\partial \mathcal{L} / \partial b_j^{(l)}$):** Bằng $\delta_j^{(l)}$.
    4.  **Gradient đối với Trọng số ($\partial \mathcal{L} / \partial w_{jk}^{(l)}$):** Bằng $a_k^{(l-1)} \delta_j^{(l)}$ (tích của kích hoạt từ lớp trước và sai số của nơ-ron hiện tại).
*   **Các Phương Pháp Tối ưu hóa Hạ Gradient (Gradient Descent Optimization Methods):**
    *   **Hạ Gradient Toàn Batch (Full-Batch Gradient Descent - FBGD / GD):**
        *   Tính toán gradient dựa trên *toàn bộ* tập dữ liệu huấn luyện trước mỗi lần cập nhật tham số.
        *   Ưu điểm: Hướng đi ổn định, có thể hội tụ đến cực tiểu (nếu hàm lồi).
        *   Nhược điểm: Rất tốn kém về mặt tính toán và bộ nhớ với các tập dữ liệu lớn; có thể bị kẹt ở cực tiểu cục bộ hoặc điểm yên ngựa.
    *   **Hạ Gradient Ngẫu Nhiên (Stochastic Gradient Descent - SGD):**
        *   Cập nhật tham số sau khi xử lý *mỗi mẫu huấn luyện đơn lẻ*.
        *   Ưu điểm: Nhanh hơn nhiều mỗi lần cập nhật, ít tốn bộ nhớ, gradient nhiễu có thể giúp thoát khỏi cực tiểu cục bộ nông. Tốt cho học trực tuyến.
        *   Nhược điểm: Quá trình hội tụ có thể dao động mạnh (nhiễu), không đảm bảo đi đúng hướng dốc nhất.
    *   **Hạ Gradient Ngẫu Nhiên Theo Mini-Batch (Mini-Batch Stochastic Gradient Descent - MBSGD):**
        *   Cập nhật tham số sau khi xử lý một *phần nhỏ (mini-batch)* của tập dữ liệu huấn luyện. Kích thước mini-batch là một siêu tham số (ví dụ: 32, 64, 128).
        *   Ưu điểm: Kết hợp ưu điểm của FBGD và SGD. Giảm nhiễu của SGD, hiệu quả tính toán hơn FBGD. Tận dụng tốt các phép toán ma trận song song trên GPU. Là phương pháp phổ biến nhất trong thực tế.
        *   Nhược điểm: Cần chọn kích thước mini-batch phù hợp.
*   **Tầm quan trọng của Tính Phi tuyến:**
    *   **Định lý:** Một mạng nơ-ron đa lớp chỉ sử dụng hàm kích hoạt tuyến tính (ví dụ: hàm đồng nhất $\sigma(z)=z$) trong tất cả các lớp của nó sẽ tương đương về mặt toán học với một mạng nơ-ron một lớp (tuyến tính).
    *   **Hàm ý:** Tính phi tuyến được đưa vào bởi các hàm kích hoạt là điều cần thiết để mạng nơ-ron có thể học các mối quan hệ phức tạp và các hàm không tuyến tính từ dữ liệu. Nếu không có tính phi tuyến, sức mạnh biểu cảm của mạng sâu sẽ bị hạn chế nghiêm trọng.
