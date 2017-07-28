function resolve(input) {
    let arr = input.map(String);
    arr.reverse();
    console.log(arr.join('\n'));
}
resolve(['5','5.5','24','-3']);
resolve(['20','1','20','1', 'br']);