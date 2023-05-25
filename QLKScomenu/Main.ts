
import {KhachSan} from "./KhachSan";
import {HoaDon} from "./HoaDon";

// @ts-ignore
let nhap = require('readline-sync');
let choice = -1;
let ql = new KhachSan();
while (true) {
    console.log('Nhập vào lựa chọn:' +
        '\n 1. Hiển thị' +
        '\n 2. Thêm mới' +
        '\n 3. Delete' +
        '\n 4. Tinh tien' +
        '\n 0. Thoat')
    choice = nhap.question('Chon de : ');
    if (choice == 1) {
        ql.hienThi();
    }
    if (choice == 2) {
        console.log('Nhap vao thong tin hoa don moi nhe: ');
        let cmnd = nhap.question('Nhap vao cmnd');
        let ten = nhap.question('Nhap vao ten');
        let tuoi = nhap.question('Nhap vao tuoi');
        let soNgayThue = nhap.question('Nhap vao soNgayThue');
        let loaiPhong = nhap.question('Nhap vao Loai phong');
        ql.them(new HoaDon(cmnd, ten, tuoi, soNgayThue, loaiPhong));
    }
    if (choice == 0) {
        break;
    }
    if (choice == 3){
        console.log('Nhập vào lựa chọn:\'' +
            ' \n 1.Kiem tra' +
            ' \n 2.Xoa');
        let choice2 = nhap.question(`Chon`)

        if (choice2 == 1 ){
            console.log(`A`)
            // let cmnd4 = nhap.question('Nhap vao cmnd');
            // ql.checkCMND(cmnd4)
        }

    }
    if ( choice == 4 ){
        let ten1 = nhap.question( `Nhap vao ten nguoi muon tinh tien`)
        ql.tinhTien(ten1)
    }
}