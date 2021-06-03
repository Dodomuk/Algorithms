package q_numberTheory_combinatorics;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Inspection {

	public static void main(String[] args) throws IOException{
		
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		int n_num = Integer.parseInt(br.readLine());
		
		int[] n = new int[n_num];
	    
		for (int i = 0; i < n.length; i++) {
			n[i] =  Integer.parseInt(br.readLine());
		}
		
		int check = Math.abs(n[1] - n[0]);
		
		for (int i = 1; i < n.length - 1; i++) {
			check = gcd(check,Math.abs(n[i] - n[i+1]));
		}
        
		for(int i = 2; i < check; i++) {
			if(check % i == 0) {
				System.out.print(i + " ");
			}
		}
		System.out.println(check);
		
	}
	
	public static int gcd(int a , int b) {
		
		if(b == 0) {
			return a;
		}
		if(a > b) {
		return gcd(b,a%b);
		}
		return gcd(a,b%a);
	}
	
}
