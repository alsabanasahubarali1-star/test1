// Function to check if a number is prime
function isPrime(number) {
    if (number < 2) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

// Function to generate prime numbers up to a limit
function generatePrimes(limit) {
    const primes = [];
    for (let i = 2; i <= limit; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}

// Function to categorize numbers as even or odd
function categorizeNumbers(numbers) {
    const result = { even: [], odd: [] };
    for (let num of numbers) {
        if (num % 2 === 0) {
            result.even.push(num);
        } else {
            result.odd.push(num);
        }
    }
    return result;
}

// Test the functions
const limit = 20;
const primes = generatePrimes(limit);
console.log("Prime numbers up to", limit, ":", primes);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const categorized = categorizeNumbers(numbers);
console.log("Even numbers:", categorized.even);
console.log("Odd numbers:", categorized.odd);
