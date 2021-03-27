// 1. Numbers from 1 to 100
function solve(input) {
  
    for (let i = 1; i <= 100; i++) {
        console.log(i);
    }
  
}


// 2. Numbers N... 1 
function solve(input) {
    let n = Number(input[0]);

    for (let i = n; i => 1; i--) {
        console.log(i);
    }

}


// 3. Numbers 1... N with step 3
function solve(input) {
    let n = Number(input[0]);

    for (i = 1; i <= n; i += 3) {
        console.log(i);
    }
    
}


// 4. Even powers of 2
function solve(input) {
    let n = Number(input[0]);

    for (i = 0; i <= n; i += 2) {
        let result = Math.pow(2, i);
        console.log(result);
    }

}


// 5. Character sequence
function solve(input) {
    let text = input[0];

    for (i = 0; i < text.length; i++) {
        let ch = text[i];
        console.log(ch);
    }

}


// 6. Vowels sum
function solve(input) {
    let text = input[0];
    let sum = 0;

    for (i = 0; i < text.length; i++) {
        let ch = text[i];
        switch (ch) {
            case "a":
                sum += 1;
                break;
            case "e":
                sum += 2;
                break;
            case "i":
                sum += 3;
                break;
            case "o":
                sum += 4;
                break;
            case "u":
                sum += 5;
                break;
        }  
    }

    console.log(sum);

}


// 7. Sum of numbers
function solve(input) {
    let num = "" + input[0];
    let sum = 0;
    

    for (i = 0; i < num.length; i++) {
        let n = Number(num[i]);
        sum += n;
    }

    console.log(`The sum of the digits is:${sum}`);

}


// 8. Numbers divisible by 9
function solve(input) {
    a = Number(input[0]);
    b = Number(input[1]);
    let sum = 0;

    for (let i = a; i <= b; i++) {
        if (i % 9 === 0) {
            sum += i;
        }
    }

    console.log(`The sum: ${sum}`);

    for (let x = a; x < b; x++) {
        if (x % 9 === 0) {
            console.log(x);
        }
    }
}


// 9. Clever Lilly
function solve(input) {
    age = Number(input[0]);
    washingMachine = Number(input[1]);
    singleToyPrice = Number(input[2]);

    let sumMoney = 0;
    let sumToys = 0;
    let money = 10;

    for (let i = 1; i <= age; i++) {
        if (i % 2 == 1) {
            sumToys++;
        } else {
            sumMoney += money;
            money += 10;
            sumMoney--;
        }
    }

    sumMoney += sumToys * singleToyPrice;

    if (sumMoney >= washingMachine) {
        console.log(`Yes! ${(sumMoney - washingMachine).toFixed(2)}`);
    } else {
        let diff = Math.abs(sumMoney - washingMachine);
        console.log(`No! ${diff.toFixed(2)}`);
    }
}
