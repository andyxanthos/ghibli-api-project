const request = require('request')

var getPeople = () => {
    return new Promise((resolve, reject) => {
        request({
            url: "https://ghibliapi.herokuapp.com/people",
            json: true
        }, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                resolve({
                    peopleList: body
                })
            } else {
                reject('Could not list people.')
            }
        })
    })
}

var getPerson = (name) => {
    return new Promise((resolve, reject) => {
        request({
            url: "https://ghibliapi.herokuapp.com/people",
            json: true
        }, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                var person = body.filter((person) => person.name === name)
                if (person.length > 0) {
                    resolve({
                        name: person[0].name,
                        age: person[0].age,
                        hairColor: person[0].hair_color,
                        eyeColor: person[0].eye_color
                    })
                } else {
                    reject('Can not find that person.')
                }
            } else {
                reject('Can not find that person.')
            }
        })
    })
}


module.exports = {
    getPeople,
    getPerson
}

// Replaced by getPeople()
// var findPeople = (callback) => {
//     request({
//         url: "https://ghibliapi.herokuapp.com/people",
//         json: true
//     }, (error, response, body) => {
//         if (!error && response.statusCode === 200) {
//             callback(undefined, {
//                 peopleList: body
//             })
//         } else {
//             callback('Could not list people.')
//         }
//     })
// }

// Replaced by getPerson()
// var findPerson = (name, callback) => {
//     request({
//         url: "https://ghibliapi.herokuapp.com/people",
//         json: true
//     }, (error, response, body) => {
//         if (!error && response.statusCode === 200) {
//             var person = body.filter((person) => person.name === name)
//             if (person.length > 0) {
//                 callback(undefined, {
//                     name: person[0].name,
//                     age: person[0].age,
//                     hairColor: person[0].hair_color,
//                     eyeColor: person[0].eye_color
//                 })
//             } else {
//                 callback('Can not find that person.')
//             }
//         } else {
//             callback('Can not find that person.')
//         }
//     })
// }