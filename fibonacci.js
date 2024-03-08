//fibonacci sequence

function fibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib;
}
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));

// Big-O = O(n)
