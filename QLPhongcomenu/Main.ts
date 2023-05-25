import {InvoiceManagement} from "./Manager/InvoiceManagement";
import {RoomManager} from "./Manager/RoomManager";


// @ts-ignore
let input = require(`readline-sync`)
let choice = -1 ;
let menu = new InvoiceManagement()
let rooms =  new RoomManager()
while (true) {
    console.log('Select:' +
        '\n 1. Dang nhap ' +
        '\n 2. Dang ky  ' )
    if ( choice == 1 ) {
        choice = input.question('Select:' +
            '\n 1. Hien thị thông tin tài khoan ' +
            '\n 2. Quản lý phong ' +
            '\n 3. Quản lý hóa đơn' +
            '\n 4. Sua thong tin dang nhap' +
            '\n 0. Thoat')

        let choice2 = input.question(`Select`)

        if (choice2 == 1) {
            console.log(`A`)
        }
        if (choice2 == 2) {
            console.log(`Select :` +
                `\n 1. Hien thi danh sach ` +
                `\n 2. Them phong ` +
                `\n 3. Sua thong tin phong theo RoomID ` +
                `\n 4. Hien thi phong con trong  ` +
                `\n 5. Tim phong theo ID ` +
                `\n 6. Tim phong theo khoang gia `)
        }
        if (choice2 == 3) {
            console.log(`Select : `+
            `\n 1.Hien thi danh sach hoa don`+
            `\n 2. Tao hoa don`+
            `\n 3. Sua thong tin hoa don theo so hoa don`+
            `\n 4. Xoa hoa don `+
            `\n 5. Tim va tinh tong tien hoa don theo khoang thoi gian `+
            `\n 6. Xuat file csv`)
        }
        if (choice2 == 4 ){
            console.log(`Sua doi thong tin dang nhap`)
        }
    }
    if ( choice ==2 ){
        console.log(`Dang ky`)
    }
    }
