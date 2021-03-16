// 1. Hello SoftUni
function hello() {
    
    console.log("Hello SoftUni");
}


// 2. Nums 1 to 10
function nums1To10(){
    
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
    console.log(5);
    console.log(6);
    console.log(7);
    console.log(8);
    console.log(9);
    console.log(10);
}


// 3. Square area
function squareArea(input) {
    side = Number(input[0]);
    
    let area = side * side;
    
    console.log(area);
}


// 4. Inches to centimetres
function inchesToCm(input) {
    inches = Number(input[0]);
    
    let result = inches * 2.54;
    
    console.log(result);
}


// 5. Greetings
function greetings(input) {
    let name = input[0];

    console.log("Hello, " + name + "!");
}


// 6. Concatenate data
function concatenateData(input) {
    firstName = input[0];
    lastName = input[1];
    age = input[2];
    town = input[3];

    console.log("You are " + firstName + " " + lastName + ", a " + age + "-years old person from " + town + ".");
}


// 7. Projects creation
function solve(input) {
    name = input[0];
    projectsNum = input[1];

    console.log("The architect " + name + " will need " + (projectsNum * 3) + " hours to complete " + projectsNum + " project/s.");
}


// 8. Pet shop
function petShop(input) {
    dogsCount = input[0];
    leftOver = input[1];
    
    let result = (dogsCount * 2.5) + (leftOver * 4) + ' ' + 'lv.';
    
    console.log(result);
}


// 9. Yard greening
function solve(input) {
    sqm = input[0];

    let result1 = 'The final price is:' + ' ' + ((sqm * 7.61) - (0.18 * (sqm * 7.61 ))) + ' ' + 'lv.';   
    let result2 = 'The discount is:' + ' ' + ((sqm * 7.61) * 18) / 100 + ' ' + 'lv.';

    console.log(result1, result2);
}
