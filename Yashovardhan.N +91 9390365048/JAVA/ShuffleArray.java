import java.util.Random;

public class ShuffleArray {
    public static void main(String[] args) {
        int[] array={1,2,3,4,5,6,7};
        Random random = new Random();
        for(int index=array.length-1; index>0; index--) {
            int randomIndex=random.nextInt(index+1);
            int temp=array[index];
            array[index]=array[randomIndex];
            array[randomIndex]=temp;
        }
        for(int item: array) {
            System.out.println(item);
        }
    }
}