while (true) {
    Temperature = parseFloat(prompt("Please enter the temperature you wish to adjust:"))
    if (Temperature>100){
        alert(`Nhiệt độ ${Temperature}°C quá cao! Vui lòng giảm nhiệt độ.`);
        continue;
    }
    else if (Temperature < 20) {
        alert(`Nhiệt độ ${Temperature}°C quá thấp! Vui lòng tăng nhiệt độ.`);
        continue;
      } 
    else if (Temperature > 20 && Temperature < 100){
        alert(`Nhiệt độ ${Temperature}°C là hợp lệ. Cảm ơn bạn!`);
        break;
    }else {
        alert(`Giá trị bạn nhập không phải là nhiệt độ`);
        continue;
    }
}