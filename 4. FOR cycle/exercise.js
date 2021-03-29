// 1. Numbers ending in 7
function solve(input) {

    for (let i = 7; i <= 997; i++) {
        if (i % 10 === 7) {
            console.log(i);
        }
    }

}

    
// 2. Multiplication table
function solve(input) {
    n = Number(input[0]);

    for (let i = 1; i <= 10; i++) {
        console.log(`${i} * ${n} = ${i*n}`);
    }

}


// 3. Leap years
function solve(input) {
    startYear = Number(input[0]);
    endYear = Number(input[1]);

    for (let i = startYear; i <= endYear; i += 4) {
        console.log(i);
    }

}


// 4. Factorial
function solve(input) {
    n = Number(input[0]);

    let result = 1;

    for (let i = 1; i <= n; i++) {
        result *=i;
    }

    console.log(result);

}


// 5. Count of words
function solve(input) {
    message = input[0];

    let stringL = message.length;
    let spaceC = 0;

    for (let i = 0; i <stringL; i++) {
        if (message[i] === " ") {
            spaceC++;
        }
    }

    let wordsC = spaceC + 1;
    
    if (wordsC > 10) {
        console.log(`The message is too long to be send! Has ${wordsC} words.`);
    } else {
        console.log(`The message was sent successfully!`);
    }
  
}


// *6. Histogram
function solve(input) {
    n = Number(input[0]);
    
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for (let i = 1; i <= n; i++) {
        let currentNumber = Number(input[i]);

        if (currentNumber < 200) {
            p1++;
        } else if (currentNumber <= 399) {
            p2++;
        } else if (currentNumber <= 599) {
            p3++;
        } else if (currentNumber <= 799) {
            p4++;
        } else if (currentNumber >= 800) {
            p5++;
        }
    }

    console.log(`${(p1 / n * 100).toFixed(2)}%`);
    console.log(`${(p2 / n * 100).toFixed(2)}%`);
    console.log(`${(p3 / n * 100).toFixed(2)}%`);
    console.log(`${(p4 / n * 100).toFixed(2)}%`);
    console.log(`${(p5 / n * 100).toFixed(2)}%`);

}


// *7. Divide without reminder
function solve(input) {
    n = Number(input[0]);

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;

    let inputLength = input.length;

    for (i = 1; i < inputLength; i++) {

        let num = Number(input[i]);

        if (num % 2 === 0) {
            p1++;
        }
        
        if (num % 3 === 0) {
            p2++;
        }
        
        if (num % 4 === 0) {
            p3++;
        }

    }

    console.log(`${((p1 / n) * 100).toFixed(2)}%`);
    console.log(`${((p2 / n) * 100).toFixed(2)}%`);
    console.log(`${((p3 / n) * 100).toFixed(2)}%`);

}


// *8. Salary
function solve(input) {

    let tabsNumber = Number(input[0]);
    let salary = Number(input[1]);

    let penalties = 0;
    let inputLength = input.length;

    for (let i = 1; i <= inputLength; i++) {

        let tab = input[i];

        if (tab === "Facebook") {
            penalties += 150;
        } else if (tab === "Instagram") {
            penalties += 100;
        } else if (tab === "Reddit") {
            penalties += 50;
        }
    }

    if (salary <= penalties) {
        console.log(`You have lost your salary.`);
    } else {
        console.log((salary - penalties).toFixed(0));
    }

}
