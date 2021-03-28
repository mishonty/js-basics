// 1. Numbers ending in 7



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


// 6. Histogram
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


// 7. Divide without reminder