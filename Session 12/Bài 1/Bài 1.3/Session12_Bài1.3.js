let integer= Number(prompt("Hãy nhập vào số nguyên:"))

if (integer > 0){
    console.log("Số bạn nhập lớn hơn 0");
}else if(integer < 0){
    console.log("Số bạn nhập nhỏ hơn 0");
}else if (integer === 0){
    console.log("Số bạn nhập là số 0");
} else {
    console.log("Giá trị bạn nhập không phải là số nguyên");
}