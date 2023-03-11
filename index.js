// Solution

function writeCards(names) {
  const messages = [];
  
  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for your kind gift and for joining us on this special occasion!`);
  }
  
  console.log(messages);
}
const assert = require('assert');

const expected = [
  'Thank you, Alice, for your kind gift and for joining us on this special occasion!',
  'Thank you, Bob, for your kind gift and for joining us on this special occasion!',
  'Thank you, Charlie, for your kind gift and for joining us on this special occasion!'
];

const actual = writeCards(["Guadalupe", "Ollie", "Aki"]);

assert.deepEqual(actual, expected);
const names = ["Guadalupe", "Ollie", "Aki"];


  function countDown(number) {
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }
