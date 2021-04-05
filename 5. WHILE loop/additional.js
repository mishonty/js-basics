// 1.
// 2.
/* На благотворително събитие плащанията за закупените продукти винаги се редуват: плащане в брой и плащане с карта. 
Установени са следните правила за заплащане:
Ако продуктът надвишава 100лв., за него не може да се плати в брой
Ако продуктът е на цена под 10лв., за него не може да се плати с кредитна карта
Програмата приключва или след като получим команда "End" или след като средствата бъдат събрани.
Вход
От конзолата се четат:
Сумата, която се очаква да бъде събрана от продажбите - цяло число в интервала [1 ... 10000]
На всеки следващ ред, до получаване на командата "End" или докато не се съберат нужните средства: 
цените на предметите, които ще бъдат закупени - цяло число в интервала [1 ... 500]
Изход
На конзолата да се отпечата:
При успешна транзакция: "Product sold!"
При неуспешна транзакция: "Error in transaction!"
Ако сумата на всички закупени продукти надвиши или достигне очакваната сума, програмата трябва да приключи и на конзолата да се изпишат два реда:
"Average CS: {средно плащане в кеш на човек}"
"Average CC: {средно плащане с карта на човек}" 
Плащанията трябва да бъдат форматирани до втората цифра след десетичния знак.
При получаване на команда "End", да се изпише един ред:
"Failed to collect required money for charity." */
function solve(input) {
    let expectedSum = input[0];
    let i = 1;
    let command = input[i];

    let totalSumCash = 0;
    let totalSumCard = 0;
    let cashTransaction = 0;
    let cardTransaction = 0;
    let sum = 0;


    while (command !== "End" && sum < expectedSum) {
        let itemPrice = Number(input[i]);

        if (input[i] === "End") {
            console.log(`Failed to collect required money for charity.`);
            break;
        }
        i++; /////// ЗАЩО

        if (i % 2 === 0) {
            if (itemPrice > 100) {
                console.log(`Error in transaction!`);
            } else {
                console.log(`Product sold!`);
                cashTransaction++;;
                totalSumCash += itemPrice;
                sum = totalSumCash + totalSumCard;
            }
        } else {
            if (itemPrice < 10) {
                console.log(`Error in transaction!`);
            } else {
                console.log(`Product sold!`);
                cardTransaction++;
                totalSumCard += itemPrice;
                sum = totalSumCash + totalSumCard;
            }
        }

        if (sum >= expectedSum) {
            let averageCash = totalSumCash / cashTransaction;
            let averageCard = totalSumCard / cardTransaction;
            console.log(`Average CS: ${averageCash.toFixed(2)}`);
            console.log(`Average CC: ${averageCard.toFixed(2)}`);

        }
    }
}
