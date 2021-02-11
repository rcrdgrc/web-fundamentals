let input1 = [
    {
        "name": "Cuffs",
        "id": 58,
        "parent_id": 1
    },
    {
        "name": "Accessories",
        "id": 1,
        "parent_id": 20,
    },
    {
        "name": "Watches",
        "id": 57,
        "parent_id": 1
    },
    {
        "name": "Men",
        "id": 20,
        "parent_id": null,
    }
]


//   This is a formatted JSON sample solution for the input above:

//   [
//     {
//       "name": "Men",
//       "id": 20,
//       "parent_id": null
//     },
//     {
//       "name": "Accessories",
//       "id": 1,
//       "parent_id": 20
//     },
//     {
//       "name": "Watches",
//       "id": 57,
//       "parent_id": 1
//     }
//   ]



//   module.exports = function sortCategoriesForInsert (inputJson) {
function sortCategoriesForInsert(inputJson) {
    // Your code happens...
    ///   ... which calculates properJsonOutput
    const sortedArray = inputJson;

    sortedArray.map(parentId =>
        inputJson.forEach(childId => {
            if (parentId.id === childId.parent_id) {
                const childIndex = sortedArray.indexOf(childId);
                sortedArray.splice(childIndex, 1);

                const parentIndex = sortedArray.indexOf(parentId)
                sortedArray.splice(parentIndex, 0, childId)
            } 
        })
    );
    console.log(sortedArray.reverse())
    return sortedArray.reverse();
}

sortCategoriesForInsert(input1);