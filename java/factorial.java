public class factorial{
    public static void main(String args[]){
 int n1= fact(4);
System.out.println(n1);
    }
public static int fact(int n){
    int ans=1;
    for(int i=1; i<=n; i++){
    ans= ans*i;
    }
     return ans;
}
}