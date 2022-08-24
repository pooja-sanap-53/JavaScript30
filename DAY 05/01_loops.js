//  DAY 05 - PART 1

// FOR LOOP 
for(let i = 0; i <= 5; i++){
    console.log(i);
  }

// WHILE LOOP 
let j = 10
while (j <= 15) {
  console.log(j);
  j++;
}

// DO WHILE LOOP 
let k = 20;
do {
  console.log(k)
  k++;
} while (k <= 25)

// FOR OF LOOP
const numbers = [1, 2, 3, 4, 5]

for (const num of numbers) {
  console.log(num)
}

// FOR IN LOOP 
let obj = {
  "harry": 90,
  "shubh": 89,
  "karan": 56,
  "shiv": 78
}
for (let ob in obj){
  console.log("Marks of " + ob + " are " + obj[ob]);
}


// Break 
for(let b = 0; b <= 5; b++){
  if(b == 3){
    break;
  }
  console.log(b);
}


// Continue 
for(let a = 0; a <= 5; a++){
  if(a == 3){
    continue;
  }
  console.log(a);
}