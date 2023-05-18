class QuadraticEquation {
     a: number;
     b: number;
     c: number;

    constructor(a: number, b: number, c: number) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    getAa(): number {
        return this.a;
    }

    getB(): number {
        return this.b;
    }

    getC(): number {
        return this.c;
    }
    getDiscriminant(): number {
        return this.b ** 2 - 4 * this.a * this.c;
    }
}
// @ts-ignore
const readline = require('readline-sync');

const a = parseFloat(readline.question("Enter a: "));
const b = parseFloat(readline.question("Enter b: "));
const c = parseFloat(readline.question("Enter c: "));

const equation = new QuadraticEquation(a, b, c);
const delta = equation.getDiscriminant();

if (delta > 0) {
    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log("The equation has two roots: ", x1, " and ", x2);
} else if (delta === 0) {
    const x = -b / (2 * a);
    console.log("The equation has one root: ", x);
} else {
    console.log("The equation has no roots.")
}
