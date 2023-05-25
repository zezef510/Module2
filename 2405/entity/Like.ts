export class Like {
    private _id : number;
    private _time : string;
    private _Username : string;
    constructor(id : number , time :string , Username :string) {
        this._time = time;
        this._id = id;
        this._Username = Username
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get time(): string {
        return this._time;
    }

    set time(value: string) {
        this._time = value;
    }

    get Username(): string {
        return this._Username;
    }

    set Username(value: string) {
        this._Username = value;
    }
}