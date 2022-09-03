// DAY 9 - PART 2 

// OBJECTS 

//An empty object
const person = {};

// Creating an objecting with values
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
console.log(personDetails);

// Getting values from an object
console.log(personDetails.firstName); //Pooja
console.log(personDetails['lastName']); //Sanap

// Creating object methods
const details ={
    firstName: 'Pooja',
    lastName: 'Sanap',
    getFullName: function(){
        return `${this.firstName} ${this.lastName}`
    } 
}
console.log(details.getFullName()); //Pooja Sanap

// Object.keys 
const keys = Object.keys(details);
console.log(keys);
// Object.values 
const values = Object.values(details);
console.log(values);
// Object.entries 
const entries = Object.entries(details); 
console.log(entries);
// hasOwnProperty   
console.log(details.hasOwnProperty('lastName'));