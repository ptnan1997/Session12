let result = 0;
for(let i =1;i<=140;i++){
    if (i % 7 === 0){
        console.log(i)
        result +=i;
    }
}console.log(`Tổng 20 số chia hết cho 7 là ${result}`)