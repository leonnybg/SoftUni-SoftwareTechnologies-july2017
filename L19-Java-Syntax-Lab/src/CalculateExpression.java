/**
 * Created by CSKA on 02-Aug-17.
 */
public class CalculateExpression {
    public static void main(String[] args) {
        double num = 0.5;
        double expression = (30 + 21) * num * ((35 - 12)-num);
        double sqrExpression = Math.pow(expression, 2);
        System.out.println(sqrExpression);
    }
}
