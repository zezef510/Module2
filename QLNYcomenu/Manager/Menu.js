"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NYmanager_1 = require("./NYmanager");
// @ts-ignore
var rl = require("readline-sync");
var ny = new NYmanager_1.NYmanage();
while (true) {
    console.log("========= MENU =========" +
        "\n 1. Hi\u1EC3n th\u1ECB danh s\u00E1ch ng\u01B0\u1EDDi y\u00EAu" +
        "\n 2. T\u00ECm ki\u1EBFm ng\u01B0\u1EDDi y\u00EAu theo t\u00EAn" +
        "\n 3. Th\u00EAm m\u1EDBi m\u1ED9t ng\u01B0\u1EDDi y\u00EAu" +
        "\n  4. Ch\u1EC9nh s\u1EEDa th\u00F4ng tin m\u1ED9t ng\u01B0\u1EDDi y\u00EAu" +
        "\n  5. X\u00F3a m\u1ED9t ng\u01B0\u1EDDi y\u00EAu" +
        "\n ========================");
    var choice = rl.questionInt('Nhap vao lua chon cua ban ');
    if (choice == 1) {
        ny.showListNY();
    }
    if (choice == 2) {
        var iD = rl.question(" nhap vao ten ny muon tim");
        ny.findNYByName(iD);
    }
    if (choice == 3) {
        console.log('Nhap vao thong tin muon them nhe: ');
        var id = rl.questionInt('Nhap vao ID');
        var name_1 = rl.question('Nhap vao ten');
        var zodiac = rl.question('Nhap vao cung hoang dao');
        var home = rl.question('Nhap vao que quan');
        var sinhNhat = rl.questionInt('Nhap vao nam sinh');
        var hob = rl.question('Nhap vao so thich');
        ny.addNy(id, name_1, zodiac, home, sinhNhat, hob);
    }
    if (choice == 4) {
        console.log('Nhap vao thong tin muon cap nhat  nhe: ');
        var id1 = rl.question('Nhap vao ID');
        var name1 = rl.question('Nhap vao ten');
        var zodiac1 = rl.question('Nhap vao cung hoang dao');
        var home1 = rl.question('Nhap vao que quan');
        var sinhNhat1 = rl.question('Nhap vao nam sinh');
        var hob1 = rl.question('Nhap vao so thich');
        ny.editNY(id1, name1, zodiac1, home1, sinhNhat1, hob1);
    }
    if (choice === 5) {
        var idd = rl.question(" nhap vao id ban muon xoa");
        ny.deleteNY(idd);
    }
    if (choice > 5) {
        console.log('Lựa chọn không hợp lệ');
    }
    if (choice == 0) {
        break;
    }
}
