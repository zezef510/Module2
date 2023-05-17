class SV {
    Ma : number;
    name : string;
    Point1: number;
    Point2: number;
    Point3: number;
    constructor(Ma,name,Point1,Point2,Point3) {
        this.Ma = Ma ;
        this.name = name;
        this.Point1 = Point1
        this.Point2 = Point2
        this.Point3 = Point3
    }
    Totnghiep(){
        let tongDiem = this.Point1+this.Point2+this.Point3
      if (tongDiem  >= 20 ){
         console.log(`da tot nghiep`)
      }
      else {
          console.log(`chua tot nghiep`)
      }
    }
}
let sv1 = new SV(123,"Q",6,7,8)

sv1.Totnghiep()