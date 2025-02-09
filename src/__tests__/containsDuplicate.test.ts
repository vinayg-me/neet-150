import { containsDuplicate } from '../solutions/containsDuplicate';

describe('containsDuplicate', () => {
    test('should return false for empty array', () => {
      expect(containsDuplicate([])).toBe(false);
    });
  
    test('should return false for array with no duplicates', () => {
      expect(containsDuplicate([1, 2, 3, 4, 5])).toBe(false);
    });
  
    test('should return true for array with duplicates', () => {
      expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
    });
  
    test('should return true for array with multiple duplicates', () => {
      expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
    });
  
    test('should return false for array with single element', () => {
      expect(containsDuplicate([1])).toBe(false);
    });
  
    test('should handle negative numbers', () => {
      expect(containsDuplicate([-1, -1, 2, 3])).toBe(true);
      expect(containsDuplicate([-1, -2, -3])).toBe(false);
    });
  
    test('should handle zero', () => {
      expect(containsDuplicate([0, 1, 0])).toBe(true);
      expect(containsDuplicate([0])).toBe(false);
    });
  });