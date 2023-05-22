import {ThuVien} from "./Thuvien";

class  Sach extends ThuVien{
    private _nameTG : string;
    private _numberPage : number
    constructor(documentCode : string , imprint : string , nameNXB : string,numberBPH : number,
                nameTG : string , numberPage : number) {
        super(documentCode, imprint, nameNXB, numberBPH);
        this._nameTG = nameTG;
        this._numberPage = numberPage
    }

    get nameTG(): string {
        return this._nameTG;
    }

    set nameTG(value: string) {
        this._nameTG = value;
    }

    get numberPage(): number {
        return this._numberPage;
    }

    set numberPage(value: number) {
        this._numberPage = value;
    }
}