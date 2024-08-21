// 1.
let values = [10, 20, 30];

for(let i = 0; i < values.length; i++){
  console.log(values[i]);
}

// 2.
let lastLogin = '1/1/1970';

function welcome(first, last) {
  return `Welcome, ${first} ${last}! You last logged in on ${lastLogin}.`
};

console.log(welcome('Charlie', 'Munger'));
