export class User {
    private _id : number;
    private _content : string;
    private _title : string;
    constructor(id : number, content : string , title : string) {
        this._id = id ;
        this._content = content;
        this._title = title
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

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }
}