class  segreagateArray {
    public static void main(String[] args) {
        int array[] = {1, 0, 2, 0, 1, 2, 2};
        segrigigateArray(array);
        
        // Print the sorted array
        for (int i = 0; i < array.length; i++) {
            System.out.print(array[i] + " ");
        }
    }
    
    public static void segrigigateArray(int array[]) {
        int a = 0; // Count of 0s
        int b = 0; // Count of 1s
        
        // Count the number of 0s and 1s
        for (int i = 0; i < array.length; i++) {
            if (array[i] == 0) {
                a++;
            } else if (array[i] == 1) {
                b++;
            }
        }
        
        // Fill the array with 0s, 1s, and 2s based on the counts
        for (int i = 0; i < a; i++) {
            array[i] = 0;
        }
        for (int i = a; i < a + b; i++) {
            array[i] = 1;
        }
        for (int i = a + b; i < array.length; i++) {
            array[i] = 2;
        }
    }
}
