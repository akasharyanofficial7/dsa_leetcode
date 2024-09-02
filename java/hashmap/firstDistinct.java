import java.util.HashMap;


//find first not repeating value in an array 
public class  firstDistinct{
    public static void main(String[] args) {
        int arr[] = {2,5, 2,33, 3, 4,2, 5, 6, 7};
        int value = fmap(arr);   
        System.out.println(value);
    }

    public static int fmap(int[] arr) {
        HashMap<Integer, Integer> hm = new HashMap<>();
        int e = arr.length;   
        
        for (int i = 0; i < e; i++) {
            if (hm.containsKey(arr[i])) {
                int temp = hm.get(arr[i]);
                hm.put(arr[i], temp + 1);
            } else {
                hm.put(arr[i], 1);

            }

        }
        for (int i = 0; i < arr.length; i++) {
            if (hm.get(arr[i]) == 1) {
                return arr[i];
                
            }
        
        }
        return -1;   
    }
}
