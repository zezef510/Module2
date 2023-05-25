import {People} from "./ClassNguoi";

 export class Teacher extends People{
    _wage : string ;
    constructor( name : string , old : number, id : number ,wage : string ) {
        super( name , old , id);
        this._wage = wage
    }
    get wage(): string {
        return this._wage;
    }

    set wage(value: string) {
        this._wage = value;
    }
}