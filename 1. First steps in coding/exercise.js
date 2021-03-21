// 1. USD to BGN
function usdToBgn(input) {
    usd = Number(input[0]);
    
    let bgn = usd * 1.79549;
    
    console.log(bgn);
}


// 2. Radians to degrees
function convert(input) {
    rad = Number(input[0]);
    
    let degree = rad * 180 / Math.PI;
    console.log(degree.toFixed(0));
}


// 3. Deposit calculator
function solve(input) {
    depositedSum = Number(input[0]);
    period = Number(input[1]);
    percent = Number(input[2]);

    let result = depositedSum + period * ((depositedSum * percent / 100) / 12);

    console.log(result);
}


// 4. Vacation book list
function solve(input) {
    nbPages = Number(input[0]);
    pagesPerHour = Number(input[1]);
    days = Number(input[2]);

    let hours = nbPages / pagesPerHour;

    console.log(hours / days);
}


// *5. Birthday party
function birthday(rent) {
    rent = Number(rent);

    let cake = rent * 0.2;
    let drinks = cake - (cake * 0.45);
    let animator = rent * 1/3;

    let totalPrice = rent + cake + drinks + animator;
    
    console.log(totalPrice)
}


// *6. Charity campaign
function charity(input) {
    days = Number(input[0]);
    nberChefs = Number(input[1]);
    cakesNumber = Number(input[2]);
    gofrettesNumber = Number(input[3]);
    pancakesNumber = Number(input[4]);

    let cake = 45 * cakesNumber;
    let gofrette = 5.8 * gofrettesNumber;
    let pancake = 3.2 * pancakesNumber;
    let finalSum = cake + gofrette + pancake;
    let total = nberChefs * finalSum * days;
    let expenses = total * 1/8;
    let netTotal = total - expenses;

    console.log(netTotal);
}


// *7. Fruit market
function market(input) {
    strPrice = Number(input[0]);
    banana = Number(input[1]);
    orange = Number(input[2]);
    rasp = Number(input[3]);
    str = Number(input[4]);

    let raspberriesPrice = strPrice / 2;
    let orangesPrice = raspberriesPrice * 0.6;
    let bananaPrice = raspberriesPrice * 0.2;

    strPrice = strPrice * str;
    bananaPrice = bananaPrice * banana;
    raspberriesPrice = raspberriesPrice * rasp;
    orangesPrice = orangesPrice * orange;

    let total = strPrice + bananaPrice + orangesPrice + raspberriesPrice;
    
    console.log(total);
}


// *8. Fish tank
function aquarium(input){
    length = Number(input[0]);
    width = Number(input[1]);
    height = Number(input[2]);
    percent = Number(input[3]);
    
    let volume = length * width * height;
    let l = volume * 0.001;
    let percentNum = percent * 0.01;

    console.log(l * (1 - percentNum));
}


