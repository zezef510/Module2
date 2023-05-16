let numbers: number[] = [0, 2, 3, 5, 7, 8, 9, 10]
let numberCheck : number[] = []
let i :number = 0
while (i <= 10){
  // @ts-ignore
  if (!numbers.includes(i)) {
    numberCheck.push(i);
  }
  i++;
}


