class Custom {
    private _ID : string ;
    private _Name : string ;
    private _Age : number ;
    private _Address : string;
    private _PhoneNumber : string;
    private _Email : string ;
    private _Account : string

    constructor(ID: string, Name: string, Age: number, Address: string, PhoneNumber: string, Email: string, Account: string) {
        this._ID = ID;
        this._Name = Name;
        this._Age = Age;
        this._Address = Address;
        this._PhoneNumber = PhoneNumber;
        this._Email = Email;
        this._Account = Account;
    }

    get ID(): string {
        return this._ID;
    }

    set ID(value: string) {
        this._ID = value;
    }

    get Name(): string {
        return this._Name;
    }

    set Name(value: string) {
        this._Name = value;
    }

    get Age(): number {
        return this._Age;
    }

    set Age(value: number) {
        this._Age = value;
    }

    get Address(): string {
        return this._Address;
    }

    set Address(value: string) {
        this._Address = value;
    }

    get PhoneNumber(): string {
        return this._PhoneNumber;
    }

    set PhoneNumber(value: string) {
        this._PhoneNumber = value;
    }

    get Email(): string {
        return this._Email;
    }

    set Email(value: string) {
        this._Email = value;
    }

    get Account(): string {
        return this._Account;
    }

    set Account(value: string) {
        this._Account = value;
    }
}