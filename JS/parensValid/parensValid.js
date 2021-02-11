//Write an algorithm that takes in a string and checks to make sure the parentheses are valid.
//all '(' should have a matching ')'
//parentheses should also be in the correct order(i.e. ')(' would not be valid)

//example: ()           -> true
//example: (([(8+13)])) -> true
//example: (()))()      -> false
//example: (            -> false

function parensValid(input){
    let closing = 0;
    let opening = 0;

    for (let i = 0; i < input.length; i++) {
        const ele = input[i];
        if (closing > opening) {
            return false
        }
        if (ele === '(') {
            opening++
        }
        else if (ele === ')') {
            closing++
        }
    }

    return closing === opening
}

console.log(parensValid("hello ())("))