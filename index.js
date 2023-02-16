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


// 11. Напишите цикл, который вычисляет сумму чисел от 1 до 25.

let total2 = 0;
for (let i = 0; i < 26; i++) {
  total2 = total2 + i;
}
console.log(total2);


// 12. Напишите цикл, который печатает четные числа от 0 до 20.
// 0 2 4

for (let i = 0; i < 21; i += 2) {
  console.log(i);
}


// 13. Напишите цикл, который печатает нечетные числа от 1 до 15.
// 1 3 ...

for (let i = 1; i < 16; i += 2) {
  console.log(i);
}


// 14. Создайте массив из строк и добавьте в начало массива 2 новых элемента, а в конец 3. 

let example1 = ["Hello", "my", "Karakol", "what", "friend"];

example1.push("something"); // в конец массива
example1.unshift("nothing"); // в начало массива


// 15. Создайте массив чисел и вычислите сумму всех четных чисел в массиве.

let example2 = [1, 3, 4, 6, 78, 50, 48, 23];

let sum = 0;
for (let i = 0; i < example2.length; i++) {
  if (example2[i] % 2 === 0) {
    sum = sum + example2[i];
  }
}
console.log(sum);


//17. Создайте массив строк и объедините их в одну строку.  ["I", "like", "to", "eat!"]

let unify = ["I", "like", "to", "eat!"];
let total3 = "";
for (let i = 0; i < unify.length; i++) {
  total3 = total3 + unify[i];
}
console.log(total3);


// 18. Создайте массив строк ["one", "two", "three"] и переверните его.  ["three", "two", "one"]

let reversed = ["one", "two", "three"];
reversed.reverse();


// 19. Создайте массив из имен (минимум 3) и выведите каждое имя.
// Hello Erjan Hello Ermek ... 

let names = ["Erjan", "Ermek", "Atak", "Bayel"];
for (let i = 0; i < names.length; i++) {
  console.log(`Hello ${names[i]}`);
}


// 20. Создайте массив из чисел и выведите квадраты этих чисел. [2, 3, 4, 5]
// 4 9 16 25

let squares = [2, 3, 4, 5, 10, 7];
for (let i = 0; i < squares.length; i++) {
  console.log(squares[i] ** 2);
}


// 21. Создайте массив строк и проверьте есть ли такой элемент в массиве. // ["cat", "dog", "snake"] 
// cat - true
// parrot - false

let animals = ["cat", "dog", "snake"];
console.log(animals.includes("cat"));
console.log(animals.includes("parrot"));