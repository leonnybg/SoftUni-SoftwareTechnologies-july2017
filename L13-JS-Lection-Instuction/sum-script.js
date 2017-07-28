let sumBtn =
    document.getElementById("sum_btn");

sumBtn.onclick = function (e) {
    e.preventDefault();

    let num1=
       Number(document.getElementById("num_one").value);
    let num2 =
       Number(document.getElementById("num_two").value);

    let sum = num1+num2;
    let resultField =
        document.getElementById("result");

    resultField.value=sum;
    resultField.setAttribute("disabled", "disabled");

    let resultLabel=
        document.getElementById("result_lbl");
    resultLabel.setAttribute("style", "color: red");
}
