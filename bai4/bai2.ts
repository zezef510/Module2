class Employee{
   private _Ho :string;
   private _Ten : string;
  private _NS : number ;
  private _DC : string ;
  private _NLV : string
    constructor(ho : string , ten : string , ns : number , dc : string , nlv : string) {
      this._Ho = ho;
      this._Ten = ten;
      this._NS = ns ;
      this._DC = dc;
      this._NLV = nlv
    }

    get Ho(): string {
        return this._Ho;
    }

    set Ho(value: string) {
        this._Ho = value;
    }

    get Ten(): string {
        return this._Ten;
    }

    set Ten(value: string) {
        this._Ten = value;
    }

    get NS(): number {
        return this._NS;
    }

    set NS(value: number) {
        this._NS = value;
    }

    get DC(): string {
        return this._DC;
    }

    set DC(value: string) {
        this._DC = value;
    }

    get NLV(): string {
        return this._NLV;
    }

    set NLV(value: string) {
        this._NLV = value;
    }
}
  class EmployeeManager{


   private static employess1:  Employee[] = [];
   static show() :Employee[] {
       return EmployeeManager.employess1

    }
    static add(ns:Employee){
       EmployeeManager.employess1.push(ns)
     }
     static delete(index : number){
       EmployeeManager.employess1.splice(index,1)
     }
     static chiTiet(index :number){
       return EmployeeManager.employess1[index]
     }
    static upDate(index :number, lem : Employee){
         EmployeeManager.employess1[index] = lem;
     }

}
EmployeeManager.add(new Employee('John', 'Doe', 1990, '123 Main St', 'Software Engineer'));
EmployeeManager.add(new Employee('Zoe', 'jin', 1991, '456 Main St', 'Rot Lezngin'));
EmployeeManager.add(new Employee('Zoe1', 'jin1', 1992, '789 Main St', 'Rot Lezngin1'));
EmployeeManager.add(new Employee('Zoe2', 'jin2', 1993, '890 Main St', 'Rot Lezngin2'));

console.table(EmployeeManager.show());




let employeeToUpdate = EmployeeManager.chiTiet(0);
if (employeeToUpdate) {
    employeeToUpdate.NLV = 'Senior Software Engineer';
    EmployeeManager.upDate(0, employeeToUpdate);
}
console.table(EmployeeManager.show())



EmployeeManager.delete(2);
console.table(EmployeeManager.show());