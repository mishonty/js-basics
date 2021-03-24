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
