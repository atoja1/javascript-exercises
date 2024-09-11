const sumAll = function(min, max) {
    let sum;
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
    if (min < 0 || max < 0) return "ERROR";
    if (min > max) {
        var newMax = min;
        return (newMax/2)*(max+newMax)
    }
    return (max/2)*(min+max)
};

// Do not edit below this line
module.exports = sumAll;
