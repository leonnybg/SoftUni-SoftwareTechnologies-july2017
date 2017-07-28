function solve([str]){
    [num1, num2, num3]= str.split(" ").map(Number).sort((e1,e2) => e2 > e1);
    if (num3 + num2 === num1){
        console.log(num3 + " + " + num2 + " = " +  num1);
    }
    else {
        console.log("No");
    }
}
solve(['2 33 8']);
/** raboti samo s polojit 4isla
 * */

