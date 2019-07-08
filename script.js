//alert('Hello Mediasoft');

let fN = prompt("Введите первое число", "");
let sN = prompt("Введите второе число", "");
let operator = prompt("Введите знак + - * /", "");

if (operator == '+') {
	result = +fN + +sN;
} else if(operator == '-') {
	result = fN - sN;
} else if(operator == '*') {
	result = fN * sN;
} else if(operator == '/') {
	result = fN / sN;
} else {
	alert("не верная операция");
}

alert('Итого ' + result);