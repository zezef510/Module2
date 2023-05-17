class Cudan {
    name : string
    old : number
    Job : string
    CMT : number
    constructor(name : string,old : number , Job:string,CMT:number) {
        this.CMT = CMT
        this.Job = Job
        this.old = old
        this.name = name
    }
    hienThi(){
        console.table(`Ten cu dan : ${this.name}, Tuoi : ${this.old}, 
        nghe nghiep : ${this.Job}, CMND : ${this.CMT}` )
    }
}
let nameTL = new Cudan (`Kim Dong`,45,`giao vien `, 13123123214)
console.table(nameTL)