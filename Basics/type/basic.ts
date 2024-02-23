function sum(n1: number, n2: number, isShowText: boolean, text: string) {
  if (isShowText) {
    console.log(`${text} : ${a}, ${b}`);
  } else {
    return n1 + n2;
  }
}

const a = 1;
const b = 2;
const isShowText = true;
const text = "Result is : ";

console.log(sum(a, b, isShowText, text));
