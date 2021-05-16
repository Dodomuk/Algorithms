package m_sort;

import java.util.Arrays;
import java.util.Comparator;
import java.util.Scanner;

public class Coordinate_Alignment {

	static Scanner sc = new Scanner(System.in);

	public static void main(String[] args) {
		        
	int input = sc.nextInt();
	
	for (int[] res : bubbleSort(input)) {

		System.out.print(res[0] + " ");
		System.out.println(res[1]);
	}
	}
	 
	public static int[][] bubbleSort(int input){
		
		int[][] coordinate = new int[input][2];
		
		for (int i = 0; i < input ; i++) {
			for (int j = 0; j < 2; j++) {
				coordinate[i][j] = sc.nextInt();
			}
		}
		
		Arrays.sort(coordinate, new Comparator<int[]>() {
			
			@Override
			public int compare(int[] a, int[] b){
				if(a[0] == b[0]) {
					return Integer.compare(a[1],b[1]);
				}else {
					return Integer.compare(a[0], b[0]);
				}
			}
			
		});
		
		sc.close();
		return coordinate;
	}

}
