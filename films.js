const request = require('request')

var getFilms = () => {
    return new Promise((resolve, reject) => {
        request({
            url: 'https://ghibliapi.herokuapp.com/films',
            json: true
        }, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                resolve({
                  filmList: body  
                })    
            } else {
                reject('Could not list films.')
            }
        })
    })
}

var getFilm = (title) => {
    return new Promise((resolve, reject) => {
        request({
            url: 'https://ghibliapi.herokuapp.com/films',
            json: true
        }, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                var film = body.filter((film) => film.title === title)
                if (film.length > 0) {
                    resolve({
                        title: film[0].title,
                        releaseDate: film[0].release_date,
                        director: film[0].director
                    })
                } else {
                    reject('Could not find that film.')
                }
            } else {
                reject('Could not find that film.')
            }
        })
    })
}

module.exports = {
    getFilms,
    getFilm
}

// Replaced by getFilms()
// var findFilms = (callback) => {
//     request({
//         url: 'https://ghibliapi.herokuapp.com/films',
//         json: true
//     }, (error, response, body) => {
//         if (!error && response.statusCode === 200) {
//             callback(undefined, {
//               filmList: body  
//             })    
//         } else {
//             callback('Could not list films.')
//         }
//     })
// }

// Replaced by getFilm()
// var findFilm = (title, callback) => {
//     request({
//         url: 'https://ghibliapi.herokuapp.com/films',
//         json: true
//     }, (error, response, body) => {
//         if (!error && response.statusCode === 200) {
//             var film = body.filter((film) => film.title === title)
//             if (film.length > 0) {
//                 callback(undefined, {
//                     title: film[0].title,
//                     releaseDate: film[0].release_date,
//                     director: film[0].director
//                 })
//             } else {
//                 callback('Could not find that film.')
//             }
//         } else {
//             callback('Could not find that film.')
//         }
//     })
// }