console.log("Phương trình bậc 2 có dạng như sau: ax^2+bx+c=0");
let a = Number(prompt("Nhập vào giá trị a"));
let b = Number(prompt("Nhập vào giá trị b"));
let c = Number(prompt("Nhập vào giá trị c"));
let delta = b**2 - 4*a*c;
let x1 = (-b + Math.sqrt(delta)) / (2 * a);
let x2 = (-b - Math.sqrt(delta)) / (2 * a);
let x = -b / (2 * a);

console.log
(`Cho a = ${a}
Cho b = ${b}
Cho c = ${c}
Ta có phương trình bậc 2 như sau:${a}x^2+${b}x+${c}
Công thức nghiệm: Delta = b^2 - 4ac = ${b}^2 - 4.${a}.${c}=${delta}`);
// Kiểm tra phương trình bậc hai
if (a ===0 ){
    console.log("Đây không phải là phương trình bậc hai");
}
// Xét delta
if (delta > 0 ){
console.log
(`Phương trình có 2 nghiệm phân biệt
x1=${x1}
x2=${x2}`);
}else if (delta < 0){
    console.log("Phương trình vô nghiệm");
}else if (delta === 0){
console.log
(`Phương trình có 1 nghiệm kép
x = ${x}`);
}