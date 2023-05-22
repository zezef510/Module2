 export class ThuVien {
     private _documentCode : string;
     private _imprint : string;
     private _nameNXB : string;
     private _numberBPH : number
  constructor(documentCode : string , imprint : string , nameNXB : string,numberBPH : number) {
         this._documentCode = documentCode;
         this._imprint = imprint;
         this._nameNXB = nameNXB;
         this._numberBPH = numberBPH
  }

     get documentCode(): string {
         return this._documentCode;
     }

     set documentCode(value: string) {
         this._documentCode = value;
     }

     get imprint(): string {
         return this._imprint;
     }

     set imprint(value: string) {
         this._imprint = value;
     }

     get nameNXB(): string {
         return this._nameNXB;
     }

     set nameNXB(value: string) {
         this._nameNXB = value;
     }

     get numberBPH(): number {
         return this._numberBPH;
     }

     set numberBPH(value: number) {
         this._numberBPH = value;
     }
 }
 class Librarian {
     static list: ThuVien[] = []

     static add(TaiLieu: ThuVien) {
         this.list.push(TaiLieu)
     }

     static delete(code: string) {
         for ( let i = 0 ; i < this.list.length ; i++){
             if (code === code) {
                 this.list.splice(Number(code), 1);
             }
             else {
                 console.log(`ko co`)
             }
         }
     }
     static show(){
         console.table(this.list)

     }
 }
