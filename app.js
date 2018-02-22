const yargs = require('yargs')

const people = require('./people')
const films = require('./films')

var argv = yargs.help().alias('help', 'h').argv
            
var command = argv._[0]

switch (command) {
    case 'people':
        people.findPeople((errorMsg, results) => {
            if (errorMsg) {
                console.log(errorMsg)
            } else {
                results.peopleList.forEach((person) => {
                console.log('---------')
                console.log(`Name: ${person.name}`)
                console.log(`Age: ${person.age}`)
                console.log(`Hair/eyes: ${person.hair_color}/${person.eye_color}`)
            }

            })
        })
        break
    case 'films':
        films.findFilms((errorMsg, results) => {
            if (errorMsg) {
                console.log(errorMsg)
            } else {
                results.filmList.forEach((movie) => {
                    console.log('---------')
                    console.log(`Title: ${movie.title}`)
                    console.log(`Release date: ${movie.release_date}`)
                    console.log(`Director: ${movie.director}`)
                })
            }
        })
        break;
    default:
        console.log("Not recongized. Run 'node app.js -h' for help")    
}


// TODO
// - Implement search for specific characters/places
//      - use yargs