 export class Admin {
    private _name : string ;
    private _age : number ;
    private _phoneNumber : number;
    private _email : string
    constructor(name : string , age : number, phoneNumber : number , email : string) {
        this._name = name
        this._age = age
        this._phoneNumber = phoneNumber;
        this._email = email
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }

    get phoneNumber(): number {
        return this._phoneNumber;
    }

    set phoneNumber(value: number) {
        this._phoneNumber = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }
}