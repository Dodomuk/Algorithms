package p_greedy;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.StringTokenizer;

public class RoomAssignment {

	public static void main(String[] args) throws IOException {

		// n�� �Է�
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st;
		int n = Integer.parseInt(br.readLine());
		int[][] meeting = new int[n][2];
		// �ִ밪�� ������ �� �ִ� cnt ��ü ���� , �ð� ���� ��ü ����
		int cnt = 0;

		// ���� �ð� , ���� �ð� �����ؼ� ����
		for (int i = 0; i < n; i++) {

			st = new StringTokenizer(br.readLine(), " ");

			meeting[i][0] = Integer.parseInt(st.nextToken());
			meeting[i][1] = Integer.parseInt(st.nextToken());
		}
		// �ð� �������� ����
		Arrays.sort(meeting, new Comparator<int[]>() {

			@Override
			public int compare(int[] a, int[] b) {
				if (a[1] == b[1]) {
					return a[0] - b[0];
				}
				return a[1] - b[1];
			}
		});

		// *int�ִ밪 ���� �ʵ��� ����
		// ���۽ð��� ����ð����� �տ� ���� ��츸 cnt ++
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
