import {HoaDon} from "./HoaDon";
// @ts-ignore
let inp = require('readline-sync')
 export class KhachSan { // quản lý
    listHoaDon: HoaDon[] = [];

    them(hoaDon: HoaDon) {
        this.listHoaDon.push(hoaDon);
    }

     xoa(cmnd: string) {
        this.listHoaDon = this.listHoaDon.filter(item => item.cmnd !== cmnd);
    }

    tinhTien(_ten: string) {
        let sumMoney = 0;
        for (let i = 0; i < this.listHoaDon.length; i++) {
            if (this.listHoaDon[i].ten === _ten) {
                if (this.listHoaDon[i].loaiPhong === 'A') sumMoney += this.listHoaDon[i].soNgayThue * 500;
                if (this.listHoaDon[i].loaiPhong === 'B') sumMoney += this.listHoaDon[i].soNgayThue * 400;
                if (this.listHoaDon[i].loaiPhong === 'C') sumMoney += this.listHoaDon[i].soNgayThue * 300;
            }
        }
        console.log('Tổng tiền của khách là: ' + sumMoney);
    }
    checkCMND(_cmnd: string){
        // for (let i = 0; i < this.listHoaDon.length; i++) {
        //     if (this.listHoaDon[i].cmnd == _cmnd) {
        //         this.xoa(_cmnd)
        //     }
        //     }
        for (let i = 0; i < this.listHoaDon.length; i++) {
            if (this.listHoaDon[i].cmnd !== _cmnd) {
                console.log(`ko co thu ban can`)
            }
            else {
                console.log(`co`)
            }
        }

    }

    hienThi() {
        console.table(this.listHoaDon)
    }
}
