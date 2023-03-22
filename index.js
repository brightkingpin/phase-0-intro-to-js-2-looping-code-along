// My Code...

function writeCards(names, event) {
  const messages = [];
  
  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  
  console.log(messages); // For debugging purposes only
  return messages;
}

const assert = require('assert');

describe('writeCards', () => {
  it('should return an array of thank you messages for each name provided to the function', () => {
    const expected = [      'Thank you, Guadalupe, for the wonderful surprise gift!',      'Thank you, Ollie, for the wonderful surprise gift!',      'Thank you, Aki, for the wonderful surprise gift!'    ];

    const actual = writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");

    assert.deepEqual(actual, expected);
  });
});

function countDown(number) {
  for (let i = number; i >= 0; i--) {
    console.log(i);
  }
}

describe('countDown', () => {
  it('should invoke console.log once for each number, counting down from the number provided to zero', () => {
    const spy = sinon.spy(console, 'log');

    countDown(10);

    assert.equal(spy.callCount, 11);
    
    spy.restore();
  });

  it('should log each number when counting down, starting from the number provided', () => {
    const spy = sinon.spy(console, 'log');

    countDown(4);

    assert.equal(spy.callCount, 5);
    assert.equal(spy.getCall(0).args[0], 4);
    assert.equal(spy.getCall(1).args[0], 3);
    assert.equal(spy.getCall(2).args[0], 2);
    assert.equal(spy.getCall(3).args[0], 1);
    assert.equal(spy.getCall(4).args[0], 0);

    spy.restore();
  });
});
