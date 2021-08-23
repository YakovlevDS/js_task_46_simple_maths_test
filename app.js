// ? Task:Создайте функцию checkNumber, которая проверяет число по трем различым свойствам:

// это число положительное?
// это число четное?
// это число кратно 10?
// Функция checkNumber должна вернуть массив с результатами проверок в виде булевых значений.

// Число всегда будет целым.

// Пример:

// const number = 3;

// checkNumber(number); // return [true, false, false]
// const number = 10;

// checkNumber(number); // return [true, true, true]
// const number = 0;

// checkNumber(number); // return [false, true, true]
// const number = -1;

// checkNumber(number); // return [false, false, false]


// Solution 1
const number = 3;
const number1 = 10;
const number2 = 0;
const number3 = -1;

function checkNumber(number) {
  const positive = number > 0;

  const even = number % 2 === 0;

  const multiple = number % 10 === 0;

  return [positive, even, multiple];
}

console.log(checkNumber(number));
console.log(checkNumber(number1));
console.log(checkNumber(number2));
console.log(checkNumber(number3));
// ! Explanation: true false 
