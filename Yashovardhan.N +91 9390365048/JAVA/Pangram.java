import java.util.Scanner;
public class Pangram {
    public static void main(String[] args) {
        char[] alphabets={'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'};
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter a sentence: ");
        String word=scanner.nextLine().toLowerCase();
        int totalAlphabets=alphabets.length;
        boolean isPangram=true;
        if(word.length()<26) {
            isPangram=false;
            System.out.println(word+ " is not a pangram");
        }
        for(int i=0; i<alphabets.length && word.length()>=26;i++) {
            if(!word.contains(String.valueOf(alphabets[i]))) {
                isPangram=false;
                break;
            }
        }
        if(isPangram) {
            System.out.println(word+" is a pangram");
        }
    }
}