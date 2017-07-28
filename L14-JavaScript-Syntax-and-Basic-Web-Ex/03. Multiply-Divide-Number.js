function resolve(numbers) {
    let num1=Number(numbers[0]);
    let num2=Number(numbers[1]);
    if (num2 >= num1) {
        let result = num1 * num2;
        console.log(result);
    } else{
        let result = num1 / num2;
        console.log(result);
    }
}
resolve(['144', '12'])
