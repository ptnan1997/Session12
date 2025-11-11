let a = 0;
let b = 1;
let c =a+b;
let result = a+b;
for (let i=1;i<=20;i++){
    c=a+b;
    a=b;
    b=c;
    console.log(`The number is ${c} ${i}`); 
    result += c;
}
console.log(`Tổng của 20 số đầu tiên của dãy số Fibonacci là:${result}`)