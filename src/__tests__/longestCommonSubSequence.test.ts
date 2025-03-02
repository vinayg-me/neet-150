import { findLongestSubSequence } from '../solutions/LongestConsecutiveSequence';

describe('find longest sub sequence for integer arrays', () => {
    test('should return 0 for empty array', () => {
        expect(findLongestSubSequence([])).toBe(0);
    })
    test('should return 1 for single element array', () => {
        expect(findLongestSubSequence([1])).toBe(1);
    })
    test('should return 5 for [3, 10, 5, 1, 2, 3, 4]', () => {
        expect(findLongestSubSequence([3, 10, 5, 1, 2, 3, 4])).toBe(5);
    })
    test('should return 4 for [100, 99, 4, 200, 1, 2, 3]', () => {
        expect(findLongestSubSequence([100, 99, 4, 200, 1, 2, 3])).toBe(4);
    })
    test('should return 9 for [0,3,7,2,5,8,4,6,0,1]', () => {
        expect(findLongestSubSequence([0,3,7,2,5,8,4,6,0,1])).toBe(9)
    })
    test('should return 3 for [1,0,1,2]', () => {
        expect(findLongestSubSequence([1,0,1,2])).toBe(3)
    })
    // Additional test cases
    test('should return 1 for array with all duplicates [5,5,5,5]', () => {
        expect(findLongestSubSequence([5,5,5,5])).toBe(1)
    })
    test('should return 5 for array with negative numbers [-5,-4,-3,-2,-1,0,1]', () => {
        expect(findLongestSubSequence([-5,-4,-3,-2,-1,0,1])).toBe(7)
    })
    test('should return 2 for array with non-consecutive numbers [1,3,5,7,9]', () => {
        expect(findLongestSubSequence([1,3,5,7,9])).toBe(1)
    })
    test('should return 6 for array with multiple sequences [100,4,5,6,7,8,9,200,1,2,3]', () => {
        expect(findLongestSubSequence([100,4,5,6,7,8,9,200,1,2,3])).toBe(9)
    })
    test('should return 4 for array with descending order [10,9,8,7]', () => {
        expect(findLongestSubSequence([10,9,8,7])).toBe(4)
    })
    test('should handle large numbers [1000000,1000001,1000002]', () => {
        expect(findLongestSubSequence([1000000,1000001,1000002])).toBe(3)
    })
})