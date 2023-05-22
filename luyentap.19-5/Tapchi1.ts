import {ThuVien} from "./Thuvien";

class TapChi extends ThuVien {
   private _numberPH : number;
   private _monthPH : number;
   constructor(documentCode : string , imprint : string , nameNXB : string,numberBPH : number,
               numberPH : number, monthPH : number) {
       super(documentCode, imprint, nameNXB, numberBPH);
       this._numberPH = numberPH;
       this._monthPH = monthPH
   }

    get numberPH(): number {
        return this._numberPH;
    }

    set numberPH(value: number) {
        this._numberPH = value;
    }

    get monthPH(): number {
        return this._monthPH;
    }

    set monthPH(value: number) {
        this._monthPH = value;
    }
}