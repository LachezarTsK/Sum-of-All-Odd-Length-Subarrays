
public class Solution {

    public int sumOddLengthSubarrays(int[] input) {
        final int size = input.length;
        int sum = 0;
        for (int i = 0; i < size; i++) {
            sum += input[i] * occurrenceInOddLengthSubarrays(i, size);
        }
        return sum;
    }

    public int occurrenceInOddLengthSubarrays(int index, int size) {
        return ((index + 1) * (size - index) + 1) / 2;
    }
}
