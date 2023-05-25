"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KhachSan = void 0;
// @ts-ignore
var inp = require('readline-sync');
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
            if (this.listHoaDon[i].ten === _ten) {
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
    KhachSan.prototype.checkCMND = function (_cmnd) {
        // for (let i = 0; i < this.listHoaDon.length; i++) {
        //     if (this.listHoaDon[i].cmnd == _cmnd) {
        //         this.xoa(_cmnd)
        //     }
        //     }
        for (var i = 0; i < this.listHoaDon.length; i++) {
            if (this.listHoaDon[i].cmnd !== _cmnd) {
                console.log("ko co thu ban can");
            }
            else {
                console.log("co");
            }
        }
    };
    KhachSan.prototype.hienThi = function () {
        console.table(this.listHoaDon);
    };
    return KhachSan;
}());
exports.KhachSan = KhachSan;
