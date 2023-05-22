// @ts-ignore
var inp = require('readline-sync');
var HoaDon = /** @class */ (function () {
    function HoaDon(cmnd, ten, tuoi, soNgayThue, loaiPhong) {
        this._cmnd = cmnd;
        this._ten = ten;
        this._tuoi = tuoi;
        this._soNgayThue = soNgayThue;
        this._loaiPhong = loaiPhong;
    }
    Object.defineProperty(HoaDon.prototype, "cmnd", {
        get: function () {
            return this._cmnd;
        },
        set: function (value) {
            this._cmnd = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HoaDon.prototype, "ten", {
        get: function () {
            return this._ten;
        },
        set: function (value) {
            this._ten = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HoaDon.prototype, "tuoi", {
        get: function () {
            return this._tuoi;
        },
        set: function (value) {
            this._tuoi = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HoaDon.prototype, "soNgayThue", {
        get: function () {
            return this._soNgayThue;
        },
        set: function (value) {
            this._soNgayThue = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HoaDon.prototype, "loaiPhong", {
        get: function () {
            return this._loaiPhong;
        },
        set: function (value) {
            this._loaiPhong = value;
        },
        enumerable: false,
        configurable: true
    });
    return HoaDon;
}());
var KhachSan = /** @class */ (function () {
    function KhachSan() {
        this.listHoaDon = [];
    }
    KhachSan.prototype.them = function (hoaDon) {
        this.listHoaDon.push(hoaDon);
    };
    KhachSan.prototype.xoa = function (cmnd) {
        this.listHoaDon = this.listHoaDon.filter(function (item) { return item.cmnd !== cmnd; });
    };
    KhachSan.prototype.tinhTien = function (_ten) {
        var sumMoney = 0;
        for (var i = 0; i < this.listHoaDon.length; i++) {
            if (this.listHoaDon[i].ten === ten) {
                if (this.listHoaDon[i].loaiPhong === 'A')
                    sumMoney += this.listHoaDon[i].soNgayThue * 500;
                if (this.listHoaDon[i].loaiPhong === 'B')
                    sumMoney += this.listHoaDon[i].soNgayThue * 400;
                if (this.listHoaDon[i].loaiPhong === 'C')
                    sumMoney += this.listHoaDon[i].soNgayThue * 300;
            }
        }
        console.log('Tổng tiền của khách là: ' + sumMoney);
    };
    KhachSan.prototype.hienThi = function () {
        console.table(this.listHoaDon);
    };
    return KhachSan;
}());
var A = new KhachSan();
var cmnd = inp.question(" Nhap vao cmnd thang 1 ");
var ten = inp.question('Nhập vào tên thằng 1:');
var tuoi = inp.question('Nhập vào tuoi thằng 1:');
var numberDay = inp.question(" So ngay thue  phong ");
var type = inp.question('Nhập loai phong  thằng 1:');
A.them(new HoaDon(cmnd, ten, tuoi, numberDay, type));
//
// let cmnd1 = inp.question(` Nhap vao cmnd thang 2 `)
// let ten1 = inp.question('Nhập vào tên thằng 2:')
// let tuoi1 = inp.question('Nhập vào tuoi thằng 2:')
// let numberDay1 = inp.question(` so ngay thue phong `)
// let type1 = inp.question('Nhập loai phong  thằng 2:')
// A.them(new HoaDon(cmnd1,ten1,tuoi1,numberDay1,type1))
//
// let cmnd2 = inp.question(` Nhap vao cmnd thang 3 `)
// let ten2 = inp.question('Nhập vào tên thằng 3:')
// let tuoi2 = inp.question('Nhập vào tuoi thằng 3:')
// let numberDay2 = inp.question(` So ngay thue phong `)
// let type2 = inp.question('Nhập loai phong  thằng 3:')
// A.them(new HoaDon(cmnd2,ten2,tuoi2,numberDay2,type2))
// A.hienThi()
//
//
// let inputCMND = inp.question(`Nhap vao Cmnd muon xoa`)
// A.xoa(inputCMND)
// A.hienThi()
var Bill = inp.question("nhap vao ten ");
A.tinhTien(Bill);
A.hienThi();
