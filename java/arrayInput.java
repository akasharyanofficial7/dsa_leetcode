//taking input array by compiler 
import java.util.Scanner;
// public class arrayInput{
//     public  static void main(String [] args){
// Scanner sc= new Scanner(System.in);
// int n= sc.nextInt();
// int[] arr= new int[n];
// for( int i=0; i<n; i++){
//      arr[i]= sc.nextInt();
// }
//  for( int i=0; i<n; i++){

// System.out.print(arr[i] +" ");

//  }
//     }
// }





//sum of all element
public class arrayInput{
public static void main(String [] args){
Scanner sc= new Scanner(System.in);
int n= sc.nextInt();
int[] arr= new int[10];
for( int i=0; i<n; i++){
arr[i]= sc.nextInt();
}



int sum=0;
 for( int i=0; i<n; i++){
    sum= n*(n+1)/2;

 }

 System.out.println(sum);
}

}


 