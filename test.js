const getGreeting = require('./project');

test('can create a basic greeting', () => {
  expect(getGreeting('Sam')).toBe("Hi Sam");
  expect(getGreeting('Judy')).toBe("Hi Judy");
});