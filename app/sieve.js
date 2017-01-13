function sieve(maximum) {
    var primes = [2]

    for (checking = 2; checking < maximum; checking++){
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
    return primes
}

module.exports.sieve = sieve
