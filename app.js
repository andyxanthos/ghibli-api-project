const people = require('./people')
const films = require('./films')

var command = process.argv[2]

switch (command) {
    case 'people':
        people.findPeople((errorMsg, results) => { // Add error handling here
            results.peopleList.forEach((person) => {
                if (errorMsg) {
                    console.log(errorMsg)
                } else {
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
        console.log("Not recongized. Run node app.js --help for help")    
}


