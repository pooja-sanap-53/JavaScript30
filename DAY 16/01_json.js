// DAY 16 PART 1 

//JSON 
const personDetails = `{
    "users": [
        {
            "name": "Daniel",
            "email": "daniel@alex.com",
            "skills": [
                "HTML",
                "CSS",
                "JavaScript",
                "Python"
            ],
            "age": 20,
            "isLoggedIn": false,
            "points": 40
        },
        {
            "name": "John",
            "email": "john@john.com",
            "skills": [
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Redux",
                "Node.js"
            ],
            "age": 20,
            "isLoggedIn": true,
            "points": 50
        }
    ]
}`

console.log(typeof (personDetails)); //string

// json to object
const user = JSON.parse(personDetails)
console.log(user);
console.log(typeof (user)); //object

// object to json
const txt = JSON.stringify(personDetails, undefined, 4)
console.log(txt);
console.log(typeof (txt)); //string