package j_factorial;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Factorial {

	public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		int input = Integer.parseInt(br.readLine());
		int res = 1;
		if (input == 0) {
			System.out.println(1);
		} else {
			for (int i = input; i > 0; i--) {
				res = res * (i);
			}
			System.out.println(res);
		}

	}
}
