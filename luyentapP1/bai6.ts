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
let t1 = new Tinh(123,"quang",200,123)
let n1 = new Nguoi(`123`,`qq`,`04556`,t1)
console.log(n1.cmnd+`|`, n1.ten + `|`, n1.sdt + `|` ,n1.tinh.ma)