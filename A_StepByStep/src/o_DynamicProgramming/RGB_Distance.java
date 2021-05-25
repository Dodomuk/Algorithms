package o_DynamicProgramming;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class RGB_Distance {

	public static void main(String[] args) throws IOException{
		
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st;
		
		int n = Integer.parseInt(br.readLine());
		
		int[][] rgb = new int[n][3];
		int min;
		
		for (int i = 0; i < rgb.length; i++) {
			
				st = new StringTokenizer(br.readLine()," ");
				
				rgb[i][0] = Integer.parseInt(st.nextToken());
				rgb[i][1] = Integer.parseInt(st.nextToken());
				rgb[i][2] = Integer.parseInt(st.nextToken());
				
		}
	
		for (int i = 1; i < rgb.length; i++) {
			rgb[i][0] += Math.min(rgb[i-1][1], rgb[i-1][2]);
			rgb[i][1] += Math.min(rgb[i-1][0], rgb[i-1][2]);
			rgb[i][2] += Math.min(rgb[i-1][0], rgb[i-1][1]);			
		}	
		min = Math.min(rgb[n-1][0],Math.min(rgb[n-1][1],rgb[n-1][2]));
		
		System.out.println(min);
	}
	
	
}
