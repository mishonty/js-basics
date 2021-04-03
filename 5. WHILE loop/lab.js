// 1. Read text
function solve(input) {
    let index = 0;

    let command = input[index];
    index++;

    while (command !== "Stop") {
        let name = command;

        console.log(name);

        command = input[index];
        index++;

    }

}


// 2. Password
function solve(input) {
    let username = input[0];
    let password = input[1];

    let index = 2;
    let credentials = input[index];
    index++;

    while (credentials !== password) {
        credentials = input[index];
        index++;
    }

    console.log(`Welcome ${username}!`);

}


// 3.
function solve(input) {
    let n = Number(input[0]);

    let index = 1;
    let result = 0;

    while (result < n) {
        num = Number(input[index]);
        index++;

        result += num;


    }

    console.log(result);

}


// 4. 
function solve(input) {
    let n = Number(input[0]);

    let index = 1;

    while (index < n) {
        console.log(index);

        index = index * 2 + 1;

    }

}
