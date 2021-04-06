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

var anna = 'Anna';
let bella = 'Bella';
const charlotte = 'Charlotte';

console.log(anna, bella, charlotte);

anna = 'Amelia';
bella = 'Beatrix';
// charlotte = 'Caroline'; // 💣 charlote is a constant, will throw an error - Uncaught TypeError: Assignment to constant variable.

console.log(anna, bella, charlotte);

/*
    HOISTING

  Before the code is executed, JS engine is alocating a memory for data.
  All varialbes are basicly "hoisted" to the top of the file, and more precisely they are stored in global scope.
  Only declarations are "hoisted", no matter if variable is initialized or not.

  _var_s are stored as _undifned_.
  _let_s and _const_s are stored as _unitialized_ - trying to read _unitialized_ value will throw an error.
  functions are stored as reference.
*/

console.log(alexandra);
// console.log(mary); // 💣 mary is unitialized, will throw an error - Uncaught ReferenceError: Cannot access 'mary' before initialization.
// console.log(patricia); // 💣 patricia is unitialized, will throw an error - Uncaught ReferenceError: Cannot access 'patricia' before initialization.
console.log(jennifer()); // 🛸 Will work, because reference to the function has been hoisted!

var alexandra = 'Alexandra';
let mary = 'Mary';
const patricia = 'Patricia';
function jennifer() {
  return 'Jennifer';
}

/*
  It is possible to read value that is not declared, but it won't be hoisted (only declarations are hoisted).
*/

// console.log(linda); // 💣 linda doesn't exist, will throw an error - Uncaught ReferenceError: linda is not defined

linda = 'Linda';

console.log(linda);
