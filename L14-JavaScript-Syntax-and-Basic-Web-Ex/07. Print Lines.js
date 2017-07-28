function printLines(input) {
    let arr = input.map(String);
    for (let i=0; i<arr.length; i++){
        if (arr[i]==="Stop"){
            return;
        }
        console.log (arr[i]);
    }
}
printLines(['Line 1', 'Line 2','Line 3', 'Stop']);
printLines(['3', '6','5', '4','Stop', '10', '12']);