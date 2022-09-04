// DAY 11 PART 2 

// MAPS

// creating an empty map
const map = new Map();
console.log(map); // Map(0) {}

// Creating a Map
const fruits = new Map([["apples", 500],["bananas", 300],["oranges", 200]]);
console.log(fruits); //Map(3) { 'apples' => 500, 'bananas' => 300, 'oranges' => 200 }

//  Set Map Values
fruits.set("strawberries", 600);
console.log(fruits); // Map(4) {'apples' => 500,'bananas' => 300,'oranges' => 200,'strawberries' => 600}

// Get map values 
console.log(fruits.get("strawberries")); //600

// Delete a element
fruits.delete("apples");
console.log(fruits); // Map(3) { 'bananas' => 300, 'oranges' => 200, 'strawberries' => 600 }

// Enteries method 
console.log(fruits.entries()); // [Map Entries] {[ 'bananas', 300 ],[ 'oranges', 200 ],[ 'strawberries', 600 ]}