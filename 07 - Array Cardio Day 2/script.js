// ## Array Cardio Day 2

const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?

const isOlderThan18 = people.some(function(person) {
  const currentYear = (new Date()).getFullYear();
  if(currentYear - person.year > 18) {
    return true;
  }
});

console.log(isOlderThan18);

// Array.prototype.every() // is everyone 19 or older?

const isEveryoneOlderThan18 = people.every(function(person) {
    const currentYear = (new Date()).getFullYear();
    if(currentYear - person.year > 18) {
        return true;
    }
});

console.log(isEveryoneOlderThan18);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

const commitNo = comments.find(function(commit) {
    if (commit.id === 823423) {
        return true;
    }
});

console.log(commitNo);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423

const findAndDelete = comments.findIndex(function(commit) {
    if (commit.id === 823423) {
        return true;
    }
});

comments.splice(findAndDelete, 1);