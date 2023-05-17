var KH = /** @class */ (function () {
    function KH(date, ma, name, sdt, roomType) {
        this.SDT = sdt;
        this.Ma = ma;
        this.nameKH = name;
        this.Date = date;
        this.roomType = roomType;
    }
    KH.prototype.calculateBill = function () {
        if (this.roomType === "A") {
            return 200 * this.Date;
        }
        else if (this.roomType === "B") {
            return 300 * this.Date;
        }
        else if (this.roomType === "C") {
            return 400 * this.Date;
        }
    };
    KH.prototype.hienThi = function () {
        console.table("So ngay thue : ".concat(this.Date, ", Ma so phong :").concat(this.Ma, ",\n    Ten khach hang : ").concat(this.nameKH, ", SDT :").concat(this.SDT));
    };
    return KH;
}());
var KH1 = new KH(10, 12031230, "Q", 0, "A");
KH1.hienThi();
console.log("Tinh tien : " + KH1.calculateBill());
