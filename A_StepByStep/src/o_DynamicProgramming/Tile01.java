package o_DynamicProgramming;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Tile01 {

	
	static int[] res = new int[1000001];
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		try {
		
			int n = Integer.parseInt(br.readLine());
			
			for (int i = 1; i < 3; i++) {
				res[i] = i;	
			}
			
			System.out.println(numCase(n));
			
			br.close();
		} catch (NumberFormatException | IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	
		
	}
	
	
	public static int numCase(int num) {
		
     if(res[num] == 0) {
		return res[num] = (numCase(num-1) + numCase(num-2))% 15746;
     }else {
		return res[num];
     }
	}

}
