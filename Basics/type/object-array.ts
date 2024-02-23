let mixed = [1, 2, 3, "phuong", true];
mixed.push(2)
mixed[3] = "das"

type Persons = {
  name: string;
  age: number;
  favorite: string[];
  role?: [number, string];
};

const person: Persons = {
  name: "Phuong",
  age: 20,
  favorite: ["football", "game"],
  role: [1, "admin"],
};

person.age = 3

console.log(person.favorite);
