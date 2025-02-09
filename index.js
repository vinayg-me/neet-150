// This is the main entry point for your DSA practice
// You can import and test your solutions here

console.log('Welcome to DSA Practice!');

// Example problem and solution
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Test the function
console.log('Fibonacci of 7:', fibonacci(7)); 