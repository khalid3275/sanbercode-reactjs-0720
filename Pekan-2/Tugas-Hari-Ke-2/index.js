var readBooks = require('./callback')

var books = [{
        name: 'LOTR',
        timeSpent: 3000
    },
    {
        name: 'Fidas',
        timeSpent: 2000
    },
    {
        name: 'Kalkulus',
        timeSpent: 4000
    },
    {
        name: 'komik',
        timeSpent: 1000
    }
]

// Tulis code untuk memanggil function readBooks di sini
readBooks(10000, books[0], function(time){
    readBooks(time, books[1], function(time){
        readBooks(time, books[2], function(time){
            readBooks(time, books[3], function(time){
                return time;
            })
        })
    })
})