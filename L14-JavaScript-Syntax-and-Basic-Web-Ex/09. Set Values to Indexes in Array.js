function solve(arr) {

    let arrDyljina = Number(arr.slice(0,1));
    arr.shift();  //otsranih pyrvi element

    let newArray = [];

    for (let i=0; i<arr.length; i++){
        let tokens = arr[i].split(' - ');
        let index = tokens[0];
        let value = tokens[1];
        newArray[index]=value;
    }

    for (let j=0; j<arrDyljina; j++){
        if (newArray[j]==undefined){
            console.log(0);
        }
        else {
            console.log(newArray[j]);
        }
    }
}

let input = ('3\n'+
    '0 - 5\n'+
    '1 - 6\n'+
    '2 - 7').split('\n');
solve(input);

