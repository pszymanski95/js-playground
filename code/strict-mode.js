/*
  References:
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
*/

/*
    STRICT MODE

  JavaScrit allows programmers to do ugly things with code, that actually may work, but also may make confusion or even hidden bugs.
  Strict mode (as the name says) enables restrictive mode, which causes to throw errors for any silent errors (in not strict mode).

  Strict mode can be enabled by simple 'use strict' string. Older browsers, which not support strict mode will ignore that string.
*/

/*
  Strict mode can be enabled for the entire script by placing it on top of the file (or just before first statement).
  Once enabled strict mode can't be disabled.
*/

'use strict' // This enables strict mode for the folow-up code

/*
  Strict mode can be also enabled for selected function. It can't be enabled for the single block {}
*/

function withStrict() {
  'use strict';
  console.log('Hello from the strict mode 👋');
}
  
/*
  ❗ For modules and classes, strict mode is enabled by default ❗
*/

/*
  CHANGES IN STRICT MODE
*/

/*
  It's not possible to assign value to a global non-existent variable, for example: when forget var satement
*/

// mort = 'Mort' // 💣 This will throw an error - Uncaught ReferenceError: mort is not defined

function morty() {
  morty = 'Morty';  // This also creates variable in the global object!
}

/*
  It's not possible to override non-writable object properties (this also applies to global object)
*/

// global.undefined = 'Anne Defined'; // 💣 This will throw an error - Uncaught TypeError: Cannot assign to read only property 'undefined' of object '#<Object>'

/*
  It's not possible to delete undeletable object properties
*/

// delete Object.prototype // 💣 This will throw an error - Uncaught TypeError: Cannot delete property 'prototype' of function Object() { [native code] }

/*
  Function argument names must be unique
*/

// function sum(a, a, c) { // 💣 Syntax error
//   console.log(arguments[0, 1, 2]);
//   return a + a + c;
// }

var names = { anne: 'Anne', anne: 'Anna', anne: '🤷' }; // object properties names must be unique in strict mode, but only in ES6 ❗

/*
  Numbers can't start with 0 (in non-strict mode it's handled as octal number). In ES6 octal numbers must be prefixed with 0o.
*/

// var badOctal = 045; // 💣 Syntax error
var goodOctal = 0o45; // This works

/*
  Setting properties on primitives is forbidden (in non-strict mode it's just ignored)
*/

// false.true = null;  // 💣 This will throw an error - Uncaught TypeError: Cannot create property 'true' on boolean 'false'

/*
  with() statement is forbidden. with() allows to omit the object name while using its properties in the with() block.
*/

// with(Math) { // 💣 Syntax error
//   var four = pow(2, 2);
// }

/*
  eval() statement in strict mode creates its own scope for all the variables passed to the function.
  In non-strict mode eval(string) converts passed string into code and introduce new variables into surrounding scope.
*/

var two = eval('var two = 2; two'); // In strict mode this creates its own scope for 'two' variable
var three = eval('"use strict"; var three = 3; two'); // Strict mode can be also enabled for the eval() inside it

