import java.util.Scanner;

/**
 * Created by CSKA on 02-Aug-17.
 */
public class ThreeIntegersSum {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int num1 = scanner.nextInt();
        int num2 = scanner.nextInt();
        int num3 = scanner.nextInt();

        if (!checkThreeIntegers(num1, num2,num3)&&
                !checkThreeIntegers(num3, num1, num2)&&
                !checkThreeIntegers(num2, num3, num1)){
            System.out.printf("No");
        }
    }
    static  boolean checkThreeIntegers(int num1, int num2, int sum){
        if (num1+num2 != sum){
            return false;
        }
        if (num1<=num2){
            System.out.printf("%d + %d = %d%n", num1, num2, sum);
        }
        else {
            System.out.printf("%d + %d = %d%n", num2, num1, sum);
        }
        return true;
    }
}
