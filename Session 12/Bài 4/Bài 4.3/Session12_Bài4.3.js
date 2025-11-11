let a = 0;
let b = 1;
let c =a+b;
console.log(a);
console.log(b);
for (let i=1;i<=20;i++){
    c=a+b;
    a=b;
    b=c;
    console.log(`The number is ${c} ${i}`); 
}
