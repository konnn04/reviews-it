#include <iostream>
#include <iomanip> 
#include <cstdlib> 

using namespace std;

double TinhS(int n);
int ChuSoNhoNhat(int n);
void HienThiMenu();

int main() {
    char tiepTuc;
    do {
        system("cls");
        HienThiMenu();

        int chon;
        cout << "Chon 1 hoac 2: ";
        cin >> chon;

        int n;
        if (chon == 1) {
            cout << "TIM CHU SO NHO NHAT TRONG MOT SO NGUYEN" << endl;
            cout << "Nhap so nguyen: ";
            cin >> n;
            cout << "Chu so nho nhat trong " << n << " la: " << ChuSoNhoNhat(n) << endl;
        } 
        else if (chon == 2) {
            cout << "Tinh S(n) = 1/3 + 1/5 - 1/7 + 1/9 ... + 1/(2n + 1)" << endl;
            cout << "Nhap so nguyen: ";
            cin >> n;
            cout << "S(" << n << ") = " << fixed << setprecision(4) << TinhS(n) << endl;
        } 
        else {
            cout << "Lua chon khong hop le!" << endl;
        }

        cout << "Tiep tuc? (Nhap Y de tiep tuc): ";
        cin >> tiepTuc;

    } while (tiepTuc == 'y' || tiepTuc == 'Y');

    return 0;
}

double TinhS(int n) {
    double s = 0.0; 
    
    for (int i = 1; i <= n; ++i) {
        double term = 1.0 / (2 * i + 1); 
        if (i == 1 || i % 2 == 0 ) {
            s += term; 
        } else {
            s -= term; 
        }
    }
    return s;
}

int ChuSoNhoNhat(int n) {
    int minDigit = 9; 
    if (n == 0) return 0;
    
    n = abs(n); 
    
    while (n > 0) {
        int digit = n % 10; 
        if (digit < minDigit) {
            minDigit = digit;
        }
        n /= 10; 
    }
    return minDigit;
}

void HienThiMenu() {
    cout << "1. Tim chu so nho nhat trong mot so nguyen" << endl;
    cout << "2. Tinh S(n) = 1/3 + 1/5 - 1/7 + 1/9 ... + 1/(2n + 1)" << endl;
}