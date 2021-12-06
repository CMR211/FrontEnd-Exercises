function generatePrimes (upperLimit) {
  const primes = [2];
  for (let i=3; i < upperLimit; i++) {
    if (primes.some(item => i % item === 0)) continue;
    primes.push(i);
  }
  return primes
}

function findGPCD (num) {
  const primes = generatePrimes(Math.floor(Math.sqrt(num)));
  let i = 0;
  while (true) {
    i++;
    if (num % primes[primes.length - i] === 0) break;
  }
  return primes[primes.length - i]
}

const problemGivenNumber = 600851475143;

console.log("final: " + findGPCD(problemGivenNumber));
