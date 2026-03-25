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

    for (let i = 0; i < transactions.length; i++){
        const date = new Date(transactions[i].transaction_date);

        const y = date.getFullYear();
        const m = date.getMonth() + 1;
        const d = date.getDate();

        if ((year === undefined || y === year) &&
            (month === undefined || m === month) &&
            (day === undefined || d === day)) {

            sum += transactions[i].transaction_amount;
        }
    }

    return sum;
}
```

### 2.4 Фильтрация по типу транзакции

Функция getTransactionByType возвращает массив транзакций заданного типа (debit или credit).

```js
function getTransactionByType(transactions, type){
    let results = [];
    for (let i = 0; i < transactions.length; i++){
        if(transactions[i].transaction_type == type){
            results.push(transactions[i]);
        }
    }
    return results;
}
```

### 2.5 Фильтрация по диапазону дат

Функция getTransactionsInDateRange возвращает транзакции, дата которых находится в заданном диапазоне.

```js
function getTransactionsInDateRange(transactions, startDate, endDate){
    const start = new Date(startDate);
    const end = new Date(endDate);
    let result = [];
    for(let i = 0; i < transactions.length; i++){
        const tDate = new Date(transactions[i].transaction_date);
        if(tDate >= start && tDate <= end){
            result.push(transactions[i]);
        }
    }
    return result;
}
```

### 2.6 Фильтрация по магазину

Функция getTransactionsByMerchant возвращает транзакции по заданному merchant_name.

```js
function getTransactionsByMerchant(transactions, merchantName){
    let result = [];
    for(let i = 0; i < transactions.length; i++){
        if(transactions[i].merchant_name == merchantName){
            result.push(transactions[i]);
        }
    }
    return result;
}
```

### 2.7 Среднее значение транзакций

Функция calculateAverageTransactionAmount вычисляет среднее значение всех транзакций.

```js
function calculateAverageTransactionAmount(transactions){
    let sum = 0;
    if (transactions.length === 0) return 0;
    for(let i = 0; i < transactions.length; i++){
        sum += transactions[i].transaction_amount;
    } 
    let average = sum / transactions.length;
    return average;
}
```

### 2.8 Фильтрация по диапазону суммы

Функция getTransactionsByAmountRange возвращает транзакции, сумма которых находится в заданном диапазоне.

```js
function getTransactionsByAmountRange(transactions, minAmount, maxAmount){
    let result = [];
    for(let i = 0; i < transactions.length; i++){
        if(transactions[i].transaction_amount >= minAmount && transactions[i].transaction_amount <= maxAmount){
            result.push(transactions[i]);
        }
    }
    return result;
}
```

### 2.9 Сумма дебетовых транзакций

Функция calculateTotalDebitAmount вычисляет сумму всех транзакций типа debit.

```js
function calculateTotalDebitAmount(transactions){
    let sum = 0;
    for(let i = 0; i < transactions.length; i++){
        if(transactions[i].transaction_type === 'debit'){
            sum += transactions[i].transaction_amount;
        }
    }
    return sum;
}
```

### 2.10 Месяц с наибольшим количеством транзакций

Функция findMostTransactionsMonth определяет месяц, в котором было совершено наибольшее количество транзакций.

```js
function findMostTransactionsMonth(transactions){
    let maxTransaction;
    let maxCount = 0;
    for(let i = 0; i < transactions.length; i++){
        let count = 1;
        for(let j = i + 1; j < transactions.length; j++){
            if(transactions[i].transaction_date.slice(0, 7) === transactions[j].transaction_date.slice(0, 7)){
                count++;
            }
        }
        if(maxCount < count){
            maxCount = count;
            maxTransaction = transactions[i].transaction_date.slice(5, 7);
        }
    }
    return maxTransaction;
}
```

### 2.11 Месяц с наибольшим количеством debit-транзакций

Функция findMostDebitTransactionMonth определяет месяц с максимальным количеством дебетовых операций.

```js
function findMostDebitTransactionMonth(transactions){
    let maxTransaction;
    let maxCount = 0;
    for(let i = 0; i < transactions.length; i++){
        let count = 1;
        for(let j = i + 1; j < transactions.length; j++){
            if(transactions[i].transaction_type === 'debit'){
                if(transactions[i].transaction_date.slice(0, 7) === transactions[j].transaction_date.slice(0, 7)){
                    count++;
                }
            }
        }
        if(maxCount < count){
            maxCount = count;
            maxTransaction = transactions[i].transaction_date.slice(5, 7);
        }
    }
    return maxTransaction;
}
```

### 2.12 Определение преобладающего типа транзакций

Функция mostTransactionTypes сравнивает количество debit и credit транзакций и возвращает результат:

* debit
* credit
* equal

```js
function mostTransactionTypes(transactions){
    let countDebit = 0;
    let countCredit = 0;
    for(let i = 0; i < transactions.length; i++){
        if(transactions[i].transaction_type === 'debit'){
            countDebit++;
        }
        if(transactions[i].transaction_type === 'credit'){
            countCredit++;
        }
    }
    if(countCredit > countDebit){
        return 'credit';
    }
    if(countDebit > countCredit){
        return 'debit';
    }
    return 'equal';
}
```

### 2.13 Транзакции до указанной даты

Функция getTransactionsBeforeDate возвращает все транзакции, совершённые до заданной даты.

```js
function getTransactionsBeforeDate(transactions, date){
    let results = [];
    const user_date = new Date(date);
    for(let i = 0; i < transactions.length; i++){
        const tDate = new Date(transactions[i].transaction_date);
        if(user_date > tDate){
            results.push(transactions[i]);
        }
    }
    return results;
}
```

### 2.14 Поиск транзакции по ID

Функция findTransactionById выполняет поиск транзакции по уникальному идентификатору.

```js
const findTransactionById = (transactions, id) => 
    transactions.find(t => String(t.transaction_id) === String(id)) || null;
```

### 2.15 Получение описаний транзакций

Функция mapTransactionDescriptions возвращает массив, содержащий только описания транзакций.

```js
function mapTransactionDescriptions(transactions){
    let descriptions = [];
    for(let i = 0; i < transactions.length; i++){
        descriptions.push(transactions[i].transaction_description);
    }
    return descriptions;
}
```


## 3. Тестирование функций

### 3.1. Тестирование на исходном массиве транзакций

```js
console.log(getUniqueTransactionTypes(transactions))

console.log(calculateTotalAmount(transactions))

console.log(calculateTotalAmountByDate(transactions, 2019, 1, 11))

console.log(calculateTotalAmountByDate(transactions, 2019, undefined, 11))

console.log(getTransactionByType(transactions, 'debit'))

console.log(getTransactionsInDateRange(transactions, '2019-01-09', '2019-01-11'))

console.log(getTransactionsByMerchant(transactions, 'CinemaXYZ'))

console.log(calculateAverageTransactionAmount(transactions))

console.log(getTransactionsByAmountRange(transactions, 40, 80))

console.log(calculateTotalDebitAmount(transactions))

console.log(findMostTransactionsMonth(transactions))

console.log(findMostDebitTransactionMonth(transactions))

console.log(mostTransactionTypes(transactions))

console.log(getTransactionsBeforeDate(transactions, '2019-01-11'))

console.log(findTransactionById(transactions, 13))

console.log(mapTransactionDescriptions(transactions));
```
#### Результат
```js
[ 'debit', 'credit' ]
860
65
130
[
  {
    transaction_id: '1',
    transaction_date: '2019-01-01',
    transaction_amount: 100,
    transaction_type: 'debit',
    transaction_description: 'Payment for groceries',
    merchant_name: 'SuperMart',
    card_type: 'Visa'
  },
  {
    transaction_id: '3',
    transaction_date: '2019-01-03',
    transaction_amount: 75,
    transaction_type: 'debit',
    transaction_description: 'Dinner with friends',
    merchant_name: 'RestaurantABC',
    card_type: 'Amex'
  },
  {
    transaction_id: '4',
    transaction_date: '2019-01-04',
    transaction_amount: 120,
    transaction_type: 'debit',
    transaction_description: 'Shopping at Mall',
    merchant_name: 'FashionStoreXYZ',
    card_type: 'Discover'
  },
  {
    transaction_id: '6',
    transaction_date: '2019-01-06',
    transaction_amount: 60,
    transaction_type: 'debit',
    transaction_description: 'Gasoline refill',
    merchant_name: 'GasStationXYZ',
    card_type: 'MasterCard'
  },
  {
    transaction_id: '7',
    transaction_date: '2019-01-07',
    transaction_amount: 40,
    transaction_type: 'debit',
    transaction_description: 'Lunch with colleagues',
    merchant_name: 'Cafe123',
    card_type: 'Visa'
  },
  {
    transaction_id: '8',
    transaction_date: '2019-01-08',
    transaction_amount: 90,
    transaction_type: 'debit',
    transaction_description: 'Movie tickets',
    merchant_name: 'CinemaXYZ',
    card_type: 'Amex'
  },
  {
    transaction_id: '9',
    transaction_date: '2019-01-09',
    transaction_amount: 150,
    transaction_type: 'debit',
    transaction_description: 'Weekend getaway',
    merchant_name: 'ResortABC',
    card_type: 'Discover'
  },
  {
    transaction_id: '11',
    transaction_date: '2019-01-11',
    transaction_amount: 65,
    transaction_type: 'debit',
    transaction_description: 'Dinner with family',
    merchant_name: 'FamilyRestaurant',
    card_type: 'MasterCard'
  },
  {
    transaction_id: '13',
    transaction_date: '2019-02-11',
    transaction_amount: 65,
    transaction_type: 'debit',
    transaction_description: 'Dinner with family',
    merchant_name: 'FamilyRestaurant',
    card_type: 'MasterCard'
  }
]
[
  {
    transaction_id: '9',
    transaction_date: '2019-01-09',
    transaction_amount: 150,
    transaction_type: 'debit',
    transaction_description: 'Weekend getaway',
    merchant_name: 'ResortABC',
    card_type: 'Discover'
  },
  {
    transaction_id: '10',
    transaction_date: '2019-01-10',
    transaction_amount: 20,
    transaction_type: 'credit',
    transaction_description: 'Cashback reward',
    merchant_name: 'BankXYZ',
    card_type: 'Visa'
  },
  {
    transaction_id: '11',
    transaction_date: '2019-01-11',
    transaction_amount: 65,
    transaction_type: 'debit',
    transaction_description: 'Dinner with family',
    merchant_name: 'FamilyRestaurant',
    card_type: 'MasterCard'
  }
]
[
  {
    transaction_id: '8',
    transaction_date: '2019-01-08',
    transaction_amount: 90,
    transaction_type: 'debit',
    transaction_description: 'Movie tickets',
    merchant_name: 'CinemaXYZ',
    card_type: 'Amex'
  }
]
71.66666666666667
[
  {
    transaction_id: '2',
    transaction_date: '2019-01-02',
    transaction_amount: 50,
    transaction_type: 'credit',
    transaction_description: 'Refund for returned item',
    merchant_name: 'OnlineShop',
    card_type: 'MasterCard'
  },
  {
    transaction_id: '3',
    transaction_date: '2019-01-03',
    transaction_amount: 75,
    transaction_type: 'debit',
    transaction_description: 'Dinner with friends',
    merchant_name: 'RestaurantABC',
    card_type: 'Amex'
  },
  {
    transaction_id: '6',
    transaction_date: '2019-01-06',
    transaction_amount: 60,
    transaction_type: 'debit',
    transaction_description: 'Gasoline refill',
    merchant_name: 'GasStationXYZ',
    card_type: 'MasterCard'
  },
  {
    transaction_id: '7',
    transaction_date: '2019-01-07',
    transaction_amount: 40,
    transaction_type: 'debit',
    transaction_description: 'Lunch with colleagues',
    merchant_name: 'Cafe123',
    card_type: 'Visa'
  },
  {
    transaction_id: '11',
    transaction_date: '2019-01-11',
    transaction_amount: 65,
    transaction_type: 'debit',
    transaction_description: 'Dinner with family',
    merchant_name: 'FamilyRestaurant',
    card_type: 'MasterCard'
  },
  {
    transaction_id: '13',
    transaction_date: '2019-02-11',
    transaction_amount: 65,
    transaction_type: 'debit',
    transaction_description: 'Dinner with family',
    merchant_name: 'FamilyRestaurant',
    card_type: 'MasterCard'
  }
]
765
01
01
debit
[
  {
    transaction_id: '1',
    transaction_date: '2019-01-01',
    transaction_amount: 100,
    transaction_type: 'debit',
    transaction_description: 'Payment for groceries',
    merchant_name: 'SuperMart',
    card_type: 'Visa'
  },
  {
    transaction_id: '2',
    transaction_date: '2019-01-02',
    transaction_amount: 50,
    transaction_type: 'credit',
    transaction_description: 'Refund for returned item',
    merchant_name: 'OnlineShop',
    card_type: 'MasterCard'
  },
  {
    transaction_id: '3',
    transaction_date: '2019-01-03',
    transaction_amount: 75,
    transaction_type: 'debit',
    transaction_description: 'Dinner with friends',
    merchant_name: 'RestaurantABC',
    card_type: 'Amex'
  },
  {
    transaction_id: '4',
    transaction_date: '2019-01-04',
    transaction_amount: 120,
    transaction_type: 'debit',
    transaction_description: 'Shopping at Mall',
    merchant_name: 'FashionStoreXYZ',
    card_type: 'Discover'
  },
  {
    transaction_id: '5',
    transaction_date: '2019-01-05',
    transaction_amount: 25,
    transaction_type: 'credit',
    transaction_description: 'Returned defective product',
    merchant_name: 'ElectronicsShop',
    card_type: 'Visa'
  },
  {
    transaction_id: '6',
    transaction_date: '2019-01-06',
    transaction_amount: 60,
    transaction_type: 'debit',
    transaction_description: 'Gasoline refill',
    merchant_name: 'GasStationXYZ',
    card_type: 'MasterCard'
  },
  {
    transaction_id: '7',
    transaction_date: '2019-01-07',
    transaction_amount: 40,
    transaction_type: 'debit',
    transaction_description: 'Lunch with colleagues',
    merchant_name: 'Cafe123',
    card_type: 'Visa'
  },
  {
    transaction_id: '8',
    transaction_date: '2019-01-08',
    transaction_amount: 90,
    transaction_type: 'debit',
    transaction_description: 'Movie tickets',
    merchant_name: 'CinemaXYZ',
    card_type: 'Amex'
  },
  {
    transaction_id: '9',
    transaction_date: '2019-01-09',
    transaction_amount: 150,
    transaction_type: 'debit',
    transaction_description: 'Weekend getaway',
    merchant_name: 'ResortABC',
    card_type: 'Discover'
  },
  {
    transaction_id: '10',
    transaction_date: '2019-01-10',
    transaction_amount: 20,
    transaction_type: 'credit',
    transaction_description: 'Cashback reward',
    merchant_name: 'BankXYZ',
    card_type: 'Visa'
  }
]
{
  transaction_id: '13',
  transaction_date: '2019-02-11',
  transaction_amount: 65,
  transaction_type: 'debit',
  transaction_description: 'Dinner with family',
  merchant_name: 'FamilyRestaurant',
  card_type: 'MasterCard'
}
[
  'Payment for groceries',
  'Refund for returned item',
  'Dinner with friends',
  'Shopping at Mall',
  'Returned defective product',
  'Gasoline refill',
  'Lunch with colleagues',
  'Movie tickets',
  'Weekend getaway',
  'Cashback reward',
  'Dinner with family',
  'Dinner with family'
]
```

### 3.2. Тестирование на пустом массиве

```js
const transactions1 = [];

console.log(getUniqueTransactionTypes(transactions1))

console.log(calculateTotalAmount(transactions1))

console.log(calculateTotalAmountByDate(transactions1, 2019, 1, 11))

console.log(calculateTotalAmountByDate(transactions1, 2019, 1))

console.log(getTransactionByType(transactions1, 'debit'))

console.log(getTransactionsInDateRange(transactions1, '2019-01-09', '2019-01-11'))

console.log(getTransactionsByMerchant(transactions1, 'CinemaXYZ'))

console.log(calculateAverageTransactionAmount(transactions1))

console.log(getTransactionsByAmountRange(transactions1, 40, 80))

console.log(calculateTotalDebitAmount(transactions1))

console.log(findMostTransactionsMonth(transactions1))

console.log(findMostDebitTransactionMonth(transactions1))

console.log(mostTransactionTypes(transactions1))

console.log(getTransactionsBeforeDate(transactions1, '2019-01-11'))

console.log(findTransactionById(transactions1, 13))

console.log(mapTransactionDescriptions(transactions1));
```
#### Результат
```js
[]
0
0
0
[]
[]
[]
0
[]
0
undefined
undefined
equal
[]
null
[]
[ 'credit' ]
20
0
[]
```

### 3.3. Тестирование на массиве с одной транзакцией

```js
const transactions2 = [
    {
      transaction_id: "10",
      transaction_date: "2019-01-10",
      transaction_amount: 20.0,
      transaction_type: "credit",
      transaction_description: "Cashback reward",
      merchant_name: "BankXYZ",
      card_type: "Visa",
    },
];

console.log(getUniqueTransactionTypes(transactions2))

console.log(calculateTotalAmount(transactions2))

console.log(calculateTotalAmountByDate(transactions2, 2019, 1, 11))

console.log(getTransactionByType(transactions2, 'debit'))

console.log(getTransactionsInDateRange(transactions2, '2019-01-09', '2019-01-11'))

console.log(getTransactionsByMerchant(transactions2, 'CinemaXYZ'))

console.log(calculateAverageTransactionAmount(transactions2))

console.log(getTransactionsByAmountRange(transactions2, 40, 80))

console.log(calculateTotalDebitAmount(transactions2))

console.log(findMostTransactionsMonth(transactions2))

console.log(findMostDebitTransactionMonth(transactions2))

console.log(mostTransactionTypes(transactions2))

console.log(getTransactionsBeforeDate(transactions2, '2019-01-11'))

console.log(findTransactionById(transactions2, 13))

console.log(mapTransactionDescriptions(transactions2));
```
#### Результат

```js
[
  {
    transaction_id: '10',
    transaction_date: '2019-01-10',
    transaction_amount: 20,
    transaction_type: 'credit',
    transaction_description: 'Cashback reward',
    merchant_name: 'BankXYZ',
    card_type: 'Visa'
  }
]
[]
20
[]
0
01
01
credit
[
  {
    transaction_id: '10',
    transaction_date: '2019-01-10',
    transaction_amount: 20,
    transaction_type: 'credit',
    transaction_description: 'Cashback reward',
    merchant_name: 'BankXYZ',
    card_type: 'Visa'
  }
]
null
[ 'Cashback reward' ]
```

### Какие методы массивов можно использовать для обработки объектов в JavaScript?

Для обработки массивов объектов часто используют методы forEach, map, filter, find, some, every и reduce: forEach выполняет действие для каждого элемента, map создаёт новый массив с преобразованными объектами, filter отбирает объекты по условию, find возвращает первый подходящий объект, some и every проверяют выполнение условий, а reduce позволяет агрегировать данные, например, вычислять сумму или группировать элементы.

### Как сравнивать даты в строковом формате в JavaScript?

Даты в строковом формате лучше всего сравнивать, предварительно преобразовав их в объекты Date, после чего можно использовать обычные операторы сравнения (<, >, <=, >=), так как объекты Date сравниваются по числовому значению времени; также корректное сравнение возможно для строк формата YYYY-MM-DD, так как они лексикографически упорядочены, но более надёжным способом остаётся использование Date.

### В чем разница между map(), filter() и reduce() при работе с массивами объектов?

Метод map используется для преобразования каждого элемента массива и возвращает новый массив той же длины, filter отбирает элементы по условию и возвращает новый массив, длина которого может быть меньше, а reduce последовательно обрабатывает элементы, накапливая результат в аккумуляторе и возвращая одно итоговое значение, например сумму, объект или массив.

# Вывод

В ходе выполнения лабораторной работы были изучены основы работы с массивами, объектами и функциями в JavaScript. Были реализованы различные методы обработки данных, включая фильтрацию, поиск, агрегацию и анализ транзакций. Особое внимание было уделено использованию функций обратного вызова и работе с датами. Полученные знания позволяют эффективно работать с коллекциями данных и разрабатывать более сложные приложения.
