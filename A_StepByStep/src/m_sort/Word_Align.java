package m_sort;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.Scanner;

public class Word_Align {

	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		
		int input = sc.nextInt();
		
		String[] words = new String[input];
		
		for (int i = 0; i < input; i++) {
			words[i] = sc.next();
		}

		Arrays.sort(words, new Comparator<String>() {
			@Override
			public int compare(String a,String b) {
				if(a.length() == b.length()) {
				   return a.compareTo(b);
				}
				else {
				
					return a.length() - b.length();
				}
			}
		});
        
		List<String> list = new ArrayList<>();
		
		for (int i = 0; i < words.length; i++) {
		    if(i==0) {
		    	list.add(words[i]);
		    }else if(i>0 && !words[i].equals(words[i-1])) {

				list.add(words[i]);
			}
			
			}
		
		for (String string : list) {
			System.out.println(string);
		}
	}

}
