let integer1 = Number(prompt("Hãy nhập vào số nguyên 1:"))
let integer2 = Number(prompt("Hãy nhập vào số nguyên 2:"))
let integer3 = Number(prompt("Hãy nhập vào số nguyên 3:"))
console.log(`Số nguyên 1: ${integer1}`);
console.log(`Số nguyên 2: ${integer2}`);
console.log(`Số nguyên 3: ${integer3}`);
if (integer1>integer2 && integer1>integer3){
    console.log(`Giá trị lớn nhất trong 3 số nguyên là ${integer1}`);
} else if (integer2>integer1 && integer2>integer3){
    console.log(`Giá trị lớn nhất trong 3 số nguyên là ${integer2}`);
} else if (integer3>integer1 && integer3>integer2){
    console.log(`Giá trị lớn nhất trong 3 số nguyên là ${integer3}`);
}