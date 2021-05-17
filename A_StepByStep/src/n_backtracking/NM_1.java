package n_backtracking;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class NM_1 {
    
	public static boolean[] flg;
	public static int[] arr;
	
	public static void main(String[] args) throws IOException{
		
	    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
	    
	    String[] input = br.readLine().split(" ");
	    int n = Integer.parseInt(input[0]);
	    int m = Integer.parseInt(input[1]);


		flg = new boolean[n];
		arr = new int[m];
	    
		br.close();
		  
	    dfs(n,m,0);
	    
	}
	
	public static void dfs(int n, int m, int depth) {
		
		if(depth == m) {
			for (int i : arr) {
				System.out.print(i + " ");
			}
			System.out.println();
			return;
		}
		
		for (int i = 0; i < n; i++) {
			if(flg[i] == false) {
				flg[i] = true;
				arr[depth] = i + 1;
				dfs(n,m,depth+1);
				flg[i] = false;
				
			}
		}
		return;
	}

}
