let a = 0;
let b = 1;
let c =a+b;

for (let i=1;i<=10;i++){
    c=a+b;
    a=b;
    b=c;
    if (c % 5 === 0){
         console.log(c);
        break;
    }
    
}