package p_greedy;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class GasStation {

	public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st;

		// ���� ����
		int city_num = Integer.parseInt(br.readLine());
		// ���� ����
		long[] road = new long[city_num - 1];
		// ������ ���ʹ� ����
		long[] gas_price = new long[city_num];

		// ���� ���� �Է�
		st = new StringTokenizer((br.readLine()), " ");

		for (int i = 0; i < road.length; i++) {
			road[i] = Long.parseLong(st.nextToken());
		}

		// ���ʹ� ���� �Է�
		st = new StringTokenizer((br.readLine()), " ");

		for (int i = 0; i < gas_price.length; i++) {
			gas_price[i] = Long.parseLong(st.nextToken());
		}
		
		// �����
		long res = 0;
        long cheapest = gas_price[0];
		for (int i = 0; i < road.length; i++) {
			if (gas_price[i] < cheapest) {
				cheapest = gas_price[i];
			} 
			res += cheapest*road[i];
		}
		System.out.println(res);
	}
}
