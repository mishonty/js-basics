// 1. Old books
/* Ани отива до родния си град след много дълъг период извън страната. 
Прибирайки се вкъщи тя вижда старата библиотека на баба си и си спомня за любимата си книга. 
Помогнете на Ани, като напишете функция в която тя въвежда търсената от нея книга(текст). 
Докато Ани не намери любимата си книга или не провери всички в библиотеката, 
програмата трябва да чете всеки път на нов ред името на всяка следваща книга (текст). 
Книгите в библиотеката са свършили щом получите текст "No More Books".
⦁	Ако не открие книгата да се отпечата на два реда: 
⦁	"The book you search is not here!"
⦁	"You checked {брой} books."
⦁	Ако открие книгата си се отпечатва един ред:
⦁	"You checked {брой} books and found it." */
function solve(input) {
    let book = input[0];
    let index = 1;
    let bookIsFound = false;

    let nextBook = input[index];

    while (nextBook !== "No More Books") {
        if (nextBook === book) {
            bookIsFound = true;
            break;
        }
        index++
        nextBook = input[index];
    }

    if (bookIsFound === false) {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${index - 1} books.`);
    } else {
        console.log(`You checked ${index - 1} books and found it.`);
    }

}

// 2. Exam preparation
/* Напишете функция, в която Марин решава задачи от изпити докато не получи съобщение "Enough" от лектора си. 
При всяка решена задача той получава оценка. 
Функцията трябва да приключи прочитането на данни при команда "Enough" или ако Марин получи определеният брой незадоволителни оценки.
Незадоволителна е всяка оценка, която е по-малка или равна на 4.
Вход
⦁	На първи ред - брой незадоволителни оценки - цяло число в интервала [1…5]
⦁	След това многократно се четат по два реда:
⦁	Име на задача - текст (низ)
⦁	Оценка - цяло число в интервала [2…6]
Изход
⦁	Ако Марин стигне до командата "Enough", отпечатайте на 3 реда: 
⦁	"Average score: {средна оценка}"
⦁	"Number of problems: {броя на всички задачи}"
⦁	"Last problem: {името на последната задача}"
⦁	Ако получи определеният брой незадоволителни оценки:
⦁	"You need a break, {брой незадоволителни оценки} poor grades."
Средната оценка да бъде форматирана до втория знак след десетичната запетая. */



// 3. Vacation
/* Джеси е решила да събира пари за екскурзия и иска от вас да ѝ помогнете да разбере дали ще успее да събере необходимата сума. Тя спестява или харчи част от парите си всеки ден. Ако иска да похарчи повече от наличните си пари, то тя ще похарчи всичко, което има и ще ѝ останат 0 лева.
Вход
От масива се четат:
⦁	Пари нужни за екскурзията - реално число в интервала [1.00.. .25000.00]
⦁	Налични пари - реално число в интервала [0.00... 25000.00]
След това многократно се четат по два реда:
⦁	Вид действие – текст с възможности "spend" и "save".
⦁	Сумата, която ще спести/похарчи - реално число в интервала [0.01… 25000.00]
Изход
Функцията трябва да приключи при следните случаи:
⦁	Ако 5 последователни дни Джеси само харчи, на конзолата да се изпише:
⦁	"You can't save the money."
⦁	"{Общ брой изминали дни}"
⦁	Ако Джеси събере парите за почивката на конзолата се изписва:
⦁	"You saved the money for {общ брой изминали дни} days." */
function solve(input) {
    let moneyForVacation = Number(input[0]);
    let savedMoney = Number(input[1]);

    let days = 0;
    let spendDays = 0;
    let index = 2;

    while (true) {
        let operation = input[index++];
        let amount = Number(input[index]);

        if (operation === "spend") {
            spendDays++;
            days++;
            if (amount > savedMoney) {
                savedMoney = 0;
            } else {
                savedMoney -= amount;
            }
        } else if (operation === "save") {
            spendDays = 0;
            savedMoney += amount;
            days++;
        }

        if (spendDays === 5) {
            console.log(`You can't save the money.`);
            console.log(days);
            break;
        }

        if (savedMoney >= moneyForVacation) {
            console.log(`You saved the money for ${days} days.`);
            break;
        }
        index++;
    }

}


// 4. Walking
/* Габи иска да започне здравословен начин на живот и си е поставила за цел да върви 10 000 стъпки всеки ден. 
Някои дни обаче е много уморена от работа и ще иска да се прибере преди да постигне целта си. 
Напишете функция, която чете от масив по колко стъпки изминава тя всеки път като излиза през деня и когато постигне целта си 
да се изписва "Goal reached! Good job!" и колко стъпки повече е извървяла "{разликата между стъпките} steps over the goal!"
Ако иска да се прибере преди това, тя ще въведе командата "Going home" и ще въведе стъпките, които е извървяла докато се прибира. 
След което, ако не е успяла да постигне целта си, на конзолата трябва да се изпише: "{разликата между стъпките} more steps to reach goal." */
function solve(input) {
    let steps = 0;
    let goingHome = input[input.length - 2];
    let goal = 10000;

    if (goingHome === "Going home") {
        let i = 0;
        while (i < input.length - 2) {
            let currentSteps = Number(input[i]);
            steps += currentSteps;
            i++;
        }
        steps += Number(input[input.length - 1]);
    } else {
        let i = 0;
        while (i < input.length) {
            let currentSteps = Number(input[i]);
            steps += currentSteps;
            i++;
        }
    }

    if (steps >= goal) {
        console.log(`Goal reached! Good job!`);
        console.log(`${steps - goal} steps over the goal!`);
    } else {
        console.log(`${goal - steps} more to reach the goal.`);

    }
}


// 5. Coins
/* Производителите на вендинг машини искали да направят машините си да връщат възможно най-малко монети ресто. 
Напишете функция, която приема сума - рестото, което трябва да се върне и изчислява с колко най-малко монети може да стане това. 
Монетите може да са от 2 лева, 1 лев, 50 стотинки, 20 стотинки, 10 стотинки, 5 стотинки, 2 стотинки или 1 стотинка  */
function solve(input) {
    let money = Number(input[0]) * 100;
    let coins = 0;

    while (money !== 0) {
        if (money - 200 >= 0) {
            coins++;
            money-=200;
        } else if (money - 100 >= 0) {
            coins++;
            money-=100;
        } else if (money - 50 >= 0) {
            coins++;
            money-=50;
        } else if (money - 20 >= 0) {
            coins++;
            money-=20;
        } else if (money - 10 >= 0) {
            coins++;
            money-=10;
        } else if (money - 5 >= 0) {
            coins++;
            money-=5;
        } else if (money - 2 >= 0) {
            coins++;
            money-=2;
        } else if (money - 1 >= 0) {
            coins++;
            money-=1;
        } else {
            break;
        }
    }

    console.log(coins);

}


// 6. Cake
/* Поканени сте на 30-ти рожден ден, на който рожденикът черпи с огромна торта. 
Той обаче не знае колко парчета могат да си вземат гостите от нея. 
Вашата задача е да напишете функция, която изчислява броя на парчетата, които гостите са взели, преди тя да свърши. 
Ще получите размерите на тортата (широчина и дължина – цели числа в интервала [1...1000]) и след това на всеки ред, 
до получаване на командата "STOP" или докато не свърши тортата, броят на парчетата, които гостите вземат от нея. 
Бележка: Едно парче торта е с размер 1х1 см.
Да се отпечата на конзолата един от следните редове:
⦁	"{брой парчета} pieces are left." - ако стигнете до STOP и не са свършили парчетата торта
⦁	"No more cake left! You need {брой недостигащи парчета} pieces more." */
function solve(input) {
    let x = Number(input[0]);
    let y = Number(input[1]);

    let pieces = x * y;
    let piecesAdded = 0;
    let piecesCount = input[2];
    let index = 3;

    while (piecesCount !== "STOP") {
        piecesAdded += Number(piecesCount);

        if (piecesAdded > pieces) {
            break;
        }
        piecesCount = input[index++];

    }
    if (piecesAdded > pieces) {
        console.log(`No more cake left! You need ${piecesAdded - pieces} pieces more.`);
    } else {
        console.log(`${pieces - piecesAdded} pieces are left.`);
    }
    
}
