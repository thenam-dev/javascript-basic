console.log("LAB 02");

// Tạo 1 hàm tinhTrungBinh(toan,van,anh)
// Hàm nhận vào 3 điểm số (sử dụng tham số)
// Trả về điểm trung bình

const tinhDiemTrungBinh = (toan, van, anh) => {
  return (toan + van + anh) / 3;
};

// Tạo hàm xepLoai(diemTB)
// Dựa vào điểm trung bình, xếp loại học sinh:
// Từ 9 -> "Xuất sắc"
// Từ 8 và bé hơn 9 -> "Giỏi"
// Còn lại -> "Trung bình"

const xepLoai = (diemTB) => {
  if (diemTB >= 9) {
    return "Xuat sac";
  } else if (diemTB < 9 && diemTB >= 8) {
    return "Gioi";
  } else if (diemTB < 8 && diemTB >= 6.5) {
    return "Kha";
  } else {
    return "Trung binh";
  }
};

//main
const diemToan = 9;
const diemVan = 8;
const diemAnh = 7;

const myTB = tinhDiemTrungBinh(diemToan, diemVan, diemAnh);

console.log(`
  Điểm trung bình: ${myTB}
  Xếp loại: ${xepLoai(myTB)}`);
