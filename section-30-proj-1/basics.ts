//Primitives: number, string, boolean
//Complex: arrays, objects
//Function types, parameters

//Primitives
//lower case is important
let age: number = 24;
let userName: string = "test";
let isInstructor: boolean = true;

//Complex types

//array of strings
let hobbies: string[];
hobbies = ["test", "test2"];

//object with specific types of variables
let person: {
  name: string;
  age: number;
};

person = {
  name: "Aleks",
  age: 20,
};

//array of objects
let people: {
  name: string;
  age: number;
}[];

//type inference

let course = "React - complete guide";
// couse = 12334;

//Union types

let newCourse: string | number | boolean = "Test";
newCourse = 12345;

//Type allias
type PersonAl = {
  name: string;
  age: number;
};

let newPeople: PersonAl[];

//Functions && types

//optionally specify return value
function add(a: number, b: number): number {
  return a + b;
}

function printLog(value: any) {
  console.log(value);
}

//Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1); //[-1, 1, 2, 3]
