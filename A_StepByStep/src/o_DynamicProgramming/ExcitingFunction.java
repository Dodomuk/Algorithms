package o_DynamicProgramming;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class ExcitingFunction {

	static int[][][] arr;

	public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();
		StringTokenizer st;

		int[] abc = new int[3];
		arr = new int[21][21][21];

		while (true) {

			st = new StringTokenizer(br.readLine(), " ");
			for (int i = 0; i < abc.length; i++) {
				abc[i] = Integer.parseInt(st.nextToken());
			}

			if (abc[0] == -1 && abc[1] == -1 && abc[2] == -1) {
				break;
			}

			sb.append("w(" + abc[0] + ", " + abc[1] + ", " + abc[2] + ") = " + w(abc[0], abc[1], abc[2]));
            sb.append(System.lineSeparator());
		}

		System.out.println(sb);

	}

	public static int w(int a, int b, int c) {

		if(a <= 20 && b <= 20 && c <= 20 && a>=0 && b>=0 && c>=0)
		if (arr[a][b][c] != 0) {
			return arr[a][b][c];
		}

		if (a <= 0 || b <= 0 || c <= 0) {
			return 1;
		} else if (a > 20 || b > 20 || c > 20) {
			
			return arr[20][20][20] = w(20, 20, 20);

		} else if (a < b && b < c) {
			return arr[a][b][c] = w(a, b, c - 1) + w(a, b - 1, c - 1) - w(a, b - 1, c);
		} else {
			return arr[a][b][c] = w(a - 1, b, c) + w(a - 1, b - 1, c) + w(a - 1, b, c - 1) - w(a - 1, b - 1, c - 1);
		}
	}

}
