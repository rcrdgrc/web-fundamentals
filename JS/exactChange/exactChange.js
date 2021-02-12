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

//if you get the time, work on dollarAndCoinChange
//given a cent amount, return an object with the count
//of how many dollars(1s, 5s, 10s) and how many coins
//should be returned. NOTE: use whole cents, not decimals
//4632 -> 4 tens, 1 five, 1 one, 1 quarter, 0 dimes, 1 nickel, 2 pennies
function dollarAndCoinChange(money){
    let change = {
        "tens": 0,
        "fives": 0,
        "ones": 0,
        "quarters": 0,
        "dimes": 0,
        "nickels": 0,
        "pennies": 0
    }

    let cents = money

    let values = [1000, 500, 100, 25, 10, 5, 1]

    values.forEach(ele => {
        if (ele === 1000) {
            change["tens"] = Math.floor(cents / ele)
        }
        if (ele === 500) {
            change["fives"] = Math.floor(cents / ele)
        }
        if (ele === 100) {
            change["ones"] = Math.floor(cents / ele)
        }
        if (ele === 25) {
            change["quarters"] = Math.floor(cents / ele)
        }
        if (ele === 10) {
            change["dimes"] = Math.floor(cents / ele)
        }
        if (ele === 5) {
            change["nickels"] = Math.floor(cents / ele)
        }
        if (ele === 1) {
            change["pennies"] = Math.floor(cents / ele)
        }

        cents = cents - ele * Math.floor(cents / ele)
    });

    console.log(change)
    
    return change;
}

dollarAndCoinChange(4632)