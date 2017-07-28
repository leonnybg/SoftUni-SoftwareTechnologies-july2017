function solve(arr) {
    let students = arr.map(JSON.parse)
    //taka JSON ot masiw ot stringowe gi napravi obekti

    students.forEach(student => {
        let studentStr=
            `Name: ${student.name}\n`+
            `Age: ${student.age}\n`+
            `Date: ${student.date}`;
        console.log(studentStr);
    });
}

let input = ['{"name":"Gosho","age":10,"date":"19/06/2005"}',
'{"name":"Tosho","age":11,"date":"04/04/2005"}'];
solve(input);