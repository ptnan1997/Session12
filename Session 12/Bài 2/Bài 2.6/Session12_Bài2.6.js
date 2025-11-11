let a = Number(prompt("Nhập vào giá trị a:"))
let b = Number(prompt("Nhập vào giá trị b:"))
let result = -(b/a);
console.log
(`Ta có phương trình như sau: ${a}x + ${b}=0
Suy ra x=-${a}/${b}
Suy ra x=${result}`)
if (a === 0){
    console.log("Phương trình vô nghiệm")
}
