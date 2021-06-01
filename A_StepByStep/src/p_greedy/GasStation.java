package p_greedy;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class GasStation {

	public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st;

		// 도시 개수
		int city_num = Integer.parseInt(br.readLine());
		// 도로 길이
		long[] road = new long[city_num - 1];
		// 주유소 리터당 가격
		long[] gas_price = new long[city_num];

		// 도로 길이 입력
		st = new StringTokenizer((br.readLine()), " ");

		for (int i = 0; i < road.length; i++) {
			road[i] = Long.parseLong(st.nextToken());
		}

		// 리터당 가격 입력
		st = new StringTokenizer((br.readLine()), " ");

		for (int i = 0; i < gas_price.length; i++) {
			gas_price[i] = Long.parseLong(st.nextToken());
		}
		
		// 결과값
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
