/**
 * Longest Common Subsequence   
 * 
 * Given two strings, find the longest common subsequence (LCS) between them.
 * 
 * The LCS is the longest sequence of characters that appear in both array of integers,
 * in the same order.
 *
 * Example:
 * 
 * Numeric
 * Example:
 * Input [100, 99, 4, 200, 1, 2, 3]
 * Output: 4
 * Explanation: The longest consecutive sequence is [1, 2, 3, 4].
 * 
 * Input: [3, 10, 5, 1, 2, 3, 4]
 * Output: 3
 * Explanation: The longest consecutive sequence is [1, 2, 3].
 */

const findLongestConsecutiveSequence = (num: number[]) => {
    if (num.length < 2) {
        return num.length;
    }
    const numSet = new Set<number>(num);
    let longestSubSequenceLength = 1;
    let curSubSequence: number[] = [];

    const isThisStartOfSequence = (curNum: number) => {
        const prevNum = curNum - 1;
        if(numSet.has(prevNum)) {
            return false;
        }
        return true;
    }

    const isThereNextConsecutiveNumber = (curNum: number) => {
        const nextNum = curNum + 1;
        if(numSet.has(nextNum))  {
            curSubSequence.push(curNum);
            return isThereNextConsecutiveNumber(nextNum);
        }
        if(curSubSequence.length > longestSubSequenceLength) {
            longestSubSequenceLength = curSubSequence.length;
        }
        curSubSequence = [];
        return;
    }
    numSet.forEach((curValue) => {
        if(isThisStartOfSequence(curValue)) {
            curSubSequence.push(curValue);
            isThereNextConsecutiveNumber(curValue);
        }
    })
    return longestSubSequenceLength;
}

export { findLongestConsecutiveSequence as findLongestSubSequence }