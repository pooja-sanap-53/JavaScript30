// DAY 11 PART 1

// SETS 

// creating a empty set 
const empSet = new Set();
console.log(empSet); //Set(0) {}

// creating a set 
const letters = new Set(["a","b","c"]);
console.log(letters); //Set(3) { 'a', 'b', 'c' }

// Adding elements to the set
letters.add('d');
console.log(letters); //Set(4) { 'a', 'b', 'c', 'd' }

// Deleting elements from a set
letters.delete('a');
console.log(letters); //Set(3) { 'b', 'c', 'd' }

//  forEach() method
let text = "";
letters.forEach (function(value) {
  text += value;
})
console.log(text); //bcd

// values() method 
console.log(letters.values()); //[Set Iterator] { 'b', 'c', 'd' }

// Union of Sets
let a = [1, 2, 3, 4, 5];
let b = [3, 4, 5, 6];
let c = [...a, ...b];
let A = new Set(a);
let B = new Set(b);
let C = new Set(c);
console.log(A); // Set(5) { 1, 2, 3, 4, 5 }
console.log(B); // Set(4) { 3, 4, 5, 6 }
console.log(C); // Set(6) { 1, 2, 3, 4, 5, 6 }

// Intersection of Sets
let d = a.filter((num) => B.has(num));
let D = new Set(d);
console.log(D); // Set(3) { 3, 4, 5 }

// Difference of Sets 
let e = a.filter((num) => !B.has(num));
let E = new Set(e);
console.log(E); // Set(2) { 1, 2 }
