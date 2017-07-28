function solve(arrInput) {
    let arrOutput = [];
    for (let i = 0; i < arrInput.length; i++) {
        let tokens = arrInput[i].split(' ');
        let command = tokens[0];
        let value = Number(tokens[1]);
        if (command == "add") {
            arrOutput.push(value);
        }
        if (command == "remove") {
            arrOutput.splice(value, 1);
        }
    }
    for (let j = 0; j < arrOutput.length; j++) {
        console.log(arrOutput[j]);
    }
}

let input = ('add 3\n'+
'add 5\n'+
'remove 2\n'+
'remove 0\n'+
'add 7').split('\n');
solve(input);
