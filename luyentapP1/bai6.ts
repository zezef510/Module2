class Tinh {
    ma : number;
    name : string;
    dan  : number;
    gdp : number
    constructor(ma:number,name:string,dan:number,gd:number) {
        this.ma = ma
        this.name = name
        this.dan = dan
        this.gdp = gd
    }
}
class Nguoi {
    cmnd: string;
    ten: string;
    sdt: string;
    tinh: Tinh;

    constructor(cmnd: string, ten: string, sdt: string, tinh: Tinh) {
        this.cmnd = cmnd;
        this.ten = ten;
        this.sdt = sdt;
        this.tinh = tinh;
    }
}