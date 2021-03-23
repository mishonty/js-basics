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
