package d_if;

import java.util.Scanner;

public class AlarmClock {
	
	public static void main(String[] args) {
		
		Scanner sc =new Scanner(System.in);
		
		//�ΰ��� ���ڸ� �Է� �޴´�(��, ��)
		int h = sc.nextInt();
		int m = sc.nextInt();

		alarmChecker(h,m);
		
	}
	
	public static void alarmChecker(int input_h,int input_m) {


		//�Է��� �ð����� 45���� ���� ���� �����.
		int h = input_h;
		int m = input_m - 45;
		//���� H�� 0�϶� M�� 45���� �۴ٸ� H�� 23�� �ǵ��� �Ѵ�.
		if(m<0) {
			m = 60 + m;
			h = input_h -1 ;
		   if(h < 0) {
			   h = 23;
		   }
		
	
	}
		System.out.println(h + " " + m);
}
}
