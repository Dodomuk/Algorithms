package n_backtracking;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class NM_2 {

	public static boolean[] flg;
	public static int[] arr;
	
	public static void main(String[] args) throws IOException{

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		StringTokenizer st = new StringTokenizer(br.readLine()," ");
		
		int n = Integer.parseInt(st.nextToken());
		int m = Integer.parseInt(st.nextToken());
		
		flg = new boolean[n];
		arr = new int[m];
		
		br.close();
		dfs(n,m,0);
		
	}
	
	public static void dfs(int n, int m, int dep) {
		
		if(m == dep) {
		
			for (int i : arr) {
				System.out.print(i + " ");
			}
			System.out.println();
			return;
		}
		
		for (int i = 0; i < n; i++) {
			if(flg[i] == false) {
				flg[i] = true;
				arr[dep] = i + 1;
				if(dep > 0 && arr[dep] < arr[dep-1]) {
					flg[i] = false;
					
				}else {
				dfs(n,m,dep+1);
				flg[i] = false;
				}
			}
		}return;
		
	}

}
