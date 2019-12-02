let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");
let appData = {
    budget: money,
    timeData: time
};
let expenses = {};
let optionalExpenses = {};
let income = [];
let savings = false;
expenses.first = prompt("Введите обязательную статью расходов в этом месяце");
expenses.second = prompt("Во сколько обойдется?");
alert("Бюджет на один день" + money/30);
console.log(appData);
console.log(expenses);

