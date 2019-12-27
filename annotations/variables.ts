let apple: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// Built in objects
let now: Date = new Date();

// Array
let color: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, false, true];

// Classes
class Car {}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to annotations
// 1. Function that return 'any' type
const json = '{"x":10,"y":20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// 2. When we declare a varaible and initialize on different line
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
    console.log(words[i]);
  }
}

// 3. Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];

let numberAboveZero: boolean | number = false;

for (let i = 0; i < myNumbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
