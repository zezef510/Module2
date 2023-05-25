"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var KhachSan_1 = require("./KhachSan");
var HoaDon_1 = require("./HoaDon");
// @ts-ignore
var nhap = require('readline-sync');
var choice = -1;
var ql = new KhachSan_1.KhachSan();
while (true) {
    console.log('Nhập vào lựa chọn:' +
        '\n 1. Hiển thị' +
        '\n 2. Thêm mới' +
        '\n 3. Delete' +
        '\n 4. Tinh tien' +
        '\n 0. Thoat');
    choice = nhap.question('Chon de : ');
    if (choice == 1) {
        ql.hienThi();
    }
    if (choice == 2) {
        console.log('Nhap vao thong tin hoa don moi nhe: ');
        var cmnd = nhap.question('Nhap vao cmnd');
        var ten = nhap.question('Nhap vao ten');
        var tuoi = nhap.question('Nhap vao tuoi');
        var soNgayThue = nhap.question('Nhap vao soNgayThue');
        var loaiPhong = nhap.question('Nhap vao Loai phong');
        ql.them(new HoaDon_1.HoaDon(cmnd, ten, tuoi, soNgayThue, loaiPhong));
    }
    if (choice == 0) {
        break;
    }
    if (choice == 3) {
        console.log('Nhập vào lựa chọn:\'' +
            ' \n 1.Kiem tra' +
            ' \n 2.Xoa');
        var choice2 = nhap.question("Chon");
        if (choice2 == 1) {
            console.log("A");
            // let cmnd4 = nhap.question('Nhap vao cmnd');
            // ql.checkCMND(cmnd4)
        }
    }
    if (choice == 4) {
        var ten1 = nhap.question("Nhap vao ten nguoi muon tinh tien");
        ql.tinhTien(ten1);
    }
}
