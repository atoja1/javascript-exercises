const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]



const findTheOldest = function(people) {
    // console.table(people)
    const people2 = people
        .map((person) => {
            if (person.yearOfDeath === undefined) person.yearOfDeath = new Date().getFullYear();
            age = person.yearOfDeath - person.yearOfBirth
            return {name: person.name, age}
        })
        .sort((a,b) => a.age - b.age)
    console.table(people2)
    return(people2.at(-1))
};
findTheOldest(people)
// Do not edit below this line
module.exports = findTheOldest;
