// DAY 15 - PART 1

// CLASS

class Person {
    constructor(firstName, lastName) {
        console.log(this) // Person {}
        this.firstName = firstName;
        this.lastName = lastName;
    }

    //class methods 
    getFullName() {
        const fullName = this.firstName + ' ' + this.lastName
        return fullName
      }

    //getter
    get firstname(){
        return this.firstName;
    }

    // setter
    set lastname(pronoun){
        return this.lastName += pronoun;
    }

    // static 
    static hello (){
        return 'Hello!';
    }

}
const person = new Person();
console.log(person); //Person { firstName: undefined, lastName: undefined }

// pass the value of the properties
const person1 = new Person('Pooja', 'Sanap');
console.log(person1); //Person { firstName: 'Pooja', lastName: 'Sanap' }

// calling class methods 
console.log(person1.getFullName()); //Pooja Sanap

// calling get method
console.log(person1.firstname); //Pooja

// calling get method 
person1.lastname = ' (She/Her)';
console.log(person1.lastName); //Sanap (She/Her)

// static method 
console.log(Person.hello()); //Hello!
console.log(person.hello()); //this will give an error, as it is and class object and not the object class

