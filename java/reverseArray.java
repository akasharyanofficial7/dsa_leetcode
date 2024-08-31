import java.util.Scanner;
public class reverseArray{
public static void main(String[] args){
int arr[]={1,2,4,5,6,8,88,77,43};
int s=3;
int e=7;
swap( arr,s,e);

for( int i=0; i<arr.length; i++){

    System.out.print(arr[i]+" ");
}

}
     public static int[] swap(int arr[], int s, int e){
         int i= s;
          int j=e;
        while( i<j){
            int temp= arr[i]; 
            arr[i]= arr[j];
             arr[j]= temp;
              i++;
               j--;
        }
         return arr;
     }
}