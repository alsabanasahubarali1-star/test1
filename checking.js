// Check if a number is prime
const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

// Generate prime numbers and categorize numbers up to a limit
const analyzeNumbers = (limit) => {
    const primes = [];
    const categorized = { even: [], odd: [] };

    for (let i = 1; i <= limit; i++) {
        // Check for prime
        if (isPrime(i)) primes.push(i);

        // Categorize as even or odd
        (i % 2 === 0 ? categorized.even : categorized.odd).push(i);
    }

    return { primes, categorized };
};

// Test the function
const limit = 20;
const { primes, categorized } = analyzeNumbers(limit);

console.log("Prime numbers up to", limit, ":", primes);
console.log("Even numbers:", categorized.even);
console.log("Odd numbers:", categorized.odd);
