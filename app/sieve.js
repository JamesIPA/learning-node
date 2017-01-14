function sieve(maximum) {
    if (!isNumber(maximum))
        return "Please insert a numeric value"

    if (maximum < 0)
        return "Only positive values can be prime"

    var primes = []

    if (maximum >= 2){
        primes.push(2)

        for (checking = 2; checking <= maximum; checking++){
            var isPrime = true

            for (j = 0; j <= primes.length; j++){
                var primeCheck = primes[j]

                if (primeCheck <= Math.sqrt(checking) && checking % primeCheck == 0)
                    isPrime = false
            }

            if (isPrime && !primes.includes(checking)){
                primes.push(checking)
            }
        }
    }

    return primes
}

function isNumber (o) {
  return ! isNaN (o-0) && o !== null && o !== "" && o !== false;
}

module.exports.sieve = sieve
