/**GENERICS */

type stringArr = Array<string>;
type numArr = Array<number>;

const last = (arr: Array<number>) => arr[arr.length - 1];

// const last1 = last([1, 3, 4])
// console.log(last1);

// const last2 = last(["a", "b"])

const lastT = <T>(arr: Array<T>) => arr[arr.length - 1];
const l3 = lastT([1, 5, 8]);
// console.log(l3);
const l4 = lastT(["a", ";b", "eq"]);
// console.log(l4);
const l5 = lastT<string>(["da", "eqe", "h"]);

const makeArr = <T>(x: T) => [x];
const m1 = makeArr("a");
const m2 = makeArr(2);

const makeArrXY = <X, Y>(x: X, y: Y) => [x, y];
const m3 = makeArrXY(2, 4);
const m4 = makeArrXY(32, "ada");

const makeTuple = <X, Y>(x: X, y: Y): [X, Y] => [x, y];
const m5 = makeTuple(3, "a");
const m6 = makeTuple<string, number>("ta", 5);
const m7 = makeTuple<string | null, number>(null, 2);

const makeTupleWithDefault = <X, Y = number>(x: X, y: Y): [X, Y] => [x, y];
const m8 = makeTupleWithDefault<string>("ad", 4);

//GENERICS EXTENDS

const makeFullName = (obj: { firstName: string; lastName: string }) => ({
  ...obj,
  fullName: `${obj.firstName} ${obj.lastName}`,
});

const n1 = makeFullName({ firstName: "Duy", lastName: "Phuong" });
// console.log(n1);

const makeFullNameGenerics = <
  T extends { firstName: string; lastName: string }
>(
  obj: T
) => ({
  ...obj,
  fullName: `${obj.firstName} ${obj.lastName}`,
});

const n2 = makeFullNameGenerics({
  firstName: "Test",
  lastName: "New",
  age: 30,
});

const addNewEmployee = (employee: object) => {
  const uid = Math.floor(Math.random() * 100);
  return {
    ...employee,
    uid,
  };
};
const empOne = addNewEmployee({ name: "Phuong", age: 28 });
// console.log(empOne);
// console.log(empOne.name);

const addNewEmployeeT = <T extends object>(employee: T) => {
  const uid = Math.floor(Math.random() * 100);
  return {
    ...employee,
    uid,
  };
}

const empTwo = addNewEmployeeT({ name: "Nam", age: 20 });
// console.log(empTwo);
// console.log(empTwo.name);


const addNewEmployeeTWithConstraint = <T extends {name: string}>(employee: T) => {
  const uid = Math.floor(Math.random() * 100);
  return {
    ...employee,
    uid,
  };
}

const empThree = addNewEmployeeTWithConstraint({ name: "Test", age: 20, gender: "male" });


//GENERICS in INTERFACE
interface Resource<T>{
  uid: number,
  name: string,
  data: T
}

const resourceOne: Resource<string> = {
  uid: 1,
  name: "Test",
  data: "Name"
}

const resourceTwo: Resource<object> = {
  uid: 1,
  name: "Name",
  data: {age: 23}
}

const resourceThree: Resource<string[]> = {
  uid: 1,
  name: "Test",
  data: ["one", "two"]
}

type NumberResource = Resource<number[]>

const resourceNum:NumberResource = {
  uid: 1,
  name: "Name",
  data: [1,2,3]
}
