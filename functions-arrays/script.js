// function declaration
function greetDalina() {
  console.log("Hello Dalina!");
}

greetDalina();
greetDalina();

function greetAlf() {
  console.log("Hello Alf!");
}

greetAlf();

function greet(personName) {
  return "Hello " + personName + "!";
  console.log("the greet function is called");
}

greet("Dalina");
greet("Andre");

const greeting = greet("Alex");
console.log("greeting:", greeting);

// Create a function that, depending on if the `studentName` has an odd or even number of characters would return `<studentName> has an <odd/even> number of characters`;

function oddOrEven(studentName) {
  if (studentName.length % 2 > 0) {
    return (
      studentName +
      " has an odd number of characters (" +
      studentName.length +
      ")."
    );
  }

  return (
    studentName +
    " has an even number of characters (" +
    studentName.length +
    ")."
  );
}

console.log(sum(6, 7));

// function declaration
function sum(a, b) {
  return a + b;
}

// function expression
const multiply = function(a, b) {
  return a * b;
};

const product = multiply(6, 7);

// arrow function
const divide = (a, b) => {
  return a / b;
};

divide(4, 2);

const bootcamps = ["WebDev", "UX/UI", "Data"];

const cities = ["Berlin", "Madrid", "Barcelona", "Amsterdam"];

let studentsCountries = [];
studentsCountries = ["Greece", "Ghana", "Japan", "Finland"];

console.log(studentsCountries[0]);
console.log(studentsCountries[2]);
console.log(studentsCountries[studentsCountries.length - 1]);

// strings are immutable
let city = "berlin";
city[0] = "B";
// console.log(city); // "berlin"

// arrays are mutable
studentsCountries[0] = "Germany";
studentsCountries[1] = "Syria";

// All the following methods mutate the array in place

// mutate the array by appending elements to it
studentsCountries.push("Ghana");

// mutate the array by prepending elements
studentsCountries.unshift("Greece");

// mutate the array by inserting elements at a specific position
studentsCountries.splice(2, 0, "USA");
// and potentially removes elements
studentsCountries.splice(4, 1, "Turkey");

// mutate the array by removing elements starting from a given position
studentsCountries.splice(5, 2);

// mutate the array by removing the first element
studentsCountries.shift();

// mutate the array by removing the last element
studentsCountries.pop();

studentsCountries.push("Turkey", "Japan", "Ghana", "Finland");

console.log(studentsCountries);

for (let i = 0; i < studentsCountries.length; i += 1) {
  //   console.log(i);
  console.log(studentsCountries[i].toUpperCase());
}

studentsCountries.forEach(function(country, index) {
  // body of the function
  console.log(country, index);
});

// function callback(a, b) {
//   console.log(a, b);
// }
// studentsCountries.forEach(callback);

console.clear();

for (country of studentsCountries) {
  console.log(country);
}

// Transform a string into an array
Array.from("Hello World!");
"Hello World!".split("");
// ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d", "!"]

// Join an array into a string
["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d", "!"].join("");
// "Hello World!"

"Hello World!"
  .split("")
  .reverse()
  .join("");
// "!dlroW olleH"
