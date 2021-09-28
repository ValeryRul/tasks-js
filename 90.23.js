/* Написать функции, которые принимают массив фильмов и фильтруют их по году выпуска в прокат и по рейтингу*/


const movies = [
    {title: 'a', year: 2018, rating: 4.5},
    {title: 'b', year: 2018, rating: 4.7},
    {title: 'c', year: 2015, rating: 2},
    {title: 'd', year: 2017, rating: 4.8}
]

function chooseByFilmingYear(movies, year){
    return movies.filter(movie => movie.year === year)
}


function chooseMovieByRating(movies, rating){
    return movies.filter(movie => movie.rating >= rating);
}

console.log(chooseMovieByRating(chooseByFilmingYear(movies, 2018), 4));
