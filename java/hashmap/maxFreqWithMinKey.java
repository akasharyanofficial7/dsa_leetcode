import java.util.HashMap;
public class maxFreqWithMinKey{
    public static void main(String[] args) {
        int arr[] = {10, 10, 20, 20,20,30, 30,40,5,5,5};
        System.out.println (fmap(arr));
    }

public static int fmap(int[] arr) {
HashMap<Integer, Integer> hm = new HashMap<>();
for( int i=0; i<arr.length; i++){
    if( hm.containsKey(arr[i])){
        int temp= hm.get(arr[i]);
            hm.put(arr[i] , temp+1);            
            }
            else{
            hm.put(arr[i], 1);
      }
    }  
    
int maxVal=0; 
int ans=0;
for( int i=0; i<arr.length; i++){
    if( hm.get(arr[i])>maxVal){
        maxVal=hm.get(arr[i]);
            ans= arr[i];  
        }
        
        else if( hm.get(arr[i])== maxVal && arr[i]<ans){
         ans= arr[i];
}
}    
    
     return ans;
    
 }
}






