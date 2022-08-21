// Day 01 - Part 2

// Difference between var, let and const in JavaScript 

// var is globally scoped while let and const are block scoped
var a = 20;
{
    var a = 30;
    console.log(a); //output will be 30
}
console.log(a); //this will give output 30, as scope of var is global and its value is altered.

let b = 30;
{
    let b = 40;
    console.log(b); //ouput will be 40
}
console.log(b); //this will give output 30, as let is block scoped, and the altered value remains upto that block only.

const d = 50;
{
    const d = 70;
    console.log(d); //output will be 70
}
console.log(d);//this will give output 50, as const is block scoped, and the altered value remains upto that block only.

// Var can be updated and redeclared within its scope
var e = 56;
console.log(e);
var e = 89;
console.log(e);

//let can be updated but not redeclared
let g = "Javascript";
// let g = 56;  this will give an error as it was being redeclared
g = 67;
console.log(g); //output will be 67, as it is updated

// const can neither be updated nor be redeclared
const h = "Constant cannot be changed";
// const h = 67;  this will give error as it was being redeclared
// h = 45; this will also give an error, as it was being updated
console.log(h);


// var and let variables can be initialized with undefined whereas const cannot be initialized with undefined

var hut ;
console.log(hut); //output will be undefined
let s;
console.log(s); //output will be undefined
// const c ; this will give an error as const must be initialized during declaration unlike let and var 