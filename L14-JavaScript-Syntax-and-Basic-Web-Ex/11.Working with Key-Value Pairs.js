function solve(input) {
    let needKey = input.slice(-1).pop();
    let keyValuePairs = input.slice(0,-1)
        .map(e => parseKeyValuePair(e));

    let dict = {};
    keyValuePairs.forEach(element => {
        if (!dict[element.key]){
            dict[element.key] = [];
        }
        dict[element.key].push(element.value);
    });

    if (dict[needKey]){
        console.log(dict[needKey].slice(-1).toString());
    } else {
        console.log('None');
    }
    //със стернарен оператор горния  if може да се избегне:
    // console.log(dict[searchKey] ? dict[searchKey].join('\n') : "None");

    function parseKeyValuePair(str) {
        let tokens= str.split(' ');
        let result = {
            key: tokens[0],
            value: tokens[1]
        };
        return result;
    }
}

solve(['3 test',
    '3 test1',
    '4 test2',
    '4 test3',
    '4 test5',
    '4']);