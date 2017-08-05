import java.lang.reflect.Array;
import java.util.Scanner;

public class NumbersSymmetric {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int num = Integer.parseInt(scanner.nextLine());

        for (int i = 1 ; i<=num; i++ ){
            if (isSymetricNumber("" + i)) {
                System.out.println(i);
            }
        }
    }

    private static boolean isSymetricNumber(String number) {
        for (int i=0; i<number.length(); i++){
            if (number.charAt(i) != number.charAt(number.length() - 1 - i)){
                return false;
            }
        }
        return true;
    }
}
