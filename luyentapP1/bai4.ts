class KH {
    Date: number
    Ma: number
    nameKH: string
    SDT: number
    roomType :string
constructor(date:number,ma:number,name:string,sdt:number,roomType:string) {
        this.SDT = sdt
        this.Ma   = ma
        this.nameKH = name
        this.Date = date
        this.roomType = roomType
}
    calculateBill() {
        if (this.roomType === "A") {
            return 200 * this.Date;
        } else if (this.roomType === "B") {
            return 300 * this.Date;
        } else if (this.roomType === "C") {
            return 400 * this.Date;
        }
    }
    hienThi() {
        console.table(`So ngay thue : ${this.Date}, Ma so phong :${this.Ma},
    Ten khach hang : ${this.nameKH}, SDT :${this.SDT}`)
    }
}
let KH1 = new KH (10,12031230,`Q`,0, "A")
KH1.hienThi()
console.log(`Tinh tien : ` + KH1.calculateBill())