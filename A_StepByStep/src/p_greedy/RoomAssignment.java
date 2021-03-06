package p_greedy;

import java.util.Arrays;
import java.util.Comparator;
import java.util.Scanner;

public class RoomAssignment {

	public static void main(String[] args) {
     
		Scanner sc = new Scanner(System.in);
		
	    int n = sc.nextInt();
		
	    int[][] time = new int[n][2];
	    
	    for (int i = 0; i < time.length; i++) {
			time[i][0] = sc.nextInt();
			time[i][1] = sc.nextInt();
		}
	    
	    Arrays.sort(time, new Comparator<int[]>() {
	    	
	    	@Override
	    	public int compare(int[] o1, int[] o2) {
	    		if(o1[0] == o2[0]) {
	    			return o2[1] - o1[1]; 
	    		}
	    		return o2[0] - o1[0];
	    	}
	    });
	    
	    int cnt = 0;
	    int prev_num = time[0][1];
	    
	    for (int j = 0; j < time.length; j++) {
		    if(time[j][1] <= prev_num) {
		    	prev_num = time[j][0];
		    	cnt++;
		    }
			
		}
	    System.out.println(cnt);
	}

}
