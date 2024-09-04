import java.util.HashMap;
 
 
public class pairSums {
    public static void main(String[] args) {
        
        int arr[]=  {1, 1, 1, 1};
        
        
        
        int  k=2;
int result =  pairSum(arr, k);
        System.out.println("Number of pairs: " + result);

    }
    public static  int  pairSum(int arr[], int k){
        int ans=0;
       HashMap<Integer, Integer> hm = new HashMap<>();

        for( int i=0; i<arr.length; i++){
            int  x= arr[i];
             int y=k-x;
             if( hm.containsKey(y)){
                 ans+= hm.get(y);
 
             }
             
            if( hm.containsKey(x)){
             hm.put( x,  hm.get(x)+1);            
             }
                else{
                    hm.put( x,1);
                }
            }     
            
            
             return ans;
            
            
    }
}