var Nguoi = /** @class */ (function () {
    function Nguoi(hoten, tuoi, cmnd) {
        this.hoten = hoten;
        this.tuoi = tuoi;
        this.cmnd = cmnd;
    }
    Nguoi.prototype.getHoten = function () {
        return this.hoten;
    };
    Nguoi.prototype.setHoten = function (hoten) {
        this.hoten = hoten;
    };
    Nguoi.prototype.getTuoi = function () {
        return this.tuoi;
    };
    Nguoi.prototype.setTuoi = function (tuoi) {
        this.tuoi = tuoi;
    };
    Nguoi.prototype.getCmnd = function () {
        return this.cmnd;
    };
    Nguoi.prototype.setCmnd = function (cmnd) {
        this.cmnd = cmnd;
    };
    return Nguoi;
}());
var KhachSan = /** @class */ (function () {
    function KhachSan() {
    }
    KhachSan.them_khach_hang = function (khach_hang_moi) {
        KhachSan.khach_hang.push(khach_hang_moi);
    };
    KhachSan.show = function () {
        return KhachSan.khach_hang;
    };
    KhachSan.xoa_khach_hang = function (cmnd) {
        var khach_hang_cu = KhachSan.khach_hang;
        KhachSan.khach_hang = [];
        for (var i = 0; i < khach_hang_cu.length; i++) {
            if (khach_hang_cu[i].getCmnd() !== cmnd) {
                KhachSan.khach_hang.push(khach_hang_cu[i]);
                break;
            }
            else {
                console.log("ko co khach hang ");
            }
        }
    };
    KhachSan.tinh_tien_thue_phong = function (cmnd, loai_phong, so_ngay) {
        var gia_phong = 0;
        if (loai_phong.toUpperCase() === "A") {
            gia_phong = KhachSan.phongA_gia;
        }
        else if (loai_phong.toUpperCase() === "B") {
            gia_phong = KhachSan.phongB_gia;
        }
        else if (loai_phong.toUpperCase() === "C") {
            gia_phong = KhachSan.phongC_gia;
        }
        else {
            return "Loại phòng không hợp lệ";
        }
        var khach;
        for (var i = 0; i < KhachSan.khach_hang.length; i++) {
            if (KhachSan.khach_hang[i].getCmnd() === cmnd) {
                khach = KhachSan.khach_hang[i];
                break;
            }
        }
        if (khach) {
            return so_ngay * gia_phong;
        }
        else {
            return "Không tìm thấy khách hàng với số CMND đã nhập";
        }
    };
    KhachSan.phongA_gia = 500;
    KhachSan.phongB_gia = 300;
    KhachSan.phongC_gia = 100;
    KhachSan.khach_hang = [];
    return KhachSan;
}());
KhachSan.them_khach_hang(new Nguoi("quang", 20, "123as"));
KhachSan.them_khach_hang(new Nguoi("q", 30, "12456"));
KhachSan.them_khach_hang(new Nguoi("ang", 25, "98725"));
console.log(KhachSan.show());
console.log("Tong so tien khach phai tra la :" + KhachSan.tinh_tien_thue_phong("123as", "A", 20) + "USD");
KhachSan.xoa_khach_hang("123456");
console.log(KhachSan.show());
KhachSan.xoa_khach_hang("12456");
console.log(KhachSan.show());
