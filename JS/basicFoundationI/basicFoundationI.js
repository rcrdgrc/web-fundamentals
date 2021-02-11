// Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.

function getUpTo255() {
    const array = [];
    for (let i = 0; i <= 255; i++) {
        array.push(i)
    }
    return array
}

// Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000. 
// You may use a modulus operator for this exercise.

function getEvenSum() {
    let sum = 0;
    for (let i = 1; i <= 1000; i++) {
        if (i % 2 === 0) {
            sum += i
        }
    }
    return sum
}

// Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).

function getOddSum() {
    let sum = 0;
    for (let i = 1; i <= 5000; i++) {
        if (i % 2 === 1) {
            sum += i
        }
    }
    return sum
}

// Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).

function sumArray(arr) {
    let sum = 0;
    arr.forEach(ele => {
        sum += ele;
    });
    return sum
}

// Find max - Given an array with multiple values, write a function that returns 
//the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)

function findMax(arr) {
    let max = arr[0];
    arr.forEach(ele => {
        if (ele > max) {
            max = ele
        }
    });
    return max
}

// Find average - Given an array with multiple values, write a function that returns 
//the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)

function findAverage(arr) {
    let sum = 0;
    arr.forEach(ele => {
        sum += ele;
    });
    return sum / arr.length
}


// Array odd - Write a function that would return an array of all the odd 
//numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.

function push50Odds() {
    const array = [];
    for (let i = 0; i <= 50; i++) {
        if (i % 2 === 1) {
            array.push(i)
        }
    }
    return array
}

// Greater than Y - Given value of Y, write a function that takes an array and returns 
//the number of values that are greater than Y. 
//For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. 
//(There are two values in the array greater than 3, which are 5, 7).

function greaterThanY(y, arr) {
    let array = [];
    arr.forEach(ele => {
        if (ele > y) {
            array.push(ele);
        }
    });
    return array.length
}

// Squares - Given an array with multiple values, write a function that replaces each 
//value in the array with the value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])

function squares(arr) {
    let array = [];
    arr.forEach(ele => {
        array.push(ele ** 2)
    });
    return array
}

// Negatives - Given an array with mutiple values, write a function that replaces any negative numbers 
//within the array with the value of 0. When the program is done the array 
//should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])

function negatives(arr) {
    let array = [];
    arr.forEach(ele => {
        if (ele < 0) {
            array.push(0)
        } else {
            array.push(ele)
        }
    });
    return array
}

// Max/Min/Avg - Given an array with multiple values, write a function that 
//returns a new array that only contains the maximum, minimum, and average 
//values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])

function minMaxAvg(arr) {
    let min = arr[0];
    let max = findMax(arr);
    let sum = 0;
    let avg;

    arr.forEach(ele => {
        sum += ele;

        if (ele < min) {
            min = ele;
        }
    });

    avg = sum / arr.length
    let all = [max, min, avg];

    return all;
}

// Swap Values - Write a function that will swap the first and last values of any given array. 
//The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).

function swap(arr) {
    let first = arr[0];
    let last = arr[arr.length - 1]
    const array = [];

    for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
            array.push(last)
        }
        else if (i === arr.length - 1) {
            array.push(first)
        } else {
            array.push(arr[i])
        }
    }

    return array
}

// Number to String - Write a function that takes an array of numbers and 
//replaces any negative values within the array with the string 'Dojo'. 
//For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].

function numToStr(arr) {
    const array = [];

    arr.forEach(ele => {
        if (ele < 0) {
            array.push("Dojo")
        } else {
            array.push(ele)
        }
    });

    return array
}
