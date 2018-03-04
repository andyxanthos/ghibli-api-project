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
        people.getPeople().then((response) => {
            response.peopleList.forEach((person) => {
                console.log('--------')
                console.log(`Name: ${person.name}`)
                console.log(`Age: ${person.age}`)
                console.log(`Eyes/Hair: ${person.eye_color}/${person.hair_color}`)
            })
        }, (errorMsg) => {
            console.log(errorMsg)
        })
        break

    case 'person':
        var personName = argv.name
        people.getPerson(personName).then((response) => {
            console.log(`Name: ${response.name}`)
            console.log(`Age: ${response.age}`)
            console.log(`Eyes/Hair: ${response.eyeColor}/${response.hairColor}`)
        }, (errorMsg) => {
            console.log(errorMsg)
        })
        break

    case 'films':
        films.getFilms().then((response) => {
            response.filmList.forEach((film) => {
                console.log('--------')
                console.log(`Title: ${film.title}`)
                console.log(`Released in ${film.release_date}`)
                console.log(`Directed by ${film.director}`)
            })
        }, (errorMsg) => {
                console.log(errorMsg)
            }
        )
        break

    case 'film':
        var filmTitle = argv.title
        films.getFilm(filmTitle).then((response) => {
            console.log('--------')
            console.log(`Title: ${response.title}`)
            console.log(`Released in ${response.releaseDate}`)
            console.log(`Directed by ${response.director}`)
        }, (e) => {
            console.log(e)
        })
        break

    default:
        console.log("Not recongized. Run 'node app.js -h' for help.")    
}
