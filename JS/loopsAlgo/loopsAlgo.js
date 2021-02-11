function printOdds() {
    let i = 1;
    while (i <= 20) {
        if (i % 2 === 1) {
            console.log(i);
        }
        i++
    }
}

printOdds();

function sumNums() {
    let i = 1;
    let sum = 1;

    while (i <= 5) {
        console.log(`Num: ${i}, Sum: ${sum}`)
        i++
        sum += i
    }
}

sumNums();