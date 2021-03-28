// 1. Back to the past
function solve(input) {
    money = Number(input[0]);
    year = Number(input[1]);

    let age = 18;

    for (let i = 1800; i <= year; i++) {
        if (i % 2 === 0) {
            money -= 12000;
        } else {
            money -= 12000 + age * 50;
        }
        age++;
    }

    if (money >= 0) {
        console.log(`Yes! He will live a carefree life and will have ${money.toFixed(2)} dollars left.`);
    } else {
        console.log(`He will need ${(Math.abs(money)).toFixed(2)} dollars to survive.`);
    }

}


// 2. Hospital
function solve(input) {
    let period = Number(input[0]);

    let treated = 0;
    let untreated = 0;
    let doctors = 7;

    for (let i = 1; i <= period; i++) {

        let patients = Number(input[i]);

        if (i % 3 === 0 && untreated > treated) {
            doctors++;
        }

        if (patients <= doctors) {
            treated += patients;
        } else {
            treated += doctors;
            untreated += patients - doctors;
        }
    }

    console.log(`Treated patients: ${treated}.`);
    console.log(`Untreated patients: ${untreated}.`);

}


// 3. Logistics
