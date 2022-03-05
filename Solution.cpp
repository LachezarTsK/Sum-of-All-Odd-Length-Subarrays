
#include <vector>
using namespace std;

class Solution {
  
public:

    int sumOddLengthSubarrays(vector<int>& input) {
        const size_t size = input.size();
        int sum = 0;
        for (int i = 0; i < size; i++) {
            sum += input[i] * occurrenceInOddLengthSubarrays(i, size);
        }
        return sum;
    }

    int occurrenceInOddLengthSubarrays(int index, int size) {
        return ((index + 1) * (size - index) + 1) / 2;
    }
};
