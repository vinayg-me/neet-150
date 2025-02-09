import { findTwoSum } from '../solutions/twoSum';

describe('Two Sum', () => {
    test('Empty Array: Should Return []', () => {
        expect(findTwoSum([], 1)).toEqual([]);
    })

    test('Positive Test Cases: Should return correct index pairs in any order', () => {
        // Test case 1: [2,7,11,15] -> 2 + 7 = 9
        const result1 = findTwoSum([2,7,11,15], 9);
        if(result1) {
            expect([0,1].includes(result1[0])).toBe(true);
            expect([0,1].includes(result1[1])).toBe(true);
            expect(result1[0]).not.toBe(result1[1]);
        }
        // Test case 2: [3,2,4] -> 2 + 4 = 6
        const result2 = findTwoSum([3,2,4], 6);
        if(result2) {
            expect([1,2].includes(result2[0])).toBe(true);
            expect([1,2].includes(result2[1])).toBe(true);
            expect(result2[0]).not.toBe(result2[1]);
        }
        // Test case 3: [3,3] -> 3 + 3 = 6
        const result3 = findTwoSum([3,3], 6);
        if(result3) {
            expect([0,1].includes(result3[0])).toBe(true);
            expect([0,1].includes(result3[1])).toBe(true);
            expect(result3[0]).not.toBe(result3[1]);
        }        
    })

    test('Negative Test Cases: Should return empty array', () => {
        expect(findTwoSum([3,3], 9)).toEqual([]);
        expect(findTwoSum([1,2,3], 7)).toEqual([]);
    })
})