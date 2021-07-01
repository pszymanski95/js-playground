/*
  References:
  - https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/
*/

/*
    DESTRUCTURING

  Destructuring assignment allows to asign object properties, array elements and  just right to a variable.
  You don't have to access each of the element separately.
*/

/*
  ARRAYS []
*/

/*
  You can name consecutive elements of the array as variables
*/

var names = ['Paul', 'Stefan', 'Tom', 'Marc'];
var [paul, stefan, tom, marc] = names;

console.log(paul, stefan, tom, marc);

/*
  Using rest operator you can save all of the rest elements in one variable. It remains as an array even ther is only one element.
*/

var [firstName, ...restNames] = names;

console.log(firstName, restNames);

/*
  Some of the elements can be even skipped (but it's confusing af 💩)
*/

var [ , , thirdName] = names;

console.log(thirdName);

/*
  If there are more levels of nesting. You can nest that pattern deeper. 
*/

var names = [[['Adam'], 'Jack'], ['Andrew', 'Michael'], 'Daniel'];

var [[[adam], jack], andrewAndJack, daniel] = names;

console.log(adam, jack, andrewAndJack, daniel);

/*
  If you screw up indexing, it should just assign _undefined_ value
*/

var names = [['Willy', 'Igor'], 'Peter'];

var [[willy, igor, peter]] = names;

console.log(willy, igor, peter);

/*
  But you can assign default value in case it's not defined 
*/

var [max = 'Max'] = [];

console.log(max);

/*
  OBJECTS {}
*/

/*
  You can save any object property as a variable
*/

var names = {
  anna: 'Anna',
  otherNames: {
    camille: 'Camille',
    olivia: 'Olivia',
  },
};

var { anna, otherNames } = names;

console.log(anna, otherNames);

/*
  You can also save nested propeties
*/

var { otherNames: { camille, olivia } } = names;

console.log(camille, olivia);

/*
  If you want to save property with different name, you can use alias
*/

var { anna: annie } = names;

console.log(annie);

/*
  Rest operator also works here
*/

var names = {
  emilie: 'Emilie',
  emma: 'Emma',
  eva: 'Eva',
};

var { eva, ...restNames } = names;

console.log(eva, restNames);

/*
  Using destructuring assignment you can assign default value in case it's not defined (the same way as for arrays)
*/

var { eva, maria, victoria } = names;

console.log(eva, maria, victoria = 'Victoria');

/*
  FUNCTIONS () => {}
*/

/*
  You can also destructure results from function, either it's array or object
*/

var getNames = () => {
  return ['Jake', 'Oliver'];
};

var [jake, oliver] = getNames();

console.log(jake, oliver);

/*
  You can destructure function arguments, right from the function declaration 
*/

var greeting = ({ name }, [greeting]) => {
  return `${greeting} ${name}!`;
};

console.log(greeting({ name: 'Patrick'}, ['Hello']));

/*
  Destructuring doesn't work for structures other than objects, arrays and iterables!
*/

// var { brad } = null; // 💣 This will throw an error - Uncaught TypeError: Cannot destructure property 'brad' of 'null' as it is null.
// var { lucas } = undefined; // 💣 This too - Uncaught TypeError: Cannot destructure property 'lucas' of 'undefined' as it is undefined.
var { claus } = NaN; // This works, beacuse NaN is a valid object!

console.log(claus);