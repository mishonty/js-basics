// 1. Excellent result
function solve(input) {
    let grade = Number(input[0]);

    if (grade >= 5.5) {
        console.log("Excellent!");
    }
}


// 2. Greater number
function solve(input) {
    a = Number(input[0]);
    b = Number(input[1]);

    if (a > b) {
        console.log(a);
    } else {
        console.log(b);
    }
}


// 3. Even or odd
function solve(input) {
    a = Number(input[0]);

    if (a % 2 == 0) {
        console.log("even");
    }
    else {
        console.log("odd");
    }
}


// 4. Number 100... 200
function solve(input) {
    a = Number(input[0]);

    if (a < 100) {
        console.log("Less than 100");
    } else if (a >= 100 && a <= 200) {
        console.log("Between 100 and 200");
    } else if (a > 200) {
        console.log("Greater than 200");
    }
}


// 5. Password guess
function solve(input) {
    a = input[0];

    if (a == "s3cr3t!P@ssw0rd") {
        console.log("Welcome");
    } else {
        console.log("Wrong password!");
    }
}


// 6. Area of figures
function solve(input) {
    a = input[0];
    b = Number(input[1]);
    c = Number(input[2]);

    if (a == "square") {
        console.log((b * b).toFixed(3));
    } else if (a == "rectangle") {
        console.log((b * c).toFixed(3));
    } else if (a == "circle") {
        console.log(((b * b) * Math.PI).toFixed(3));
    } else if (a == "triangle") {
        console.log(((b * c) / 2).toFixed(3));
    }
}


// *7. Toy shop
function solve(input) {
    puzzle = 2.6;
    doll = 3;
    bear = 4.1;
    minion = 8.2;
    truck = 2;

    price = Number(input[0]);
    puzzleNum = Number(input[1]);
    dollNum = Number(input[2]);
    bearNum = Number(input[3]);
    minionNum = Number(input[4]);
    truckNum = Number(input[5]);

    let totalToys = puzzleNum + dollNum + bearNum + minionNum + truckNum;
    let totalPrice = ((puzzle * puzzleNum) + (doll * dollNum) + (bear * bearNum) + (minion * minionNum) + (truck * truckNum));


    if (totalToys >= 50) {
        totalPrice = totalPrice * 0.75;
    }

    totalPrice = totalPrice * 0.9;

    if (totalPrice >= price) {
        let left = totalPrice - price;
        console.log(`Yes! ${left.toFixed(2)} lv left.`);
    } else {
        let diff = Math.abs(totalPrice - price);
        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`)
    }
}
