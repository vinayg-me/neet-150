import { isSentenceAPalindrome } from '../solutions/validPalindrome';
describe('Is Sentence A Palindrome', () => {
    test("should return true for 'A man, a plan, a canal: Panama'", () => {
        expect(isSentenceAPalindrome('A man, a plan, a canal: Panama')).toBe(true);
    })
    test("should return false for 'race a car'", () => {
        expect(isSentenceAPalindrome("race a car")).toBe(false);
    })
    // Additional test cases
    test("should return true for empty string", () => {
        expect(isSentenceAPalindrome("")).toBe(true);
    })
    test("should return true for single character", () => {
        expect(isSentenceAPalindrome("a")).toBe(true);
    })
    test("should return true for 'Madam'", () => {
        expect(isSentenceAPalindrome("Madam")).toBe(true);
    })
    test("should return true for 'Able was I ere I saw Elba'", () => {
        expect(isSentenceAPalindrome("Able was I ere I saw Elba")).toBe(true);
    })
    test("should return true for 'No lemon, no melon'", () => {
        expect(isSentenceAPalindrome("No lemon, no melon")).toBe(true);
    })
    test("should return true for 'A Santa at NASA'", () => {
        expect(isSentenceAPalindrome("A Santa at NASA")).toBe(true);
    })
    test("should return true for string with numbers '1a2b2a1'", () => {
        expect(isSentenceAPalindrome("1a2b2a1")).toBe(true);
    })
    test("should return false for 'hello world'", () => {
        expect(isSentenceAPalindrome("hello world")).toBe(false);
    })
    test("should return true for string with special characters only '!@#$%^&*()_+'", () => {
        expect(isSentenceAPalindrome("!@#$%^&*()_+")).toBe(true);
    })
    test("should return true for '121'", () => {
        expect(isSentenceAPalindrome("121")).toBe(true);
    })
    test("should return false for '123'", () => {
        expect(isSentenceAPalindrome("123")).toBe(false);
    })
    test("should return true for 'A man, a plan, a canal, Panama'", () => {
        expect(isSentenceAPalindrome("A man, a plan, a canal, Panama")).toBe(true);
    })
    test("should return true for 'Was it a car or a cat I saw?'", () => {
        expect(isSentenceAPalindrome("Was it a car or a cat I saw?")).toBe(true);
    })
})