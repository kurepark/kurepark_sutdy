const sum = require("./sum");

test("2개숫자의 합",()=>{
  expect(sum(2,48)).toBe(50);
  expect(sum(5,41)).toBe(46);
  expect(sum(3, 4)).toBe(7);
  expect(sum(4, 4)).toBe(8);
})