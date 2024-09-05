const findTheOldest = function (array) {
  const getAge = function (birth, death) {
    if (!death) {
      death = new Date().getFullYear();
    }
    return death - birth;
  };
  return array.reduce((oldest, currentPerson) => {
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    const currentAge = getAge(
      currentPerson.yearOfBirth,
      currentPerson.yearOfDeath
    );
    return oldestAge < currentAge ? currentPerson : oldest;
  });
};
//   return array.forEach((people) => {
//     var ageOfPerson = people.yearOfDeath - people.yearOfBirth;
//     var oldestPerson = people.sort((a, b) => b.ageOfPerson - a.ageOfPerson);
//     return oldestPerson;
//   });
// };

// Do not edit below this line
module.exports = findTheOldest;
