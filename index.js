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

function square(num) {
  return num ** 2;
}

