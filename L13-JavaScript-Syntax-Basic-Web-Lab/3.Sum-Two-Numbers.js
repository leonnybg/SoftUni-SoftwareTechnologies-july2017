function sumTwoNumbers(nums){
    //console.log(nums.map(Number));
    // nums.forEach(e => e);
    let num1 = Number(nums.pop());
    //console.log(` num1 = ${num1}`);
    let num2 = Number(nums.pop());
    //console.log(` num2 = ${num2}`);
    let sum = num2 + num1;
    console.log(sum);
}
sumTwoNumbers(['66', '4']);