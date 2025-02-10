import { getProductOfArrayExceptSelf } from '../solutions/productOfArrayExceptSelf';
describe("Product Of Array Except Self", () => {
    test("Positive test case: Should return [24,12,8,6]", () => {
        expect(getProductOfArrayExceptSelf([1,2,3,4])).toEqual([24,12,8,6])
    })

    test("Array with zeros: Should handle array containing a zero", () => {
        expect(getProductOfArrayExceptSelf([1, 0, 3, 4])).toEqual([0, 12, 0, 0]);
    });

    test("Array with multiple zeros: Should handle array containing multiple zeros", () => {
        expect(getProductOfArrayExceptSelf([0, 0, 3, 4])).toEqual([0, 0, 0, 0]);
    });

    test("Array with negative numbers: Should handle negative numbers", () => {
        expect(getProductOfArrayExceptSelf([-1, 2, -3, 4])).toEqual([-24, 12, -8, 6]);
    });

    test("Single element array: Should handle array with one element", () => {
        expect(getProductOfArrayExceptSelf([5])).toEqual([1]);
    });

    test("Empty array: Should handle empty array", () => {
        expect(getProductOfArrayExceptSelf([])).toEqual([]);
    });
})