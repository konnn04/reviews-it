**F. BÀI TẬP CÓ HƯỚNG DẪN**

#### **Bài 1. Cho đoạn chương trình sau (minh hoạ bằng C++):**

```cpp
int tinhTong(int n)
{
    int tong = 0;
    while (n)
    {
        tong = 0;
        while (n)
        {
            tong += n % 10;
            n = n / 10;
        }
        if (tong > 10)
            n = tong;
    }
    return tong;
}
```
a) Vẽ đồ thị luồng và xác định độ phức tạp Cyclomatic.

b) Viết các test case phủ đường dẫn cơ sở hàm.

---
#### **Bài 2. Cho đoạn chương trình sau (minh hoạ bằng C++):**
```cpp
bool xepLoai(double diemMH[], int soMH)
{
    int i;
    double tongDiem = 0;
    for (i = 0; i < soMH; i++)
    {
        if (diemMH[i] < 5)
            break;
        else
            tongDiem = tongDiem + diemMH[i];
    }
    if (soMH > 0 && i == soMH)
    {
        double diemTB = tongDiem / soMH;
        if (diemTB >= 8)
            return true;
    }
    return false;
}
```
a) Vẽ đồ thị luồng và xác định độ phức tạp Cyclomatic.

b) Viết các test case phủ đường dẫn cơ sở của hàm.

---

#### **Bài 3. Cho đoạn chương trình bên dưới:**
```cpp
int checkLottery(string s1, string s2)
{
    int k = -1;
    if (s1.Length == 6 && s2.Length == 6) {
        int count = 0; // (1)
        for (int i = 0; i < s1.Length
                      && count <= 2; i++) // (2)
        {
            if (s1[i] != s2[i])
                count++; // (3)
        }
        if (count == 0) // (4)
            k = 1;
        else if (count <= 2) // (5)
            k = 0;
    }
    return k;
}
```
a) Vẽ đồ thị luồng và xác định độ phức tạp Cyclomatic của hàm.

b) Thiết kế test case phủ câu lệnh của hàm trên.

c) Thiết kế test case phủ nhánh của hàm trên.

d) Xác định các cặp DU của biến `count` trong hàm.

e) Thiết kế test case phủ nhánh và điều kiện của hàm trên?

---

**G. BÀI TẬP LÀM THÊM**

#### **Bài 1. Cho hàm bên dưới minh hoạ bằng C++, viết test case phủ đường dẫn cơ sở của hàm.**
```cpp
int fibonacci(int n)
{
    if (n <= 1)
    {
        if (n == 0)
            return 0;
        else
            return 1;
    }
    else
    {
        int pre = 1, fibo = 1;
        if (n > 2)
        {
            int i = 3, t;
            while (i <= n)
            {
                t = fibo;
                fibo = fibo + pre;
                pre = t;
                i++;
            }
        }
        return fibo;
    }
}
```

---
#### **Bài 2. Cho đoạn chương trình bên dưới minh hoạ bằng C++:**
```cpp
bool xetHB(double diemMH[], int soMH, int diemRL)
{
    double tongDiem = 0;
    for (int i = 0; i < soMH; i++)
    {
        if (diemMH[i] < 5)
            return false;
        else
            tongDiem = tongDiem + diemMH[i];
    }
    double diemTB = tongDiem / soMH;
    if (diemTB >= 9 || (diemTB >= 7 && diemRL >= 80))
        return true;
    return false;
}
```
a) Vẽ đồ thị luồng và xác định độ phức tạp Cyclomatic.

b) Viết các test case phủ đường dẫn cơ sở của hàm.

c) Viết các test case phủ nhánh và điều kiện của hàm trên.

---

#### **Bài 3. Cho đoạn chương trình bên dưới minh hoạ bằng C++. Viết các test case kiểm thử vòng lặp trong đoạn chương trình, chỉ ra một số lỗi có thể trong đoạn chương trình trên.**
```cpp
int demngay(int ngay, int thang, int nam)
{
    bool nhuan = false;
    if ((nam % 400 == 0) ||
        (nam % 4 == 0 && nam % 100 != 0))
        nhuan = true;
    int songay = ngay; // (1)
    for (int i = 1; i < thang; i++)
        if (i == 2)
            if (nhuan == true)
                songay += 29; // (2)
            else
                songay += 28; // (3)
        else if (i == 4 || i == 6 ||
                 i == 9 || i == 11)
            songay += 30; // (4)
        else
            songay += 31; // (5)
    return songay; // (6)
}
```
a) Vẽ đồ thị luồng và xác định độ phức tạp Cyclomatic.

b) Viết các test case phủ câu lệnh của hàm trên.

c) Viết các test case phủ nhánh của hàm trên.

d) Xác định các cặp DU của biến `songay`.

---
#### **Bài 4. Cho đoạn chương trình bên dưới minh hoạ bằng C++**
```cpp
void minmax(int a[], int n)
{
    int max = 0;
    int min = 0;
    for (int i = 0; i < n; i++)
    {
        if (a[i] > max)
            max = a[i];
        else if (a[i] < min)
            min = a[i];
    }
    if (max == 0)
        cout << "Max: " << "*" << endl;
    else
        cout << "Max: " << max << endl;
    if (min == 0)
        cout << "Min: " << "*" << endl;
    else
        cout << "Min: " << min << endl;
}
```
a) Vẽ đồ thị luồng và xác định độ phức tạp Cyclomatic.

b) Viết các test case phủ đường dẫn cơ sở của hàm.

c) Xác định các cặp DU của biến `max`.

d) Viết các test case qua các đường DU của biến `max`.

---
#### **Bài 5. Cho đoạn chương trình bên dưới minh hoạ bằng C++**
```cpp
#define MAX 100
int[] maxmin(int a[][MAX], int m, int n)
{
    int kq[MAX], dem = 0;
    int max = INT_MIN;
    for (int i = 0; i < m; i++)
    {
        for (int j = 0; j < n; j++)
        {
            if (a[i][j] > max)
                max = a[i][j];
        }
        int flag = true;
        for (int j = 0; j < n && flag == true; j++)
            if (a[i][j] < max)
                flag = false;
        if (flag == true)
            kq[dem++] = i;
    }
    return kq;
}
```
a) Vẽ đồ thị luồng và xác định độ phức tạp Cyclomatic.

b) Viết test case phủ câu lệnh của hàm.

c) Viết test case phủ nhánh của hàm.

d) Viết test case đi qua các đường DU của biến `max`.

e) Viết các test case kiểm thử các vòng lặp trong hàm trên.