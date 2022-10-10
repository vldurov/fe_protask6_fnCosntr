/*
Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:
              
read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
sum() возвращает сумму введённых свойств.
mul() возвращает произведение введённых свойств.
*/
let a;
let b;

function Calculator () {
    this.read = function(){
        a = parseInt(prompt("Введите первое значение", "2"));
        b = parseInt(prompt("Введите второе значение", "3"));
    }
    this.sum = function (a, b) {
        const rez = alert(a + b);
    }
    this.mul = function (a, b) {
        const rez = alert(a * b);
    }
};

const calc = new Calculator();
calc.read();
calc.sum(a, b);
calc.mul(a, b);
