// DAY 14 PART 1

// ERROR HANDLING 

try {
    let lastName = 'Sanap';
    let fullName = firstName + ' ' + lastName;
    console.log(fullName);
  } 
catch (err) {
    console.error(err); 
  } 
finally {
    console.log('In any case this part will be executed');
  }


//   ERROR TYPES  
// 1. Reference Error
let firstName = 'Pooja';
let fullName = firstName + ' ' + lastName1;
console.log(fullName); //ReferenceError: lastName1 is not defined

// Syntax Error
let square = 2 x 2;
console.log(square);
console.log('Hello, world');  //SyntaxError: Unexpected identifier

// TypeError
let num = 10;
console.log(num.toLowerCase()); //Uncaught TypeError


