class CanBo {
  name : string;
  tuoi : number;
  gioiTinh : `nam` | `nu` | `khac`;
  diaChi : any

    constructor(name:string,tuoi:number,gioiTinh :`nam` | `nu` | `khac`, diaChi: any ) {
      this.name = name;
      this.tuoi = tuoi;
      this.gioiTinh = gioiTinh;
      this.diaChi = diaChi
    }
}
class KySu extends CanBo{
    nganhDaoTao : string;
    constructor(name:string,tuoi:number,gioiTinh :`nam` | `nu` | `khac`, diaChi: any,nganhDaoTao : string) {
        super(name,tuoi,gioiTinh,diaChi);
        this.nganhDaoTao = nganhDaoTao
    }

}
class NhanVien extends  CanBo{
    congViec : string
    constructor(name:string,tuoi:number,gioiTinh :`nam` | `nu` | `khac`, diaChi: any,congViec :string) {
        super(name,tuoi,gioiTinh,diaChi);
        this.congViec = congViec
    }
}
class CongNhan  extends  CanBo{
    bac : number
    constructor(name:string, tuoi:number,gioiTinh :`nam` | `nu` | `khac`, diaChi: any , bac : number) {
        super(name,tuoi,gioiTinh,diaChi);
        this.bac = bac
    }
}
class  QLCB {

}