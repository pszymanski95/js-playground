/*
  References:
  - https://dev.to/lydiahallie/javascript-visualized-hoisting-478h
  - https://developer.mozilla.org/en-US/docs/Glossary/Hoisting
  - https://stackoverflow.com/a/11444416
*/

/*
    HOISTING

  Before the code is executed, JS engine is alocating a memory for data.
  All varialbes are basicly "hoisted" to the top of the file, and more precisely they are stored in global scope.
  Only declarations are "hoisted", no matter if variable is initialized or not.
  Expressions (like assignements) are evaluated inline on code execution.

  _var_s are stored as _undefined_.
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
