function bonus () {
let iterable = [200, 550, 4000, 23, 58, 5000, 485, 711];
let sum = 0;
for (let value of iterable) {
sum += value;  
}
if (sum > 10) {
sum = sum / 100 * 5;
}
console.log(Math.round(sum));
}
bonus();