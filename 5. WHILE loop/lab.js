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
