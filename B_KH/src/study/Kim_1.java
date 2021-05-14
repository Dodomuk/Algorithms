package study;

import java.util.ArrayList;
import java.util.Scanner;

public class Kim_1 {

	public static void main(String[] args) {

		ArrayList<Integer> arr = new ArrayList<Integer>();
           Scanner sc = new Scanner(System.in);
		int k = sc.nextInt();
          for (int i = 0; i < k; i++) {
        	  int input = sc.nextInt();
          	   arr.add(input);
          	   
		}          
          
		System.out.println(arr);
		
		
	

}
}
