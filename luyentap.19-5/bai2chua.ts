// @ts-ignore
let inp = require('readline-sync')

class HoaDon { // pojo: mô tả dữ liệu
    private _cmnd: string;
    private _ten: string;
    private _tuoi: number;
    private _soNgayThue: number;
    private _loaiPhong: string;
    constructor(cmnd: string, ten: string, tuoi: number, soNgayThue: number, loaiPhong: string) {
        this._cmnd = cmnd;
        this._ten = ten;
        this._tuoi = tuoi;
        this._soNgayThue = soNgayThue;
        this._loaiPhong = loaiPhong;
    }

    get cmnd(): string {
        return this._cmnd;
    }

    set cmnd(value: string) {
        this._cmnd = value;
    }

    get ten(): string {
        return this._ten;
    }

    set ten(value: string) {
        this._ten = value;
    }

    get tuoi(): number {
        return this._tuoi;
    }

    set tuoi(value: number) {
        this._tuoi = value;
    }

    get soNgayThue(): number {
        return this._soNgayThue;
    }

    set soNgayThue(value: number) {
        this._soNgayThue = value;
    }

    get loaiPhong(): string {
        return this._loaiPhong;
    }

    set loaiPhong(value: string) {
        this._loaiPhong = value;
    }

}

class KhachSan { // quản lý
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

    hienThi() {
        console.table(this.listHoaDon)
    }
}
let A = new KhachSan()
let cmnd = inp.question(` Nhap vao cmnd thang 1 `)
let ten = inp.question('Nhập vào tên thằng 1:')
let tuoi = inp.question('Nhập vào tuoi thằng 1:')
let numberDay = inp.question(` So ngay thue  phong `)
let type = inp.question('Nhập loai phong  thằng 1:')
A.them(new HoaDon(cmnd,ten,tuoi,numberDay,type))

let cmnd1 = inp.question(` Nhap vao cmnd thang 2 `)
let ten1 = inp.question('Nhập vào tên thằng 2:')
let tuoi1 = inp.question('Nhập vào tuoi thằng 2:')
let numberDay1 = inp.question(` so ngay thue phong `)
let type1 = inp.question('Nhập loai phong  thằng 2:')
A.them(new HoaDon(cmnd1,ten1,tuoi1,numberDay1,type1))

let cmnd2 = inp.q uestion(` Nhap vao cmnd thang 3 `)
let ten2 = inp.question('Nhập vào tên thằng 3:')
let tuoi2 = inp.question('Nhập vào tuoi thằng 3:')
let numberDay2 = inp.question(` So ngay thue phong `)
let type2 = inp.question('Nhập loai phong  thằng 3:')
A.them(new HoaDon(cmnd2,ten2,tuoi2,numberDay2,type2))
A.hienThi()


let inputCMND = inp.question(`Nhap vao Cmnd muon xoa`)
A.xoa(inputCMND)
A.hienThi()

let Bill = inp.question(`nhap vao ten nguoi muon tinh tien`)
A.tinhTien(Bill)
A.hienThi()


