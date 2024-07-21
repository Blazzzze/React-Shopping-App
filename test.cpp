#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

vector<vector<int>> create_matrix(int n, int m, const vector<vector<int>>& a) {
    vector<vector<int>> b(n, vector<int>(m, -1));

    for (int i = 0; i < n; ++i) {
        for (int j = 0; j < m; ++j) {
            // Find a suitable value for b[i][j] different from a[i][j]
            for (int k = 1; k <= n * m; ++k) {
                if (k != a[i][j] && find(b[i].begin(), b[i].end(), k) == b[i].end()) {
                    b[i][j] = k;
                    break;
                }
            }
            if (b[i][j] == -1) {
                // No suitable value found
                return {{-1}};
            }
        }
    }
    return b;
}

int main() {
    int t;
    cin >> t;

    while (t--) {
        int n, m;
        cin >> n >> m;

        vector<vector<int>> a(n, vector<int>(m));
        for (int i = 0; i < n; ++i) {
            for (int j = 0; j < m; ++j) {
                cin >> a[i][j];
            }
        }

        vector<vector<int>> b = create_matrix(n, m, a);

        if (b[0][0] == -1) {
            cout << -1 << endl;
        } else {
            for (int i = 0; i < n; ++i) {
                for (int j = 0; j < m; ++j) {
                    cout << b[i][j] << " ";
                }
                cout << endl;
            }
        }
    }
    return 0;
}