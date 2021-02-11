var testArr = [6, 3, 5, 1, 2, 4]

function sumValues(params) {
    let sum = 0;

    for (let i = 0; i < params.length; i++) {
        const ele = params[i];
        sum += ele

        console.log(`Num ${ele}, Sum ${sum}`)
    }
}

sumValues(testArr);


function multiplyPosition(params) {
    let multiplied = [];

    for (let i = 0; i < params.length; i++) {
        let ele = params[i];
        
        multiplied.push(ele * i);
    }

    return multiplied
}

console.log(multiplyPosition(testArr));