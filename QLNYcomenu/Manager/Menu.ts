
import {NYmanage} from "./NYmanager";
// @ts-ignore
let  rl = require(`readline-sync`)
let ny = new NYmanage()


while (true){


    console.log("========= MENU =========" +
        `\n 1. Hiển thị danh sách người yêu`+
        `\n 2. Tìm kiếm người yêu theo tên`+
        `\n 3. Thêm mới một người yêu`+
        `\n  4. Chỉnh sửa thông tin một người yêu` +
        `\n  5. Xóa một người yêu` +
        `\n ========================`)

    const choice = rl.questionInt('Nhap vao lua chon cua ban ');

    if (choice == 1) {
        ny.showListNY()
    }
    if (choice == 2) {
        let iD = rl.question(` nhap vao ten ny muon tim`)
        ny.findNYByName(iD)

    }
    if (choice == 3) {
        console.log('Nhap vao thong tin muon them nhe: ');
        let id = rl.questionInt('Nhap vao ID');
        let name = rl.question('Nhap vao ten');
        let zodiac = rl.question('Nhap vao cung hoang dao');
        let home = rl.question('Nhap vao que quan');
        let sinhNhat = rl.questionInt('Nhap vao nam sinh');
        let hob = rl.question('Nhap vao so thich');
        ny.addNy(id, name, zodiac, home, sinhNhat, hob)
    }
    if (choice == 4) {
        console.log('Nhap vao thong tin muon cap nhat  nhe: ');

        let id1 = rl.questionInt('Nhap vao ID');
        let name1 = rl.question('Nhap vao ten');
        let zodiac1 = rl.question('Nhap vao cung hoang dao');
        let home1 = rl.question('Nhap vao que quan');
        let sinhNhat1 = rl.questionInt('Nhap vao nam sinh');
        let hob1 = rl.question('Nhap vao so thich');
        ny.editNY(id1, name1, zodiac1, home1, sinhNhat1, hob1)
    }
    if (choice === 5) {
        let idd = rl.questionInt(` nhap vao id ban muon xoa`)
        ny.deleteNY(idd)
    }
    if ( choice > 5) {
        console.log('Lựa chọn không hợp lệ');
    }
    if ( choice == 0){
        break
    }
}