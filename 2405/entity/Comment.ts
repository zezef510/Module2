export class Comment {
    private _id : number;
    private _content : string;
    private _Username : string;
    private _time : string;
    constructor(id : number , time :string , Username :string, content : string) {
        this._time = time;
        this._id = id;
        this._Username = Username
        this._content = content
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get content(): string {
        return this._content;
    }

    set content(value: string) {
        this._content = value;
    }

    get Username(): string {
        return this._Username;
    }

    set Username(value: string) {
        this._Username = value;
    }

    get time(): string {
        return this._time;
    }

    set time(value: string) {
        this._time = value;
    }
}