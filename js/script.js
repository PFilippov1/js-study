'use strict';
// alert('Hi!');
// const result = confirm('Are you alive?'); 
// console.log(result);
// const answer = prompt('как дела?', 'x...');
// const answer = [];
// answer[0] = prompt('Как жизнь?');
// console.log(answer);
// answer[1] = prompt('Что нового?');
// console.log(answer);
// answer[2] = prompt('Как дела?');
// console.log(answer);
// console.log(typeof(answer));

const numberOfFilms = +prompt('сколько фильмов смотрели?', '');

const personalMovieDB ={
	count : numberOfFilms,
	movies : {},
	actors : {},
	genres : [],
	privat:false

};

const lastFilm1 = prompt('один из последних просмотрреных фильмов?', ''),
	scoreFilm1 = prompt('рейтинг фильма?', ''),
	lastFilm2 = prompt('один из последних просмотрреных фильмов?', ''),
	scoreFilm2 = prompt('рейтинг фильма?', '');

personalMovieDB.movies[lastFilm1]=scoreFilm1;
personalMovieDB.movies[lastFilm2]=scoreFilm2;
console.log(personalMovieDB);







