import {ThuVien} from "./Thuvien";

class  Bao extends  ThuVien{
    private _DayPH : number;
    constructor(documentCode : string , imprint : string , nameNXB : string,numberBPH : number,
                DayPH : number) {
        super(documentCode, imprint, nameNXB, numberBPH);
        this._DayPH = DayPH
    }

    get DayPH(): number {
        return this._DayPH;
    }

    set DayPH(value: number) {
        this._DayPH = value;
    }
}