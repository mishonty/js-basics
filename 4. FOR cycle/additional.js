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
function solve(input) {
    
    let n = Number(input[0]);

    let bus = 0;
    let truck = 0;
    let train = 0;
    let alltons = 0;

    for (let i = 1; i <= n; i++) {
        let tons = Number(input[i]);

        if (tons <= 3) {
            bus += tons;
            alltons += tons;
        } else if (tons <= 11) {
            truck += tons;
            alltons += tons;
        } else {
            train += tons;
            alltons += tons;
        }
    }

    let middleTons = ((bus * 200) + (truck * 175) + (train * 120)) / alltons;

    console.log(middleTons.toFixed(2));
    console.log(`${((bus / alltons) * 100).toFixed(2)}%`);
    console.log(`${((truck / alltons) * 100).toFixed(2)}%`);
    console.log(`${((train / alltons) * 100).toFixed(2)}%`);
    
}


// 4. Grades
function solve(input) {
    
    let n = Number(input[0]);

    let gradeRes = 0;
    let topGradeNum = 0;
    let between4And5Num = 0;
    let between3And4Num = 0;
    let failNum = 0;

    for (let i = 1; i <= n; i++) {
        let grade = Number(input[i]);

        if (grade >= 5) {
            topGradeNum ++;
        } else if (grade >= 4) {
            between4And5Num++;
        } else if (grade >= 3) {
            between3And4Num++;
        } else {
            failNum++;
        }
        gradeRes += grade;
    }

    let average = gradeRes / n;

    console.log(`Top students: ${((topGradeNum / n) * 100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${((between4And5Num / n) * 100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${((between3And4Num / n) * 100).toFixed(2)}%`);
    console.log(`Fail: ${((failNum / n) * 100).toFixed(2)}%`);
    console.log(`Average: ${average.toFixed(2)}`);
    
}


// 5. Game of intervals
