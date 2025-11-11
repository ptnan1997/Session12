let score = Number(prompt("Nhập vào số điểm:"))
if (score===10){
    console.log("Xuất sắc");
}else if(score >=8 && score <10){
    console.log("Giỏi");
}else if (score >=6.5 && score<8){
    console.log("Khá")
}else if (score >=5 && score <6.5){
    console.log("Trung bình")
}else if (score <5 && score >0){
    console.log("Kém")
}else{
    console.log("Giá trị bạn nhập không nằm trong số nguyên từ 0 đến 10")
}