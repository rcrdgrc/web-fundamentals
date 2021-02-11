// Biggie Size - Given an array, write a function that changes all positive numbers 
//in the array to the string "big".  Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].

function bigSize(arr) {
    const array = [];

    arr.forEach(ele => {
        if (ele >= 0) {
            array.push("big")
        } else {
            array.push(ele)
        }
    });

    return array
}

// Print Low, Return High - Create a function that takes in an array of numbers.  
//The function should print the lowest value in the array, and return the highest value in the array.

function lowHigh(arr) {
    let max = arr[0];
    let min = arr[0];

    arr.forEach(ele => {
        if (ele > max) {
            max = ele
        }
        if (ele < min) {
            min = ele
        }

    });

    console.log(min)
    return max
}

// Print One, Return Another - Build a function that takes in an array of numbers.  
//The function should print the second-to-last value in the array, and return the first odd value in the array.

function oneAndAnother(arr) {
    let second = arr[arr.length - 2];
    let odd;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1 || arr[i] % 2 === 1) {
            odd = arr[i]
            break;
        }

    }

    console.log(second)
    return odd
}

// Double Vision - Given an array (similar to saying 'takes in an array'), create a function t
//hat returns a new array where each value in the original array has been doubled.  
// Calling double([1,2,3]) should return [2,4,6] without changing the original array.

function doubleVision(arr) {
    const array = [];

    arr.forEach(ele => {
        array.push(ele * 2)
    });

    return array
}

// Count Positives - Given an array of numbers, create a function to replace the last value with
// the number of positive values found in the array.  Example, countPositives([-1,1,1,1]) 
//changes the original array to [-1,1,1,3] and returns it.

function countPositives(arr) {
    let count = 0;

    arr.forEach(ele => {
        if (ele >= 0) {
            count++
        }
    });
    arr[arr.length - 1] = count

    return arr
}

// Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, 
// print "That's odd!".  Every time the array has three evens in a row, print "Even more so!".

function evensAndOdds(arr) {
    let odds = 0;
    let evens = 0;

    arr.forEach(ele => {
        if (odds === 3) {
            console.log("That's Odd")
        }
        else if (ele === 1 || ele % 2 === 1) {
            odds++
        } else {
            odds = 0
        }
    });

    arr.forEach(ele => {
        if (evens === 3) {
            console.log("Even more So")
        }
        else if (ele % 2 === 0) {
            evens++
        } else {
            evens = 0
        }
    });
}
// Increment the Seconds - Given an array of numbers arr, add 1 to every other element, specifically those 
//whose index is odd (arr[1], arr[3], arr[5], etc).  Afterward, console.log each array value and return arr.

function incrementSeconds(arr) {
    const array = [];

    for (let i = 0; i < arr.length; i++) {
        const ele = arr[i];

        if (i === 1 || i % 2 === 1) {
            array.push(ele + 1)
        } else {
            array.push(ele)
        }
    }

    array.forEach(ele => {
        console.log(ele)
    });

    return array
}

// Previous Lengths - You are passed an array (similar to saying 'takes in an array' or 'given an array') containing strings.  
//Working within that same array, replace each string with a number - the length of the string at the previous array index - 
//and return the array.  For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4]. 
//Hint: Can for loops only go forward?

function previousLenght(arr) {
    const array = [];

    for (let i = 0; i < arr.length; i++) {
        const ele = arr[i];
        const lastEle = arr[i - 1]
        if (i === 0) {
            array.push(ele)
        } else {
            array.push(lastEle.length)
        }
    }

    return array
}

// Add Seven - Build a function that accepts an array. Return a new array with all the values of the original,
// but add 7 to each. Do not alter the original array.  Example, addSeven([1,2,3]) should return [8,9,10] in a new array.

function addEvens(arr) {
    const array = [];

    arr.forEach(ele => {
        array.push(ele + 7)
    });

    return array
}

// Reverse Array - Given an array, write a function that reverses its values, in-place.  Example: reverse([3,1,6,4,2]) 
//returns the same array, but now contains values reversed like so... [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).

//note: youre switching in pairs thats why the length of the loop is cut in half 
function reverseArr(arr) {
    // console.log(arr.length)
    for (let i = 0; i < Math.trunc(arr.length / 2); i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i]
        arr[arr.length - 1 - i] = temp
    }

    return arr
}


// Outlook: Negative - Given an array, create and return a new one containing all the values of the original array, but make them 
//all negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].

function outlook(arr) {
    const array = [];

    arr.forEach(ele => {
        if (ele < 0) {
            array.push(ele)
        } else {
            array.push(ele * -1)
        }
    });

    return array
}

// Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  
//If no array values are "food", then print "I'm hungry" once.

function alwaysHungry(arr) {
    let hungry = true;

    arr.forEach(ele => {
        if (ele === "food") {
            console.log("yummy")
            hungry = false
        }
    });

    if (hungry) {
        console.log("I'm hungry")
    }
}

// Swap Toward the Center - Given an array, swap the first and last values, third and third-to-last values, etc.  
//Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into ["pizza", 42, "Ada", 2, true].  
//swapTowardCenter([1,2,3,4,5,6]) turns the array into [6,2,4,3,5,1].  No need to return the array this time.

function swapTowardCenter(arr) {
    for (let i = 0; i < Math.trunc(arr.length / 2); i++) {
        if (arr.length > 1 && i === 0) {
            const temp = arr[i];
            arr[i] = arr[arr.length - 1 - i]
            arr[arr.length - 1 - i] = temp
        }
        else if (arr.length >= 6 && i === 2) {
            const temp = arr[i];
            arr[i] = arr[arr.length - 1 - i]
            arr[arr.length - 1 - i] = temp
        }
    }
    // console.log(arr)
}

swapTowardCenter([true, 42, "ada", 2, "pizza"])
swapTowardCenter([1, 2, 3, 4, 5, 6])
// Scale the Array - Given an array arr and a number num, multiply all values in the array arr by the number num, and return the 
//changed array arr.  For example, scaleArray([1,2,3], 3) should return [3,6,9].

function scale(arr, num) {
    const map = arr.map(ele => ele * num);

    return map
}

console.log(scale([1, 2, 3], 3))