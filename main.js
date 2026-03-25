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

function getUniqueTransactionTypes(transactions){
    const transactionsSet = new Set();
    for(let i = 0; i < transactions.length; i++){
        transactionsSet.add(transactions[i].transaction_type);
    }
    return [...transactionsSet];
}

function calculateTotalAmount(transactions){
    let sum = 0;
    for (let i = 0; i < transactions.length; i++){
        sum += transactions[i].transaction_amount;
    }
    return sum;
}

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

function getTransactionByType(transactions, type){
    let results = [];
    for (let i = 0; i < transactions.length; i++){
        if(transactions[i].transaction_type == type){
            results.push(transactions[i]);
        }
    }
    return results;
}

// short version
const getTransactionByType_short = (transactions, type) => transactions.filter(transactions => transactions.transaction_type == type);

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

function getTransactionsByMerchant(transactions, merchantName){
    let result = [];
    for(let i = 0; i < transactions.length; i++){
        if(transactions[i].merchant_name == merchantName){
            result.push(transactions[i]);
        }
    }
    return result;
}

// short version
const getTransactionsByMerchant_short = (transactions, merchantName) => transactions.filter(transactions => transactions.merchant_name == merchantName);

function calculateAverageTransactionAmount(transactions){
    let sum = 0;
    if (transactions.length === 0) return 0;
    for(let i = 0; i < transactions.length; i++){
        sum += transactions[i].transaction_amount;
    } 
    let average = sum / transactions.length;
    return average;
}

function getTransactionsByAmountRange(transactions, minAmount, maxAmount){
    let result = [];
    for(let i = 0; i < transactions.length; i++){
        if(transactions[i].transaction_amount >= minAmount && transactions[i].transaction_amount <= maxAmount){
            result.push(transactions[i]);
        }
    }
    return result;
}

function calculateTotalDebitAmount(transactions){
    let sum = 0;
    for(let i = 0; i < transactions.length; i++){
        if(transactions[i].transaction_type === 'debit'){
            sum += transactions[i].transaction_amount;
        }
    }
    return sum;
}
// short version
function calculateTotalDebitAmount_short(transactions){
    let result = transactions.filter(transactions => transactions.transaction_type == 'debit')
    let sum = result.reduce((total, currentValue) => total += currentValue.transaction_amount, 0);
    return sum;
}

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

// short
const findTransactionById = (transactions, id) => 
    transactions.find(t => String(t.transaction_id) === String(id)) || null;

function mapTransactionDescriptions(transactions){
    let descriptions = [];
    for(let i = 0; i < transactions.length; i++){
        descriptions.push(transactions[i].transaction_description);
    }
    return descriptions;
}

// console.log(getTransactionByType_short(transactions, 'debit'))

// console.log(getUniqueTransactionTypes(transactions))

// console.log(calculateTotalAmount(transactions))

// console.log(calculateTotalAmountByDate(transactions, 2019, 1, 11))

// console.log(calculateTotalAmountByDate(transactions, 2019, undefined, 11))

// console.log(getTransactionByType(transactions, 'debit'))

// console.log(getTransactionsInDateRange(transactions, '2019-01-09', '2019-01-11'))

console.log(calculateTotalDebitAmount_short(transactions))

// console.log(getTransactionsByMerchant(transactions, 'CinemaXYZ'))

// console.log(calculateAverageTransactionAmount(transactions))

// console.log(getTransactionsByAmountRange(transactions, 40, 80))

// console.log(calculateTotalDebitAmount(transactions))

// console.log(findMostTransactionsMonth(transactions))

// console.log(findMostDebitTransactionMonth(transactions))

// console.log(mostTransactionTypes(transactions))

// console.log(getTransactionsBeforeDate(transactions, '2019-01-11'))

// console.log(findTransactionById(transactions, 13))

// console.log(mapTransactionDescriptions(transactions));

// const transactions1 = [];

// console.log(getUniqueTransactionTypes(transactions1))

// console.log(calculateTotalAmount(transactions1))

// console.log(calculateTotalAmountByDate(transactions1, 2019, 1, 11))

// console.log(calculateTotalAmountByDate(transactions1, 2019, 1))

// console.log(getTransactionByType(transactions1, 'debit'))

// console.log(getTransactionsInDateRange(transactions1, '2019-01-09', '2019-01-11'))

// console.log(getTransactionsByMerchant(transactions1, 'CinemaXYZ'))

// console.log(calculateAverageTransactionAmount(transactions1))

// console.log(getTransactionsByAmountRange(transactions1, 40, 80))

// console.log(calculateTotalDebitAmount(transactions1))

// console.log(findMostTransactionsMonth(transactions1))

// console.log(findMostDebitTransactionMonth(transactions1))

// console.log(mostTransactionTypes(transactions1))

// console.log(getTransactionsBeforeDate(transactions1, '2019-01-11'))

// console.log(findTransactionById(transactions1, 13))

// console.log(mapTransactionDescriptions(transactions1));

// const transactions2 = [
//     {
//       transaction_id: "10",
//       transaction_date: "2019-01-10",
//       transaction_amount: 20.0,
//       transaction_type: "credit",
//       transaction_description: "Cashback reward",
//       merchant_name: "BankXYZ",
//       card_type: "Visa",
//     },
// ];

// console.log(getUniqueTransactionTypes(transactions2))

// console.log(calculateTotalAmount(transactions2))

// console.log(calculateTotalAmountByDate(transactions2, 2019, 1, 11))

// console.log(getTransactionByType(transactions2, 'debit'))

// console.log(getTransactionsInDateRange(transactions2, '2019-01-09', '2019-01-11'))

// console.log(getTransactionsByMerchant(transactions2, 'CinemaXYZ'))

// console.log(calculateAverageTransactionAmount(transactions2))

// console.log(getTransactionsByAmountRange(transactions2, 40, 80))

// console.log(calculateTotalDebitAmount(transactions2))

// console.log(findMostTransactionsMonth(transactions2))

// console.log(findMostDebitTransactionMonth(transactions2))

// console.log(mostTransactionTypes(transactions2))

// console.log(getTransactionsBeforeDate(transactions2, '2019-01-11'))

// console.log(findTransactionById(transactions2, 13))

// console.log(mapTransactionDescriptions(transactions2));