package m_sort;

import java.util.Scanner;

public class Sort_numbers {

	static Scanner sc = new Scanner(System.in);
	
	public static void main(String[] args) {
		
		int num = sc.nextInt();
		for (int i : bubbleSort(num)) {
			System.out.println(i);
		}
	}
	
	public static int[] bubbleSort(int num) {

	int[] numArr = new int[num];
	
	for(int i=0;i<num;i++) {
		numArr[i] = sc.nextInt();
	}
	
	int check;
	
	for (int i = 0;i<numArr.length;i++) {
		if(i == numArr.length-1) {
			break;
		}
		if(numArr[i]>numArr[i+1]) {
			check = numArr[i+1];
			numArr[i+1] = numArr[i];
			numArr[i] = check;
			i=-1;
			continue;
		}
	}
	return numArr;
	}
}
