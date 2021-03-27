// 1. Match tickets
function solve(input) {
    budget = Number(input[0]);
    priceCategory = input[1];
    n = Number(input[2]);

    let transport = 0;

    if (n <= 4) {
        transport = budget * 0.75;
    } else if (n <= 9) {
        transport = budget * 0.6;
    } else if (n <= 24) {
        transport = budget * 0.5;
    } else if (n <= 49) {
        transport = budget * 0.4;
    } else {
        transport = budget * 0.25;
    }

    switch (priceCategory) {
        case "Normal":
            if (((n * 249.99) + transport) < budget) {
                console.log(`Yes! You have ${(budget - ((n * 249.99) + transport)).toFixed(2)} leva left.`);
            } else {
                console.log(`Not enough money! You need ${(((n * 249.99) + transport) - budget).toFixed(2)} leva.`);
            }
            break;
        case "VIP":
            if (((n * 499.99) + transport) < budget) {
                console.log(`Yes! You have ${(budget - ((n * 499.99) + transport)).toFixed(2)} leva left.`);
            } else {
                console.log(`Not enough money! You need ${(((n * 499.99) + transport) - budget).toFixed(2)} leva.`);
            }
    }
}


// 2. Bike race
function solve(input) {
    juniors = Number(input[0]);
    seniors = Number(input[1]);
    type = input[2];

    let fee = 0;

    if (type === "trail") {
        fee = juniors * 5.5 + seniors * 7;
    } else if (type === "cross-country") {
        fee = juniors * 8 + seniors * 9.5;
    } else if (type === "downhill") {
        fee = juniors * 12.25 + seniors * 13.75;
    } else {
        fee = juniors * 20 + seniors * 21.5;
    }

    if (type === "cross-country" && juniors + seniors >= 50) {
        fee = (juniors * 8 + seniors * 9.5) * 0.75;
    }

    let expenses = fee * 0.05;

    console.log ((fee - expenses).toFixed(2));

}


// 3. Flowers
function solve(input) {
    chrysantemumsNb = Number(input[0]);
    rosesNb = Number(input[1]);
    tulipsNb = Number(input[2]);
    season = input[3];
    holiday = input[4];

    let total = 0;
    let fee = 2;

    if (season === "Spring" || season === "Summer") {
        total = chrysantemumsNb * 2 + rosesNb * 4.1 + tulipsNb * 2.5;
    } else {
        total = chrysantemumsNb * 3.75 + rosesNb * 4.5 + tulipsNb * 4.15;
    }

    if (season === "Spring" && tulipsNb > 7) {
        total *= 0.95;
    }

    if (season === "Winter" && rosesNb >= 10) {
        total *= 0.9;
    }

    if (chrysantemumsNb + rosesNb + tulipsNb > 20) {
        total *= 0.8;
    }

    if (holiday === "Y") {
        total = total + (total * 0.15);
    }

    console.log((total + fee).toFixed(2));

}


// 4. Car to go
function solve(input) {
    budget = Number(input[0]);
    season = input[1];

    let venchileClass = 0;
    let venchileType = 0;
    let price = 0;

    if (season === "Summer") {
        venchileType = "Cabrio";
    } else {
        venchileType = "Jeep";
    }

    if (budget > 500) {
        venchileClass = "Luxury class";
        venchileType = "Jeep";
        price = budget * 0.9;
    } else if (budget > 100) {
        venchileClass = "Compact class";
        switch (season) {
            case "Summer":
                price = budget * 0.45;
                break;
            case "Winter":
                price = budget * 0.8;
                break;
        }
    } else {
        venchileClass = "Economy class";
        switch (season) {
            case "Summer":
                price = budget * 0.35;
                break;
            case "Winter":
                price = budget * 0.65;
                break;
        }
    }

    console.log(venchileClass);
    console.log(`${venchileType} - ${price.toFixed(2)}`);

}


// 5. Vacation
function solve(input) {
    budget = Number(input[0]);
    season = input[1];

    let price = 0;

    if (season === "Summer") {
        location = "Alaska";
    } else {
        location = "Morocco";
    }

    if (budget <= 1000) {
        accommodation = "Camp";
        if (season === "Summer") {
            price = budget * 0.65;
        } else {
            price = budget * 0.45;
        }
    } else if (budget > 1000 && budget <= 3000) {
        accommodation = "Hut";
        if (season === "Summer") {
            price = budget * 0.8;
        } else {
            price = budget * 0.6;
        }
    } else {
        accommodation = "Hotel";
        price = budget * 0.9;

    }

    console.log(`${location} - ${accommodation} - ${price.toFixed(2)}`);

}


// Truck driver
function solve(input) {
    season = input[0];
    kmPerMonth = Number(input[1]);

    let priceKm = 0;

    if (kmPerMonth <= 5000) {
        if (season === "Spring" || season === "Autumn") {
            priceKm = 0.75;
        } else if (season === "Summer") {
            priceKm = 0.9;
        } else {
            priceKm = 1.05;
        }
    } else if (kmPerMonth <= 10000) {
        if (season === "Spring" || season === "Autumn") {
            priceKm = 0.95;
        } else if (season === "Summer") {
            priceKm = 1.1;
        } else {
            priceKm = 1.25;
        }
    } else {
        priceKm = 1.45;
    }

    let salary = kmPerMonth * priceKm * 4;

    console.log((salary - (salary * 0.1)).toFixed(2));

}


// 7. School camp
function solve(input) {
    season = input[0];
    group = input[1];
    studentsCount = Number(input[2]);
    nights = Number(input[3]);

    let pricePerNight = 0;
    let sport = 0;

    switch (group) {
        case "boys":
            if (season === "Winter") {
                pricePerNight = 9.6;
                sport = "Judo";
            } else if (season === "Spring") {
                pricePerNight = 7.2;
                sport = "Tennis";
            } else {
                pricePerNight = 15;
                sport = "Football";
            }
            break;
        case "girls":
            if (season === "Winter") {
                pricePerNight = 9.6;
                sport = "Gymnastics";
            } else if (season === "Spring") {
                pricePerNight = 7.2;
                sport = "Athletics";
            } else {
                pricePerNight = 15;
                sport = "Volleyball";
            }
            break;
        case "mixed":
            if (season === "Winter") {
                pricePerNight = 10;
                sport = "Ski";
            } else if (season === "Spring") {
                pricePerNight = 9.5;
                sport = "Cycling";
            } else {
                pricePerNight = 20;
                sport = "Swimming";
            }
            break;
    }

    let finalPrice = pricePerNight * studentsCount * nights;

    if (studentsCount >= 50) {
        finalPrice *= 0.5;
    } else if (studentsCount >= 20) {
        finalPrice *= 0.85;
    } else if (studentsCount >= 10) {
        finalPrice *= 0.95;
    }

    console.log(`${sport} ${finalPrice.toFixed(2)} lv.`);

}


// 8. Point on rectangle border
function solve(input) {
    x1 = Number(input[0]);
    y1 = Number(input[1]);
    x2 = Number(input[2]);
    y2 = Number(input[3]);
    x = Number(input[4]);
    y = Number(input[5]);

    if (((x === x1 || x === x2) && y >= y1 && y <= y2) || ((y === y1 || y === y2) && x >= x1 && x <= x2)) {
        console.log("Border");
    } else {
        console.log("Inside / Outside");
    }
    
}


// *9. Numbers from 1 to 10
function solve(input) {

    let i = 1;

    while (i <= 10) {
        console.log(i);
        i++;
    }

}


// *10. Multiply by 2
