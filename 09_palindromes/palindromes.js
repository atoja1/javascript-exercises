const palindromes = function (string) {
    const newString = string
    .toLowerCase()
    .split("")
    .reverse()
    .filter(char => {
        return /[a-z0-9]/.test(char)
    })
    .join("")
    
    const oldString = string
    .toLowerCase()
    .split("")
    .filter(char => {
        return /[a-z0-9]/.test(char)
    })
    .join("")
    return oldString == newString    
};

// Do not edit below this line
module.exports = palindromes;
