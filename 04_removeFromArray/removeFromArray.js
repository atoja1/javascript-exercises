const removeFromArray = function(removeFrom, ...removeItems) {
    for (const item of removeItems) {
        while (removeFrom.includes(item)) {
            if (removeFrom.includes(item)){
            removeFrom.splice(removeFrom.indexOf(item),1)
            console.log(removeFrom)
            }
        }    
        
    }
    return removeFrom
};

// Do not edit below this line
module.exports = removeFromArray;
