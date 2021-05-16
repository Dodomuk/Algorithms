package d_if;

import java.util.Scanner;

public class AlarmClock {
	
	public static void main(String[] args) {
		
		Scanner sc =new Scanner(System.in);
		
		//두개의 숫자를 입력 받는다(시, 분)
		int h = sc.nextInt();
		int m = sc.nextInt();

		alarmChecker(h,m);
		
	}
	
	public static void alarmChecker(int input_h,int input_m) {


		//입력한 시간에서 45분을 빼는 식을 만든다.
		int h = input_h;
		int m = input_m - 45;
		//만약 H가 0일때 M이 45보다 작다면 H이 23이 되도록 한다.
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
