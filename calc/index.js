const calc = require('./calc')
const sieve = require('./sieve')

const numbersToAdd = [
    3,
    4,
    10,
    2
]

const result = calc.sum(numbersToAdd)
//console.log(`The result is: ${result}`)

const readline = require('readline');

const r1 = readline.createInterface({
    input : process.stdin,
    output: process.stdout
})

r1.question('Please choose a maximum number to sieve to: ', (maximum) => {
    const primes = sieve.sieve(maximum);

    console.log(`Primes up to ${maximum}:`)
    console.log(`${primes}`)

    r1.close
    process.stdin.destroy();
})
