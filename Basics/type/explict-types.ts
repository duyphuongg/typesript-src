/**EXPLICT TYPES */
let myName: string = "name"
let age: number = 12
let isStudent: boolean = true
let students: string[] = ["name", "phong"]

//union
let arrayMixed: (string | number | boolean)[] = ["test", 18, true]
arrayMixed.push(2)

let id: string | number
id = 1
id = "ddsadasdsa"

let type: "as-number" | "as-string"
type = "as-number"

//object
let newPerson: object
newPerson = { name: "Phuong", age: 50 }
newPerson = []

type Student = {
  name: string,
  age: number,
  isStudent: boolean
}

let student: Student = {
  name: "Phuong",
  age: 28,
  isStudent: false
}
