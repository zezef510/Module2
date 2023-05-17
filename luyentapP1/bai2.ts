class Student {
    SBD : number;
    DC : string;
    MUT : string;
    constructor(SBD: number,DC:string,MUT:string) {
        this.SBD = SBD
        this.DC = DC
        this.MUT = MUT
    }
    PT(){
        console.table(`So bao danh : ${this.SBD},Dia chi nha : ${this.DC},
         Muc uu tien : ${this.MUT}`)
    }
}
let nameTL = new Student (8471293123,`Kim Dong`,`ko co `)
console.table(nameTL)