function exactChange(cents) {
    let change = {
        "quarters": 0,
        "dimes": 0,
        "nickles": 0,
        "pennies": 0,
    }
    let values = [25, 10, 5, 1]

    values.forEach(ele => {
        if (ele === 25) {
            change["quarters"] = Math.floor(cents / ele)
        }
        if (ele === 10) {
            change["dimes"] = Math.floor(cents / ele)
        }
        if (ele === 5) {
            change["nickles"] = Math.floor(cents / ele)
        }
        if (ele === 1) {
            change["pennies"] = Math.floor(cents / ele)
        }

        cents = cents - ele * Math.floor(cents / ele)
    });

    console.log(change)

}

exactChange(98)