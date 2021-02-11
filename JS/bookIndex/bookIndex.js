function bookIndex(arr) {
    let ranges = ""
    let range = [];

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        const numPlus = arr[i + 1];

        if (num + 1 === numPlus) {
            range.push(num)
        }
        else if (num + 1 !== numPlus && range.length >= 2) {
            ranges += `${range[0]}-${num},`
            range = [];
        } else {
            ranges += num + ","
        }
    }

    return range
}


let arr = [8, 10, 13, 14, 15, 16, 34, 70, 89]
bookIndex(arr)
// console.log(bookIndex(arr))