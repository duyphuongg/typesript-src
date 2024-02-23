const add = (a: number, b?: number): number => b ? a + b : a
// console.log(add(2, 3));
// console.log(add(2));

const addNonNull = (a:number, b?: number): number => a + b!
console.log(addNonNull(4, 5));
console.log(addNonNull(5));