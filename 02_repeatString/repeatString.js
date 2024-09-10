const repeatString = function(string, num) {
  
  if (num >= 0)
  {
    var endString = ""
    for (let i = 1; i <= num; i++)
    {
        endString += string;
    }
    return endString;
  }
  else 
  {
    return "ERROR";
  }

};

// Do not edit below this line
module.exports = repeatString;
