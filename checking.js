// Function to calculate factorial of a number
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Function to analyze numbers up to a limit
function analyzeNumbers(limit) {
    const analysis = [];

    for (let i = 1; i <= limit; i++) {
        analysis.push({
            number: i,
            square: i * i,
            factorial: factorial(i),
            multipleOfThree: i % 3 === 0
        });
    }

    return analysis;
}

// Test the function
const limit = 10;
const result = analyzeNumbers(limit);

result.forEach(item => {
    console.log(`Number: ${item.number}, Square: ${item.square}, Factorial: ${item.factorial}, Multiple of 3: ${item.multipleOfThree}`);
});
