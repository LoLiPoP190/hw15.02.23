// 1. Напишите функцию, которая выводит ваше имя и фамилию.
// functionName("Erjan", "Kydyrov")  My  name is Erjan Kydyrov

function printNameSurname(name, surname) {
  console.log(`My name is ${name} ${surname}`);
}
printNameSurname("atak", "oskonbaev");


// 2. Напишите функцию, которая выводит объем конуса по заданным параметрам - высота (height) и радиус (radius).
// functionName(height, radius) Объем конуса равен ...

function printVolume(height, radius) {
  console.log(3.14 * (radius ** 2) * height);
}
printVolume(34, 13);


// 3. Напишите функцию, которая принимает строку и возвращает ее длину.
// functionName(" ... ") // Длина строки равна ...

function getLength(str) {
  return str.length;
}


// 4. Напишите функцию, которая принимает число и проверяет, четное оно или нечетное.
// functionName(num) // Число - четное || Число - нечетное

function getEvenOrOdd(num) {
  if (num % 2 === 0) {
    console.log(`The number ${num} is even`);
  }
  else {
    console.log(`The number ${num} is odd`);
  }
}


// 5. Напишите функцию, которая возвращает квадрат числа.
// functionName(num) // Квадрат этого числа равен

function squareOfNum(num) {
  return num ** 2;
}


// 6. Напишите функцию, которая возвращает корень числа.
// functionName(num) // Корень этого числа равен

function rootOfNum(num) {
  return num ** (1 / 2);
}


// 7. Напишите функцию, которая возвращает периметр пятиугольника.
// functionName(a, b, c, d, e) // Периметр - ...

function perimetrOfPentagon(a, b, c, d, e) {
  return a + b + c + d + e;
}


// 8. Напишите цикл, который выводит каждое третье число в промежутке от 0 до 33.
// 0 3 6 9 ...

for (let i = 0; i < 34; i += 3) {
  console.log(i);
}


// 9. Напишите цикл, вычисляющий факториал числа 8. (8!)

let total = 1;
for (let i = 1; i < 9; i++) {
  total = total * i;
}
console.log(total);


// 10. Напишите цикл, который выводит квадраты чисел от 1 до 10.
// 1 4 9 ...

for (let i = 1; i < 11; i++) {
  console.log(i ** 2);
}