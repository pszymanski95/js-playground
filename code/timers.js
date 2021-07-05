/*
  References:
  - https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif
  - https://www.freecodecamp.org/news/javascript-timers-everything-you-need-to-know-5f31eaa37162/
*/

/*
    TIMERS

  Timers are global methods enable to postpone or loop function execution with provided delay.
  Timers are implemented in executing envoirnment, that can be either object window in browser's Web API or global object in Node.

  ❗ Timers don't guarantee the execution time - they rather execute code as soon as the delay time elaps and there are no other code to execute atm ❗
*/

/*
  EVENT LOOP
*/

/*
  Every time Javascript engine, executing script, encounter a function, it pushes it to the CALL STACK. Every function on call stack is executed and then poped out.
  It works very well for all consecutives functions, where one by one, each of them is pushed to the call stack, executed and then poped out from the stack.
  When the setTimeout function is pushed to the call stack, it's callback function with other arguments is passed to the API, responsible for the timers.
  Callback remains there for the determined time and then it's passed to the EVENT QUEUE. In the event queue, callback waits for its turn, to get back to the call stack.
  When there is no other elements in the call stack. Event loop decide to push next elements from the queue to the call stack. From there the callback is executed and poped out.

  Check out the link in references. There is a very explenation with gifs 🚀 
*/

/*
  SET TIMEOUT
*/

/*
  U can use setTimeout() to delay function execution in time.
  It takes the following arguments:
  - callback function to execute
  - delay in ms
  - ...arguments for the callback
*/

setTimeout(() => console.log('Hello from the past 👋'), 2000);

/*
  💡 Fun fact 💡
  Browser's version of setTimeout and setInterval allows to take callback function as a string.
  This kind of callback is then turned into executable code with eval() function.
  Due to security reasons (Content-Security-Policy), it doesn't work with enabled by default 'unsafe-eval'.
*/

// setTimeout('() => console.log("Imma string!")', 2000); // This can work in the browser with disabled 'unsafe-eval'

/*
  You can pass paramenters for the callback as the 3rd (and following) arguments. It may be useful when the value of the parameter cahnges in time.
*/


function callback(name) {
  console.log(name);
}
var asterix = 'Asterix';

setTimeout(() => callback(asterix), 2000);  // Asterix is Obelix now 🤔
setTimeout(callback, 3000, asterix);  // Still Asterix

asterix = 'Obelix';

/*
  In case you pass 0 as the deay value, callback will immediately be pushed to the event queue and will wait, in the event loop for its time to be executed.
  In case delay parameter is ommited, the default 0 value is used.
*/

console.log('first');
setTimeout(() => console.log('second'), 0);
console.log('third');

/*
  As the callback function is executed in other scope (Timeout object), it may be tricky, to use 'this' inside callback (ofc in case you use regular function, not the arrow one).
*/

setTimeout(function() { console.log(this); });  // Shoud log Timeout object

/*
  SET INTERVAL
*/

/*
  With setInterval() you can continuously executes function code with given delay.
  - callback function to execute
  - delay in ms
  - ...arguments for the callback

  ❗ Function code will be executed until the script execution is killed or the timer stopped ❗
*/

// setInterval(() => console.log('Hello, again 👋'), 4000);  // Be careful, it will be executed infinitely

/*
  CLEAR TIMEOUT & INTERVAL
*/

/*
  Both setTimeout and setInterval returns Timeout object with the timer ID. Using clearTimeout() and clearInterval() you can stop executing callback code.
  It's super useful for setInterval() to not stuck in infinite loop.
*/

var timeout = setInterval(() => {});
console.log({ ...timeout });

clearInterval(timeout);
