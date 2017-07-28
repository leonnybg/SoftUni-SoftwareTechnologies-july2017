function solve(arr) {

    let obj = {};

    arr.map(a=>a.split(' -> ')).forEach(studentTokens =>{
        let property = studentTokens[0];
        let value = isNaN(studentTokens[1]) ? studentTokens[1] : Number(studentTokens[1]);

        obj[property] = value;
    });
    console.log(JSON.stringify(obj));

}

let input = ('name -> Angel\n'+
    'surname -> Georgiev\n'+
    'age -> 20\n'+
    'grade -> 6.00\n'+
    'date -> 23/05/1995\n'+
    'town -> Sofia').split('\n');
solve(input);
