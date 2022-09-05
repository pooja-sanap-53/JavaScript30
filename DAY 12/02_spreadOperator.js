// DAY 12 - PART 2

// Spread or Rest Operator
// When we destructure an array we use the spread operator(...) to get the rest elements as array
//  In addition to that we use spread operator to spread array elements to another array.

// Spread operator to get the rest of array elements
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = nums;
console.log(num1, num2, num3); // 1 2 3 
console.log(rest); // [ 4, 5, 6, 7, 8, 9, 10]

// Spread operator to copy array
const naturalNum = [...nums];
console.log(naturalNum); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Spread operator to copy object
const user = {
    name:'Pooja',
    title:'Programmer',
    country:'India',
}
const copiedUser = {...user};
console.log(copiedUser); //{ name: 'Pooja', title: 'Programmer', country: 'India' }

