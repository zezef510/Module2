"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ClassNguoi_1 = require("./ClassNguoi");
var QLGV = /** @class */ (function () {
    function QLGV() {
        this.list = [];
    }
    QLGV.prototype.add = function (add) {
        this.list.push(add);
    };
    QLGV.prototype.hienThi = function () {
        console.table(this.list);
    };
    return QLGV;
}());
var people1 = new QLGV();
people1.add(new ClassNguoi_1.People("A", 10));
people1.hienThi();
