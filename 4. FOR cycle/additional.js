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
function solve(input) {
    let n = Number(input[0]);

    let from0To9 = 0;
    let from10To19 = 0;
    let from20To29 = 0;
    let from30To39 = 0;
    let from40To50 = 0;
    let invalidNum = 0;
    let points = 0;

    for (let i = 1; i <= n; i++) {
        let num = Number(input[i]);

        if (num < 0 || num > 50) {
            invalidNum++;
            points /= 2;
        } else if (num > 39) {
            from40To50++;
            points += 100;
        } else if (num > 29) {
            from30To39++;
            points += 50;
        } else if (num > 19) {
            from20To29++;
            points += num * 0.4;
        } else if (num > 9) {
            from10To19++;
            points += num * 0.3
        } else {
            from0To9++;
            points += num * 0.2;
        }
    }

    console.log(points.toFixed(2));
    console.log(`From 0 to 9: ${((from0To9 / n) * 100).toFixed(2)}%`);
    console.log(`From 10 to 19: ${((from10To19 / n) * 100).toFixed(2)}%`);
    console.log(`From 20 to 29: ${((from20To29 / n) * 100).toFixed(2)}%`);
    console.log(`From 30 to 39: ${((from30To39 / n) * 100).toFixed(2)}%`);
    console.log(`From 40 to 50: ${((from40To50 / n) * 100).toFixed(2)}%`);
    console.log(`Invalid numbers: ${((invalidNum / n) * 100).toFixed(2)}%`);

}


// 6. Bills
function solve(input) {
    let months = Number(input[0]);

    let water = 20;
    let internet = 15;
    let electricity = 0;
    let allElectricity = 0;
    let other = 0;
    let allOther = 0;
    let average = 0;

    for (i = 1; i <= months; i++) {
        let electricity = Number(input[i]);
        let other = (electricity + water + internet) * 1.2;

        allElectricity += electricity;
        allOther += other;
    }

    water *= months;
    internet *= months;
    average = (water + internet + allElectricity + allOther) / months;
    

    console.log(`Electricity: ${allElectricity.toFixed(2)} lv`);
    console.log(`Water: ${water.toFixed(2)} lv`);
    console.log(`Internet: ${internet.toFixed(2)} lv`);
    console.log(`Other: ${allOther.toFixed(2)} lv`);
    console.log(`Average: ${average.toFixed(2)} lv`);
    
}
