package b_while;

import java.util.Scanner;

public class AdditionCycle {

	static Scanner sc = new Scanner(System.in);

	public static void main(String[] args) {

		numberAddition();

	}

	public static void numberAddition() {

		int[] cyclingNum = new int[2];
		int sum = 0;
		int res;

		int inputNumFirst = sc.nextInt();
		int inputNum = inputNumFirst;

		int i = 0;
		boolean flg = true;

		while (flg) {

			if (inputNum >= 10 && inputNum <= 99) {

				cyclingNum[1] = inputNum % 10;
				cyclingNum[0] = (inputNum - cyclingNum[1]) / 10;

			} else if (inputNum < 10 && inputNum >= 0) {

				cyclingNum[0] = 0;
				cyclingNum[1] = inputNum;

			} else {

				return;

			}

			sum = cyclingNum[0] + cyclingNum[1];
			res = (cyclingNum[1] * 10) + (sum % 10);
			i++;
			if (res == inputNumFirst) {
				flg = false;
			} else {
				inputNum = res;
			}

		}
		System.out.println(i);

	}

}
