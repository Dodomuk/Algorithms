package p_greedy;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.Collections;
import java.util.StringTokenizer;

public class Coin_0 {

	static int min;

	public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		StringTokenizer st = new StringTokenizer(br.readLine(), " ");

		int n = Integer.parseInt(st.nextToken());
		int k = Integer.parseInt(st.nextToken());

		int cnt = 0;
		Integer[] money = new Integer[n];

		for (int i = 0; i < n; i++) {
			int input = Integer.parseInt(br.readLine());
			money[i] = input;
		}

		Arrays.sort(money, Collections.reverseOrder());
		
			for (int i = 0; i < n; i++) {

			if(money[i] <= k) {
				cnt += k / money[i];
				k = k % money[i];
			}	

			}
			
		System.out.println(cnt);

	}
}
