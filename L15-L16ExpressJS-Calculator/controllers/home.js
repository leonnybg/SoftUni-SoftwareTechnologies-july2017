const Calculator = require('../models/Calculator');

module.exports = {
    indexGet: (req, res) => {
        res.render('home/index');
    },
    indexPost: (req, res) => {
        let calculatorBody = req.body;
        let calcParams = calculatorBody['calculator'];

        let leftOperand = Number(calcParams.leftOperand);
        let operator = calcParams.operator;
        let rightOperand = Number(calcParams.rightOperand);

        let calculator = new Calculator(
            leftOperand,
            operator,
            rightOperand
        );
        let result = calculator.calculateResult();
        res.render('home/index',{'calculator': calculator, 'result': result});
    }
};