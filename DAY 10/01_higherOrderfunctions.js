// DAY 10 PART 1

// Higher Order Function

// Callback Function
const callback = (n) => {
    return n ** 2
}
// function that takes other function as a callback
function cube(callback, n) {
return callback(n) * n
}
console.log(cube(callback,5)); //125

// returning function as a value 
// Higher order function returning an other function
const higherOrder = n => {
    const doSomething = m => {
        return 2 * n + 3 * m;
    }
    return doSomething;
}
console.log(higherOrder(2)(3)); //13


// Setting Time
// 1. Setting Interval using a setInterval function
function sayHello() {
    console.log('Hello World!');
}
setInterval(sayHello, 1000) // it prints hello in every second, 1000ms is 1s until terminated.

// 2. Setting a time using a setTimeout
function sayHi() {
    console.log('Hii World!'); 
}
setTimeout(sayHi, 5000); // it prints hello after it waits for 5 seconds.


// Functional Programming

// 1. forEach 
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num)); 

// 2. map
const numbersSquare = numbers.map((num) => num * num);
console.log(numbersSquare); //[1, 4, 9, 16, 25]

// 3. filter 
const countries = ['Albania','Germany','Denmark','Hungary','Ethiopia','Canada','Japan','Finland','Ireland','Kenya','Bolivia'];
const countriesContainingLand = countries.filter((country) => country.includes('land'))
console.log(countriesContainingLand); //[ 'Finland', 'Ireland' ]

// 4. reduce
const sum = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sum); //15

// 5. every 
const areAllStr = countries.every((country) => typeof country === 'string');
console.log(areAllStr); //true

// 6. find
const small= countries.find((country) => country.length < 7);
console.log(small); // Canada

// 7. findIndex
const smallIndex= countries.findIndex((country) => country.length < 7);
console.log(smallIndex); // 5

// 8. some
const smallNum = numbers.some((num) => num < 3);
console.log(smallNum); //true

// 9. sort
console.log(countries.sort()); //['Albania','Bolivia','Canada', 'Denmark','Ethiopia''Finland','Germany','Hungary','Ireland','Japan','Kenya']