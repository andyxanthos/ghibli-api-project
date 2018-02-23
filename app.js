const yargs = require('yargs')

const people = require('./people')
const films = require('./films')

var argv = yargs
            .command('people', 'List all people.')
            .command('person', 'Find a specific person.', {
                name: {
                    describe: 'Name of character.',
                    demand: true,
                    alias: 'n'
                }
            })
            .command('films', 'List all films.')
            .command('film', 'Find a specific film.', {
                title: {
                    describe: 'Title of film.',
                    demand: true,
                    alias: 't'
                }
            })
            .help()
            .alias('help', 'h')
            .argv
            
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
            })
            }
        })
        break
    case 'person':
        var personName = argv.name
        people.findPerson(personName, (errorMsg, results) => {
            if (errorMsg) {
                console.log(errorMsg)
            } else {
                console.log(`Name: ${results.name}`)
                console.log(`Age: ${results.age}`)
                console.log(`Hair color: ${results.hairColor}`)
            }
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
        break
    default:
        console.log("Not recongized. Run 'node app.js -h' for help.")    
}


// TODO
// - Implement search for specific characters/places
//      - use yargs

/* if a specific person/film is defined,
*  use .filter to find the one requested
*/ 