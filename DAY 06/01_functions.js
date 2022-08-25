// DAY 06 - PART 1

// Function
// 1. Function without parameter and return
    function square() {
        let num = 2;
        let sq = num * num;
        console.log(sq);
    }
    square();
  

// 2. Function without parameter and with return
    function square1() {
        let num1 = 3;
        return num1 * num1;
    }
    console.log(square1());
    

// 3. Function with parameter and with return 
    function square2(num2) {
        return num2 * num2;
    }
    console.log(square2(5));
    

// 4. Function with default parameter
    function square3(num3 = 3) {
        return num3 * num3;
    }
    console.log(square3(4)); //this is when we provided an arg
    console.log(square3());  // this is when we don't provide an arg

    
// 5. Anonymous Function
    const sqaure4 = function (num4) {
        return num4 * num4;
    }
console.log(sqaure4(6));


// 6. Arrow Function 
    square5 = (num5) => {
        return num5 * num5;
    }
    console.log(square5(7));