function reverseNumber (number) {
  return parseInt(number.toString().split('').reduce((item, newStr) => newStr + item, ''));
}

function isPalindrome (number) {
  return number === reverseNumber(number)
}

function biggestPalindrome (rangemin, rangemax) {
  const palindromes = [];
  for (let i = rangemax; i > rangemin; i--) {
    for (let j = rangemax; j > rangemin; j--) {
      if (isPalindrome(i*j)) {palindromes.push(i*j); break};
    }
  }
  return Math.max.apply(Math, palindromes);
}

console.log(biggestPalindrome(900, 999));