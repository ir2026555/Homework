//task1

let a = 1;

while (a <= 2) {
    console.log ("Привет");
    a++;
}

//task2

a = 1;

while (a <= 5) {
    console.log (a);
    a++
}

//task3

a = 7;

while (a <= 22) {
    console.log (a);
    a++
}

// task4

let obj = {
    "Коля" : '200',
    "Вася" : '300',
    "Петя" : '400',
}

for (let key in obj) {
   console.log (`${key} — зарплата ${obj[key]} долларов`);
}

//task5

let n = 1000;
let b = 1;

while (n>=50) {
    n /= 2;
    console.log (`Результат:`, n);
    console.log (`Количество итераций`, b);
    b++;
}

//task6

let firstFriday = 5; 

  for (let i = firstFriday; i <= 31; i += 7) {
    if (i <= 31) {
       console.log (`Сегодня пятница, ${i} число. Необходимо подготовить отчет.`);
    }

}

//task1

let k = 100;
let iterations = 1;

while (k >= 0) {
    k -= 7;
    console.log (`Результат:`, k);
    console.log (`Количество итераций`, iterations);
    iterations++;
}

//task2

const months = [
    "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль",
    "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
];

for(let i = 0; i < months.length; i++) {
    console.log(`${i + 1}. ${months[i]}`);
}

//task3

const book = {
    "Название" : 'Капитанская дочка',
    "Автор" : 'А.С. Пушкин',
    "Год" : '1836',
    "Жанр" : 'роман',
}

//task4

let randomNumbers = [100, 5, 3, 10, 9, -4, 50, 83, -10, -6];

let min = randomNumbers[0];
for (let i = 1; i <= 10; i++) {
    if (min > randomNumbers[i]) {
        min = randomNumbers[i];
    }
}