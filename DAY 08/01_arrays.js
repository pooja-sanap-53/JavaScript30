// DAY 08 - PART 1

// ARRAYS 

// Creating an array 
// 1. Using array constructor 
let arr = new Array();
console.log(arr); //[]

// 2. Using square brackets([])
const arr1 = [];
console.log(arr1); //[]
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']; // array of strings, countries
console.log(countries) // [ 'Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland' ]

// Accessing values in an array
const fruits = ['banana', 'orange', 'mango', 'lemon'];
let firstFruit = fruits[0]; // we are accessing the first item using its index
console.log(firstFruit); // banana

// Modifying elements in an array 
const numbers = [1, 2, 3, 4, 5];
numbers[0] = 10;     // changing 1 at index 0 to 10
numbers[1] = 20;     // changing  2 at index 1 to 20
console.log(numbers); // [10, 20, 3, 4, 5]


// ARRAY METHODS

// 1. Array 
    const array = Array(); 
    console.log(array); // creates an an empty array

// 2. fill 
    const eight0values = Array(8).fill(0);
    console.log(eight0values); // [0, 0, 0, 0, 0, 0, 0, 0]

// 3. concat 
    const firstList = [1, 2, 3];
    const secondList = [4, 5, 6];
    const thirdList = firstList.concat(secondList);
    console.log(thirdList); // [1, 2, 3, 4, 5, 6]

// 4. indexOf 
    const numbers1 = [1, 2, 3, 4, 5];
    console.log(numbers1.indexOf(5)); // -> 4
    console.log(numbers1.indexOf(0)); // -> -1

// 5. lastIndexOf 
    const numbers2 = [1, 2, 3, 4, 5, 3, 1, 2];
    console.log(numbers2.lastIndexOf(2)); // 7
    console.log(numbers2.lastIndexOf(0)); // -1

// 6. includes 
    const numbers3 = [1, 2, 3, 4, 5];
    console.log(numbers3.includes(5)); // true
    console.log(numbers3.includes(0)); // false

// 7. Array.isArray 
    const numbers4 = [1, 2, 3, 4, 5];
    console.log(Array.isArray(numbers4)); // true
    const number = 100;
    console.log(Array.isArray(number)); // false

// 8. toString
    const numbers5 = [1, 2, 3, 4, 5];
    console.log(numbers5.toString()); // 1,2,3,4,5

// 9. join 
    const numbers6 = [1, 2, 3, 4, 5];
    console.log(numbers6.join()); // 1,2,3,4,5
    const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
    console.log(names.join(', ')); //Asabeneh, Mathias, Elias, Brook

// 10. Slice 
    const numbers7 = [1,2,3,4,5];
    console.log(numbers7.slice()); // -> it copies all  item
    console.log(numbers7.slice(0)); // -> it copies all  item
    console.log(numbers7.slice(0, numbers7.length)); // it copies all  item
    console.log(numbers7.slice(1,4)); // -> [2,3,4] // it doesn't include the ending position

// 11. Splice 
    const numbers8 = [1, 2, 3, 4, 5];
    numbers8.splice();
    console.log(numbers8);                // -> remove all items
    const numbers9 = [1, 2, 3, 4, 5];
    numbers9.splice(0,1);
    console.log(numbers9);            // remove the first item

// 12. Push  
    const arrs  = ['item1', 'item2','item3'];
    arrs.push('new item');
    console.log(arrs); // ['item1', 'item2','item3','new item']

// 13. pop 
    const numbers10 = [1, 2, 3, 4, 5];
    numbers10.pop(); // -> remove one item from the end
    console.log(numbers10); // -> [1,2,3,4]

// 14. shift 
    const numbers11 = [1, 2, 3, 4, 5];
    numbers11.shift(); // -> remove one item from the beginning
    console.log(numbers11) // -> [2,3,4,5];

// 15. unshift 
    const numbers12 = [1, 2, 3, 4, 5];
    numbers12.unshift(0); // -> add one item from the beginning
    console.log(numbers12); // -> [0,1,2,3,4,5]

// 16. reverse 
    const numbers13 = [1, 2, 3, 4, 5];
    numbers13.reverse(); // -> reverse array order
    console.log(numbers13); // [5, 4, 3, 2, 1]

// 17. sort 
    const webTechs = ['HTML','CSS','JavaScript','React','Redux','Node','MongoDB'];
    webTechs.sort();
    console.log(webTechs); // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]


// ARRAY OF ARRAYS (MULTIDIMENSIONAL ARRAY)
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node','Express', 'MongoDB'];
const fullStack = [frontEnd, backEnd];
console.log(fullStack);   // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
console.log(fullStack.length);  // 2
console.log(fullStack[0]);  // ["HTML", "CSS", "JS", "React", "Redux"]
console.log(fullStack[1]); // ["Node", "Express", "MongoDB"]
console.log(fullStack[1][0]); // ["Node"]