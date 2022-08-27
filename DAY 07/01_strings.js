// DAY 07 - PART 1

// Strings 
let firstName = 'Pooja';
let lastName = "Sanap";
let country = `INDIA`;

// Template Literal - cna be used for string concatenation
let myVar = `I believe in the quote, 'Consistency is the key'. `;
console.log(myVar);

// String Interpolation 
let name ='POOJA';
let intro = `My name is ${name}. `;
console.log(intro);

// String Concatenation
//using addition operator 
let fullName = firstName + " " + lastName; 
console.log(fullName);

// Accessing characters in a string
let string = 'JavaScript'
let firstLetter = string[0];

// Esape Sequence Character 
// new line(\n)
console.log("We are learning JavaScript.\nWe are contributing to #JavaScript30.")
// tab(\t)
console.log('Day 7\tPart - 1')
// Backslash(\\)
console.log('This is a backslash  symbol (\\)');
// Single quote (\')
console.log("I believe in the quote, \'Consistency is the key\'.");
// Double quote (\")
console.log('In every programming language it starts with \"Hello, World!\"');
// Carriage return (\r) 
console.log("This\ris me."); //this will only print "is me.", as \r shifts the cursoe to the start of the line and overwrites the text before

