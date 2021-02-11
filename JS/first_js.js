var myName = "Ricardo Garcia"
var myNumber = 35
var temp = myName

myName = myNumber
myNumber = temp

console.log(myName, myNumber)

for (var i = -52; i <= 1066; i++) {
    console.log(i)
}

function highLow(lowNum, highNum, mult){
    for (let i = highNum; i >= lowNum; i--){
        if (i % mult === 0) {
            console.log(i)
        }
    }
}

highLow(2, 9, 3)