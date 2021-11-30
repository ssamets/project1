"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "0");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for (let i = 0; i < 2; i++) {
    let lastFilm = prompt("Один из просмотренных фильмов?", ""),
        ratingFilm = prompt("На сколько вы его оцените?", "");
    if (!lastFilm || lastFilm === "" || lastFilm.length > 50 || !ratingFilm || ratingFilm === "" || ratingFilm.length > 50) {
        i--;
        continue;
    }
    personalMovieDB.movies[lastFilm] = ratingFilm;
}

if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
    alert("Вы киноман");
} else {
    alert("Произошла ошибка");
}

console.log(personalMovieDB);