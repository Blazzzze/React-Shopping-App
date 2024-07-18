#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

void solve(int n, int m, int k) {
    vector<int> permutation(n);
    
    // Initialize indices for filling values
    int large_index = 0;
    int small_index = n - 1;

    // Fill in the largest values first
    for (int i = k; i <= n; ++i) {
        permutation[large_index++] = i;
    }
    
    // Then fill in the smallest values in between
    for (int i = k-1; i >= 1; --i) {
        permutation[small_index--] = i;
    }

    // Print the permutation
    for (int i = 0; i < n; ++i) {
        cout << permutation[i] << " ";
    }
    cout << endl;
}

int main() {
    int t;
    cin >> t;
    
    while (t--) {
        int n, m, k;
        cin >> n >> m >> k;
        
        solve(n, m, k);
    }
    
    return 0;
}
