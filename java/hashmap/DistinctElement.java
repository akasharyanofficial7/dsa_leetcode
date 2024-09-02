import java.util.HashSet;

public class DistinctElement {
    public static void main(String[] args) {
        int arr[] = {10, 10, 20, 20, 30};
        distinctEle(arr);   
    }

    public static void  distinctEle(int[] arr) {
        HashSet<Integer>  hs = new  HashSet<>();
        int e = arr.length;   
        for (int i = 0; i < e; i++) {
             hs.add(arr[i]);
        }
        
        System.out.println(" distinct element are:"+ hs.size());
  
    }
}
