// DAY 13 - PART 1 

// CONSOLE OBJECT METHODS 
// console.log()
console.log('30 Days of JavaScript'); //30 Days of JavaScript
// adding css
console.log('%c30 Days of JavaScript', 'color:blue'); // '30 Days of JavaScript' in blue color

// console.warn()
console.warn('This is a warning');

// console.error() 
console.error('This is an error message');

//  console.table() 
const countries = [['Finland', 'Helsinki'],['Sweden', 'Stockholm'],['Norway', 'Oslo']];
console.table(countries);

// console.time()
console.time('Regular for loop');

// console.timeEnd()
for (let i = 0; i < countries.length; i++) {
  console.log(countries[i][0], countries[i][1]);
}
console.timeEnd('Regular for loop');

// console.info()
console.info('This is information about JavaScript30.');

// console.assert()
console.assert(9 > 8, '9 is greater than 8'); // no result
console.assert(7 > 8, '7 is not greater than 8'); // Assertion failed: 7 is not greater than 8

// console.group() 
console.group('Countries');
console.log(countries);
console.groupEnd();

// console.count()
const func = () => {
    console.count('Function has been called');
}
func();
func(); //Function has been called: 1  Function has been called: 2

// console.clear()
console.clear();