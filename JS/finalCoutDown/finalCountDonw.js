function finalCountDown(param1, param2, param3, param4) {
    while (param2 <= param3) {
        if (param2 === param4) {
            param2++
            continue;
        }
        if (param2 % param1 === 0) {
            console.log(param2)
        }
        param2++
    }
}

finalCountDown(3, 5, 17, 9);