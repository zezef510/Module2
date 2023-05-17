class TL {
    code : number
    nameNSB : string
    number : number
    constructor(code: number,nameNSB:string,number:number) {
        this.code = code
        this.nameNSB = nameNSB
        this.number = number
    }
    PT(){
        console.table(`Ma:${this.code}, Ten nha xuat ban : ${this.nameNSB},
        So phat hanh : ${this.number}`)
    }
}
let nameTL = new TL (8471293123,`Kim Dong`,451263)
console.table(nameTL)