package somansa;

import java.util.Scanner;

public class Decimal {

	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);
		long num = sc.nextLong();

		flg(num);

	}

	public static void flg(long num) {
		while (true) {
			if(num == 1 || num == 0) {
				System.out.println("소수가 아닙니다");
				break;
			}
			for (int n = 2; n < num; n++) {

				if (num % n == 0) {
					System.out.println("소수가 아닙니다");
					return;
				}
			}

			System.out.println("소수입니다");
			break;
		}
	}
}
