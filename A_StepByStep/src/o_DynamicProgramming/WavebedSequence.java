package o_DynamicProgramming;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class WavebedSequence {

	static Long[] p = new Long[101];

	public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();

		int n = Integer.parseInt(br.readLine());
		int[] pNum = new int[n];

		for (int i = 0; i < n; i++) {
			pNum[i] = Integer.parseInt(br.readLine());
			
		}

		p[1] = 1L;
		p[2] = 1L;
        p[3] = 1L;
		for (int i = 0; i < pNum.length; i++) {
			sb.append(wavebed(pNum[i]));
			sb.append(System.lineSeparator());
		}

		System.out.println(sb);
		br.close();
	}

	public static long wavebed(int num) {

		if (num > 3 && p[num] == null) {
			p[num] = wavebed(num - 2) + wavebed(num - 3);
		}

		return p[num];
	}

}
