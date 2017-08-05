import java.util.Scanner;

/**
 * Created by CSKA on 02-Aug-17.
 */
public class SumTwoNumbers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double num1 = Double.parseDouble(scanner.nextLine());
        double num2 = Double.parseDouble(scanner.nextLine());
        System.out.printf("Sum=%.2f", num1+num2);
    }
}
