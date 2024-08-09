const findTheOldest = function (persons) {
  let filtered_list = persons.filter(
    (person) => typeof person.yearOfDeath !== "undefined"
  );
  let undefined_yearOfDeath = persons.filter(
    (person) => typeof person.yearOfDeath === "undefined"
  );

  filtered_list.sort(sortInDescending);
  undefined_yearOfDeath.sort(sortInDescending);
  console.log(filtered_list)
  console.log(undefined_yearOfDeath)
  console.log(undefined_yearOfDeath.length)
  if (undefined_yearOfDeath.length>0){
    if (filtered_list[0].yearOfBirth < undefined_yearOfDeath[0].yearOfBirth) return filtered_list[0];
    else return undefined_yearOfDeath[0];
    }
  else
  {
    return filtered_list[0];
  }
};

function sortInDescending(a, b) {
  if (a.yearOfDeath - a.yearOfBirth > b.yearOfDeath - b.yearOfBirth) return -1;
  else return 1;
}
// Do not edit below this line
module.exports = findTheOldest;
