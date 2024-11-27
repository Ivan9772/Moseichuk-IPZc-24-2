function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
const num = 6;

const result = factorial(num);

console.log(`Факторіал числа ${num} дорівнює ${result}`);