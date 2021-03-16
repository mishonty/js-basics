/*
// 1 задача

function pool(input) {
    v = Number(input[0]);
    p1 = Number(input[1]);
    p2 = Number(input[2]);
    h = Number(input[3]);

    let p1Work = p1 * h;
    let p2Work = p2 * h;

    let workFromPipes = p1Work + p2Work; // общо наляти литри

    let percent1 = p1Work * 100 / workFromPipes; // работата на първата тръба по 100 и разделена на налятите литри
    let percent2 = p2Work * 100 / workFromPipes; // работата на втората тръпа по 100 и разделена на налятите литри
    let percentTotal = workFromPipes * 100 / v;
 
if (v >= workFromPipes) {
        console.log(`The pool is ${percentTotal}% full. Pipe 1: ${percent1.toFixed(2)}%. Pipe 2: ${percent2.toFixed(2)}%.`);
    } else if (v < workFromPipes) {
        console.log(`For ${h} hours the pool overflows with ${workFromPipes - v} liters.`);
    }
}

pool(["1000", "100", "120", "3"]);
pool(["100", "100", "100", "2.5"]);

// задача 2

function tom(input) {
    daysOff = Number(input[0]);

    let workDays = 365 - daysOff;
    let minutesWorkDays = workDays * 63;
    let minutesDaysOff = daysOff * 127;

    let totalMinutesPlay = minutesWorkDays + minutesDaysOff;
    let differenceInMinutes = Math.abs(30000 - totalMinutesPlay);

    let h = Math.trunc(differenceInMinutes / 60);
    let m = differenceInMinutes % 60;

    if (totalMinutesPlay > 30000) {
        console.log(`Tom will run away`);
        console.log(`${h} hours and ${m} minutes more for play`);
    } else {
        console.log(`Tom sleeps well`);
        console.log(`${h} hours and ${m} minutes less for play`);
    }
}

tom(["20"]);
tom(["113"]); 

// задача 3

function data(input) {
    x = Number(input[0]);
    y = Number(input[1]);
    z = Number(input[2]);
    n = Number(input[3]);

    let rekoltaZaVino = (x * y) * 0.4; //реколта в килограми
    let litriVino = rekoltaZaVino / 2.5;
    let ostatuk = Math.abs(litriVino - z);

    if (litriVino < z) {
        console.log(`It will be a tough winter! More ${Math.floor(ostatuk)} liters wine needed.`);
    } else {
        console.log(`Good harvest this year! Total wine: ${Math.floor(litriVino)} liters.`);
        console.log(`${Math.ceil(ostatuk)} liters left -> ${Math.ceil(ostatuk / n)} liters per person.`);
    }
}

data(["650", "2", "175", "3"]);
data(["1020", "1.5", "425", "4"]); 

// задача 4

function transport(input) {
    n = Number(input[0]);
    period = input[1];

    let taxiDayPrice = 0.7 + (n * 0.79);
    let taxiNightPrice = 0.7 + (n * 0.9);
    let busPrice = n * 0.09;
    let trainPrice = n * 0.06;


    if (n >= 100) {
        console.log(trainPrice.toFixed(2));
    } else if (n >= 20) {
        console.log(busPrice.toFixed(2));
    } else if (n < 20) {
        if (period === "day") {
            console.log(taxiDayPrice.toFixed(2));
        } else if (period === "night") {
            console.log(taxiNightPrice.toFixed(2));
        }
    }
}

transport(["5", "day"]);
transport(["7", "night"]);
transport(["25", "day"]);
transport(["180", "night"]); */

// задача 5

function company(input) {
    
}

company(["90", "7", "3"]);
company(["99", "3", "1"]);
