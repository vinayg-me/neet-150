import { isValidAnagram } from '../solutions/validAnagram';

describe('Is Valid Anagram', () => {
    test('Unequal Lengths: Should Return false', () => {
        expect(isValidAnagram('a', 'bb')).toBe(false);
    })
    test('Invalid Anagrams: Should Return false', () => {
        expect(isValidAnagram('a', 'b')).toBe(false);
    })
    test('Valid Anagrams: Should return true', () => {
        expect(isValidAnagram('ab', 'ba')).toBe(true);
        expect(isValidAnagram('anagram', 'nagaram')).toBe(true);
        expect(isValidAnagram('silent', 'listen')).toBe(true);
        expect(isValidAnagram('', '')).toBe(true);
    })
    test('Case Sensitivity: Should handle different cases', () => {
        expect(isValidAnagram('Hello', 'hello')).toBe(false);
        expect(isValidAnagram('Tea', 'Eat')).toBe(false);
    })
    test('Special Characters: Should handle special characters', () => {
        expect(isValidAnagram('rat!', 'tar!')).toBe(true);
        expect(isValidAnagram('12345', '54321')).toBe(true);
        expect(isValidAnagram('r@t', 't@r')).toBe(true);
    })
    test('Spaces: Should handle spaces correctly', () => {
        expect(isValidAnagram('hello world', 'world hello')).toBe(true);
        expect(isValidAnagram('hello  ', 'hello')).toBe(false);
    })
})