/* Запросите у пользователя любое число. На основании ответа создайте массив 
и заполните его числами от нуля до введённого числа. Не забудьте привести 
полученное от пользователя значение к типу number.

Входные данные: 5

Выходные данные: [0, 1, 2, 3, 4, 5]
*/

const newNamber = +prompt("Введите любое число");
const arrNumber = [];

for (i = 0; i <= newNamber; i += 1) {
  arrNumber.push(i);
}
console.log(arrNumber);
