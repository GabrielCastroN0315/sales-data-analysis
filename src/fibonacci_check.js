function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
  
    let a = 0, b = 1, fib;
    for (let i = 2; i <= n; i++) {
      fib = a + b;
      a = b;
      b = fib;
    }
    return fib;
  }
  
  function isFibonacci(num) {
    let a = 0, b = 1;
    while (b < num) {
      [a, b] = [b, a + b];
    }
    if (b === num) {
      return `${num} belongs to the Fibonacci sequence. The ${num}th Fibonacci number is ${fibonacci(num)}`;
    } else {
      return `${num} does not belong to the Fibonacci sequence.`;
    }
  }
  
  let result = isFibonacci(21);
  console.log(result);