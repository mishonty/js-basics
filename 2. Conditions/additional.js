// 1. Pipes in pool
function pool(input) {
    v = Number(input[0]);
    p1 = Number(input[1]);
    p2 = Number(input[2]);
    h = Number(input[3]);

    let p1Work = p1 * h;
    let p2Work = p2 * h;

    let workFromPipes = p1Work + p2Work;
    
    let percent1 = p1Work * 100 / workFromPipes;
    let percent2 = p2Work * 100 / workFromPipes;
    let percentTotal = workFromPipes * 100 / v;
 
if (v >= workFromPipes) {
        console.log(`The pool is ${percentTotal}% full. Pipe 1: ${percent1.toFixed(2)}%. Pipe 2: ${percent2.toFixed(2)}%.`);
    } else if (v < workFromPipes) {
        console.log(`For ${h} hours the pool overflows with ${workFromPipes - v} liters.`);
    }
}


// 2. Sleepy Tom cat
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


// 3. Harvest
function data(input) {
    x = Number(input[0]);
    y = Number(input[1]);
    z = Number(input[2]);
    n = Number(input[3]);

    let rekoltaZaVino = (x * y) * 0.4;
    let litriVino = rekoltaZaVino / 2.5;
    let ostatuk = Math.abs(litriVino - z);

    if (litriVino < z) {
        console.log(`It will be a tough winter! More ${Math.floor(ostatuk)} liters wine needed.`);
    } else {
        console.log(`Good harvest this year! Total wine: ${Math.floor(litriVino)} liters.`);
        console.log(`${Math.ceil(ostatuk)} liters left -> ${Math.ceil(ostatuk / n)} liters per person.`);
    }
}


// 4. Transport price
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


// 5. Firm
function company(input) {
    hoursNeeded = Number(input[0]);
    days = Number(input[1]);
    n = Number(input[2]);

    let freeTimeHours = Math.floor(days * 0.9 * 8);
    let overtimeHours = Math.floor(n * days * 2);
    let totalHours = freeTimeHours + overtimeHours;

    let final = Math.abs(totalHours - hoursNeeded);

    if (totalHours >= hoursNeeded) {
        console.log(`Yes!${Math.floor(final)} hours left.`);
    } else {
        console.log(`Not enough time!${Math.floor(final)} hours needed.`);
    }
}


// 6. Pets
function pets(input) {
    days = Number(input[0]);
    foodKg = Number(input[1]);
    foodDog = Number(input[2]);
    foodCat = Number(input[3]);
    foodTurtle = Number(input[4]);

    let foodTurtleKg = foodTurtle / 1000;
    let totalFood = (foodDog + foodCat + foodTurtleKg) * days;
    let final = Math.abs(foodKg - totalFood);

    if (foodKg >= totalFood) {
        console.log(`${Math.floor(final)} kilos of food left.`);
    } else {
        console.log(`${Math.ceil(final)} more kilos of food are needed.`);
    }
}


// 7. Flower shop
function shop(input) {
    magnolia = Number(input[0]);
    hyacinth = Number(input[1]);
    rose = Number(input[2]);
    cactus = Number(input[3]);
    price = Number(input[4]);

    let magnoliaKg = 3.25;
    let hyacinthKg = 4;
    let roseKg = 3.5;
    let cactusKg = 8;

    let totalSum = (magnolia * magnoliaKg) + (hyacinth * hyacinthKg) + (rose * roseKg) + (cactus * cactusKg);
    let taxes = totalSum * 0.05;
    let final = totalSum - taxes;
    let total = Math.abs(price - final);

    if (final >= price) {
        console.log(`She is left with ${Math.floor(total)} leva.`);
    } else {
        console.log(`She will have to borrow ${Math.ceil(total)} leva.`);
    }
}


// *8. Fuel tank
function fueltank(input) {
    fuel = input[0];
    n = Number(input[1]);

    let diesel = "diesel";
    let gasoline = "gasoline";
    let gas = "gas";

    if (n >= 25) {
        if (fuel === "Diesel") {
            console.log(`You have enough ${diesel}.`);
        } else if (fuel === "Gasoline") {
            console.log(`You have enough ${gasoline}.`);
        } else if (fuel === "Gas") {
            console.log(`You have enough ${gas}.`);
        } else {
            console.log(`Invalid fuel!`);
        }
    } else {
        if (fuel === "Diesel") {
            console.log(`Fill your tank with ${diesel}!`);
        } else if (fuel === "Gasoline") {
            console.log(`Fill your tank with ${gasoline}!`);
        } else if (fuel === "Gas") {
            console.log(`Fill your tank with ${gas}!`);
        } else {
            console.log(`Invalid fuel!`);
        }
    }
}


// *9. Fuel tank pt. 2
function fueltank(input) {
    fuelType = input[0];
    fuelLt = Number(input[1]);
    clubCard = input[2];

    let final = 0;

    if (fuelType === "Gasoline") {
        final = fuelLt * 2.22;
        if (clubCard === "Yes") {
            final -= fuelLt * 0.18;
        }
    } else if (fuelType === "Diesel") {
        final = fuelLt * 2.33;
        if (clubCard === "Yes") {
            final -= fuelLt * 0.12;
        }
    } else if (fuelType === "Gas") {
        final = fuelLt * 0.93;
        if (clubCard === "Yes") {
            final -= fuelLt * 0.08;
        }
    }

    if (fuelLt > 25) {
        final *= 0.9;
        console.log(`${final.toFixed(2)} lv.`);
    } else if (fuelLt >= 20 && fuelLt <= 25) {
        final *= 0.92;
        console.log(`${final.toFixed(2)} lv.`);
    } else {
        console.log(`${final.toFixed(2)} lv.`)
    }
}


