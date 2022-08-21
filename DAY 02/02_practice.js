// DAY 02 - PART 2

// PRACTICE QUESTIONS 

// 1. Create a variable of type string and try to add a number to it.
let mystr = "Hello JavaScript!";
let mynum = 78;
console.log(mystr + mynum); //ouput is 'Hello JavaScript!78'


// 2. Use typeof operator to find datatype of answer of first question
ans= mystr + mynum ;
console.log(typeof(ans)); //output will be'string'


// 3. Create a const object in JavaScript. 
const stud = {
    name : "Harish",
    section : "A",
    roll_no : 59
}
console.log(stud);  //output is { name: 'Harish', section: 'A', roll_no: 59 }


// 4. Try to add a new key to the const object created above.
stud['hobby'] = "Reading";
console.log(stud); //output is { name: 'Harish', section: 'A', roll_no: 59, hobby: 'Reading' }


// 5. Write a JS program to create a word meaning dictionary of 5 words 
let mydict = {
    "cat" : "an animal" ,
    "house" : "place where we live in with our family",
    "god" : "creator of universe",
    "cinderella" : "a disney princess",
    "phone" : "a device through which we connect to everyone"
}
console.log(mydict);
console.log(mydict.cat); //this will give the meaning of the word i.e., 'an animal'
