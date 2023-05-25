import {People} from "./ClassNguoi";

  export class Student extends People{
    private _Point : number;
    constructor( name : string , old : number , id: number, Point : number) {
        super(name,old , id );
        this._Point = Point
    }

    get Point(): number {
        return this._Point;
    }

    set Point(value: number) {
        this._Point = value;
    }
}