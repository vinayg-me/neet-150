import { getTopKFrequentElementsFromArray } from '../solutions/topKFrequentElements';
describe('Top K Frequent Elements', () => {
    test('Empty Array: Should return empty array', () => {
        expect(getTopKFrequentElementsFromArray([], 1)).toEqual([]);
    });

    test('Basic case with clear frequencies', () => {
        // [1,1,1,2,2,3] -> 1(3 times), 2(2 times), 3(1 time)
        // k=2, should return exactly 2 elements: [1,2]
        const result = getTopKFrequentElementsFromArray([1,1,1,2,2,3], 2);
        expect(result.length).toBe(2);
        expect(result).toEqual(expect.arrayContaining([1, 2]));
    });

    test('All elements appear once: Should return any k elements', () => {
        // [1,2,3,4] -> all appear once
        // k=2, should return exactly 2 elements from the array
        const result = getTopKFrequentElementsFromArray([1,2,3,4], 2);
        expect(result.length).toBe(2);
        expect([1,2,3,4]).toEqual(expect.arrayContaining(result));
    });

    test('All elements are same: Should return that element', () => {
        // [1,1,1,1] -> only 1 unique element
        // k=1, should return exactly 1 element
        const result = getTopKFrequentElementsFromArray([1,1,1,1], 1);
        expect(result.length).toBe(1);
        expect(result).toEqual([1]);
    });

    test('k equals array length with unique elements', () => {
        // [1,2,3] -> all appear once, k=3
        // should return all 3 elements
        const result = getTopKFrequentElementsFromArray([1,2,3], 3);
        expect(result.length).toBe(3);
        expect(result).toEqual(expect.arrayContaining([1,2,3]));
    });

    test('Elements with equal frequencies: Should return any valid combination', () => {
        // [1,1,2,2,3,3] -> all appear twice
        // k=2, should return exactly 2 elements
        const result = getTopKFrequentElementsFromArray([1,1,2,2,3,3], 2);
        expect(result.length).toBe(2);
        expect([1,2,3]).toEqual(expect.arrayContaining(result));
    });

    test('Mixed frequencies with negative numbers', () => {
        // [-1,-1,2,2,2,3] -> 2(3 times), -1(2 times), 3(1 time)
        // k=2, should return exactly 2 elements: [2,-1]
        const result = getTopKFrequentElementsFromArray([-1,-1,2,2,2,3], 2);
        expect(result.length).toBe(2);
        expect(result).toEqual(expect.arrayContaining([2, -1]));
    });

    test('Large numbers with different frequencies', () => {
        // [1000000,1000000,2,2,3] -> 1000000(2 times), 2(2 times), 3(1 time)
        // k=2, should return exactly 2 elements from the two most frequent
        const result = getTopKFrequentElementsFromArray([1000000,1000000,2,2,3], 2);
        expect(result.length).toBe(2);
        expect([1000000, 2]).toEqual(expect.arrayContaining(result));
    });

    test('Single element array', () => {
        // [5] -> one element appearing once
        // k=1, should return exactly 1 element
        const result = getTopKFrequentElementsFromArray([5], 1);
        expect(result.length).toBe(1);
        expect(result).toEqual([5]);
    });

    test('k=1 with clear winner', () => {
        // [5,5,5,2,2,1] -> 5(3 times), 2(2 times), 1(1 time)
        // k=1, should return exactly 1 element: [5]
        const result = getTopKFrequentElementsFromArray([5,5,5,2,2,1], 1);
        expect(result.length).toBe(1);
        expect(result).toEqual([5]);
    });

    test('k=1 with tie for most frequent', () => {
        // [1,1,2,2] -> both appear twice
        // k=1, should return exactly 1 element from [1,2]
        const result = getTopKFrequentElementsFromArray([1,1,2,2], 1);
        expect(result.length).toBe(1);
        expect([1,2]).toEqual(expect.arrayContaining(result));
    });

    test('k greater than unique elements', () => {
        // [1,1,2] -> 1(2 times), 2(1 time)
        // k=3, but should only return 2 elements as there are only 2 unique numbers
        const result = getTopKFrequentElementsFromArray([1,1,2], 3);
        expect(result.length).toBe(2);
        expect(result).toEqual(expect.arrayContaining([1,2]));
    });
});