// Immediately Invoked Function Expressions (IIFE)
//Notice how we have to wrap the function inside a () because the () makes the function into a block and thus makes it possible to directly invoke it.

(function chai() {
    // named IIFE
    console.log(`DB CONNECTED`);
})();

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("harshal");
