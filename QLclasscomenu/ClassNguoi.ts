 export class People    {
    private _name : string ;
    private _old : number ;
    private _id : number ;
    constructor( name : string , old : number,id : number) {
        this._name = name;
        this._old = old
        this._id = id
    }
    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get old(): number {
        return this._old;
    }

    set old(value: number) {
        this._old = value;
    }
     get id(): number {
         return this._old;
     }

     set id(value: number) {
         this._old = value;
     }
}