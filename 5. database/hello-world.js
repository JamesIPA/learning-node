'use strict'

const pg = require('pg')
const conString = 'postgres://postgres:admin@localhost:5432/node_hero'

pg.connect(conString, function (err, client, done) {
    if (err) {
        return console.error('Error fetching from the client pool', err)
    }
    const queryString = 'select $1::varchar AS my_first_query'

    client.query(queryString, ['node_hero'], function(err, result){
        done()

        if (err) {
            return console.error('Error happened during query', err)
        }
        console.log(result.rows[0])
        process.exit(0)
    })
})
