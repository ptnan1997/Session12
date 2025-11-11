for (let i=1;i<=100;i++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log("FIZZBUZZ");
        continue;
    }else if (i % 3 === 0){
        console.log("FIZZ");
        continue;
    }else if(i % 5 === 0){
        console.log("BUZZ");
        continue;
    } 
    console.log(`The number is ${i}`)
}