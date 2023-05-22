class Nguoi {
    private hoten: string;
    private tuoi: number;
    private cmnd: string;

    constructor(hoten: string, tuoi: number, cmnd: string) {
        this.hoten = hoten;
        this.tuoi = tuoi;
        this.cmnd = cmnd;
    }

    getHoten(): string {
        return this.hoten;
    }

   setHoten(hoten: string): void {
        this.hoten = hoten;
    }

    getTuoi(): number {
        return this.tuoi;
    }

    setTuoi(tuoi: number): void {
        this.tuoi = tuoi;
    }

     getCmnd(): string {
        return this.cmnd;
    }

     setCmnd(cmnd: string): void {
        this.cmnd = cmnd;
    }
}

class KhachSan {
    private static readonly phongA_gia: number = 500;
    private static readonly phongB_gia: number = 300;
    private static readonly phongC_gia: number = 100;

     static khach_hang: Nguoi[] = [];

     static them_khach_hang(khach_hang_moi: Nguoi): void {
        KhachSan.khach_hang.push(khach_hang_moi);
    }
    static show() :Nguoi[] {
        return KhachSan.khach_hang

    }

     static xoa_khach_hang(cmnd: string): void {
        const khach_hang_cu = KhachSan.khach_hang;
        KhachSan.khach_hang = [];
        for (let i = 0; i < khach_hang_cu.length; i++) {
            if (khach_hang_cu[i].getCmnd() !== cmnd) {
                KhachSan.khach_hang.push(khach_hang_cu[i]);
                    
            }

        }


    }

     static tinh_tien_thue_phong(
        cmnd: string,
        loai_phong: string,
        so_ngay: number
    ): number | string {
        let gia_phong: number = 0;
        if (loai_phong.toUpperCase() === "A") {
            gia_phong = KhachSan.phongA_gia;
        } else if (loai_phong.toUpperCase() === "B") {
            gia_phong = KhachSan.phongB_gia;
        } else if (loai_phong.toUpperCase() === "C") {
            gia_phong = KhachSan.phongC_gia;
        } else {
            return "Loại phòng không hợp lệ";
        }

        let khach: Nguoi | undefined;
        for (let i = 0; i < KhachSan.khach_hang.length; i++) {
            if (KhachSan.khach_hang[i].getCmnd() === cmnd) {
                khach = KhachSan.khach_hang[i];
                break;
            }
        }

        if (khach) {
            return so_ngay * gia_phong;
        } else {
            return "Không tìm thấy khách hàng với số CMND đã nhập";
        }
    }
}
 KhachSan.them_khach_hang(new Nguoi("quang",20,"123as"))
 KhachSan.them_khach_hang(new Nguoi("q",30,"12456"))
 KhachSan.them_khach_hang(new Nguoi("ang",25,"98725"))
console.log(KhachSan.show())
console.log(`Tong so tien khach phai tra la :` + KhachSan.tinh_tien_thue_phong("123as","A",20)+ `USD`)
KhachSan.xoa_khach_hang(`123456`)
console.log(KhachSan.show())
KhachSan.xoa_khach_hang(`12456`)
console.log(KhachSan.show())


