type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function combine(
  n1: Combinable,
  n2: Combinable,
  resultConversiton: ConversionDescriptor
) {
  let result;
  if (typeof n1 === "number" && typeof n2 === "number" || resultConversiton === 'as-number') {
    result = +n1 + +n2;
  } else {
    result = n1.toString() + n2.toString();
  }
  return result;
}

type User = {
  name: string,
  age: number
}

const customer: User = {
  name: "Phuong",
  age: 2
}

console.log(combine(1, 3, 'as-number'));
console.log(combine('1', '3', 'as-number'));
console.log(combine("Phuong", "test", 'as-text'));
