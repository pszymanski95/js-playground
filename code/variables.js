/*
  References:
  - https://stackoverflow.com/a/11444416
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
// charlotte = 'Caroline'; // 💣 charlotte is a constant, will throw an error - Uncaught TypeError: Assignment to constant variable.

console.log(anna, bella, charlotte);

/*
  variables declared with _var_ can be redeclared, while with _let_ NOT
*/

var amelia = "Amelia";
var amelia = "Anna";

console.log(amelia);
