let age = Number(prompt("Mi hãy nhập vào số tuổi cho ta:"))
if (age>0 && age<120){
    console.log("Ngươi chính là con người!!!")
}else if(age<0){
    console.log("Ngươi bị đần à. Số tuổi mà mi nhập giá trị âm sao???")
}else if (age>120) {
    console.log("Ngươi chính là quái vật !!! ")
}else {
    console.log("Ngươi bị ngu à. Số tuổi là số nguyên. HIỂU KHÔNG!!!")
}