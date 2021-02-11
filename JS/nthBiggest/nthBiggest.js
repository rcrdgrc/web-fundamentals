function nthBiggest(arr, nth) {
    let sorted = arr.sort(function (a, b) {
        return a - b
    });

    if (arr.length < nth) {
        return null
    } else {
        return sorted[arr.length - nth]
    }

}

let problem = nthBiggest([460, 432, 420], 3);

console.log(problem)
