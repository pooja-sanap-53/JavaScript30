// DAY 12 - PART 1 

//   DESTRUCTURING 
//   Destructuring is a way to unpack arrays, and objects and assigning to a distinct variable

// Destructing Arrays
const numbers = [1, 2, 3, 4, 5, 6, 7,  8, 9, 10];
let [numOne, numTwo, numThree] = numbers;
console.log(numOne, numTwo, numThree);  // 1 2 3 

// Skipping Items in an Array
//  The comma separator is used to skip values in an array.
let [numsOne, , numsThree] = numbers; //2 is omitted
console.log(numsOne, numsThree); // 1 3 

// Assigning the rest of an array
// We can not assign variable to all the elements in the array. We can destructure few of the first and we can get the remaining as array using spread operator(...)
let [num1, num2, num3, ...rest] = numbers;
console.log(num1, num2, num3); // 1 2 3 
console.log(rest); // [ 4, 5, 6, 7, 8, 9, 10]

// Destructuring Assignment with Functions
// We can also extract data from an array returned from a function
function getArray() {
    return ["Hello", "this" , "is", "an", "array"];
} 
let [greeting,pronoun] = getArray();
console.log(greeting);//"Hello"
console.log(pronoun);//"this"

// Swapping Values using the Destructuring Assignment
[num1, num2] = [num2, num1];
console.log(num1); //2
console.log(num2); //1

// Destructuring during iteration
const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']];
for (const [country, city] of countries) {
    console.log(country, city); 
}


// Destructuring Object 
// When we destructure the name of the variable we use to destructure should be exactly the same as the key or property of the object

const personDetails = {
    firstName: 'Pooja',
    lastName: 'Sanap',
    country: 'India',
    skills: [
      'HTML',
      'CSS',
      'JavaScript'
    ]
}
// If the key is not found in the object the variable will be assigned to undefined
let {firstName, lastName, country, dob } = personDetails;
console.log(firstName, lastName, country, dob); //Pooja Sanap India undefined

// Sometimes the key might not be in the object, in that case we can give a default value during declaration
let{dateOfBirth= '02/03/1882'} = personDetails;
console.log(dateOfBirth); //02/03/1882

// Renaming during structuring
let {firstName: fN, lastName:lN} = personDetails;
console.log(fN, lN); //Pooja Sanap

