/*
  References:
  - https://dev.to/lydiahallie/javascript-visualized-scope-chain-13pd
  - https://stackoverflow.com/a/11444416
*/

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
