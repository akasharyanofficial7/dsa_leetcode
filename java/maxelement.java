import java.util.Scanner;
public class maxelement{

    // find max elemet using brute force element
    public static void main(String args[]){
      Scanner sc= new Scanner(System.in);
        int arr[]= new int[10];
        int n= sc.nextInt();
        for( int i=0; i<n ; i++){
            arr[i]=  sc.nextInt();
        }
      
            System.out.println(max(arr));
    }
        public static int max(int [] arr){
            int maxVal=0;
        for( int i=0;   i<arr.length; i++){
         if( arr[i]>maxVal){
         maxVal= arr[i];
         }
}

 return maxVal;
        }
}
