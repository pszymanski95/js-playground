/*
    CLOSURE

  Closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
  Closure allow to access variables in outer scope from inner (function) scope.
*/

function barbaraFun() {
  const barbara = "Barbara";
  function isTheBest() {  // 🚀 This is a closure - console.log from this function has an access to barbara variable
    console.log(barbara + " is the best!");
  }
  return {
    isTheBest,
  };
}

barbaraFun().isTheBest();
