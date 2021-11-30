"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "0"),
    personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    },
    lastFilm1 = prompt("Один из просмотренных фильмов?", ""),
    ratingFilm1 = prompt("На сколько вы его оцените?", ""),
    lastFilm2 = prompt("Один из просмотренных фильмов?", ""),
    ratingFilm2 = prompt("На сколько вы его оцените?", "");

personalMovieDB.movies[lastFilm1] = ratingFilm1;
personalMovieDB.movies[lastFilm2] = ratingFilm2;

console.log(personalMovieDB);