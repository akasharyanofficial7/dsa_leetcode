
class maxConsequiteSum {
    public static void main(String[] args) {
        int arr[] = {1, 2, 3, 4, 5, 3, 2};
        System.out.print(pair(arr));
        
    }
    public static int  pair(int arr[]) {
        int currSum= arr[0]+ arr[1]+ arr[2];
        int maxSum= currSum;
        
        
        for( int  i=3; i<arr.length; i++){
            currSum+= arr[i]-arr[i-3];
            
            if( currSum>maxSum){
                maxSum= currSum;
                
            }
            
        }
        
        
         return maxSum;
    }
}
