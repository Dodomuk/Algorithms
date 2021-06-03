package q_numberTheory_combinatorics;

import java.util.Arrays;
import java.util.Scanner;

public class MineralNumbers {

	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		
		int mineral_num = sc.nextInt();
	    int[] mineral = new int[mineral_num];
	
	    for (int i = 0; i < mineral_num; i++) {
		    mineral[i] = sc.nextInt();
		}
		
	    Arrays.sort(mineral);
	    
	    int n = mineral[0] * mineral[mineral_num - 1];
	    
	    System.out.println(n);
	}
	
}
