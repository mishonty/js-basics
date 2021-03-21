// 3. New house
// 3 задача
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
