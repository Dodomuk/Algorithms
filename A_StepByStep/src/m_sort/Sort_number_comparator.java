package m_sort;

import java.util.Arrays;
import java.util.Scanner;

public class Sort_number_comparator {

	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		
		int input = sc.nextInt();
 
		int[] arr = new int[input];
		
		for (int i = 0; i < input; i++) {
			arr[i] = sc.nextInt();
		}
		
		Arrays.sort(arr);
		
		for (int i : arr) {
			System.out.println(i);
		}
	}

}
