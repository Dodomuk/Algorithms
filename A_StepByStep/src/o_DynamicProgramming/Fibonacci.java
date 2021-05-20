package o_DynamicProgramming;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Fibonacci {

	static int zero;
	static int one;
	static int sum;
	
	public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();
		
        int input = Integer.parseInt(br.readLine());
		int[] n = new int[input];
		
        for (int i = 0; i < n.length; i++) {

			n[i] = Integer.parseInt(br.readLine());
			num(n[i]);
			sb.append( zero +  " " + one );
			sb.append(System.lineSeparator());
		}			
        
      System.out.println(sb);
	}

	public static void num(int n) {
		
		zero = 1;
		one = 0;
		sum = 1;
		for (int i = 0; i < n; i++) {
			zero = one;
			one = sum;
			sum = zero + one;
		}
	}
}
