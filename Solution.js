
/**
 * @param {number[]} input
 * @return {number}
 */
var sumOddLengthSubarrays = function (input) {

    const size = input.length;
    let sum = 0;
    for (let i = 0; i < size; i++) {
        sum += input[i] * occurrenceInOddLengthSubarrays(i, size);
    }
    return sum;
};

/**
 * @param {number} index
 * @param {number} size
 * @return {number}
 */
function occurrenceInOddLengthSubarrays(index, size) {
    return Math.floor(((index + 1) * (size - index) + 1) / 2);
}
