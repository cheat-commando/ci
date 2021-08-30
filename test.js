const { getGreeting, displayAge } = require('./project');

test('can create a basic greeting', () => {
  expect(getGreeting('Sam')).toBe("Hi Sam");
  expect(getGreeting('Judy')).toBe("Hi Judy");
});

test('can display your age', () => {
  expect(displayAge(15)).toBe('You are 15 years old.')
  expect(displayAge(1)).toBe('You are 1 year old.')
});