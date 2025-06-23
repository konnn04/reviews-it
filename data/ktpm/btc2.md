## Bài tập có hướng dẫn

Bài 1. Để kỷ niệm sinh nhật công ty vào tháng 2, một siêu thị mini chuyên kinh doanh đồ chơi trẻ em sẽ giảm giá 50% cho những hoá đơn mua hàng trong tháng 2 hàng năm có giá trị hoá đơn từ 500.000 VNĐ trở lên. Sử dụng phương pháp phân vùng tương đương và phân tích giá trị biên, hãy thiết kế test case kiểm thử số tiền (VNĐ) khách hàng được giảm trên hoá đơn?

## Giải

### Phân tích phân vùng tương đương:
- Gọi `x` là tổng số tiền (VNĐ) trong hoá đơn mua hàng của khách hàng.
- Gọi `y` là thời gian mua hàng trong năm (1-12).

=> Có 3 phân vùng tương đương:
- PV1: `x < 500000` và `y` bất kỳ (không được giảm giá).
- PV2: `x >= 500000` và `y` thuộc tháng 2 (được giảm giá 50%).
- PV3: `x` bất kỳ và `y` không phải tháng 2 (không được giảm giá).

### Thiết kế test case dựa trên phân tích giá trị biên:
- PV1: 
    - `x = 499999`, `y = 01/02/20XX` -> không được giảm giá.
- PV2:
    - `x = 500000`, `y = 01/02/20XX` -> được giảm giá 50%.
    - `x = 500000`, `y = 28/02/2021` -> được giảm giá 50% (năm thường)
    - `x = 500000`, `y = 29/02/2020` -> được giảm giá 50% (năm nhuận)
- PV3:
    - `x = 500000`, `y = 01/01/20XX` -> không được giảm giá.
    - `x = 500000`, `y = 31/01/20XX` -> không được giảm giá.
    - `x = 500000`, `y = 01/03/20XX` -> không được giảm giá.
    - `x = 500000`, `y = 31/12/20XX` -> không được giảm giá.



Bài 2. Trường đại học A cần xây dựng hệ thống đăng ký học phần theo tín chỉ. Đầu mỗi học kỳ, sinh viên phải đăng ký học phần, trong đó tổng số tín chỉ của một học kỳ không quá 16 tín chỉ và tổng học phí không quá 15 triệu VNĐ/1 học kỳ. Theo quy định của trường A, mỗi môn có số tín chỉ tối thiểu là 1 và tối đa là 6, những môn học không có thực hành thì đơn giá là 300.000 nghìn VNĐ/1 tín chỉ, các môn có thực hành đơn giá 520.000 VNĐ/1 tín chỉ. Giả sử hệ thống đã hiển thị đúng danh sách các môn được phép chọn đăng ký cho một học kỳ. Sử dụng bảng quyết định và phương pháp phân vùng tương đương thiết kế các test case kiểm thử việc đăng ký các môn học của sinh viên có hợp lệ không?

## Giải

- Gọi `tc` là tổng số tín chỉ của các môn học đã đăng ký.
- Gọi `hp` là tổng học phí của các môn học đã đăng ký.




Bài 3. Hệ thống quản lý đặt vé của một công ty vận tải tốc hành cho phép nhân viên thực hiện các chức năng đặt vé, bán vé, đổi vé hoặc huỷ vé. Trong đó đặt vé hoặc bán vé thực hiện cho những vé trống, việc đặt vé phải được thực hiện trước 60 phút và mua vé trước 5 phút khi chuyến xe khởi hành. Chú ý các vé đã bán thì không được hoàn lại. Trước 30 phút nếu khách hàng không đến nhận vé đã đặt thì hệ thống sẽ tự động huỷ vé đó trở về trạng thái trống hoặc khách hàng yêu cầu huỷ vé đặt. Đối với các vé đã đặt được phép thực hiện đổi vé trước 60 phút trước khi chuyến xe khởi hành, có thể thực hiện đổi ghế trong một chuyến hoặc đổi chuyến khác, hiển nhiên sau khi đổi chuyến thì vé đó cũng thành vé trống. Trong vòng 5 phút trước khi xe khởi hành vé trống sẽ chuyển về trạng thái thu hồi không được phép thực hiện chức năng nào trên các vé đó nữa. Vẽ lược đồ trạng thái và thiết kế các test case kiểm thử yêu cầu.

## BÀI TẬP LÀM THÊM

Bài 1. Một hệ thống xét tuyển thẳng cao học của một trường đại học với yêu cầu sinh viên tốt nghiệp đại học có điểm trung bình từ 8,5 trở lên (theo thang điểm 10) và thời gian tốt nghiệp đại học không quá 12 tháng kể từ thời điểm xét tuyển thẳng. Ngoài ra, sinh viên vẫn phải thi anh văn đầu vào nếu chưa có chứng chỉ TOEIC từ 600 điểm trở lên (điểm tối đa chứng chỉ TOEIC là 990 điểm) và thời hạn hiệu lực của chứng chỉ này không quá 36 tháng kể từ thời điểm đạt chứng chỉ cho đến thời điểm xét tuyển. Sử dụng bảng quyết định và phân tích giá trị biên thiết kế test case kiểm thử sinh viên nộp hồ sơ có được tuyển thẳng hay không và có cần thi anh văn đầu vào hay không?


Bài 2. Một chương trình khuyến mãi tri ân khách hàng của hãng A cho những khách hàng mua dòng điện thoại cao cấp của hãng điện ra từ ngày 20/11/2020 đến hết ngày 31/12/2020 – dòng điện thoại được gọi là cao cấp nếu giá bán lớn hơn hoặc bằng 20tr. Theo đó, nếu khách hàng mua điện thoại cao cấp của hãng A trong khoảng thời gian đó sẽ được tặng 1 loa bluetooth và miếng dán màn hình. Ngoài ra đối với những khách hàng đã từng dùng dòng điện thoại cao cấp của hãng A, tính từ thời điểm đã mua cho đến thời điểm mua mới, nếu khoảng thời gian này:
Không quá 1 năm thì khách hàng sẽ được giảm thêm 2 triệu trên giá sản phẩm.
Từ trên 1 năm đến nhỏ hơn hoặc bằng 2 năm thì khách hàng được giảm thêm 1 triệu trên giá sản phẩm.
Sử dụng các phương pháp bảng quyết định và phân tích giá trị biên thiết kế các test case kiểm thử các khuyến mãi mà người dùng nhận được khi mua điện thoại cao cấp hãng A.

Bài 3. Một chương trình khuyến mãi của một công ty diễn ra vào tháng 2 hàng năm, chương trình này quy định người dùng mua hàng trong khoảng thời gian từ 8h30' sáng đến 10h30' sáng trong các ngày của tháng 2, với tổng giá trị hoá đơn từ 2 triệu VNĐ trở lên được giảm 40% trên hoá đơn.
Sử dụng bảng quyết định và phương pháp phân tích giá trị biên kiểm thử người dùng được khuyến mãi giảm bao nhiêu tiền?

Bài 4. Một hệ thống cho phép đăng ký thuê bao/đĩa trực tuyến, công ty sẽ gửi bảng/đĩa cho khách hàng thông qua đường bưu điện, khi trả khách hàng chỉ cần mang đến trả tại đại lý gần nhất hoặc thông qua đường bưu điện có dịch vụ liên kết với công ty. Công ty cung cấp hai gói thuê cho khách hàng.
Khách hàng thường (phí 30`$`/năm): chỉ được mượn tối đa 300 bảng đĩa một năm và không giới hạn số lượng mượn tại một thời điểm.
Khách hàng VIP (100`$`/năm): được mượn với số lượng không giới hạn, nhưng tại một thời điểm chỉ được mượn tối đa 10 bảng đĩa.
Khi mượn khách hàng chọn các bảng đĩa muốn mượn có trên hệ thống. Sử dụng bảng quyết định kết hợp phương pháp phân tích giá trị biên để thiết kế test case kiểm thử khách hàng có được phép mượn số bảng/đĩa đã chọn không?

Bài 5. Ngân hàng ABC quy định phí chuyển tiền từ tài khoản cá nhân tới tài khoản khác ngân hàng qua thẻ ATM trong phạm vi Việt Nam như sau:
Nếu chuyển tiền từ thiện đến các tổ chức được ngân hàng ABC liên kết thì miễn phí.
Nếu chuyển đến tài khoản khác cùng ngân hàng thì trả 2200 VNĐ/giao dịch cho số tiền dưới 50 triệu VNĐ và 5000 VNĐ cho số tiền từ 50 triệu VNĐ trở lên.
Nếu chuyển đến tài khoản khác và khác ngân hàng thì trả 7000 VNĐ/giao dịch cho số tiền dưới 10 triệu VNĐ và 0.02%/số tiền chuyển cho số tiền từ 10 triệu VNĐ trở lên, nhưng không quá 500 triệu VNĐ một lần chuyển.
Sử dụng bảng quyết định kết hợp phương pháp phân tích giá trị biên để thiết kế test case kiểm thử mức phí mà người dùng phải trả khi chuyển tiền tới tài khoản khác.


Bài 6. Một hệ thống quản lý nhân sự có chức năng xác định mức tiền thưởng cho nhân viên của công ty trong các dịp kỷ niệm ngày thành lập công ty dựa trên mức chi chung được công ty cập nhật mỗi năm. Theo đó, những nhân viên đang trong giai đoạn thử việc (thử việc 2 tháng tính từ lúc tham gia công ty, nếu không đạt thì công ty sẽ chấm dứt hợp đồng) được thưởng 500.000 VNĐ, những nhân viên làm việc trên 2 tháng đến dưới 24 tháng được hưởng 100% mức chi chung, những nhân viên làm việc từ 24 tháng trở lên được hưởng 120% mức chi. Ngoài ra những nhân viên chính thức có con nhỏ hơn hoặc bằng 6 tuổi sinh trong tháng kỷ niệm thành lập công ty được thưởng thêm 500.000 VNĐ. Chú ý việc tính số tháng làm việc của nhân viên chính thức tính luôn cả hai tháng thử việc, từ lúc bắt đầu làm việc tại công ty cho đến kỷ niệm ngày thành lập công ty.
Sử dụng bảng quyết định và phân tích giá trị biên thiết kế test case kiểm thử xác định mức thưởng các nhân viên công ty?

Bài 7. Một hệ thống ngân hàng trực tuyến cho phép người dùng mở thêm các tài khoản có kỳ hạn trực tuyến, mỗi tài khoản được mở yêu cầu mức tối thiểu là 10 triệu cho tài khoản đó và chỉ được thực hiện trong khoảng thời gian từ 6:00h sáng đến 6:00h chiều mỗi ngày trong tuần từ thứ hai đến thứ bảy. Ngoài ra, để khuyến khích người dùng gửi tiền trực tuyến, ngân hàng tổ chức quay số trúng thưởng cuối mỗi tháng, điều kiện để khách hàng nhận được một mã dự thưởng là trong tháng đó có mở tài khoản tiền gửi trực tuyến từ 30 triệu đến dưới 50 triệu cho kỳ hạn 12 tháng trở lên, và từ 50 triệu cho tài khoản có kỳ hạn 6 tháng trở lên. Giả sử ngân hàng có các kỳ hạn: 1 tuần, 1 tháng, 3 tháng, 6 tháng, 12 tháng, 24 tháng và 36 tháng.
Sử dụng bảng quyết định thiết kế các test case kiểm thử khách hàng có được phép mở tài khoản trực tuyến và có nhận được mã dự thưởng không?


Bài 8. Một hệ thống quản lý cho phép gửi và nhận tin nhắn trong hệ thống, khi người dùng nhận tin mới có trạng thái là tin chưa đọc, nếu người nhận mở ra đọc thì tin đó thành trạng thái đã đọc. Sau khi đọc tin, người dùng cũng có thể chuyển nó thành tin chưa đọc để ghi nhớ. Ngoài ra, người dùng cũng có thể xóa tin nhắn, ban đầu tin xóa tạm nằm trong thùng rác, trong 24h kể từ lúc xóa người dùng có thể phục hồi lại trạng thái trước khi xóa, sau khoảng thời gian này tin sẽ bị xóa vĩnh viễn.
Vẽ lược đồ chuyển đổi trạng thái tin nhắn và viết các test case.

Bài 9. Để giao dịch tại máy ATM, đầu tiên khách hàng (KH) cần đưa thẻ vào ATM. Nếu đọc thẻ thành công ATM sẽ yêu cầu người dùng nhập mật khẩu (MK) để chứng thực, ngược lại máy sẽ nhả thẻ. ATM tiến hành kiểm tra MK, nếu MK đúng thì cho phép KH chọn giao tác. ATM tiến hành chọn giao tác và nhấn phím Enter thì ATM sẽ thực thi giao tác. Sau khi KH hoàn tất giao tác, ATM hiển thị lại danh sách giao tác để KH thực hiện giao tác khác. Trong quá trình chọn giao tác hoặc nhập mật khẩu thì KH có quyền nhấn phím Cancel thì ATM sẽ nhả thẻ lại cho KH. Chú ý: nếu KH nhập mã PIN sai 5 lần thì ATM sẽ giữ lại thẻ. Vẽ sơ đồ chuyển đổi trạng thái và xác định bảng trạng thái và thiết kế các test case để kiểm thử các hoạt động trên.

Bài 10. Notification Center là một module trong hệ thống học tập trực tiếp, một người sẽ nhận được thông báo mới khi người khác bình luận, thích trên bài viết họ đã đăng hoặc người khác cũng bình luận trên bài viết mà họ đã bình luận không quá 1 tháng. Ngoài ra nếu người dùng đã theo dõi (follow) một bài viết thì luôn nhận thông báo khi có người bình luận hoặc thích bài viết đó. Một thông báo mới có trạng thái là UNSEEN, khi người dùng mở Notification sẽ thấy những thông báo này có màu nền xanh và chữ đậm, và những thông báo này sẽ chuyển thành trạng thái SEEN và có màu nền xanh mờ hơn so với UNSEEN và chữ không in đậm. Nếu người dùng click trên thông báo đó để mở bài viết ra xem thì thông báo đó trở thành trạng thái OPENED, hiển thị không có màu nền và màu chữ bình thường.
Vẽ lược đồ chuyển đổi trạng thái thông báo trong Notification Center và thiết kế các test case kiểm thử.

