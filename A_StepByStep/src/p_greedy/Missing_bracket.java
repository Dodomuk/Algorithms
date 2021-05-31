package p_greedy;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;
import java.util.StringTokenizer;

public class Missing_bracket {

	public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st;
		
		String[] numbers = br.readLine().split("-");
		
		int res = 0;
		
		for (int i = 0; i < numbers.length; i++) {
			st = new StringTokenizer(numbers[i], "+");
			while (st.hasMoreTokens()) {
				if (i == 0) {
					res += Integer.parseInt(st.nextToken());
				} else {
					res -= Integer.parseInt(st.nextToken());
				}
			}
		}
		System.out.println(res);
	}

}
