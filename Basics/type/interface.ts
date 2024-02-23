interface Person {
  name: string;
  age: number;
  speak(lang: string): void;
  spend(amount: number): number;
}

const Nam: Person = {
  name: "Nam",
  age: 20,
  speak(text: string): void {
    console.log(`text: ${text}`);
  },
  spend(amt: number): number{
    return amt
  }
}
