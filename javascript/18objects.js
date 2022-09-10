var a = {}   //object
var b = []  //array

var movieName = "Avengers"
var movieRating = 4.5
var movieType = "Action"


var movieName1 = "Jab We Met"
var movieRating1 = 4.7
var movieType1 = "Romantic"

var movie = {
    name:'Avengers',
    rating:4.5,
    type:'Action'
}

typeof(movie)
'object'
movie.name
'Avengers'
movie.rating
4.5
movie.rating = 4.7
4.7
movie
{name: 'Avengers', rating: 4.7, type: 'Action'}
movie.ind = "Hollywood"
'Hollywood'
movie
{name: 'Avengers', rating: 4.7, type: 'Action', ind: 'Hollywood'}
delete movie.type
true
movie
{name: 'Avengers', rating: 4.7, ind: 'Hollywood'}


var movie = {
    name:'Avengers',
    rating:4.5,
    type:'Action'
}

undefined
movie['name']
'Avengers'
movie['rating']=4.5
4.5

////JSON
> Javascript Object Notation
(Array of objects)

a[1].name
'Jab We Met'

var movie = {
    name:'Avengers',
    rating:4.5,
    type:'Action'
}

for(key in movie){
    console.log(key)
}

name
rating
type

for(key in movie){
    console.log(movie[key])
}

Avengers
4.5
Action

///////