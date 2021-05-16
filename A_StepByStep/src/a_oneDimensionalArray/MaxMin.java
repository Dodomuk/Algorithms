package a_oneDimensionalArray;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class MaxMin {

	public static void main(String[] args) throws IOException{
		// TODO Auto-generated method stub

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		
			int input = Integer.parseInt(br.readLine());
			
			StringTokenizer st = new StringTokenizer(br.readLine()," ");
			
			int[] arr = new int[input];
			
			for (int i = 0; i < input; i++) {
				arr[i] = Integer.parseInt(st.nextToken());
				
			}
			
			Arrays.sort(arr);
			
			br.close();
		    System.out.println(arr[0] + " " + arr[input-1]);
	}

}
