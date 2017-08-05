import java.util.Arrays;
import java.util.Scanner;

public class LargestThreeNumbers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String [] numString = scanner.nextLine().split("\\s+");

        int[] numbers = new int [numString.length];

        for (int i=0; i<numbers.length; i++){
            numbers[i]= Integer.parseInt(numString[i]);
        }

        Arrays.sort(numbers);
        int counter = Math.min(3, numbers.length);

        for (int i=0; i<counter; i++){
            System.out.println(numbers[numbers.length-i-1]);
        }

    }
}
