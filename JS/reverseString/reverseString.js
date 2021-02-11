function acronym(phrase) {
    let split = phrase.split(" ");
    let newString = ""

    for (let i = 0; i < split.length; i++) {
        newString += split[i][0]
    }

    console.log(newString.toUpperCase())
}

acronym("self contained underwater breathing apparatus")