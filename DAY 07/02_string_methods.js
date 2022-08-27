// DAY 07 - PART 2

//STRING METHODS 

// length
let js = ' JavaScript   ';
console.log(js.length);

// toUpperCase()
console.log(js.toUpperCase());

// toLowerCase()
console.log(js.toLowerCase());

// substr()
console.log(js.substr(2, 4));

// substring()
console.log(js.substring(2, 4));

// split()
console.log(js.split(" "));

// trim()
console.log(js.trim());

// includes()
console.log(js.includes('ri'));
console.log(js.includes('re'));

// replace()
let country = 'Finland';
console.log(country.replace('Fin', 'Noman'));

//charAt()
console.log(js.charAt(1));

// charCodeAt()
// console.log(js.charCodeAt(3));

// indexOf()
console.log(js.indexOf('Script'));

// lastIndexOf()
console.log(js.lastIndexOf('a'));

// concat()
let string = '30';
console.log(string.concat("Days", "Of", "JavaScript"));

// startsWith()
console.log(js.startsWith('J'));
console.log(js.startsWith('A'));

// endsWith()
console.log(js.startsWith('t'));
console.log(js.startsWith('a'));

// search()
console.log(js.search('a'));

// match()
console.log(js.match('a'));

// repeat()
console.log(js.repeat(3));


// TYPECASTING

// String to Int 
let num = '10';
//parseInt()
let numInt = parseInt(num);
console.log(numInt); // 10
// Number()
let numInt1 = Number(num);
console.log(numInt1); // 10
//Plus sign (+)
let numInt2 = +num;
console.log(numInt2); //10


//  String to Float 
let nums = '9.81';
// parseFloat()
let numFloat = parseFloat(nums);
console.log(numFloat); // 9.81
// Number()
let numFloat1 = Number(nums);
console.log(numFloat1); // 9.81
// Plus sign(+)
let numFloat2 = +nums;
console.log(numFloat2); //9.81


// Float to Int
let number = 9.81;
// parseInt()
let numberInt = parseInt(number);
console.log(numberInt); // 9