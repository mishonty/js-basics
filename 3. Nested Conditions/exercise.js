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


