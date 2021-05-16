package m_sort;

import java.util.Scanner;

public class Coordinate_Alignment {

	static Scanner sc = new Scanner(System.in);

	public static void main(String[] args) {
		// TODO Auto-generated method stub
	long beforeTime = System.currentTimeMillis(); //코드 실행 전에 시간 받아오기
	    
	//실험할 코드 추가
		        
	int input = sc.nextInt();
	for (int[] res : bubbleSort(input)) {

		System.out.print(res[0] + " ");
		System.out.println(res[1]);
	}

	long afterTime = System.currentTimeMillis(); // 코드 실행 후에 시간 받아오기
	long secDiffTime = (afterTime - beforeTime)/1000; //두 시간에 차 계산
	System.out.println("시간차이(m) : "+secDiffTime);
	}
	 
	public static int[][] bubbleSort(int input){
		
		int[][] coordinate = new int[input][2];
		
		for (int i = 0; i < input ; i++) {
			for (int j = 0; j < 2; j++) {
				coordinate[i][j] = sc.nextInt();
			}
		}
		
		int check;
		while(true) {
			for (int i = 0; i < input-1; i++) {
				
				if(coordinate[i][0] > coordinate[i+1][0]) {
					for (int j = 0; j < 2; j++) {
						check = coordinate[i+1][j];
						coordinate[i+1][j] = coordinate[i][j];
						coordinate[i][j] = check;
				
					}
					i = -1;
					/*
					 * if(i < 2) { i= -1; }else { i = i-2; }
					 */
				}else if(coordinate[i][0] == coordinate[i+1][0]) {
					if(coordinate[i][1] > coordinate[i+1][1]){
						check = coordinate[i+1][1];
						coordinate[i+1][1] = coordinate[i][1];
						coordinate[i][1] = check;
						
					}
				}

			}
			break;
		}
		
		sc.close();
		return coordinate;
	}

}
