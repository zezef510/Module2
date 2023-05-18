var SV = /** @class */ (function () {
    function SV(name, old, point) {
        this.old = old;
        this.name = name;
        this.point = point;
    }
    return SV;
}());
var arr = [
    new SV('a', 18, 9),
    new SV('b', 18, 7),
    new SV('c', 18, 10)
];
console.table(arr);
function addSV(x) {
    arr.push(x);
}
addSV(new SV("d", 18, 7));
function deleteSV(ind) {
    arr.splice(ind, 1);
}
deleteSV(1);
function timSV() {
    console.log("Students with name containing 'a':");
    for (var i = 0; i < arr.length; i++) {
        // @ts-ignore
        if (arr[i].name.includes("a")) {
            console.log("- ".concat(arr[i].name, ", age ").concat(arr[i].old, ", point ").concat(arr[i].point));
        }
    }
}
timSV();
