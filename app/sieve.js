function sieve(maximum) {

    if (!isNumber(maximum))
        return "Please insert a numeric value"

    if (maximum < 0)
        return "Only positive values can be prime"

    var primes = []

    if (maximum >= 2){

        primes.push(2)

        for (checking = 2; checking <= maximum; checking++){
            var isprime = true

            for (j = 0; j <= primes.length; j++){
                var primecheck = primes[j]

                if (primecheck <= Math.sqrt(checking) && checking % primecheck == 0)
                    isprime = false
            }

            if (isprime && !primes.includes(checking)){
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
