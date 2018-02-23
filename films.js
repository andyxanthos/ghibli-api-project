const request = require('request')

var findFilms = (callback) => {
    request({
        url: 'https://ghibliapi.herokuapp.com/films',
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
              filmList: body  
            })    
        } else {
            callback('Could not list films.')
        }
    })
}

var findFilm = (title, callback) => {
    request({
        url: 'https://ghibliapi.herokuapp.com/films',
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            var film = body.filter((film) => film.title === title)
            if (film.length > 0) {
                callback(undefined, {
                    title: film[0].title,
                    releaseDate: film[0].release_date,
                    director: film[0].director
                })
            } else {
                callback('Could not find that film.')
            }
        } else {
            callback('Could not find that film.')
        }
    })
}

module.exports = {
    findFilms,
    findFilm
}