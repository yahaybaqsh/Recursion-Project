// fibonacci.js

/**
 * Iterative implementation of Fibonacci sequence generator
 * @param {number} n - Number of Fibonacci numbers to generate
 * @returns {number[]} Array containing the first n Fibonacci numbers
 */
function fibs(n) {
    // Handle edge cases
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    
    // Initialize sequence with first two numbers
    const sequence = [0, 1];
    
    // Generate remaining numbers iteratively
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    
    return sequence;
}

/**
 * Recursive implementation of Fibonacci sequence generator
 * @param {number} n - Number of Fibonacci numbers to generate
 * @returns {number[]} Array containing the first n Fibonacci numbers
 */
function fibsRec(n) {
    console.log("This was printed recursively");
    
    // Base cases
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    
    // Recursive case: get sequence for n-1 and add the next number
    const prevSequence = fibsRec(n - 1);
    const nextNumber = prevSequence[prevSequence.length - 1] + prevSequence[prevSequence.length - 2];
    return [...prevSequence, nextNumber];
}

// Test both functions
console.log("=== Fibonacci Sequence Tests ===");
console.log("fibs(8):", fibs(8));
console.log("fibsRec(8):", fibsRec(8));

console.log("\nfibs(1):", fibs(1));
console.log("fibsRec(1):", fibsRec(1));

console.log("\nfibs(5):", fibs(5));
console.log("fibsRec(5):", fibsRec(5));

console.log("\nfibs(0):", fibs(0));
console.log("fibsRec(0):", fibsRec(0));

module.exports = { fibs, fibsRec };
