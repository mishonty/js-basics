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

    console.log(`Welcome Nakov!`);

}


// 3.
