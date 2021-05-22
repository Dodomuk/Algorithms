package o_DynamicProgramming;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Tile01 {

	
	static int[] res;
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		try {
		
			int n = Integer.parseInt(br.readLine());
                res = new int[n+1];
				res[n] = numCase(n)% 15746;
			
			
			System.out.println(res[n]);
			
			br.close();
		} catch (NumberFormatException | IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
		
	}
	public static int numCase(int num) {
		
		if(res[num] != 0) {
			return res[num];
		}
		
		if(num <= 3) {
			return res[num] = num;
		}else {
		res[num] = numCase(num-1) + numCase(num-2);
		}
		return res[num];
	}

}
