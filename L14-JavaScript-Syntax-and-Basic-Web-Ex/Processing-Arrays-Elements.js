function x() {
    let capitals = ['Sofia', 'Washington', 'London', 'Paris'];

    for (let capital of capitals) {
        console.log(capital);
    }
    for (let i in capitals) {
        console.log(capitals[i]);
    }
    for (let i = 0; i < capitals.length; i++) {
        console.log(capitals[i]);
    }
}

x();