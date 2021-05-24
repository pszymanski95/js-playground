/*
  References:
  - https://dev.to/lydiahallie/javascript-visualized-hoisting-478h
  - https://dev.to/lydiahallie/javascript-visualized-scope-chain-13pd
  - https://stackoverflow.com/a/11444416
  - https://developer.mozilla.org/en-US/docs/Glossary/Hoisting
*/

/*
    VARIABLES

  _var_ and _let_ behave differently, speaking of hoising and scopeing.
  _const_ behaves the same way as _let_ but it can't be reassigned (It must be initialized on declaration).
*/

var anna = "Anna";
let bella = "Bella";
const charlotte = "Charlotte";

console.log(anna, bella, charlotte);

anna = "Amelia";
bella = "Beatrix";
// charlotte = 'Caroline'; // 💣 charlote is a constant, will throw an error - Uncaught TypeError: Assignment to constant variable.

console.log(anna, bella, charlotte);

/*
  variables declared with _var_ can be redeclared, while with _let_ NOT
*/

var amelia = "Amelia";
var amelia = "Anna";

console.log(amelia);

/*
    HOISTING

  Before the code is executed, JS engine is alocating a memory for data.
  All varialbes are basicly "hoisted" to the top of the file, and more precisely they are stored in global scope.
  Only declarations are "hoisted", no matter if variable is initialized or not.
  Expressions (like assignements) are evaluated inline on code execution.

  _var_s are stored as _undifned_.
  _let_s and _const_s are stored as _unitialized_ - trying to read _unitialized_ value will throw an error.
  functions are stored as reference.
*/

console.log(alexandra); // 🛸 Will display undefined, because it has been hoisted with undefined value
// console.log(mary); // 💣 mary is unitialized, will throw an error - Uncaught ReferenceError: Cannot access 'mary' before initialization.
// console.log(patricia); // 💣 patricia is unitialized, will throw an error - Uncaught ReferenceError: Cannot access 'patricia' before initialization.
console.log(jennifer()); // 🛸 Will work, because reference to the function has been hoisted!
// console.log(sophie()); // 💣 Will not work, because declaration has been hoisted with undefined value, and this expression tries to call undefined 😱

var alexandra = "Alexandra";
let mary = "Mary";
const patricia = "Patricia";
function jennifer() {
  return "Jennifer";
}
var sophie = function () {
  return "Sophie";
};

/*
  It is possible to read value that is not declared, but it won't be hoisted (only declarations are hoisted).
*/

// console.log(linda); // 💣 linda doesn't exist, will throw an error - Uncaught ReferenceError: linda is not defined

linda = "Linda";

console.log(linda);

/*
    SCOPE

  From where variables can be accessible?
  global scope - window (browser) / global (NodeJS) - created on script level
  local scope - created on funcion level (using var)
  block scope - created on block ({}) level (using let and const)

*/

function names() {
  let elizabeth = "Elizabeth";

  {
    var barbara = "Barbara";
    let susan = "Susan";

    console.log(elizabeth);
    console.log(barbara);
    console.log(susan);
  }

  console.log(barbara);
  // console.log(susan); // 💣 c exists only in the block above, it's not accessible outside of it, so this will throw an error - Uncaught ReferenceError: c is not defined
}
names();

/*
    CLOSURE

  Closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
  Closure allow to access variables in outer scope from inner (function) scope.
*/

function barbaraIsTheBest() {
  const barbara = "Barbara";
  function isTheBest() {  // 🚀 This is a closure - console.log from this function has an access to barbara
    console.log(barbara + " is the best!");
  }
  return {
    isTheBest,
  };
}

barbaraIsTheBest().isTheBest();
