import java.util.HashMap;
import java.util.Scanner;
public class RomanToNumber {
    public static void main(String[] args) {
        HashMap<Character, Integer> romanInteger = new HashMap<Character, Integer>();
        romanInteger.put('I',1);
        romanInteger.put('V', 5);
        romanInteger.put('X', 10);
        romanInteger.put('L', 50);
        romanInteger.put('C', 100);
        romanInteger.put('D', 500);
        romanInteger.put('M', 1000);
        Scanner scanner=new Scanner(System.in);
        System.out.println("Enter a roman number: ");
        String roman = scanner.nextLine();
        int result=0;
        int previousValue=0;
        for(int charIndex=roman.length()-1; charIndex>=0; charIndex--) {
            int currentValue=romanInteger.get(roman.charAt(charIndex));
            if(currentValue<previousValue) {
                result-=currentValue;
            }
            if(currentValue>=previousValue) {
                result+=currentValue;
            }
            previousValue=currentValue;
        }
        System.out.println(result);
    }
}