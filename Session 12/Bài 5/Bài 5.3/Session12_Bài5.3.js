console.log(`Góc vuông dưới trái:`)
let length = 5;
for (let i = 1 ; i<=length; i++){
   let result = "";
   for (let j = 1; j<=i; j++){
    result +="* ";
   }
   console.log(result);
}
console.log(`Góc vuông trên trái:`)
for (let i = length ; i>=1; i--){
   let result = "";
   for (let j = 1; j<=i; j++){
    result +="* ";
   }
   console.log(result);
}

console.log(`Góc vuông dưới phải`)
for (let i = 1 ; i<=length; i++){
  let result ="";
   for (let j = 1 ; j<= length-i; j++){
      result += "  ";
   }
   for (let k = 1; k <= i; k++){
      result += "* "
   }
   console.log(result);
}  
console.log(`Góc vuông trên phải`)
for (let i = length ; i>=1; i--){
  let result ="";
   for (let j = 1 ; j<=length - i; j++){
      result += "  ";
   }
   for (let k = 1; k <= i; k++){
      result += "* "
   }
   console.log(result)
}