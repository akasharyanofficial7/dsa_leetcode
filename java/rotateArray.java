public class rotateArray {
    public static void main(String[] args) {
        int arr[] = { 1,2,3,4,5,6,7};
        int s = 0;
        int e = arr.length - 1;
        int k=3;
        swap(arr, s, e);   
        swap(arr, k, e);  
     swap(arr, s, k-1);  
        
 
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
    }

    public static int[] swap(int[] arr, int s, int e) {
        int i = s;
        int j = e;
        while (i < j) {
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j--;
        }
        return arr;
    }
 
}
