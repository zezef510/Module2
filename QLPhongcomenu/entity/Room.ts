 export class Room {
     private _id: string;
     private _price: number;
     private _status : string;
     private _NumberOfBedroom : number;
     private _NumberOfToilet  : number
     constructor(id : string , price : number , status : string , NumberOfBedroom : number , NumberOfToilet:number) {
         this._id = id;
         this._price = price ;
         this._status = status;
         this._NumberOfToilet = NumberOfToilet;
         this._NumberOfBedroom = NumberOfBedroom
     }

     get id(): string {
         return this._id;
     }

     set id(value: string) {
         this._id = value;
     }

     get price(): number {
         return this._price;
     }

     set price(value: number) {
         this._price = value;
     }

     get status(): string {
         return this._status;
     }

     set status(value: string) {
         this._status = value;
     }

     get NumberOfBedroom(): number {
         return this._NumberOfBedroom;
     }

     set NumberOfBedroom(value: number) {
         this._NumberOfBedroom = value;
     }

     get NumberOfToilet(): number {
         return this._NumberOfToilet;
     }

     set NumberOfToilet(value: number) {
         this._NumberOfToilet = value;
     }
 }