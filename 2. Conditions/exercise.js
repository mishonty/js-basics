// 1. Sum seconds
function solve(input) {
    firstTime = Number(input[0]);
    secondTime = Number(input[1]);
    thirdTime = Number(input[2]);

    let totalTime = firstTime + secondTime + thirdTime;
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`)
    } else {
        console.log(`${minutes}:${seconds}`)
    }
}


// 2. Bonus score
function solve(input) {
    number = Number(input[0]);
    let bonusPoints = 0;

    if (number > 1000) {
        bonusPoints = number * 0.1;
    } else if (number > 100) {
        bonusPoints = number * 0.20;
    } else {
        bonusPoints = 5;
    }

    if (number % 2 === 0) {
        bonusPoints += 1;
    }

    if (number % 10 === 5) {
        bonusPoints += 2;
    }

    console.log(bonusPoints);
    console.log(number + bonusPoints);
}


// 3. Speed info
function solve(input) {
    speed=Number(input[0]);

    if(speed<=10){
        console.log("slow");
    } else if(speed<=50) {
        console.log("average");
    } else if(speed<=150) {
        console.log("fast");
    } else if(speed<=1000) {
        console.log("ultra fast");
    } else {
        console.log("extremely fast");
    }   
}


// 4. Metric converter
function solve(input) {
    let numberToConvert = Number(input[0]);
    let inputMetric = input[1];
    let outputMetric = input[2];

    if (inputMetric === 'mm') {
        numberToConvert = numberToConvert / 1000;
    } else if (inputMetric === 'cm') {
        numberToConvert = numberToConvert / 100;
    } else {
        numberToConvert = numberToConvert;
    }

    if (outputMetric === 'mm') {
        console.log((numberToConvert * 1000).toFixed(3));
    } else if (outputMetric === 'cm') {
        console.log((numberToConvert * 100).toFixed(3));
    } else if (outputMetric === 'm') {
        console.log(numberToConvert.toFixed(3));
    }
}


// 5. Time + 15 minutes
function solve(input) {
    h = Number(input[0]);
    m = Number(input[1]) + 15;

    if (m >= 60) {
        h = h + 1;
        m = m - 60;
    }

    if (h >= 24) {
        h = h - 24;
    }

    if (m < 10) {
        console.log(`${h}:0${m}`);
    } else {
        console.log(`${h}:${m}`)
    }
}


// 6. Godzilla vs. Kong
function solve(input) {
    budget = Number(input[0]);
    statistsNumber = Number(input[1]);
    priceOneEquipment = Number(input[2]);

    let decor = 0.1 * budget;
    let statistsPrice = statistsNumber * priceOneEquipment;

    if (statistsNumber > 150) {
        statistsPrice = statistsPrice - (statistsPrice * 0.1);
    }

    let totalExpenses = statistsPrice + decor;
    let credit = budget - totalExpenses;



    if (totalExpenses > budget) {
        let left = totalExpenses - budget;
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${left.toFixed(2)} leva more.`);
    } else {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${credit.toFixed(2)} leva left.`);
    }
}


/ 7. World swimming record
function solve(input) {
    recordSeconds = Number(input[0]);
    lenght = Number(input[1]);
    secondsOnerMeter = Number(input[2]);

    let resistance = Math.floor(lenght / 15) * 12.5;
    let timeIvan = (secondsOnerMeter * lenght) + resistance;

    if(timeIvan < recordSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${timeIvan.toFixed(2)} seconds.`)
    } else {
        let left = timeIvan - recordSeconds;
        console.log(`No, he failed! He was ${left.toFixed(2)} seconds slower.`)
    }   
}


// *8. Scholarship
function solve(input) {
    salary = Number(input[0]);
    gpa = Number(input[1]);
    minSalary = Number(input[2]);

    let excellent = 0;
    let social = 0;

    if (salary < minSalary) {
        if (gpa > 4.5) {
            social = minSalary * 0.35;
        }
    }

    if (gpa >= 5.5) {
        excellent = gpa * 25;
    }

    if (social > excellent) {
        console.log(`You get a Social scholarship ${Math.floor(social)} BGN`);
    } else if (excellent > social) {
        console.log(`You get a scholarship for excellent results ${Math.floor(excellent)} BGN`);
    } else {
        console.log(`You cannot get a scholarship!`);
    }
}
