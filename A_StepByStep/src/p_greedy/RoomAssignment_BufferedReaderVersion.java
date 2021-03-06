package p_greedy;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.Comparator;
import java.util.StringTokenizer;

public class RoomAssignment_BufferedReaderVersion {
	
	public static void main(String[] args) throws IOException {

		// n값 입력
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st;
		int n = Integer.parseInt(br.readLine());
		int[][] meeting = new int[n][2];
		// 최대값을 저장할 수 있는 cnt 객체 생성 , 시간 저장 객체 생성
		int cnt = 0;

		// 시작 시간 , 종료 시간 구분해서 저장
		for (int i = 0; i < n; i++) {

			st = new StringTokenizer(br.readLine(), " ");

			meeting[i][0] = Integer.parseInt(st.nextToken());
			meeting[i][1] = Integer.parseInt(st.nextToken());
		}
		// 시간 역순으로 정렬
		Arrays.sort(meeting, new Comparator<int[]>() {

			@Override
			public int compare(int[] a, int[] b) {
				if (a[1] == b[1]) {
					return a[0] - b[0];
				}
				return a[1] - b[1];
			}
		});

		// *int최대값 넘지 않도록 주의
		// 시작시간이 종료시간보다 앞에 있을 경우만 cnt ++
		int timer = 0;
		for (int i = 0; i < meeting.length; i++) {
			if (timer <= meeting[i][0]) {
				timer = meeting[i][1];
				cnt++;
			}
		}
		System.out.println(cnt);
	}
}
