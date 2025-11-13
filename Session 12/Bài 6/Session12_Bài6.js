let menu = +prompt(`menu : Lua chon 1 nhap ten nguoi dung: 
    Lua chon 2: Nhap tuoi nguoi dung:
    Lua chon 3: In ten va tuoi cua nguoi dung.
    Lua chon 4: In bang cuu chuong cua 1 so.
    Lua chon 5:Kiểm tra số nhập vào là số chẵn hay lẻ.
    Lua chon 6: Tính tổng các số từ 1 đến N 
    Lua chon 7: In các số trong một dãy 
    Lua chon 8:Kiểm tra số nhập vào có phải là số nguyên tố hay không.
    Lua chon 9: In chuỗi đảo ngược của một chuỗi mà người dùng nhập.
    Lua chon 10: Thoát khỏi chương trình.`)
let names;
let age;
let multi;
let oddeven;
let number;
let isPrime;
let sum ;
let str;
let reversed;
switch (menu) {
    case 1:
        names = prompt("Nhập tên của người dùng");
        break;
    case 2:
        age = prompt("Nhập tuổi của người dùng");
        break;
    case 3:
        names = prompt("Nhập tên của người dùng");
        console.log(names);
        age = prompt("Nhập tuổi của người dùng");
        console.log(age);
        break;
    case 4:
        let x = +prompt("Nhập một số từ 2 đến 9");
        for (let i = 1; i <= 9; i++) {
            multi = x * i;
        }
        console.log(`Bảng cửa chương ${x}
            ${x} x ${i} = ${multi}`);
        break;
    case 5:
        oddeven = Number(prompt("Hãy nhập vào một số ngẫu nhiên"))
        if (oddeven % 2 === 0) {
            console.log("Số bạn nhập là số chẵn");
        } else if (oddeven % 2 !== 0) {
            console.log("Số bạn nhập là số lẻ");
        } else {
            console.log("Số bạn nhập không có giá trị");
        }
        break;
    case 6:
        let lastNumber = Number(prompt("Nhập vào N độ dài của dãy số"));
        let sum = 0;
        for (let i = 1; i <= lastNumber; i++) {
            sum += i;
        }
        console.log(`Tổng các số từ 1 đến N: ${sum}`);
        break;
    case 7:
        let number = Number(prompt("Nhập vào dãy số "));
        console.log(number);
        break;
    case 8:
        let n = Number(prompt("Nhập số cần kiểm tra:"));

        if (n < 2) {
            console.log(`${n} KHÔNG phải số nguyên tố`);
        } else {
            let isPrime = true;  // Giả sử là nguyên tố

            // Duyệt từ 2 đến căn bậc 2 của n
            for (let i = 2; i <= Math.sqrt(n); i++) {
                if (n % i === 0) {
                    isPrime = false;
                    break;  // Thoát sớm nếu tìm thấy ước
                }
            }

            if (isPrime) {
                console.log(`${n} LÀ số nguyên tố`);
            } else {
                console.log(`${n} KHÔNG phải số nguyên tố`);
            }
        }
        break;
    case 9:
        // Nhập chuỗi từ người dùng
        str = prompt("Nhập chuỗi cần đảo ngược:");
        reversed = '';

        // Dùng vòng lặp for từ cuối về đầu
        for (let i = str.length - 1; i >= 0; i--) {
            reversed += str[i];
        }

        console.log("Chuỗi đảo ngược:", reversed);
        break;
    case 10:
         console.log("Thoát khỏi chương trình");
        break;
    default:
        console.log("Lựa chọn không có trong Menu");
        break;
}