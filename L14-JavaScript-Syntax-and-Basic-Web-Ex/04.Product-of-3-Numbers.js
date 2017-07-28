function product3Numbers(numbers){

    let numArr = numbers.map(Number);
    console.log(numArr.length);
    let count = 0;

    for (let i=0; i<numArr.length;i++){
        if(numArr[i]===0){
            console.log("Positive");
            return;
        }
        if(numArr[i]<0){
            count++;
        }else{
            continue;
        }
    }

    if(count%2!==0){
        console.log("Negative");
    }else{
        console.log("Positive");
    }
}
product3Numbers(['-3', '6', '3'])
