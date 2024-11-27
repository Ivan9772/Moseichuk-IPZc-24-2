function fibonacciSeries(n) {

    function fibonacci(num) {
        if (num === 0) {
            return 0;
        } else if (num === 1) {
            return 1;
        } else {
            return fibonacci(num - 1) + fibonacci(num - 2);
        }
    }

    function printFibonacci(num) {
        if (num >= 0) {
            printFibonacci(num - 1);
            console.log(`${fibonacci(num)}`);
        }
    }

    printFibonacci(n);
}

const number = 10;
fibonacciSeries(number);
