#include <iostream>
#include <cstdlib>
#include <ctime>  

using namespace std;

int main() {
    int n;
    int a[100]; 

    do {
        cout << "Nhap so phan tu mang n: ";
        cin >> n;
        if (n <= 0 || n > 100) cout << "n phai > 0 va <= 100. Nhap lai!" << endl;
    } while (n <= 0 || n > 100);

    srand(time(NULL)); // Khởi tạo bộ sinh số ngẫu nhiên
    for (int i = 0; i < n; i++) {
        a[i] = 20 + rand() % (40 - 20 + 1);
    }

    // a) In mảng
    cout << "\na) Mang vua tao: ";
    for (int i = 0; i < n; i++) {
        cout << a[i] << " ";
    }
    cout << endl;

    // b) Tìm số chẵn lớn nhất, nhỏ nhất
    int maxChan = -1, minChan = 1000;
    bool coSoChan = false;

    for (int i = 0; i < n; i++) {
        if (a[i] % 2 == 0) {
            coSoChan = true;
            if (a[i] > maxChan) maxChan = a[i];
            if (a[i] < minChan) minChan = a[i];
        }
    }

    if (coSoChan) {
        cout << "b) So chan lon nhat: " << maxChan << endl;
        cout << "   So chan nho nhat: " << minChan << endl;
    } else {
        cout << "b) Mang khong co so chan." << endl;
    }

    // Sắp xếp: Lẻ trái, Chẵn phải, Tăng dần (Không dùng mảng phụ)
    for (int i = 0; i < n - 1; i++) {
        for (int j = i + 1; j < n; j++) {
            bool canDoiCho = false;

            if (a[i] % 2 == 0 && a[j] % 2 != 0) {
                canDoiCho = true;
            }
            else if ((a[i] % 2 == a[j] % 2) && (a[i] > a[j])) {
                canDoiCho = true;
            }

            if (canDoiCho) {
                a[i] = a[i] + a[j];
                a[j] = a[i] - a[j];
                a[i] = a[i] - a[j];
            }
        }
    }

    cout << "c) Mang sau khi sap xep: ";
    for (int i = 0; i < n; i++) {
        cout << a[i] << " ";
    }
    cout << endl;

    return 0;
}