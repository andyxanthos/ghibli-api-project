const request = require('request')

var findPeople = (callback) => {
    request({
        url: "https://ghibliapi.herokuapp.com/people",
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                peopleList: body
            })
        } else {
            callback('Could not list people.')
        }
    })
}

module.exports = {
    findPeople
}
