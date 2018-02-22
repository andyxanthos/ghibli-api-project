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

module.exports = {
    findFilms
}