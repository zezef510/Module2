class SV {
    name : string;
    old : number;
    point :number
    constructor(name : string,old : number , point : number) {
        this.old = old
        this.name = name
        this.point = point
    }
}
let arr: SV[] = [
 new SV('a',18,9),
 new SV('b',18,7),
 new SV('c',18,10)]
console.table(arr)
function  addSV(x:SV){
    arr.push(x)
}
addSV(new SV("d",18,7))
function deleteSV(ind: number) {
    arr.splice(ind, 1);
}
deleteSV(1);

function timSV() {
    console.log("Students with name containing 'a':");
    for (let i = 0; i < arr.length; i++) {
        // @ts-ignore
        if (arr[i].name.includes("a")) {
            console.log(`- ${arr[i].name}, age ${arr[i].old}, point ${arr[i].point}`);
        }
    }
}
timSV()

