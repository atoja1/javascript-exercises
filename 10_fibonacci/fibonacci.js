const fibonacci = function(number) {
    if (number === 0 || number === "0") return 0;
    if (number <= 0) return "OOPS";

    let n1 = 1, n2 = 1, sum;
    for (let i = 1; i < number; i++) {
        sum = n1 + n2;
        n1 = n2;
        n2 = sum;
    }
    return(n1);
};
fibonacci(20)

// Do not edit below this line
module.exports = fibonacci;
