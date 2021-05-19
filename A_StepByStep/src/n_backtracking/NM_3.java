package n_backtracking;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class NM_3 {

	public static int[] arr;
    public static StringBuilder sb = new StringBuilder();
    
	public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		String[] input = br.readLine().split(" ");
		int n = Integer.parseInt(input[0]);
		int m = Integer.parseInt(input[1]);

		arr = new int[m];

		tracking(n, m, 0);
        System.out.println(sb);
	}

	public static void tracking(int n, int m, int dept) {

		if (m == dept) {
			for (int i : arr) {

				sb.append(i + " ");

			}
			sb.append(System.lineSeparator());
			return;
		}

		for (int i = 0; i < n; i++) {
			arr[dept] = i + 1;
			tracking(n, m, dept + 1);

		}
		return;

	}
}
