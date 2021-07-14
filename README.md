Roman Numerals

Write a function ...
toRoman(number)
...that takes an integer between 0 and 3999 inclusive and returns a string representing
the same number in roman numerals. see https://en.wikipedia.org/wiki/Roman_numerals
for details of roman numerals.
e.g. calling the function with the integer 246 should return a string 'CCXLVI'

Write a function ...
fromRomain(romanNumeral)
...that takes a string representing a valid roman numeral (see https://en.wikipedia.org/wiki/Roman_numerals)
and returns an integer representing the same number in base 10 -- the function should handle
roman numerals in the range 0 to 3999 inclusive.
e.g. calling the function with the string 'CCXLVI' should return the integer 246


Create a GIT repository for the solution
start a new project…
new directory
npm init
npm install jest
Push the bare project to the  remote GIT repository
Send me a link to the project GIT repository.


I want to see evidence of a TDD approach;
Create a test for the simplest case.
Create the simplest implementation to pass that test
commit and push to GIT
repeat 1-3 with the next simplest test case.
e.g. your first, simplest, test case may well be something like
expect(toRoman(1)).toEqual('I');
Followed by, maybe…
expect(toRoman(3)).toEqual('III');
and so on. (edited)