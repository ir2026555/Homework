//task1

let password = "passs";
let userPassword = prompt("Введите пароль");

if (password === userPassword) {
    alert("Верный пароль");
} else {
    alert("Неверный пароль");
}

//task2

let c = 5;

if (c>0 && c<10) {
    alert("Верно");
} else {
    alert("Неверно");
}

//task3

let d = 400;
let e = 8;

if (d>100 || e>100) {
    alert("Верно");
} else {
    alert("Неверно");
}

//task4

let a = '2';
let b = '3';
// Код выше изменять менять нельзя. Чтобы решить задачу исправьте код ниже:
alert(Number(a) + Number(b));

//task5

let monthNumber = 12;

monthNumber = prompt("Введите номер месяца")

switch (monthNumber) {
    case "12":
    case "1":
    case "2":
        console.log("Зима");
        break;
    case "3":
    case "4":
    case "5":
        console.log("Весна");
        break;
    case "6":
    case "7":
    case "8":
        console.log("Лето");
        break;
    case "9":
    case "10":
    case "11":
        console.log("Осень");
        break;
    default:
        console.log("Неверный номер месяца. Введите число от 1 до 12.");
        break;
}

//task1

let number = prompt("Пожалуйста, введите любое число");

if (isNaN(number)) {
    alert('Неверное значение');
} else {
    if (number % 2 === 0) {
        alert('Число четное');
    } else {
        alert('Число нечетное');
    }
}

//task2

let clientOS = Number(prompt("Введите тип OS"));

if (clientOS === 0) {
        alert("Установите версию приложения для iOS по ссылке");
    } else if (clientOS === 1) {
        alert("Установите версию приложения для Android по ссылке");
    } else {
        alert("Неизвестная OS");
}

//task3

let clientDeviceYear = prompt("Введите год выпуска вашего телефона");

clientOS = Number(clientOS);
clientDeviceYear = Number(clientDeviceYear);

if (isNaN(clientOS) || isNaN(clientDeviceYear)) {
    alert("Ошибка ввода данных. Пожалуйста, введите числовые значения.");
} else {
    if (clientOS === 0) {
        if (clientDeviceYear >= 2015) {
            alert("Вы можете установить стандартную версию приложения для iOS по ссылке");
        } else {
            alert("Установите облегченную версию приложения для iOS по ссылке");
        }
    } else if (clientOS === 1) {
        if (clientDeviceYear >= 2015) {
            alert("Вы можете установить стандартную версию приложения для Android по ссылке");
        } else {
            alert("Установите облегченную версию приложения для Android по ссылке");
        }
    } else {
        alert("Неизвестная операционная система");
    }
}