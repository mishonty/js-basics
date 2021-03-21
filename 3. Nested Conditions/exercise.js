// 1. Cinema
function solve(input) {
    type = input[0];
    r = Number(input[1]);
    c = Number(input[2]);

    let income = 0;

    switch (type) {
        case "Premiere":
            income = r * c * 12;
            break;
        case "Normal":
            income = r * c * 7.5;
            break;
        case "Discount":
            income = r * c * 5;
            break;
    }

    console.log(`${income.toFixed(2)} leva`);

}


// 2. Summer outfit
function solve(input) {
    degrees = Number(input[0]);
    partOfTheDay = input[1];

    let outfit = 0;
    let shoes = 0;

    if (partOfTheDay === "Morning") {
        if (degrees >= 10 && degrees <= 18) {
            outfit = "Sweatshirt";
            shoes = "Sneakers";
        } else if (degrees > 18 && degrees <= 24) {
            outfit = "Shirt";
            shoes = "Moccasins";
        } else {
            outfit = "T-Shirt";
            shoes = "Sandals";
        }
    } else if (partOfTheDay === "Afternoon") {
        if (degrees >= 10 && degrees <= 18) {
            outfit = "Shirt";
            shoes = "Moccasins";
        } else if (degrees > 18 && degrees <= 24) {
            outfit = "T-Shirt";
            shoes = "Sandals";
        } else {
            outfit = "Swim Suit";
            shoes = "Barefoot";
        }
    } else {
        if (degrees >= 10 && degrees <= 18) {
            outfit = "Shirt";
            shoes = "Moccasins";
        } else if (degrees > 18 && degrees <= 24) {
            outfit = "Shirt";
            shoes = "Moccasins";
        } else {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
    }

    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
}


// 3. New house
function solve(input) {
    let flowerType = input[0];
    let flowerCounter = Number(input[1]);
    let budget = Number(input[2]);

    let finalSum = 0;

    switch (flowerType) {
        case "Roses":
            finalSum = flowerCounter * 5;
            if (flowerCounter > 80) {
                finalSum *= 0.9;
            }
            break;
        case "Dahlias":
            finalSum = flowerCounter * 3.8;
            if (flowerCounter > 90) {
                finalSum *= 0.85;
            }
            break;
        case "Tulips":
            finalSum = flowerCounter * 2.8;
            if (flowerCounter > 80) {
                finalSum *= 0.85;
            }
            break;
        case "Narcissus":
            finalSum = flowerCounter * 3;
            if (flowerCounter < 120) {
                finalSum *= 1.15;
            }
            break;
        case "Gladiolus":
            finalSum = flowerCounter * 2.5;
            if (flowerCounter < 80) {
                finalSum *= 1.2;
            }
            break;
    }

    if (budget >= finalSum) {
        console.log(`Hey, you have a great garden with ${flowerCounter} ${flowerType} and ${(budget - finalSum).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(finalSum - budget).toFixed(2)} leva more.`);
    }
}


// 4. Fishing boat
function solve(input) {
    budget = Number(input[0]);
    season = input[1];
    persons = input[2];

    let rentPrice = 0;

    switch (season) {
        case "Spring":
            rentPrice = 3000;
            break;
        case "Summer":
        case "Autumn":
            rentPrice = 4200;
            break;
        case "Winter":
            rentPrice = 2600;
            break;
    }

    if (persons <= 6) {
        rentPrice *= 0.9;
    } else if (persons <= 11) {
        rentPrice *= 0.85;
    } else {
        rentPrice *= 0.75;
    }

    if (persons % 2 === 0 && season !== "Autumn") {
        rentPrice *= 0.95;
    }

    if (rentPrice > budget) {
        console.log(`Not enough money! You need ${(rentPrice - budget).toFixed(2)} leva.`);
    } else {
        console.log(`Yes! You have ${(budget - rentPrice).toFixed(2)} leva left.`);
    }
}


// *5. Journey
function solve(input) {
    budget = Number(input[0]);
    season = input[1];

    let totalSum = 0;
    let holidayType = 0;
    let destination = 0;


    if (budget <= 100) {
        destination = "Bulgaria";
        if (season === "summer") {
            holidayType = "Camp";
            totalSum = budget * 0.3;
        } else {
            holidayType = "Hotel";
            totalSum = budget * 0.7;
        }
    } else if (budget <= 1000) {
        destination = "Balkans";
        if (season === "summer") {
            holidayType = "Camp";
            totalSum = budget * 0.4;
        } else {
            holidayType = "Hotel";
            totalSum = budget * 0.8;
        }
    } else {
        destination = "Europe";
        holidayType = "Hotel";
        totalSum = budget * 0.9;
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${holidayType} - ${totalSum.toFixed(2)}`);
    
}

// *6. Operations between numbers
function solve(input) {
    n1 = Number(input[0]);
    n2 = Number(input[1]);
    operator = input[2];

    let result = 0;

    if (n2 === 0) {
        console.log(`Cannot divide ${n1} by zero`);
    } else if (operator === "+") {
        result = n1 + n2;
        if (result % 2 === 0) {
            console.log(`${n1} ${operator} ${n2} = ${result} - even`);
        } else {
            console.log(`${n1} ${operator} ${n2} = ${result} - odd`);
        }
    } else if (operator === "-") {
        result = n1 - n2;
        if (result % 2 === 0) {
            console.log(`${n1} ${operator} ${n2} = ${result} - even`);
        } else {
            console.log(`${n1} ${operator} ${n2} = ${result} - odd`);
        }
    } else if (operator === "*") {
        result = n1 * n2;
        if (result % 2 === 0) {
            console.log(`${n1} ${operator} ${n2} = ${result} - even`);
        } else {
            console.log(`${n1} ${operator} ${n2} = ${result} - odd`);
        }
    } else if (operator === "/") {
        result = n1 / n2;
        console.log(`${n1} / ${n2} = ${result.toFixed(2)}`);
    } else if (operator === "%") {
        result = n1 % n2;
        console.log(`${n1} % ${n2} = ${result}`)
    }
}


// *7. Hotel room
function solve(input) {
    month = input[0];
    n = Number(input[1]);

    let studio = 0;
    let apartment = 0;

    switch (month) {
        case "May":
        case "October":
            studio = 50;
            apartment = 65;
            if (n > 14) {
                studio *= 0.7;
            } else if (n > 7) {
                studio *= 0.95;
            }
            break;
        case "June":
        case "September":
            studio = 75.2;
            apartment = 68.7;
            if (n > 14) {
                studio *= 0.8;
            }
            break;
        case "July":
        case "August":
            studio = 76;
            apartment = 77;
            break;
    }

    if (n > 14) {
        apartment *= 0.9;
    }

    console.log(`Apartment: ${(apartment * n).toFixed(2)} lv.`);
    console.log(`Studio: ${(studio * n).toFixed(2)} lv.`);

}


// *8. On time for the exam
function solve(input) {
    h = Number(input[0]);
    m = Number(input[1]);
    hArrival = Number(input[2]);
    mArrival = Number(input[3]);

    let totalTime = (h * 60) + m;
    let totalTimeArrival = (hArrival * 60) + mArrival;
    let result = Math.abs(totalTime - totalTimeArrival);

    if ((totalTime - totalTimeArrival) >= 0 && (totalTime - totalTimeArrival) <= 30) {
        console.log("On time");
        console.log(`${result} minutes before the start`);
    } else if (totalTime > totalTimeArrival) {
        console.log(`Early`);
        if (result >= 60) {
            let newHour = Math.trunc(result / 60);
            let newMinutes = result % 60;
            if (newMinutes < 10) {
                console.log(`${newHour}:0${newMinutes} hours before the start`);
            } else {
                console.log(`${newHour}:${newMinutes} hours before the start`);
            }
        } else {
            console.log(`${result} minutes before the start`);
        }
    } else if (totalTime < totalTimeArrival) {
        console.log(`Late`);
        if (result >= 60) {
            let newHour = Math.trunc(result / 60);
            let newMinutes = result % 60;
            if (newMinutes < 10) {
                console.log(`${newHour}:0${newMinutes} hours after the start`);
            } else {
                console.log(`${newHour}:${newMinutes} hours after the start`);
            }
        } else {
            console.log(`${result} minutes after the start`);
        }
    } else {
        console.log(`On time`);
    }
}


// *9. Volleyball
function solve(input) {
    year = input[0];
    p = Number(input[1]);
    h = Number(input[2]);

    
    let weekendsInSofia = 48 - h;
    let weekendPlaysInSofia = (weekendsInSofia * 3) / 4;
    let playsInHometown = h;
    let playsPublicHollidays = (p * 2) / 3;

    let totalPlays = weekendPlaysInSofia + playsInHometown + playsPublicHollidays;

    if (year === "leap") {
        totalPlays = totalPlays + (totalPlays * 0.15);
    }

    console.log(Math.trunc(totalPlays));

}
