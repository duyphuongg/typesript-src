type StringOrNumber = string | number;
type StudentType = {
  name: string;
  age: number;
  id: StringOrNumber;
  isGood: boolean;
};

const studentDetail = (id: StringOrNumber, studentName: string): void => {
  console.log(`${studentName} has id ${id}`);
}

const greet = (detail: StudentType): void => {
  console.log(`${detail.name} has id ${detail.id}`);
}
