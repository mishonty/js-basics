// 1. Read text
/* Напишете функция, която чете елементите на масив, докато не получи командата "Stop". */
function solve(input) {
    let index = 0;

    let command = input[index];
    index++;

    while (command !== "Stop") {
        let name = command;

        console.log(name);

        command = input[index];
        index++;

    }

}


// 2. Password
/* Напишете функция, която първоначално прочита име и парола на потребителски профил. След това чете парола за вход, при въвеждане на грешна парола, потребителя да се подкани да въведе нова парола. */
function solve(input) {
    let username = input[0];
    let password = input[1];

    let index = 2;
    let credentials = input[index];
    index++;

    while (credentials !== password) {
        credentials = input[index];
        index++;
    }

    console.log(`Welcome ${username}!`);

}


// 3. Sum numbers
/* Напишете функция, която чете цяло число от масив и на всеки следващ ред цели числа, докато тяхната сума стане по-голяма или равна на първоначалното число. След приключване да се отпечата сумата на въведените числа. */
function solve(input) {
    let n = Number(input[0]);

    let index = 1;
    let result = 0;

    while (result < n) {
        num = Number(input[index]);
        index++;

        result += num;


    }

    console.log(result);

}


// 4. Sequence 2k + 1
/* Напишете програма, която чете число n, въведено от потребителя и отпечатва всички числа ≤ n от редицата: 1, 3, 7, 15, 31, …. Всяко следващо число се изчислява като умножим предишното с 2 и добавим 1. */
function solve(input) {
    let n = Number(input[0]);

    let index = 1;

    while (index <= n) {
        console.log(index);

        index = index * 2 + 1;

    }

}


// 5. Account balance
/* Напишете функция, която пресмята колко общо пари има в сметката, след като направите определен брой вноски. Във всеки елемент ще получавате сумата, която трябва да внесете в сметката, до получаване на команда "NoMoreMoney" . При всяка получена сума на конзолата трябва да се извежда "Increase: " + сумата и тя да се прибавя в сметката. Ако получите число по-малко от 0 на конзолата трябва да се изведе "Invalid operation!" и програмата да приключи. Когато програмата приключи трябва да се принтира "Total: " + общата сума в сметката.
Всички суми, които се печатат, трябва да се закръглят до втория знак след десетичната запетая. */
function solve(input) {
    let deposit = input[0];
    let index = 1;
    let balance = 0;


    while (deposit !== "NoMoreMoney") {
        let amount = Number(deposit);
        if (deposit < 0) {
            console.log("Invalid operation!");
            break;
        }
        balance += amount;

        console.log(`Increase: ${amount.toFixed(2)}`);
        deposit = input[index];
        index++;

    }
    console.log(`Total: ${balance.toFixed(2)}`);

}


// 6. Max number
/* Напишете функция, която до получаване на командата "Stop", чете цели числа и намира най-голямото измежду тях. Въвежда се по едно число на ред. */
function solve(input) {
    let index = 0;
    let command = input[index];
    index++;

    let maxNumber = Number.MIN_SAFE_INTEGER;

    while (command !== "Stop") {
        let num = Number(command);
        if (maxNumber < num) {
            maxNumber = num;
        }
        command = input[index];
        index++;
    }

    console.log(maxNumber);

}


// 7. Min number
/* Напишете функция, която до получаване на командата "Stop", чете цели числа, и намира най-малкото измежду тях. Въвежда се по едно число на ред. */
function solve(input) {
    let index = 0;
    let command = input[index];
    index++;

    let minNumber = Number.MAX_SAFE_INTEGER;

    while (command !== "Stop") {
        num = Number(command);
        if (minNumber > num) {
            minNumber = num;
        }
        command = input[index];
        index++;
    }

    console.log(minNumber);

}


// 8. Graduation pt. 2
/* Напишете функция, която изчислява средната оценка на ученик от цялото му обучение. 
На първия ред ще получите името на ученика, а на всеки следващ ред неговите годишни оценки. 
Ученикът преминава в следващия клас, ако годишната му оценка е по-голяма или равна на 4.00. 
Ако ученикът бъде скъсан повече от един път, то той бива изключен и програмата приключва, като се отпечатва името на ученика и в кой клас бива изключен.
При успешно завършване на 12-ти клас да се отпечата : 
"{име на ученика} graduated. Average grade: {средната оценка от цялото обучение}"
В случай, че ученикът е изключен от училище, да се отпечата:
"{име на ученика} has been excluded at {класа, в който е бил изключен} grade"
Стойността трябва да бъде форматирана до втория знак след десетичната запетая. */
function solve(input) {
    let index = 0;
    let name = input[index];
    index++;

    let grade = 1;
    let average = 0;
    let fail = 0;

    while (grade <= 12) {
        let gpa = Number(input[index]);
        index++;

        if (gpa >= 4.00) {
            grade++;
            average += grade;
            continue;
        } else {
            fail++;
        }

        if (fail > 1) {
            console.log(`${name} has been excluded at ${grade} grade`);
            break;
        }

    }

    average = average / 12;

    console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`);

}


