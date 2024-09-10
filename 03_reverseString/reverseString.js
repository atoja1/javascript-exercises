const reverseString = function(string) {
    const stringArray = [];
    for (i = 0; i <= string.length; i++) {
        stringArray[i] = string.at(i)       
    }
    const reversed = stringArray.reverse();

    result = reversed.join("");
    
    return result;
};

// Do not edit below this line
module.exports = reverseString;
