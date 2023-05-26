"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NYmanage = void 0;
var NY_1 = require("../entity/NY");
var NYmanage = /** @class */ (function () {
    function NYmanage() {
        this.listNY = [];
    }
    NYmanage.prototype.showListNY = function () {
        if (this.listNY.length === 0) {
            console.log("Ko co du lieu");
            return;
        }
        else {
            for (var i = 0; i < this.listNY.length; i++) {
                var ny = this.listNY[i];
                console.log("M\u00E3 ng\u01B0\u1EDDi y\u00EAu: ".concat(ny.id));
                console.log("T\u00EAn ng\u01B0\u1EDDi y\u00EAu: ".concat(ny.name));
                console.log("Cung ho\u00E0ng \u0111\u1EA1o: ".concat(ny.zodiac));
                console.log("Qu\u00EA qu\u00E1n: ".concat(ny.hometown));
                console.log("N\u0103m sinh: ".concat(ny.birthYear));
                console.log("S\u1EDF th\u00EDch: ".concat(ny.hobby));
                console.log("===============================");
            }
        }
    };
    NYmanage.prototype.findNYByName = function (isName) {
        var filterNY = this.listNY.filter(
        // @ts-ignore
        function (ny) { return ny.name.toLowerCase().includes(isName.toLowerCase()); });
        if (filterNY.length === 0) {
            console.log("Ko co du lieu");
            return;
        }
        for (var i = 0; i < filterNY.length; i++) {
            var nY = this.listNY[i];
            console.log("M\u00E3 ng\u01B0\u1EDDi y\u00EAu: ".concat(nY.id));
            console.log("T\u00EAn ng\u01B0\u1EDDi y\u00EAu: ".concat(nY.name));
            console.log("Cung ho\u00E0ng \u0111\u1EA1o: ".concat(nY.zodiac));
            console.log("Qu\u00EA qu\u00E1n: ".concat(nY.hometown));
            console.log("N\u0103m sinh: ".concat(nY.birthYear));
            console.log("===============================");
        }
    };
    NYmanage.prototype.addNy = function (maNY, ten, zodiac, hometown, birthYear, hobby) {
        var coincident = false;
        for (var i = 0; i < this.listNY.length; i++) {
            if (this.listNY[i].id === maNY) {
                coincident = true;
                return;
            }
        }
        if (coincident) {
            console.log("Da ton tai NY");
            return;
        }
        var newNY = new NY_1.NY(maNY, ten, zodiac, hometown, birthYear, hobby);
        this.listNY.push(newNY);
        console.log("Them thanh cong");
    };
    NYmanage.prototype.editNY = function (maNY, ten, zodiac, hometown, birthYear, hobby) {
        var filteredNY = this.listNY.filter(function (ny) { return ny.id === maNY; });
        if (filteredNY.length > 0) {
            if (ten)
                filteredNY[0].name = ten;
            if (zodiac)
                filteredNY[0].zodiac = zodiac;
            if (hometown)
                filteredNY[0].hometown = hometown;
            if (birthYear)
                filteredNY[0].birthYear = birthYear;
            if (hobby)
                filteredNY[0].hobby = hobby;
            console.log("Da cap nhat thong tin ");
        }
        else {
            console.log("Khong ton tai nguoi yeu can cap nhat");
        }
    };
    NYmanage.prototype.deleteNY = function (id) {
        var newList = this.listNY.filter(function (delte) { return delte.id !== id; });
        if (newList.length === this.listNY.length) {
            console.log("Ko ton tai ");
        }
        else {
            this.listNY = newList;
            console.log("Xoa thanh cong ");
        }
    };
    return NYmanage;
}());
exports.NYmanage = NYmanage;
