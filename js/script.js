'use strict';
// alert('Hi!');


const numberOfFilms = +prompt('сколько фильмов смотрели?', '');

const personalMovieDB ={
	count : numberOfFilms,
	movies : {},
	actors : {},
	genres : [],
	privat:false

};

// const lastFilm1 = prompt('один из последних просмотрреных фильмов?', ''),
// 	scoreFilm1 = prompt('рейтинг фильма?', ''),
// 	lastFilm2 = prompt('один из последних просмотрреных фильмов?', ''),
// 	scoreFilm2 = prompt('рейтинг фильма?', '');

// personalMovieDB.movies[lastFilm1]=scoreFilm1;
// personalMovieDB.movies[lastFilm2]=scoreFilm2;

// for (let i = 0; i <2; i++) {
// 	const lastFilm = prompt('один из последних просмотрреных фильмов?', ''),
// 		scoreFilm = prompt('рейтинг фильма?', '');	
// 	if (lastFilm!=''&&scoreFilm!=''&&lastFilm!=null&&scoreFilm!=null&&lastFilm.length<50){
// 		personalMovieDB.movies[lastFilm]=scoreFilm;
// 		console.log('done');

// 	}else {
// 		console.log('error');
// 		i--;}
// }
// let i = 0;
// do  {
// 	const lastFilm = prompt('один из последних просмотрреных фильмов?', ''),
// 		scoreFilm = prompt('рейтинг фильма?', '');	
// 	if (lastFilm!=''&&scoreFilm!=''&&lastFilm!=null&&scoreFilm!=null&&lastFilm.length<50){
// 		personalMovieDB.movies[lastFilm]=scoreFilm;
// 		console.log('done');

// 	}else {
// 		console.log('error');
// 		i--;}
// 	i++;
	
// }
// while(i<2);


// if (personalMovieDB.count<10){
// 	alert('вы смотрели мало фильмов');
// } else if(personalMovieDB.count>10&&personalMovieDB.count<30){
// 	alert('вы обычный зритель');
// }else if(personalMovieDB.count>30){
// 	alert('вы киноман');
// }


// console.log(personalMovieDB);

// for (let i = 2; i <= 16; i++) {
// 	if (i % 2 === 0) {
// 		continue;
// 	} else {
// 		console.log(i);
// 	}
// }

// let i=1;

// while (i<16) {
// 	i++;
	
// 	if (i % 2 === 0) {
// 		continue;
// 	} else {
// 		console.log(i);
// 	}
	
// }


// for (let i = 2; i <= 16; i++) {
// 	if (i % 2 === 0) {
// 		continue;
// 	} else {
// 		console.log(i);
// 	}
// }



// const arrayOfNumbers = [];

// Пишем решение вот тут


// Не трогаем
// return arrayOfNumbers;

// const arrayOfNumbers =[];
// for (let index = 5; index <= 10; index++) {
// 	arrayOfNumbers.push(index);
// 	console.log(index);
// }

// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];
// for (let index = 0; index < arr.length; index++) {
// 	result[index] = arr[index];
		
// }
// for (let index = 0; index < result.length; index++) {
// 	console.log(result[index]);
	
// }

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];
// for (let index = 0; index < data.length; index++) {
// 	// result[index] = data[index];
// 	if (typeof(data[index])==='string') {
// 		data[index] = data[index] +  ' - done';
// 	} else if (typeof(data[index])==='number') {
// 		data[index] = data[index] * 2;
// 	}
		
// }



// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];

// for (let i = 0; i < data.length; i++) {
// 	result[i]=data[data.length-i-1];
// }


// const lines = 5;
// let result = '';
// for (let i = 0; i <= lines; i++) {
// 	for (let j = 0; j < lines - i; j++) {
// 		result += ' ';
// 	}
// 	for (let j = 0; j < 2 * i + 1; j++) {
// 		result += '*';
// 	}
// 	result += '\n';
// }
 
// console.log(result);


// Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа.
//  Первое число - это база, второе число - это сколько раз нужно будет
//   повторить это число в прогрессии. (Смотри пример ниже). Функция должна
//    возвращать строку (или число в особых случаях, о которых ниже),
//     где эти числа идут по порядку, разделенные тремя дефисами "---".
// 	 После последнего числа их не должно быть.

// Если второй аргумент не является числом, равен или меньше нуля - то 
// возвращать просто первый аргумент. (Проверяем через оператор typeof)

// function getMathResult(num, times) {
// 	if (typeof(times) !== 'number' || times <= 0) {
// 		return num;
// 	}

// 	let str = '';

// 	for (let i = 1; i <= times; i++) {
// 		if (i === times) {
// 			str += `${num * i}`;
// 			// Тут без черточек в конце
// 		} else {
// 			str += `${num * i}---`;
// 			// Это тоже самое, что и
// 			// str = str + num * i + "---"
// 		}
// 	}

// 	return console.log(str);
// }

// getMathResult(5, 4);


// function getMathResult(num, repeat){
// 	let str='';
	
// 	if (typeof(repeat)!=='number'||repeat<=0){
// 		return num;
// 	} 
// 	for(let i=1; i<=repeat; i++){
			
// 		if (i==repeat){
// 			str += `${num * i}`;
// 		} else {
// 			str+=`${(num*i)}---`;
// 		}
// 	}
// 	return str;
// }



// console.log(getMathResult(5, 4));

/*
1) Первую часть задания повторить по уроку
2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы
3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres
P.S. Функции вызывать не обязательно */




