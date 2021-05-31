package p_greedy;

import java.util.Arrays;
import java.util.Scanner;

public class ATM {

	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);
		
		int n = sc.nextInt();
		int[] p = new int[n];
		
		for (int i = 0; i < n; i++) {
			p[i] = sc.nextInt();
		}
		
	    Arrays.sort(p);
	   
	    int time_cost = 0;
	    int rotation_cnt = p.length;
	    for (int i = 0; i < p.length; i++) {
			time_cost += rotation_cnt*p[i];
			rotation_cnt--;
		}
	    
	    System.out.println(time_cost);
	    
	}

}
