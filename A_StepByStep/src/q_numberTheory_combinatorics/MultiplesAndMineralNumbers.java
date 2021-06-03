package q_numberTheory_combinatorics;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class MultiplesAndMineralNumbers {

	public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st;
		StringBuilder sb = new StringBuilder();

		while (true) {

			String input = br.readLine();
			
			if (input.equals("0 0")) break;
			
			st = new StringTokenizer(input, " ");
			int num1 = Integer.parseInt(st.nextToken());
			int num2 = Integer.parseInt(st.nextToken());

			if (num2 % num1 == 0) {
				sb.append("factor\n");
			} else if (num1 % num2 == 0) {
				sb.append("multiple\n");
			} else {
				sb.append("neither\n");
			}
			
		}
		System.out.println(sb);
	}
}
