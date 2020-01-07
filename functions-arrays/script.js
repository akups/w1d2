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

console.clear();

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
