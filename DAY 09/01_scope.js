// DAY 09 PART 1 

// SCOPE 
// GLOBAL SCOPE 
let a = 'JavaScript' // is a global scope it will be found anywhere in this file
function Scope() {
  console.log(a); // JavaScript 10 
  // accessible in the function also
}
Scope();
console.log(a); // JavaScript 10
//accessible outside the function too


// LOCAL SCOPE 
let greetings = "hello";
function greet() {
    let msg = "World";
    console.log(greetings + msg);
}
greet();
// console.log(greetings + b); // error

// program showing block-scoped concept
function greeting() {

    // local variable
    let b = 'World';
    console.log(b);
    if (b == 'World') {
        // block-scoped variable
        let c = 'hello';
        console.log(b + ' ' + c);
    }
    // variable c cannot be accessed here
    // console.log( b + ' ' + c);
}
greeting();