### Bài 1 (Cuối kì năm 2022):

Không dung vòng lặp (For, While, Switch, If, Goto,... Dùng đệ quy). Hãy viết 1 hàm nhập vào số từ 1-365, trả ra kết quả "Thứ 2...Chủ Nhật"

#### Gợi ý:

- Sử dụng toán tử điều kiện ( ? : ) để thay thế câu lệnh if-else.

```cpp
#include <iostream>
using namespace std;
int main() {
    int n;
    cin >> n;
    
    cout << ((n%7==0) ? "Chu nhat": "Thu " + to_string(n%7+1)) <<endl;

    return 0;
}
```

### Bài 2:
