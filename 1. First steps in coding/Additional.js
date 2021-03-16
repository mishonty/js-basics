// 1. Trapezoid area
function solve(input) {
    b1 = Number(input[0]);
    b2 = Number(input[1]);
    h = Number(input[2]);
     
    let s = (b1 + b2) * h / 2;

    console.log(s.toFixed(2));
}


// 2. Triangle area
function solve(input) {
    a = Number(input[0]);
    h = Number(input[1]);
     
    let s = (a * h) / 2;

    console.log(s.toFixed(2));
}


// 3. Celsius to Farenheit
function solve(input) {
    c = Number(input[0]);
     
    let f = (c * 1.8) + 32;

    console.log(f.toFixed(2));
}


// 4. Vegetable market
function solve(input) {
    veggies = Number(input[0]);
    fruits = Number(input[1]);
    totalVeggies = Number(input[2]);
    totalFruits = Number(input[3]);
    
    let sum = ((veggies * totalVeggies) + (fruits * totalFruits)) / 1.94;

    console.log(sum.toFixed(2));
}


// 5. Training lab
function solve(input) {
    lenght = Number(input[0]);
    width = Number(input[1]);

    let l = lenght * 100;
    let w = width * 100;
    let freeWidth = w - 100;

    let workplacesWidthCount = Math.floor(freeWidth / 70);
    let workplacesHeightCount = Math.floor(l / 120);
    
    let final = workplacesWidthCount * workplacesHeightCount - 3;

    console.log(final);
}


// 6. Fishland
function fishMarket(input) {
    skumKgPrice = Number(input[0]);
    cacaKgPrice = Number(input[1]);
    palamudKg = Number(input[2]);
    safridKg = Number(input[3]);
    midiKg = Number(input[4]);

    let palamudKgPrice = skumKgPrice * 1.6;
    let safridKgPrice = cacaKgPrice * 1.8;
    let midiKgPrice = 7.5;

    let total = (palamudKgPrice * palamudKg) + (safridKgPrice * safridKg) + (midiKgPrice * midiKg);

    console.log(total.toFixed(2));
}


// 7. House painting
function solve(input) {
    x = Number(input[0]);
    y = Number(input[1]);
    h = Number(input[2]);

    let windows = (2 * 1.2) + (2 * (1.5 * 1.5));
    let greenNeeded = (((2 * (x * x)) + (2 * (x * y))) - windows) / 3.4;
    let roof = (2 * ((x * h) / 2)) + (2 * (x * y));
    let roofNeeded = roof / 4.3;

    console.log(greenNeeded.toFixed(2));
    console.log(roofNeeded.toFixed(2));
}


// 8. Circle area and perimeter
function solve(input) {
    r = Number(input[0]);

    let s = Math.PI * r * r;
    let p = Math.PI * 2 * r;

    console.log(s.toFixed(2));
    console.log(p.toFixed(2));
}


// 9. Weather forecast
function solve(input) {
    let a = input[0];

    if (a == "sunny") {
        console.log("It's warm outside!");
    } else {
        console.log("It's cold outside!");
    }
}


// 10. Weather forecast pt. 2
function solve(input) {
    a = input[0];

    if (a >=26 && a <= 35) {
        console.log("Hot");
    } else if (a >= 20.1 && a <= 25.9) {
        console.log("Warm");
    } else if (a >= 15 && a <= 20) {
        console.log("Mild");
    } else if (a >= 12 && a <= 14.9) {
        console.log("Cool");
    } else if (a >= 5 && a <= 11.9) {
        console.log("Cold")
    } else {
        console.log("unknown");
    }
}
