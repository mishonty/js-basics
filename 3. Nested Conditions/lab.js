// 1. Day of week
function solve(input) {
    dayNum = Number(input[0]);
    let day = 0;

    switch (dayNum) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Error");
            break;
    }
}


// 2. Weekend or working day
function solve(input) {
    let day = input[0];

    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            console.log("Working day");
            break;
        case "Saturday":
        case "Sunday":
            console.log("Weekend");
            break;
        default:
            console.log("Error");
            break;
    }
}

// 3. Animal type
function solve(input) {
    animal = input[0];

    switch (animal) {
        case "dog":
            console.log("mammal");
            break;
        case "crocodile":
        case "tortoise":
        case "snake":
            console.log("reptile");
            break;
        default:
            console.log("unknown");
            break;
    }
}


// 4. Personal titles
function solve(input) {
    age = Number(input[0]);
    gender = input[1];

    if (age >= 16) {
        if (gender === "m") {
            console.log("Mr.");
        } else {
            console.log("Ms.");
        }
    } else {
        if (gender === "m") {
            console.log("Master");
        } else {
            console.log("Miss");
        }
    }
}

// 5. Small shop
function solve(input) {
    product = input[0];
    city = input[1];
    quantity = Number(input[2]);
    let result = 0;

    switch (city) {
        case "Sofia":
            switch (product) {
                case "coffee":
                    result = quantity * 0.5;
                    break;
                case "water":
                    result = quantity * 0.8;
                    break;
                case "beer":
                    result = quantity * 1.2;
                    break;
                case "sweets":
                    result = quantity * 1.45;
                    break;
                case "peanuts":
                    result = quantity * 1.6;
                    break;
            }
            break;
        case "Plovdiv":
            switch (product) {
                case "coffee":
                    result = quantity * 0.4;
                    break;
                case "water":
                    result = quantity * 0.7;
                    break;
                case "beer":
                    result = quantity * 1.15;
                    break;
                case "sweets":
                    result = quantity * 1.3;
                    break;
                case "peanuts":
                    result = quantity * 1.5;
                    break;
            }
            break;
        case "Varna":
            switch (product) {
                case "coffee":
                    result = quantity * 0.45;
                    break;
                case "water":
                    result = quantity * 0.7;
                    break;
                case "beer":
                    result = quantity * 1.1;
                    break;
                case "sweets":
                    result = quantity * 1.35;
                    break;
                case "peanuts":
                    result = quantity * 1.55;
                    break;
            }
    }

    console.log(result);

}


// 6. Number in range
function solve(input) {
    number = Number(input[0]);

    if (number >= -100 && number <= 100 && number !== 0) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}


// 7. Working hours
function solve(input) {
    hour = Number(input[0]);
    day = input[1];

    if (day === "Monday" || day == "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday" || day === "Saturday") {
        if (hour >= 10 && hour <= 18) {
            console.log("open");
        } else {
            console.log("closed");
        }
    } else {
        console.log("closed");
    }
}


// 8. Cinema ticket
function solve(input) {
    day = input[0];

    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Friday":
            console.log(12);
            break;
        case "Wednesday":
        case "Thursday":
            console.log(14);
            break;
        case "Saturday":
        case "Sunday":
            console.log(16);
            break;
        default:
            console.log("unkwnown");
    }
}


// 9. Fruit or vegetable
function solve(input) {
    product = input[0];

    switch (product) {
        case "banana":
        case "apple":
        case "kiwi":
        case "cherry":
        case "lemon":
        case "grapes":
            console.log("fruit");
            break;
        case "tomato":
        case "cucumber":
        case "pepper":
        case "carrot":
            console.log("vegetable");
            break;
        default:
            console.log("unknown");
            break;
    }
}


// 10. Invalid number
function solve(input) {
    num = Number(input[0]);

    if (num >= 100 && num <= 200 || num === 0) {
        console.log("");
    } else {
        console.log("invalid");
    }
}


// 11. Fruit shop
