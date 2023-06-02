// function calculateVolumeAndArea(cubeEdge) {
// 	if (typeof (cubeEdge) !== 'number' || cubeEdge < 0 || !Number.isInteger(cubeEdge))
// 		return "При вычислении произошла ошибка";
//
// 	// square=Math.abs(6*cubeEdge*cubeEdge);
// 	// volume= Math.abs(cubeEdge*cubeEdge*cubeEdge);
// 	let square = 6 * cubeEdge * cubeEdge;
// 	let volume = cubeEdge * cubeEdge * cubeEdge
// 	return `Объем куба: ${volume}, площадь всей поверхности: ${square}`;
// }
//
// calculateVolumeAndArea(5);
//
//
// function getCoupeNumber(seat) {
// 	if (typeof (seat) !== 'number' || seat < 0 || !Number.isInteger(seat))
// 		return "Ошибка. Проверьте правильность введенного номера места";
// 	if (0 === seat || seat > 36)
// 		return "Таких мест в вагоне не существует";
// 	return Math.ceil(9 * seat / 36);
// }
//
// console.log(getCoupeNumber(25));

// function getTimeFromMinutes(minutes) {
// 	if (typeof (minutes) !== 'number' || minutes < 0 || !Number.isInteger(minutes)) {
// 		return 'Ошибка, проверьте данные';
// 	}
// 	let hours =Math.trunc(minutes / 60);
// 	let minute = minutes % 60;
// 	let correctHours=''
// 	if (hours === 2 || hours ===3 ||hours === 4) {
// 		correctHours = 'часа';
// 	} else if (hours === 1) {
// 		correctHours = 'час';
// 	}else correctHours = 'часов';
//
//
// 	return ` Это ${hours} ${correctHours} и ${minute} минут`;
// }
// console.log(getTimeFromMinutes(160));


// Место для второй задачи
// function findMaxNumber(a, b, c, d) {
// 	let arr = [a, b, c, d];
// 	if (typeof (a) !== 'number' || typeof (b) !== 'number' || typeof (c) !== 'number' || typeof (d) !== 'number') {
// 		return 0;
//
// 	} else {
// 		let max = arr[0];
// 		for (let i = 0; i < arr.length; i++) {
//
// 			if (arr[i] > max) {
// 				max = arr[i];
// 			}
//
// 		}
// 		return max;
// 	}
// }
//
// findMaxNumber(2, 4, 6, 8);
// findMaxNumber(2,44,6,34);

// Задача:
//
// 	Создайте функцию, которая будет принимать в себя один аргумент-целое положительное число.
// 		Она должна возвращать строку, в которой будут через пробел выведены числа Фибоначчи. Причем,
// 	их количество должно быть равно переданному аргументу.
// 		Если переданный аргумент не число - вернуть пустую строку. Решать без применения рекурсии.
//
// 	Пример:
//
// fib(4) => ''0 1 1 2 3 5"

// function fib(num) {
// 	let first = 0;
// 	let second = 1;
// 	let arr = [];
// 	arr.push(first);
// 	arr.push(second);
// 	let fibonachi = '';
// 	for (let i = 2; i < num; i++) {
// 		arr[i] = arr[i - 1] + arr[i - 2];
//
// 	}
// 	console.log(arr);
// 	for (let i = 0; i < arr.length; i++) {
// 		fibonachi += arr[i] + ' ';
// 	}
// 	console.log(fibonachi);
// 	return fibonachi;
// }
//
// fib(1);


function fib(num) {
	if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
		return "";
	}
	
	let result = '';
	let first = 0;
	let second = 1;
	
	for (let i = 0; i < num; i++) {
		if (i + 1 === num) {
			result += `${first}`;
			// Без пробела в конце
		} else {
			result += `${first} `;
		}
		
		let third = first + second;
		first = second;
		second = third;
	}
	console.log(result)
	return result;
}

fib(1)
