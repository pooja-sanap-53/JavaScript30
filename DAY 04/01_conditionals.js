// DAY 04 - PART 1

// Conditionals

// 1. If statements 
let num = 3;
if (num > 0) {
  console.log(num,"is a positive number" );
}

// 2. If, else statements 
let num1 = -3;
if (num1 > 0) {
  console.log(num1,"is a positive number" );
}
else{
    console.log(num1,"is a negative number" );
}

// 3. If, else if , else statements
let num2 = 0;
if (num2 > 0) {
  console.log(num2,"is a positive number" );
}
else if (num2 == 0){
    console.log(num2, "is zero");
}
else if (num2 < 0){
    console.log(num2,"is a negative number" );
}
else{
    console.log(num2,"is not a number" );
}


// switch case statements 
let weather = "cloudy";
switch (weather) {
  case "rainy":
    console.log("You need a rain coat.");
    break;

  case "cloudy":
    console.log("It might be cold, you need a jacket.");
    break;

  case "sunny":
    console.log("Go out freely.");
    break;

  default:
    console.log(" No need for rain coat.");
}

// ternary operator 
let isRaining = true
isRaining ? console.log("You need a rain coat.") : console.log("No need for a rain coat.");