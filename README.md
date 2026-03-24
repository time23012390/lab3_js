<div align="center">
<h2>Министерство образования и исследований</h2>
<h2>Молдавский Государственный Университет</h2>
<h3>Факультет Математики и Информатики</h3>
<h3>Департамент Информатики</h3>

<br>

<p><strong>Отчёт</strong></p>
<p>по дисциплине «JavaScript»</p>
<p><strong>Лабораторная работа №3</strong></p>
<p>Основы работы с массивами, функциями и объектами в JavaScript</p>

<br><br>

<p><strong>Выполнила:</strong><br>
Чебанова София, гр. IA2503</p>

<p><strong>Проверил:</strong><br>
N. Calin, asistent universitar</p>

<br><br>

<p>Кишинёв, 2026</p>

</div>

---


# Цель работы

Целью данной работы является изучение основ работы с массивами, объектами и функциями в языке JavaScript, а также применение этих инструментов для обработки и анализа данных на примере транзакций. В ходе работы закрепляются навыки работы с колбэками, перебором массивов и реализацией пользовательских функций.

# Ход работы

## 1. Создание массива транзакций

На первом этапе был создан массив объектов transactions, содержащий информацию о транзакциях.
Каждый объект включает следующие поля:

transaction_id — уникальный идентификатор
transaction_date — дата транзакции
transaction_amount — сумма
transaction_type — тип (debit/credit)
transaction_description — описание
merchant_name — название магазина
card_type — тип карты

Массив используется в качестве исходных данных для анализа.

```js
const transactions = [
    {
      transaction_id: "1",
      transaction_date: "2019-01-01",
      transaction_amount: 100.0,
      transaction_type: "debit",
      transaction_description: "Payment for groceries",
      merchant_name: "SuperMart",
      card_type: "Visa",
    },
    {
      transaction_id: "2",
      transaction_date: "2019-01-02",
      transaction_amount: 50.0,
      transaction_type: "credit",
      transaction_description: "Refund for returned item",
      merchant_name: "OnlineShop",
      card_type: "MasterCard",
    },
    {
      transaction_id: "3",
      transaction_date: "2019-01-03",
      transaction_amount: 75.0,
      transaction_type: "debit",
      transaction_description: "Dinner with friends",
      merchant_name: "RestaurantABC",
      card_type: "Amex",
    },
    {
      transaction_id: "4",
      transaction_date: "2019-01-04",
      transaction_amount: 120.0,
      transaction_type: "debit",
      transaction_description: "Shopping at Mall",
      merchant_name: "FashionStoreXYZ",
      card_type: "Discover",
    },
    {
      transaction_id: "5",
      transaction_date: "2019-01-05",
      transaction_amount: 25.0,
      transaction_type: "credit",
      transaction_description: "Returned defective product",
      merchant_name: "ElectronicsShop",
      card_type: "Visa",
    },
    {
      transaction_id: "6",
      transaction_date: "2019-01-06",
      transaction_amount: 60.0,
      transaction_type: "debit",
      transaction_description: "Gasoline refill",
      merchant_name: "GasStationXYZ",
      card_type: "MasterCard",
    },
    {
      transaction_id: "7",
      transaction_date: "2019-01-07",
      transaction_amount: 40.0,
      transaction_type: "debit",
      transaction_description: "Lunch with colleagues",
      merchant_name: "Cafe123",
      card_type: "Visa",
    },
    {
      transaction_id: "8",
      transaction_date: "2019-01-08",
      transaction_amount: 90.0,
      transaction_type: "debit",
      transaction_description: "Movie tickets",
      merchant_name: "CinemaXYZ",
      card_type: "Amex",
    },
    {
      transaction_id: "9",
      transaction_date: "2019-01-09",
      transaction_amount: 150.0,
      transaction_type: "debit",
      transaction_description: "Weekend getaway",
      merchant_name: "ResortABC",
      card_type: "Discover",
    },
    {
      transaction_id: "10",
      transaction_date: "2019-01-10",
      transaction_amount: 20.0,
      transaction_type: "credit",
      transaction_description: "Cashback reward",
      merchant_name: "BankXYZ",
      card_type: "Visa",
    },
    {
      transaction_id: "11",
      transaction_date: "2019-01-11",
      transaction_amount: 65.0,
      transaction_type: "debit",
      transaction_description: "Dinner with family",
      merchant_name: "FamilyRestaurant",
      card_type: "MasterCard",
    },
    {
      transaction_id: "13",
      transaction_date: "2019-02-11",
      transaction_amount: 65.0,
      transaction_type: "debit",
      transaction_description: "Dinner with family",
      merchant_name: "FamilyRestaurant",
      card_type: "MasterCard",
    }
]
```

## 2. Реализация функций для анализа транзакций

### 2.1 Получение уникальных типов транзакций

Реализована функция getUniqueTransactionTypes, которая возвращает массив уникальных типов транзакций с использованием структуры Set.

```js
function getUniqueTransactionTypes(transactions){
    const transactionsSet = new Set();
    for(let i = 0; i < transactions.length; i++){
        transactionsSet.add(transactions[i].transaction_type);
    }
    return [...transactionsSet];
}
```

### 2.2 Вычисление общей суммы транзакций

Функция calculateTotalAmount проходит по массиву и суммирует значения всех транзакций.

```js
function calculateTotalAmount(transactions){
    let sum = 0;
    for (let i = 0; i < transactions.length; i++){
        sum += transactions[i].transaction_amount;
    }
    return sum;
}
```

### 2.3 Вычисление суммы по дате 

Функция calculateTotalAmountByDate позволяет вычислить сумму транзакций за указанный период (год, месяц, день). Параметры являются необязательными.

```js
function calculateTotalAmountByDate(transactions, year, month, day){
    let sum = 0;
    if(month < 10){
        month = "0" + month;
    }
    if(day < 10){
        day = "0" + day;
    }
    let pattern = `${year}-${month}-${day}`;
    for (let i = 0; i < transactions.length; i++){
        if(transactions[i].transaction_date == pattern){
            sum += transactions[i].transaction_amount;
        }
    }
    return sum;
}
```
