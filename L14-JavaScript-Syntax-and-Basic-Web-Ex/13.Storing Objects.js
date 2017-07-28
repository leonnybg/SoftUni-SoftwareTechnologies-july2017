function solve(arr) {
    let students = arr.map(str => parseStudent(str));

    function parseStudent(str) {
        let tokens = str.split(' -> ');
        let [name, age, grade] = tokens.map(a => !isNaN(a) ? Number(a) : a);
        let obj = {name: name, age: age, grade: grade};
        return obj;
    }

    students.forEach(student => {
        let studentStr=
            `Name: ${student.name}\n`+
            `Age: ${student.age}\n`+
            `Grade: ${student.grade.toFixed(2)}`;
        console.log(studentStr);
    });
}


let input = ('Pesho -> 13 -> 6.00\n'+
'Ivan -> 12 -> 5.57\n'+
'Toni -> 13 -> 4.90').split('\n');
solve(input);