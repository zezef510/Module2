class Product {
    private _ten: string
     private _gia: number

    constructor(ten : string , gia : number) {
        this._gia = gia
        this._ten = ten
    }

    get ten(): string {
        return this._ten;
    }

    set ten(value: string) {
        this._ten = value;
    }

    get gia(): number {
        return this._gia;
    }

    set gia(value: number) {
        this._gia = value;
    }
}