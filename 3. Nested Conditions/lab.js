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
function solve(input) {
    fruit = input[0];
    day = input[1];
    quantity = Number(input[2]);
    let price = 0;
    let error = "error";

    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            switch (fruit) {
                case "banana":
                    price = (quantity * 2.5).toFixed(2);
                    break;
                case "apple":
                    price = (quantity * 1.2).toFixed(2);
                    break;
                case "orange":
                    price = (quantity * 0.85).toFixed(2);
                    break;
                case "grapefruit":
                    price = (quantity * 1.45).toFixed(2);
                    break;
                case "kiwi":
                    price = (quantity * 2.7).toFixed(2);
                    break;
                case "pineapple":
                    price = (quantity * 5.5).toFixed(2);
                    break;
                case "grapes":
                    price = (quantity * 3.85).toFixed(2);
                    break;
                default:
                    price = error;
                    break;
            }
            break;
        case "Saturday":
        case "Sunday":
            switch (fruit) {
                case "banana":
                    price = (quantity * 2.7).toFixed(2);
                    break;
                case "apple":
                    price = (quantity * 1.25).toFixed(2);
                    break;
                case "orange":
                    price = (quantity * 0.9).toFixed(2);
                    break;
                case "grapefruit":
                    price = (quantity * 1.6).toFixed(2);
                    break;
                case "kiwi":
                    price = (quantity * 3).toFixed(2);
                    break;
                case "pineapple":
                    price = (quantity * 5.6).toFixed(2);
                    break;
                case "grapes":
                    price = (quantity * 4.2).toFixed(2);
                    break;
            }
            break;
        default:
            price = error;
            break;
    }

    console.log(price);

}


// 12. Trade commissions
function solve(input) {
    city = input[0];
    sales = Number(input[1]);

    let result = 0;
    let error = "error";

    if (sales >= 0 && sales <= 500) {
        switch (city) {
            case "Sofia":
                result = (sales * 0.05).toFixed(2);
                break;
            case "Varna":
                result = (sales * 0.045).toFixed(2);
                break;
            case "Plovdiv":
                result = (sales * 0.055).toFixed(2);
                break;
            default:
                result = error;
                break;
        }
    } else if (sales > 500 && sales <= 1000) {
        switch (city) {
            case "Sofia":
                result = (sales * 0.07).toFixed(2);
                break;
            case "Varna":
                result = (sales * 0.075).toFixed(2);
                break;
            case "Plovdiv":
                result = (sales * 0.08).toFixed(2);
                break;
            default:
                result = error;
        }
    } else if (sales > 1000 && sales <= 10000) {
        switch (city) {
            case "Sofia":
                result = (sales * 0.08).toFixed(2);
                break;
            case "Varna":
                result = (sales * 0.1).toFixed(2);
                break;
            case "Plovdiv":
                result = (sales * 0.12).toFixed(2);
                break;
            default:
                result = error;
                break;
        }
    } else if (sales > 10000) {
        switch (city) {
            case "Sofia":
                result = (sales * 0.12).toFixed(2);
                break;
            case "Varna":
                result = (sales * 0.13).toFixed(2);
                break;
            case "Plovdiv":
                result = (sales * 0.145).toFixed(2);
                break;
            default:
                result = error;
                break;
        }
    } else if (sales < 0) {
        result = error;
    }

    console.log(result);

}


// *13. Ski trip
function solve(input) {
    days = Number(input[0]);
    type = input[1];
    feedback = input[2];

    days = days - 1;
    let price = 0;

    if (type === "apartment") {
        price = 25;
        if (days > 15) {
            price *= 0.5;
        } else if (days >= 10) {
            price *= 0.65;
        } else {
            price *= 0.7;
        }
    } else if (type === "president apartment") {
        price = 35;
        if (days > 15) {
            price *= 0.8;
        } else if (days >= 10 && days <= 15) {
            price *= 0.85;
        } else {
            price *= 0.9;
        }
    } else {
        price = 18;
    }

    if (feedback === "positive") {
        price = price + (price * 0.25);
    } else if (feedback === "negative") {
        price = price - (price * 0.1);
    }

    console.log((days * price).toFixed(2));

}
