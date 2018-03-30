class primeFactors {

  static for(number) {
    if (number == 1) return [];
    if (number == 2) return [2];
    if (number == 3) return [3];
    let factors = primeFactors.listFactors(number)
    return primeFactors.extractPrimeFactors(factors);
  }

  static listFactors(number) {
    let factors = [];
    let divisor = 2;
    while(number != 1) {
      if(primeFactors.isDivisbleBy(divisor, number)) {
        factors.push(divisor);
        number = number / divisor;
      } else {
        divisor++;
      }
    }
    return factors;
  }

  static extractPrimeFactors(array) {
    return array.map((factor) => {
      if (primeFactors.isPrime(factor)) return factor;
    })
  }

  static isPrime(number) {
    if (number == 1) return false;
    if (number == 2) return true;
    if (number == 3) return true;

    for (let i = 2; i < number; i++) {
      if(number % i === 0) return false;
    }
    return true;
  }

  static isDivisbleBy(divisor, number) {
    if (number % divisor === 0) return true;
    return false;
  }

}

module.exports = primeFactors;