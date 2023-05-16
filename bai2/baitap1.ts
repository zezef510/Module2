function Fibonacci(n: number): number {
    if (n <= 1) return n;
    return Fibonacci(n - 1) + Fibonacci(n - 2);
}
const n = 10; // ví dụ muốn tính dãy Fibonacci tới số thứ 10
for (let i = 0; i <= n; i++) {
    console.log(Fibonacci(i));
}
const m = 10; // ví dụ muốn tính tổng dãy Fibonacci tới số thứ 10
let sum: number = 0;
for (let i = 0; i <= m; i++) {
    sum += Fibonacci(i);
}
console.log(`Tổng dãy số Fibonacci là ${sum}`);
