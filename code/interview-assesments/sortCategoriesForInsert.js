module.exports = function sortCategoriesForInsert (inputJson) {
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
    return sortedArray.reverse();
}