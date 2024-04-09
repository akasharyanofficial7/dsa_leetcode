import java.util.*;
public class GCD{
static int gcd(int a, int b){
while( a%b!= 0){

 int  rem= a%b;
    a=b;
      b= rem;

}
 return  b;
    }

public static void main( String[] args){

System.out.println( gcd(24,8));
 

    }
}