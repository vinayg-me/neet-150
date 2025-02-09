const { fibonacci } = require('../solutions/fibonacci');

describe('Fibonacci', () => {
    test('should return correct fibonacci numbers', () => {
        expect(fibonacci(0)).toBe(0);
        expect(fibonacci(1)).toBe(1);
        expect(fibonacci(2)).toBe(1);
        expect(fibonacci(3)).toBe(2);
        expect(fibonacci(7)).toBe(13);
    });
}); 