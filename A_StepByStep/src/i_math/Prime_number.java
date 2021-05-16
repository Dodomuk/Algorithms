package i_math;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Prime_number {

	public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		int m = Integer.parseInt(br.readLine());
		int n = Integer.parseInt(br.readLine());
		br.close();
		boolean[] prime = new boolean[n + 1];
		int ttl = 0;
		int min = 0;

		primes(prime);

		for (int i = m; i < n + 1; i++) {
			if (prime[i] == false) {
				if (ttl == 0) {
					min = i;
				}
				ttl += i;
			}

		}
		if (ttl == 0) {
			System.out.println(-1);
		} else {
			System.out.println(ttl);
			System.out.println(min);
		}
	}

	public static void primes(boolean[] prime) {
		prime[0] = true;
		prime[1] = true;

		for (int i = 2; i < Math.sqrt(prime.length); i++) {
			for (int j = i * i; j < prime.length; j += i) {
				prime[j] = true;
			}

		}

	}

}
