// DAY 03 - PART 1

// OPERATORS 
// ARITHMETIC OPERATORS 
let a = 50;
let b = 5;

console.log("Following are arithmetic operators");
console.log("The value of a+b is ", a+b);  //ouput is 55
console.log("The value of a-b is ", a-b);  //ouput is 45
console.log("The value of a/b is ", a/b);  //ouput is 10
console.log("The value of b/a is ", b/a);  //ouput is 0.1
console.log("The value of a*b is ", a*b);  //ouput is 250
console.log("The value of a%b is ", a%b);  //ouput is 0, as remainder will be 0

// Increment and Decrement Operator
console.log("The value of a++ is ", a++);  // a will be printed then 1 will be added, giving output as 50
console.log("The value of a-- is ", a--);  // will take final value of a and print it then 1 will be subtracted, giving ouput as 51 
console.log("The value of --a is ", --a);  // one will be subtracted then printed, giving ouput as 49
console.log("The value of ++a is ", ++a);  //one will be added then printed, giving ouput as 50


// Assignment Operators 
console.log("Following are assignment operators");
console.log("The value of a += b is ", (a+=b));
console.log("The value of a -= b is ", (a-=b));
console.log("The value of a /= b is ", (a/=b));
console.log("The value of a *= b is ", (a*=b));
console.log("The value of a %= b is ", (a%=b));
console.log("The value of a **= b is ", (a**=b));


//Comparison Operators 
console.log("Following are comparison operators");
console.log("The value of a == b is ",  (a==b));
console.log("The value of a != b is ",  (a!=b));
console.log("The value of a === b is ",  (a===b));
console.log("The value of a !== b is ",  (a!==b));
console.log("The value of a > b is ",  (a>b));
console.log("The value of a < b is ", (a<b));
console.log("The value of a <= b is ", (a<=b));
console.log("The value of a >= b is ", (a>=b));


//Logical Operators
console.log("Following are logical operators");
console.log("The value of logical 'and' operator ((a==b) && (a<b)) is ",  ((a==b) && (a<b)));
console.log("The value of logical 'or'operator ((a==b) || (a<b)) is ",  ((a==b) || (a<b)));
console.log("The value of logical 'not' operator (!(a==b)) is ",  (!(a==b)));


// Ternary Operator 
let marks = 56;
let result = (marks >= 40) ? 'pass' : 'fail';
console.log(result);