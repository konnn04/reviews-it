
# Các dạng hàm thường gặp - CSLT 2025


*Nên xem qua*

## Bài 1. Kiểm tra số âm, dương hay bằng 0

### Mô tả

Viết chương trình nhận vào một số nguyên n.
Xác định số đó là số âm, số dương hay bằng 0.

### Input

* Một số nguyên n

### Output

* In ra:

  * NEGATIVE nếu n < 0
  * POSITIVE nếu n > 0
  * ZERO nếu n = 0

### Ý tưởng

* Sử dụng cấu trúc điều kiện if – else
* So sánh giá trị của n với 0

### Testcase

Testcase 1

```
5

POSITIVE
```

Testcase 2

```
-3

NEGATIVE
```

---

## Bài 2. Kiểm tra năm nhuận

### Mô tả

Cho một năm y, hãy kiểm tra xem năm đó có phải là năm nhuận hay không.

### Input

* Một số nguyên y (năm)

### Output

* true nếu là năm nhuận
* false nếu không phải năm nhuận

### Ý tưởng

* Một năm là năm nhuận nếu:

  * Chia hết cho 400
  * Hoặc chia hết cho 4 nhưng không chia hết cho 100

### Testcase

Testcase 1

```
2024

true
```

Testcase 2

```
1900

false
```

---

## Bài 3. Tính tiền điện

### Mô tả

Tính tiền điện theo quy tắc:

* 50 kWh đầu tiên: 1000 đồng mỗi kWh
* Từ kWh thứ 51 trở đi: 1500 đồng mỗi kWh

### Input

* Một số nguyên kWh là số điện đã sử dụng

### Output

* Tổng số tiền điện phải trả

### Ý tưởng

* Nếu kWh nhỏ hơn hoặc bằng 50 thì tiền điện bằng kWh nhân 1000
* Nếu kWh lớn hơn 50 thì:

  * 50 nhân 1000
  * Cộng thêm (kWh - 50) nhân 1500

### Testcase

Testcase 1

```
40

40000
```

Testcase 2

```
60

65000
```

---

## Bài 4. Tính lương có thưởng

### Mô tả

Cho lương cơ bản và số năm làm việc của nhân viên.
Nếu nhân viên làm việc từ 5 năm trở lên thì được thưởng thêm 20% lương.
Ngược lại thì không có thưởng.

### Input

* Lương cơ bản (số nguyên)
* Số năm làm việc (số nguyên)

### Output

* Tổng lương sau khi cộng thưởng

### Ý tưởng

* Kiểm tra số năm làm việc
* Nếu lớn hơn hoặc bằng 5 thì cộng thêm 20% lương
* Ngược lại giữ nguyên lương ban đầu

### Testcase

Testcase 1

```
10000000 5

12000000
```

Testcase 2

```
8000000 3

8000000
```

---

## Bài 5. Giải phương trình bậc nhất

### Mô tả

Giải phương trình dạng:
ax + b = 0

### Input

* Hai số a và b

### Output

* Nghiệm của phương trình
* In ra NO SOLUTION nếu phương trình vô nghiệm

### Ý tưởng

* Nếu a bằng 0:

  * Nếu b bằng 0 thì phương trình có vô số nghiệm (quy ước in NO SOLUTION)
  * Nếu b khác 0 thì phương trình vô nghiệm
* Nếu a khác 0 thì nghiệm x bằng -b chia a

### Testcase

Testcase 1

```
2 -4

2
```

Testcase 2

```
0 5

NO SOLUTION
```

---

## Bài 6. Giải phương trình bậc hai

### Mô tả

Giải phương trình:
ax² + bx + c = 0

### Input

* Ba số a, b, c

### Output

* Số nghiệm của phương trình (0, 1 hoặc 2)

### Ý tưởng

* Tính delta bằng b² - 4ac
* Nếu delta nhỏ hơn 0 thì phương trình vô nghiệm
* Nếu delta bằng 0 thì phương trình có 1 nghiệm
* Nếu delta lớn hơn 0 thì phương trình có 2 nghiệm

### Testcase

Testcase 1

```
1 -3 2

2
```

Testcase 2

```
1 2 5

0
```

---

## Bài 7. Tìm số lớn nhất trong n số

### Mô tả

Cho n số nguyên, hãy tìm giá trị lớn nhất trong các số đó.

### Input

* Một số nguyên n
* n số nguyên tiếp theo

### Output

* Giá trị lớn nhất

### Ý tưởng

* Gán giá trị lớn nhất ban đầu bằng số đầu tiên
* So sánh lần lượt với các số còn lại

### Testcase

Testcase 1

```
5
1 4 2 9 3

9
```

Testcase 2

```
3
-5 -2 -10

-2
```

---

## Bài 8. In bảng cửu chương của n

### Mô tả

In ra bảng cửu chương của số n từ 1 đến 10.

### Input

* Một số nguyên n

### Output

* 10 dòng theo định dạng:
  n x i = kết quả

### Ý tưởng

* Sử dụng vòng lặp từ 1 đến 10
* Nhân n với biến lặp

### Testcase

Testcase 1

```
5

5 x 1  = 5
5 x 2  = 10
5 x 3  = 15
5 x 4  = 20
5 x 5  = 25
5 x 6  = 30
5 x 7  = 35
5 x 8  = 40
5 x 9  = 45
5 x 10 = 50

```

Testcase 2

```
2

2 x 1 = 2
2 x 2 = 4
2 x 3 = 6
2 x 4 = 8
2 x 5 = 10
2 x 6 = 12
2 x 7 = 14
2 x 8 = 16
2 x 9 = 18
2 x 10 = 20
```

---

## Bài 9. Tính tổng các số lẻ từ 1 đến n

### Mô tả

Tính tổng tất cả các số lẻ trong đoạn từ 1 đến n.

### Input

* Một số nguyên n

### Output

* Tổng các số lẻ

### Ý tưởng

* Duyệt từ 1 đến n
* Kiểm tra số lẻ bằng phép chia dư cho 2

### Testcase

Testcase 1

```
10

25
```

Testcase 2

```
1

1
```

---

## Bài 10. Kiểm tra số Armstrong

### Mô tả

Một số được gọi là số Armstrong nếu tổng các chữ số của nó, mỗi chữ số được lũy thừa theo số chữ số, bằng chính số đó.

Ví dụ:
153 = 1³ + 5³ + 3³

### Input

* Một số nguyên dương n

### Output

* true nếu là số Armstrong
* false nếu không phải số Armstrong

### Ý tưởng

* Đếm số chữ số của n
* Tách từng chữ số
* Tính tổng chữ số mũ số chữ số
* So sánh tổng với giá trị ban đầu

### Testcase

Testcase 1

```
153
true
```

Testcase 2

```
123
false
```

## Bài 11. Tìm ước chung lớn nhất (UCLN)

### Mô tả

Cho hai số nguyên dương a và b.
Hãy tìm ước chung lớn nhất của hai số này.

### Input

* Hai số nguyên dương a và b

### Output

* Giá trị UCLN của a và b

### Ý tưởng

* Sử dụng thuật toán Euclid
* Lặp cho đến khi một trong hai số bằng 0

### Testcase

Testcase 1

```
12 18

6
```

Testcase 2

```
7 13

1
```

---

## Bài 12. Tìm bội chung nhỏ nhất (BCNN)

### Mô tả

Cho hai số nguyên dương a và b.
Hãy tìm bội chung nhỏ nhất của hai số đó.

### Input

* Hai số nguyên dương a và b

### Output

* Giá trị BCNN của a và b

### Ý tưởng

* Tính UCLN của a và b
* BCNN = (a × b) / UCLN

### Testcase

Testcase 1

```
4 6

12
```

Testcase 2

```
5 7

35
```

---

## Bài 13. Kiểm tra số chính phương

### Mô tả

Cho một số nguyên không âm n.
Kiểm tra xem n có phải là số chính phương hay không.

### Input

* Một số nguyên n

### Output

* true nếu n là số chính phương
* false nếu không phải

### Ý tưởng

* Tìm số nguyên k sao cho k × k = n
* Có thể duyệt từ 0 đến căn bậc hai của n

### Testcase

Testcase 1

```
16

true
```

Testcase 2

```
20

false
```

---

## Bài 14. In dãy Fibonacci

### Mô tả

In ra n số Fibonacci đầu tiên.
Quy ước: F₀ = 0, F₁ = 1.

### Input

* Một số nguyên n

### Output

* Dãy Fibonacci gồm n phần tử

### Ý tưởng

* Sử dụng vòng lặp
* Mỗi số bằng tổng hai số đứng trước

### Testcase

Testcase 1

```
5

0 1 1 2 3
```

Testcase 2

```
1

0
```

---

## Bài 15. Đếm số nguyên tố nhỏ hơn n

### Mô tả

Cho số nguyên n.
Đếm xem có bao nhiêu số nguyên tố nhỏ hơn n.

### Input

* Một số nguyên n

### Output

* Số lượng số nguyên tố nhỏ hơn n

### Ý tưởng

* Duyệt từ 2 đến n - 1
* Với mỗi số, kiểm tra xem có phải số nguyên tố không

### Testcase

Testcase 1

```
10

4
```

Testcase 2

```
2

0
```

---

## Bài 16. Tìm chữ số lớn nhất của một số

### Mô tả

Cho một số nguyên dương n.
Hãy tìm chữ số lớn nhất xuất hiện trong n.

### Input

* Một số nguyên dương n

### Output

* Chữ số lớn nhất

### Ý tưởng

* Tách từng chữ số bằng phép chia cho 10
* So sánh để tìm chữ số lớn nhất

### Testcase

Testcase 1

```
52941

9
```

Testcase 2

```
7

7
```

---

## Bài 17. Tính tổng các ước của n

### Mô tả

Cho số nguyên dương n.
Tính tổng tất cả các ước số của n (bao gồm 1 và n).

### Input

* Một số nguyên dương n

### Output

* Tổng các ước của n

### Ý tưởng

* Duyệt từ 1 đến n
* Nếu n chia hết cho i thì i là ước

### Testcase

Testcase 1

```
6

12
```

Testcase 2

```
10

18
```

---

## Bài 18. In các số hoàn hảo nhỏ hơn n

### Mô tả

In ra tất cả các số hoàn hảo nhỏ hơn n.
Một số hoàn hảo là số có tổng các ước (không tính chính nó) bằng chính nó.

### Input

* Một số nguyên n

### Output

* Các số hoàn hảo nhỏ hơn n (in trên một dòng)

### Ý tưởng

* Duyệt từng số từ 1 đến n - 1
* Với mỗi số, tính tổng các ước nhỏ hơn nó

### Testcase

Testcase 1

```
30

6 28
```

Testcase 2

```
10

6
```

---

## Bài 19. Tính tổng dãy 1 + 1/2 + ... + 1/n

### Mô tả

Tính tổng của dãy số:
1 + 1/2 + 1/3 + ... + 1/n

### Input

* Một số nguyên dương n

### Output

* Giá trị tổng của dãy

### Ý tưởng

* Sử dụng vòng lặp từ 1 đến n
* Cộng dần từng giá trị 1/i

### Testcase

Testcase 1

```
2

1.5
```

Testcase 2

```
1

1
```

---

## Bài 20. Đếm số lần xuất hiện của chữ số k trong n

### Mô tả

Cho số nguyên dương n và chữ số k (0 ≤ k ≤ 9).
Đếm số lần chữ số k xuất hiện trong n.

### Input

* Một số nguyên dương n
* Một chữ số k

### Output

* Số lần xuất hiện của k trong n

### Ý tưởng

* Tách từng chữ số của n
* So sánh với k và đếm

### Testcase

Testcase 1

```
122233 2

3
```

Testcase 2

```
555 3

0
```

---

## Bài 21. Nhập mảng và in mảng

### Mô tả

Cho một mảng số nguyên gồm n phần tử.
Hãy in ra các phần tử của mảng theo đúng thứ tự nhập vào.

### Input

* Số nguyên n
* n số nguyên của mảng

### Output

* Các phần tử của mảng, in trên một dòng

### Ý tưởng

* Dùng vòng lặp để nhập mảng
* Dùng vòng lặp để in từng phần tử

### Testcase

Testcase 1

```
3
1 2 3

1 2 3
```

Testcase 2

```
1
5

5
```

---

## Bài 22. Đếm số phần tử âm trong mảng

### Mô tả

Cho một mảng số nguyên.
Đếm xem trong mảng có bao nhiêu phần tử âm.

### Input

* Số nguyên n
* n số nguyên của mảng

### Output

* Số lượng phần tử âm

### Ý tưởng

* Duyệt từng phần tử của mảng
* Nếu phần tử nhỏ hơn 0 thì tăng biến đếm

### Testcase

Testcase 1

```
5
-1 2 -3 4 5

2
```

Testcase 2

```
3
1 2 3

0
```

---

## Bài 23. Tính tổng các phần tử chẵn trong mảng

### Mô tả

Cho một mảng số nguyên.
Tính tổng tất cả các phần tử chẵn trong mảng.

### Input

* Số nguyên n
* n số nguyên của mảng

### Output

* Tổng các phần tử chẵn

### Ý tưởng

* Duyệt mảng
* Kiểm tra số chẵn bằng phép chia dư cho 2

### Testcase

Testcase 1

```
4
1 2 4 5

6
```

Testcase 2

```
2
3 5

0
```

---

## Bài 24. Tìm vị trí của phần tử lớn nhất trong mảng

### Mô tả

Cho một mảng số nguyên.
Hãy tìm vị trí (chỉ số) của phần tử lớn nhất trong mảng.
Chỉ số được tính từ 0.

### Input

* Số nguyên n
* n số nguyên của mảng

### Output

* Chỉ số của phần tử lớn nhất

### Ý tưởng

* Gán phần tử đầu tiên làm giá trị lớn nhất
* So sánh với các phần tử còn lại
* Lưu lại vị trí tương ứng

### Testcase

Testcase 1

```
4
1 9 3 7

1
```

Testcase 2

```
1
5

0
```

---

## Bài 25. Tìm phần tử nhỏ nhất trong mảng

### Mô tả

Cho một mảng số nguyên.
Hãy tìm giá trị nhỏ nhất trong mảng.

### Input

* Số nguyên n
* n số nguyên của mảng

### Output

* Giá trị nhỏ nhất

### Ý tưởng

* Gán phần tử đầu tiên làm giá trị nhỏ nhất
* So sánh lần lượt với các phần tử còn lại

### Testcase

Testcase 1

```
3
5 2 8

2
```

Testcase 2

```
2
-1 -5

-5
```

---

## Bài 26. Đếm số phần tử lớn hơn hoặc bằng x

### Mô tả

Cho một mảng số nguyên và một số nguyên x.
Đếm số phần tử trong mảng có giá trị lớn hơn hoặc bằng x.

### Input

* Số nguyên n
* n số nguyên của mảng
* Số nguyên x

### Output

* Số lượng phần tử thỏa điều kiện

### Ý tưởng

* Duyệt mảng
* Nếu phần tử lớn hơn hoặc bằng x thì tăng biến đếm

### Testcase

Testcase 1

```
5
1 4 6 2 8
5

2
```

Testcase 2

```
3
1 2 3
10

0
```

---

## Bài 27. Kiểm tra mảng toàn số dương

### Mô tả

Cho một mảng số nguyên.
Kiểm tra xem tất cả các phần tử trong mảng có phải đều là số dương hay không.

### Input

* Số nguyên n
* n số nguyên của mảng

### Output

* true nếu tất cả phần tử đều dương
* false nếu tồn tại phần tử không dương

### Ý tưởng

* Duyệt mảng
* Nếu gặp phần tử nhỏ hơn hoặc bằng 0 thì kết luận sai

### Testcase

Testcase 1

```
3
1 2 3

true
```

Testcase 2

```
2
1 -1

false
```

---

## Bài 28. Kiểm tra mảng có chứa số âm hay không

### Mô tả

Cho một mảng số nguyên.
Kiểm tra xem trong mảng có tồn tại ít nhất một số âm hay không.

### Input

* Số nguyên n
* n số nguyên của mảng

### Output

* true nếu có số âm
* false nếu không có số âm

### Ý tưởng

* Duyệt mảng
* Nếu gặp phần tử nhỏ hơn 0 thì kết luận đúng

### Testcase

Testcase 1

```

3
1 -2 3

true
```

Testcase 2

```

2
4 5

false
```

---

## Bài 29. Tính tổng các phần tử ở vị trí chẵn

### Mô tả

Cho một mảng số nguyên.
Tính tổng các phần tử nằm ở vị trí chẵn (chỉ số 0, 2, 4, ...).

### Input

* Số nguyên n
* n số nguyên của mảng

### Output

* Tổng các phần tử ở vị trí chẵn

### Ý tưởng

* Duyệt mảng theo chỉ số
* Nếu chỉ số chia hết cho 2 thì cộng vào tổng

### Testcase

Testcase 1

```
5
1 2 3 4 5

9
```

Testcase 2

```
1
7

7
```

---

## Bài 30. In mảng theo thứ tự ngược

### Mô tả

Cho một mảng số nguyên.
Hãy in các phần tử của mảng theo thứ tự ngược lại.

### Input

* Số nguyên n
* n số nguyên của mảng

### Output

* Các phần tử của mảng theo thứ tự ngược

### Ý tưởng

* Duyệt mảng từ phần tử cuối về phần tử đầu
* In từng phần tử

### Testcase

Testcase 1

```
3
1 2 3

3 2 1
```

Testcase 2

```
1
9

9
```

## Bài 31. Đếm số lần xuất hiện của một số trong mảng

### Mô tả

Cho một mảng số nguyên và một số nguyên x.
Đếm xem số x xuất hiện bao nhiêu lần trong mảng.

### Input

* Số nguyên n
* n số nguyên của mảng
* Số nguyên x

### Output

* Số lần xuất hiện của x

### Ý tưởng

* Duyệt mảng
* Nếu phần tử bằng x thì tăng biến đếm

### Testcase

Testcase 1

```

5
1 2 3 2 2
2

3
```

Testcase 2

```

3
4 5 6
1

0
```

---

## Bài 32. Tìm phần tử đầu tiên chia hết cho 3

### Mô tả

Cho một mảng số nguyên.
Hãy tìm giá trị của phần tử **đầu tiên** chia hết cho 3 trong mảng.
Nếu không tồn tại, in ra `-1`.

### Input

* Số nguyên n
* n số nguyên của mảng

### Output

* Giá trị phần tử tìm được hoặc -1

### Ý tưởng

* Duyệt mảng từ đầu
* Gặp phần tử chia hết cho 3 thì dừng

### Testcase

Testcase 1

```

5
1 4 6 7 9

6
```

Testcase 2

```

3
1 5 7

-1
```

---

## Bài 33. Tìm phần tử cuối cùng là số chẵn

### Mô tả

Cho một mảng số nguyên.
Hãy tìm giá trị của **phần tử chẵn cuối cùng** trong mảng.
Nếu không có số chẵn, in ra `-1`.

### Input

* Số nguyên n
* n số nguyên của mảng

### Output

* Giá trị phần tử tìm được hoặc -1

### Ý tưởng

* Duyệt mảng từ cuối về đầu
* Gặp số chẵn thì dừng

### Testcase

Testcase 1

```

5
1 3 4 7 8

8
```

Testcase 2

```

3
1 3 5

-1
```

---

## Bài 34. Tính trung bình cộng các số dương

### Mô tả

Cho một mảng số nguyên.
Tính giá trị trung bình cộng của các phần tử dương trong mảng.
Nếu không có số dương, in ra `0`.

### Input

* Số nguyên n
* n số nguyên của mảng

### Output

* Giá trị trung bình cộng (số thực)

### Ý tưởng

* Cộng tổng các số dương
* Đếm số lượng số dương
* Lấy tổng chia cho số lượng

### Testcase

Testcase 1

```

4
-1 2 4 -3

3
```

Testcase 2

```

3
-1 -2 -3

0
```

---

## Bài 35. Kiểm tra mảng có tăng dần hay không

### Mô tả

Cho một mảng số nguyên.
Kiểm tra xem mảng có **tăng dần** hay không (mỗi phần tử sau lớn hơn phần tử trước).

### Input

* Số nguyên n
* n số nguyên của mảng

### Output

* true nếu mảng tăng dần
* false nếu không

### Ý tưởng

* So sánh từng cặp phần tử liên tiếp
* Nếu phần tử sau nhỏ hơn hoặc bằng phần tử trước thì sai

### Testcase

Testcase 1

```

4
1 3 5 7

true
```

Testcase 2

```

3
1 3 2

false
```

---

## Bài 36. Kiểm tra mảng có đối xứng hay không

### Mô tả

Cho một mảng số nguyên.
Kiểm tra xem mảng có đối xứng hay không
(phần tử đầu bằng phần tử cuối, phần tử thứ hai bằng phần tử áp chót, …).

### Input

* Số nguyên n
* n số nguyên của mảng

### Output

* true nếu mảng đối xứng
* false nếu không

### Ý tưởng

* So sánh phần tử i và phần tử n - i - 1

### Testcase

Testcase 1

```

5
1 2 3 2 1

true
```

Testcase 2

```

4
1 2 3 4

false
```

---

## Bài 37. Đếm số cặp phần tử bằng nhau liền kề

### Mô tả

Cho một mảng số nguyên.
Đếm số cặp phần tử **liền kề** có giá trị bằng nhau.

### Input

* Số nguyên n
* n số nguyên của mảng

### Output

* Số lượng cặp liền kề bằng nhau

### Ý tưởng

* So sánh phần tử i và i + 1

### Testcase

Testcase 1

```

6
1 1 2 2 2 3

3
```

Testcase 2

```

3
1 2 3

0
```

---

## Bài 38. Tìm khoảng cách lớn nhất giữa hai phần tử liên tiếp

### Mô tả

Cho một mảng số nguyên.
Tìm giá trị lớn nhất của hiệu tuyệt đối giữa hai phần tử liền kề.

### Input

* Số nguyên n
* n số nguyên của mảng

### Output

* Khoảng cách lớn nhất

### Ý tưởng

* Tính |a[i] - a[i+1]|
* Lưu giá trị lớn nhất

### Testcase

Testcase 1

```

5
1 5 3 10 2

8
```

Testcase 2

```

2
4 9

5
```

---

## Bài 39. Xóa phần tử tại vị trí k

### Mô tả

Cho một mảng số nguyên và một số nguyên k.
Hãy xóa phần tử tại vị trí k và in ra mảng sau khi xóa.
(Chỉ số tính từ 0)

### Input

* Số nguyên n
* n số nguyên của mảng
* Số nguyên k

### Output

* Mảng sau khi xóa phần tử

### Ý tưởng

* Dịch các phần tử từ k+1 sang trái
* Giảm kích thước mảng

### Testcase

Testcase 1

```

5
1 2 3 4 5
2

1 2 4 5
```

Testcase 2

```

3
7 8 9
0

8 9
```

---

## Bài 40. Chèn phần tử vào vị trí k

### Mô tả

Cho một mảng số nguyên, một số nguyên x và vị trí k.
Hãy chèn x vào vị trí k trong mảng và in ra mảng sau khi chèn.

### Input

* Số nguyên n
* n số nguyên của mảng
* Số nguyên x
* Số nguyên k

### Output

* Mảng sau khi chèn phần tử

### Ý tưởng

* Dịch các phần tử sang phải
* Gán a[k] = x

### Testcase

Testcase 1

```

4
1 2 3 4
9
2

1 2 9 3 4
```

Testcase 2

```

2
5 6
1
0

1 5 6
```

# Code mẫu

## Bài 1. Kiểm tra số âm, dương hay bằng 0

```cpp
#include <iostream>
using namespace std;

void kiemTraSo(int n) {
    if (n < 0) {
        cout << "NEGATIVE" << endl;
    } else if (n > 0) {
        cout << "POSITIVE" << endl;
    } else {
        cout << "ZERO" << endl;
    }
}

int main() {
    // Testcase 1
    kiemTraSo(5);
    
    // Testcase 2
    kiemTraSo(-3);
    
    return 0;
}
```

## Bài 2. Kiểm tra năm nhuận

```cpp
#include <iostream>
using namespace std;

bool kiemTraNamNhuan(int y) {
    // Năm nhuận: chia hết cho 400 HOẶC (chia hết cho 4 nhưng không chia hết cho 100)
    if (y % 400 == 0) {
        return true;
    }
    if (y % 4 == 0 && y % 100 != 0) {
        return true;
    }
    return false;
}

int main() {
    // Testcase 1
    cout << (kiemTraNamNhuan(2024) ? "true" : "false") << endl;
    
    // Testcase 2
    cout << (kiemTraNamNhuan(1900) ? "true" : "false") << endl;
    
    return 0;
}
```

## Bài 3. Tính tiền điện

```cpp
#include <iostream>
using namespace std;

int tinhTienDien(int kWh) {
    if (kWh <= 50) {
        return kWh * 1000;
    } else {
        return 50 * 1000 + (kWh - 50) * 1500;
    }
}

int main() {
    // Testcase 1
    cout << tinhTienDien(40) << endl;
    
    // Testcase 2
    cout << tinhTienDien(60) << endl;
    
    return 0;
}
```

## Bài 4. Tính lương có thưởng

```cpp
#include <iostream>
using namespace std;

int tinhLuong(int luongCoBan, int soNam) {
    if (soNam >= 5) {
        return luongCoBan + luongCoBan * 20 / 100;  // Thưởng 20%
    }
    return luongCoBan;
}

int main() {
    // Testcase 1
    cout << tinhLuong(10000000, 5) << endl;
    
    // Testcase 2
    cout << tinhLuong(8000000, 3) << endl;
    
    return 0;
}
```

## Bài 5. Giải phương trình bậc nhất

```cpp
#include <iostream>
using namespace std;

void giaiPTBacNhat(double a, double b) {
    if (a == 0) {
        // a = 0: phương trình vô nghiệm hoặc vô số nghiệm
        cout << "NO SOLUTION" << endl;
    } else {
        // Nghiệm: x = -b/a
        cout << (-b / a) << endl;
    }
}

int main() {
    // Testcase 1
    giaiPTBacNhat(2, -4);
    
    // Testcase 2
    giaiPTBacNhat(0, 5);
    
    return 0;
}
```

## Bài 6. Giải phương trình bậc hai

```cpp
#include <iostream>
#include <cmath>
using namespace std;

int giaiPTBacHai(double a, double b, double c) {
    double delta = b * b - 4 * a * c;
    
    if (delta < 0) {
        return 0;  // Vô nghiệm
    } else if (delta == 0) {
        return 1;  // 1 nghiệm
    } else {
        return 2;  // 2 nghiệm
    }
}

int main() {
    // Testcase 1: ax² + bx + c = 0 với a=1, b=-3, c=2
    cout << giaiPTBacHai(1, -3, 2) << endl;
    
    // Testcase 2
    cout << giaiPTBacHai(1, 2, 5) << endl;
    
    return 0;
}
```

## Bài 7. Tìm số lớn nhất trong n số

```cpp
#include <iostream>
using namespace std;

int timMax(int arr[], int n) {
    int maxVal = arr[0];
    for (int i = 1; i < n; i++) {
        if (arr[i] > maxVal) {
            maxVal = arr[i];
        }
    }
    return maxVal;
}

int main() {
    // Testcase 1
    int arr1[] = {1, 4, 2, 9, 3};
    cout << timMax(arr1, 5) << endl;
    
    // Testcase 2
    int arr2[] = {-5, -2, -10};
    cout << timMax(arr2, 3) << endl;
    
    return 0;
}
```

## Bài 8. In bảng cửu chương của n

```cpp
#include <iostream>
using namespace std;

void inBangCuuChuong(int n) {
    for (int i = 1; i <= 10; i++) {
        cout << n << " x " << i << " = " << n * i << endl;
    }
}

int main() {
    // Testcase 1
    inBangCuuChuong(5);
    
    cout << endl;
    
    // Testcase 2
    inBangCuuChuong(2);
    
    return 0;
}
```

## Bài 9. Tính tổng các số lẻ từ 1 đến n

```cpp
#include <iostream>
using namespace std;

int tongSoLe(int n) {
    int sum = 0;
    for (int i = 1; i <= n; i++) {
        if (i % 2 != 0) {  // Số lẻ
            sum += i;
        }
    }
    return sum;
}

int main() {
    // Testcase 1
    cout << tongSoLe(10) << endl;
    
    // Testcase 2
    cout << tongSoLe(1) << endl;
    
    return 0;
}
```

## Bài 10. Kiểm tra số Armstrong

```cpp
#include <iostream>
#include <cmath>
using namespace std;

bool kiemTraArmstrong(int n) {
    int original = n;
    int numDigits = 0;
    int temp = n;
    
    // Đếm số chữ số
    while (temp > 0) {
        numDigits++;
        temp /= 10;
    }
    
    // Tính tổng các chữ số mũ số chữ số
    int sum = 0;
    temp = n;
    while (temp > 0) {
        int digit = temp % 10;
        sum += pow(digit, numDigits);
        temp /= 10;
    }
    
    return sum == original;
}

int main() {
    // Testcase 1
    cout << (kiemTraArmstrong(153) ? "true" : "false") << endl;
    
    // Testcase 2
    cout << (kiemTraArmstrong(123) ? "true" : "false") << endl;
    
    return 0;
}
```

## Bài 11. Tìm ước chung lớn nhất (UCLN)

```cpp
#include <iostream>
using namespace std;

int ucln(int a, int b) {
    // Thuật toán Euclid
    while (b != 0) {
        int temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

int main() {
    // Testcase 1
    cout << ucln(12, 18) << endl;
    
    // Testcase 2
    cout << ucln(7, 13) << endl;
    
    return 0;
}
```

## Bài 12. Tìm bội chung nhỏ nhất (BCNN)

```cpp
#include <iostream>
using namespace std;

int ucln(int a, int b) {
    while (b != 0) {
        int temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

int bcnn(int a, int b) {
    // BCNN = (a * b) / UCLN
    return (a * b) / ucln(a, b);
}

int main() {
    // Testcase 1
    cout << bcnn(4, 6) << endl;
    
    // Testcase 2
    cout << bcnn(5, 7) << endl;
    
    return 0;
}
```

## Bài 13. Kiểm tra số chính phương

```cpp
#include <iostream>
#include <cmath>
using namespace std;

bool kiemTraChinhPhuong(int n) {
    if (n < 0) return false;
    
    int sqrtN = sqrt(n);
    return sqrtN * sqrtN == n;
}

int main() {
    // Testcase 1
    cout << (kiemTraChinhPhuong(16) ? "true" : "false") << endl;
    
    // Testcase 2
    cout << (kiemTraChinhPhuong(20) ? "true" : "false") << endl;
    
    return 0;
}
```

## Bài 14. In dãy Fibonacci

```cpp
#include <iostream>
using namespace std;

void inFibonacci(int n) {
    if (n <= 0) return;
    
    if (n >= 1) cout << 0;
    if (n >= 2) cout << " " << 1;
    
    int f0 = 0, f1 = 1;
    for (int i = 2; i < n; i++) {
        int f2 = f0 + f1;
        cout << " " << f2;
        f0 = f1;
        f1 = f2;
    }
    cout << endl;
}

int main() {
    // Testcase 1
    inFibonacci(5);
    
    // Testcase 2
    inFibonacci(1);
    
    return 0;
}
```

## Bài 15. Đếm số nguyên tố nhỏ hơn n

```cpp
#include <iostream>
using namespace std;

bool laNguyenTo(int x) {
    if (x < 2) return false;
    for (int i = 2; i * i <= x; i++) {
        if (x % i == 0) return false;
    }
    return true;
}

int demNguyenTo(int n) {
    int count = 0;
    for (int i = 2; i < n; i++) {
        if (laNguyenTo(i)) {
            count++;
        }
    }
    return count;
}

int main() {
    // Testcase 1
    cout << demNguyenTo(10) << endl;
    
    // Testcase 2
    cout << demNguyenTo(2) << endl;
    
    return 0;
}
```

## Bài 16. Tìm chữ số lớn nhất của một số

```cpp
#include <iostream>
using namespace std;

int timChuSoLonNhat(int n) {
    int maxDigit = 0;
    while (n > 0) {
        int digit = n % 10;
        if (digit > maxDigit) {
            maxDigit = digit;
        }
        n /= 10;
    }
    return maxDigit;
}

int main() {
    // Testcase 1
    cout << timChuSoLonNhat(52941) << endl;
    
    // Testcase 2
    cout << timChuSoLonNhat(7) << endl;
    
    return 0;
}
```

## Bài 17. Tính tổng các ước của n

```cpp
#include <iostream>
using namespace std;

int tongUoc(int n) {
    int sum = 0;
    for (int i = 1; i <= n; i++) {
        if (n % i == 0) {
            sum += i;
        }
    }
    return sum;
}

int main() {
    // Testcase 1
    cout << tongUoc(6) << endl;
    
    // Testcase 2
    cout << tongUoc(10) << endl;
    
    return 0;
}
```

## Bài 18. In các số hoàn hảo nhỏ hơn n

```cpp
#include <iostream>
using namespace std;

bool laSoHoanHao(int n) {
    int sum = 0;
    for (int i = 1; i < n; i++) {  // Không tính chính nó
        if (n % i == 0) {
            sum += i;
        }
    }
    return sum == n;
}

void inSoHoanHao(int n) {
    bool first = true;
    for (int i = 1; i < n; i++) {
        if (laSoHoanHao(i)) {
            if (!first) cout << " ";
            cout << i;
            first = false;
        }
    }
    cout << endl;
}

int main() {
    // Testcase 1
    inSoHoanHao(30);
    
    // Testcase 2
    inSoHoanHao(10);
    
    return 0;
}
```

## Bài 19. Tính tổng dãy 1 + 1/2 + ... + 1/n

```cpp
#include <iostream>
using namespace std;

double tinhTongDay(int n) {
    double sum = 0.0;
    for (int i = 1; i <= n; i++) {
        sum += 1.0 / i;
    }
    return sum;
}

int main() {
    // Testcase 1
    cout << tinhTongDay(2) << endl;
    
    // Testcase 2
    cout << tinhTongDay(1) << endl;
    
    return 0;
}
```

## Bài 20. Đếm số lần xuất hiện của chữ số k trong n

```cpp
#include <iostream>
using namespace std;

int demChuSo(int n, int k) {
    int count = 0;
    while (n > 0) {
        if (n % 10 == k) {
            count++;
        }
        n /= 10;
    }
    return count;
}

int main() {
    // Testcase 1
    cout << demChuSo(122233, 2) << endl;
    
    // Testcase 2
    cout << demChuSo(555, 3) << endl;
    
    return 0;
}
```

## Bài 21. Nhập mảng và in mảng

```cpp
#include <iostream>
using namespace std;

void inMang(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        if (i > 0) cout << " ";
        cout << arr[i];
    }
    cout << endl;
}

int main() {
    // Testcase 1
    int arr1[] = {1, 2, 3};
    inMang(arr1, 3);
    
    // Testcase 2
    int arr2[] = {5};
    inMang(arr2, 1);
    
    return 0;
}
```

## Bài 22. Đếm số phần tử âm trong mảng

```cpp
#include <iostream>
using namespace std;

int demPhanTuAm(int arr[], int n) {
    int count = 0;
    for (int i = 0; i < n; i++) {
        if (arr[i] < 0) {
            count++;
        }
    }
    return count;
}

int main() {
    // Testcase 1
    int arr1[] = {-1, 2, -3, 4, 5};
    cout << demPhanTuAm(arr1, 5) << endl;
    
    // Testcase 2
    int arr2[] = {1, 2, 3};
    cout << demPhanTuAm(arr2, 3) << endl;
    
    return 0;
}
```

## Bài 23. Tính tổng các phần tử chẵn trong mảng

```cpp
#include <iostream>
using namespace std;

int tongPhanTuChan(int arr[], int n) {
    int sum = 0;
    for (int i = 0; i < n; i++) {
        if (arr[i] % 2 == 0) {
            sum += arr[i];
        }
    }
    return sum;
}

int main() {
    // Testcase 1
    int arr1[] = {1, 2, 4, 5};
    cout << tongPhanTuChan(arr1, 4) << endl;
    
    // Testcase 2
    int arr2[] = {3, 5};
    cout << tongPhanTuChan(arr2, 2) << endl;
    
    return 0;
}
```

## Bài 24. Tìm vị trí của phần tử lớn nhất trong mảng

```cpp
#include <iostream>
using namespace std;

int timViTriMax(int arr[], int n) {
    int maxIndex = 0;
    for (int i = 1; i < n; i++) {
        if (arr[i] > arr[maxIndex]) {
            maxIndex = i;
        }
    }
    return maxIndex;
}

int main() {
    // Testcase 1
    int arr1[] = {1, 9, 3, 7};
    cout << timViTriMax(arr1, 4) << endl;
    
    // Testcase 2
    int arr2[] = {5};
    cout << timViTriMax(arr2, 1) << endl;
    
    return 0;
}
```

## Bài 25. Tìm phần tử nhỏ nhất trong mảng

```cpp
#include <iostream>
using namespace std;

int timMin(int arr[], int n) {
    int minVal = arr[0];
    for (int i = 1; i < n; i++) {
        if (arr[i] < minVal) {
            minVal = arr[i];
        }
    }
    return minVal;
}

int main() {
    // Testcase 1
    int arr1[] = {5, 2, 8};
    cout << timMin(arr1, 3) << endl;
    
    // Testcase 2
    int arr2[] = {-1, -5};
    cout << timMin(arr2, 2) << endl;
    
    return 0;
}
```

## Bài 26. Đếm số phần tử lớn hơn hoặc bằng x

```cpp
#include <iostream>
using namespace std;

int demPhanTuLonHonX(int arr[], int n, int x) {
    int count = 0;
    for (int i = 0; i < n; i++) {
        if (arr[i] >= x) {
            count++;
        }
    }
    return count;
}

int main() {
    // Testcase 1
    int arr1[] = {1, 4, 6, 2, 8};
    cout << demPhanTuLonHonX(arr1, 5, 5) << endl;
    
    // Testcase 2
    int arr2[] = {1, 2, 3};
    cout << demPhanTuLonHonX(arr2, 3, 10) << endl;
    
    return 0;
}
```

## Bài 27. Kiểm tra mảng toàn số dương

```cpp
#include <iostream>
using namespace std;

bool kiemTraToanDuong(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        if (arr[i] <= 0) {
            return false;
        }
    }
    return true;
}

int main() {
    // Testcase 1
    int arr1[] = {1, 2, 3};
    cout << (kiemTraToanDuong(arr1, 3) ? "true" : "false") << endl;
    
    // Testcase 2
    int arr2[] = {1, -1};
    cout << (kiemTraToanDuong(arr2, 2) ? "true" : "false") << endl;
    
    return 0;
}
```

## Bài 28. Kiểm tra mảng có chứa số âm hay không

```cpp
#include <iostream>
using namespace std;

bool kiemTraCoSoAm(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        if (arr[i] < 0) {
            return true;
        }
    }
    return false;
}

int main() {
    // Testcase 1
    int arr1[] = {1, -2, 3};
    cout << (kiemTraCoSoAm(arr1, 3) ? "true" : "false") << endl;
    
    // Testcase 2
    int arr2[] = {4, 5};
    cout << (kiemTraCoSoAm(arr2, 2) ? "true" : "false") << endl;
    
    return 0;
}
```

## Bài 29. Tính tổng các phần tử ở vị trí chẵn

```cpp
#include <iostream>
using namespace std;

int tongViTriChan(int arr[], int n) {
    int sum = 0;
    for (int i = 0; i < n; i += 2) {  // i = 0, 2, 4, ...
        sum += arr[i];
    }
    return sum;
}

int main() {
    // Testcase 1
    int arr1[] = {1, 2, 3, 4, 5};
    cout << tongViTriChan(arr1, 5) << endl;  // 1 + 3 + 5 = 9
    
    // Testcase 2
    int arr2[] = {7};
    cout << tongViTriChan(arr2, 1) << endl;
    
    return 0;
}
```

## Bài 30. In mảng theo thứ tự ngược

```cpp
#include <iostream>
using namespace std;

void inMangNguoc(int arr[], int n) {
    for (int i = n - 1; i >= 0; i--) {
        if (i < n - 1) cout << " ";
        cout << arr[i];
    }
    cout << endl;
}

int main() {
    // Testcase 1
    int arr1[] = {1, 2, 3};
    inMangNguoc(arr1, 3);
    
    // Testcase 2
    int arr2[] = {9};
    inMangNguoc(arr2, 1);
    
    return 0;
}
```

## Bài 31. Đếm số lần xuất hiện của một số trong mảng

```cpp
#include <iostream>
using namespace std;

int demXuatHien(int arr[], int n, int x) {
    int count = 0;
    for (int i = 0; i < n; i++) {
        if (arr[i] == x) {
            count++;
        }
    }
    return count;
}

int main() {
    // Testcase 1
    int arr1[] = {1, 2, 3, 2, 2};
    cout << demXuatHien(arr1, 5, 2) << endl;
    
    // Testcase 2
    int arr2[] = {4, 5, 6};
    cout << demXuatHien(arr2, 3, 1) << endl;
    
    return 0;
}
```

## Bài 32. Tìm phần tử đầu tiên chia hết cho 3

```cpp
#include <iostream>
using namespace std;

int timDauTienChiaHet3(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        if (arr[i] % 3 == 0) {
            return arr[i];
        }
    }
    return -1;  // Không tìm thấy
}

int main() {
    // Testcase 1
    int arr1[] = {1, 4, 6, 7, 9};
    cout << timDauTienChiaHet3(arr1, 5) << endl;
    
    // Testcase 2
    int arr2[] = {1, 5, 7};
    cout << timDauTienChiaHet3(arr2, 3) << endl;
    
    return 0;
}
```

## Bài 33. Tìm phần tử cuối cùng là số chẵn

```cpp
#include <iostream>
using namespace std;

int timCuoiCungChan(int arr[], int n) {
    for (int i = n - 1; i >= 0; i--) {  // Duyệt từ cuối về đầu
        if (arr[i] % 2 == 0) {
            return arr[i];
        }
    }
    return -1;  // Không tìm thấy
}

int main() {
    // Testcase 1
    int arr1[] = {1, 3, 4, 7, 8};
    cout << timCuoiCungChan(arr1, 5) << endl;
    
    // Testcase 2
    int arr2[] = {1, 3, 5};
    cout << timCuoiCungChan(arr2, 3) << endl;
    
    return 0;
}
```

## Bài 34. Tính trung bình cộng các số dương

```cpp
#include <iostream>
using namespace std;

double trungBinhSoDuong(int arr[], int n) {
    int sum = 0;
    int count = 0;
    
    for (int i = 0; i < n; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
            count++;
        }
    }
    
    if (count == 0) return 0;
    return (double)sum / count;
}

int main() {
    // Testcase 1
    int arr1[] = {-1, 2, 4, -3};
    cout << trungBinhSoDuong(arr1, 4) << endl;  // (2+4)/2 = 3
    
    // Testcase 2
    int arr2[] = {-1, -2, -3};
    cout << trungBinhSoDuong(arr2, 3) << endl;
    
    return 0;
}
```

## Bài 35. Kiểm tra mảng có tăng dần hay không

```cpp
#include <iostream>
using namespace std;

bool kiemTraTangDan(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        if (arr[i] >= arr[i + 1]) {  // Phần tử sau phải lớn hơn phần tử trước
            return false;
        }
    }
    return true;
}

int main() {
    // Testcase 1
    int arr1[] = {1, 3, 5, 7};
    cout << (kiemTraTangDan(arr1, 4) ? "true" : "false") << endl;
    
    // Testcase 2
    int arr2[] = {1, 3, 2};
    cout << (kiemTraTangDan(arr2, 3) ? "true" : "false") << endl;
    
    return 0;
}
```

## Bài 36. Kiểm tra mảng có đối xứng hay không

```cpp
#include <iostream>
using namespace std;

bool kiemTraDoiXung(int arr[], int n) {
    for (int i = 0; i < n / 2; i++) {
        if (arr[i] != arr[n - i - 1]) {
            return false;
        }
    }
    return true;
}

int main() {
    // Testcase 1
    int arr1[] = {1, 2, 3, 2, 1};
    cout << (kiemTraDoiXung(arr1, 5) ? "true" : "false") << endl;
    
    // Testcase 2
    int arr2[] = {1, 2, 3, 4};
    cout << (kiemTraDoiXung(arr2, 4) ? "true" : "false") << endl;
    
    return 0;
}
```

## Bài 37. Đếm số cặp phần tử bằng nhau liền kề

```cpp
#include <iostream>
using namespace std;

int demCapLienKeBangNhau(int arr[], int n) {
    int count = 0;
    for (int i = 0; i < n - 1; i++) {
        if (arr[i] == arr[i + 1]) {
            count++;
        }
    }
    return count;
}

int main() {
    // Testcase 1
    int arr1[] = {1, 1, 2, 2, 2, 3};
    cout << demCapLienKeBangNhau(arr1, 6) << endl;  // (1,1), (2,2), (2,2) = 3
    
    // Testcase 2
    int arr2[] = {1, 2, 3};
    cout << demCapLienKeBangNhau(arr2, 3) << endl;
    
    return 0;
}
```

## Bài 38. Tìm khoảng cách lớn nhất giữa hai phần tử liên tiếp

```cpp
#include <iostream>
#include <cmath>
using namespace std;

int timKhoangCachMax(int arr[], int n) {
    int maxDist = 0;
    for (int i = 0; i < n - 1; i++) {
        int dist = abs(arr[i] - arr[i + 1]);
        if (dist > maxDist) {
            maxDist = dist;
        }
    }
    return maxDist;
}

int main() {
    // Testcase 1
    int arr1[] = {1, 5, 3, 10, 2};
    cout << timKhoangCachMax(arr1, 5) << endl;  // |10-2| = 8
    
    // Testcase 2
    int arr2[] = {4, 9};
    cout << timKhoangCachMax(arr2, 2) << endl;
    
    return 0;
}
```

## Bài 39. Xóa phần tử tại vị trí k

```cpp
#include <iostream>
using namespace std;

void xoaPhanTu(int arr[], int &n, int k) {
    // Dịch các phần tử từ k+1 sang trái
    for (int i = k; i < n - 1; i++) {
        arr[i] = arr[i + 1];
    }
    n--;  // Giảm kích thước mảng
}

void inMang(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        if (i > 0) cout << " ";
        cout << arr[i];
    }
    cout << endl;
}

int main() {
    // Testcase 1
    int arr1[] = {1, 2, 3, 4, 5};
    int n1 = 5;
    xoaPhanTu(arr1, n1, 2);
    inMang(arr1, n1);
    
    // Testcase 2
    int arr2[] = {7, 8, 9};
    int n2 = 3;
    xoaPhanTu(arr2, n2, 0);
    inMang(arr2, n2);
    
    return 0;
}
```

## Bài 40. Chèn phần tử vào vị trí k

```cpp
#include <iostream>
using namespace std;

void chenPhanTu(int arr[], int &n, int x, int k) {
    // Dịch các phần tử từ k sang phải
    for (int i = n; i > k; i--) {
        arr[i] = arr[i - 1];
    }
    arr[k] = x;  // Chèn x vào vị trí k
    n++;  // Tăng kích thước mảng
}

void inMang(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        if (i > 0) cout << " ";
        cout << arr[i];
    }
    cout << endl;
}

int main() {
    // Testcase 1
    int arr1[100] = {1, 2, 3, 4};
    int n1 = 4;
    chenPhanTu(arr1, n1, 9, 2);
    inMang(arr1, n1);
    
    // Testcase 2
    int arr2[100] = {5, 6};
    int n2 = 2;
    chenPhanTu(arr2, n2, 1, 0);
    inMang(arr2, n2);
    
    return 0;
}
```