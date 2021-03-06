package kakaoCodeTest;

import java.util.HashMap;
import java.util.Map;

public class Solution {
	
	public static void main(String[] args) {
		 System.out.println(solution("five5one2"));
	}
	
    public static int solution(String s) {
    	
    	Map<String,String> list = new HashMap<String,String>();
    	
    	char str;
    	String chk="";
        String result= "";
    	String[] numList = {"zero","one","two","three","four","five","six","seven","eight","nine"};
    	
        for (int i = 0; i < numList.length; i++) {
			list.put(numList[i], Integer.toString(i));
		}
        
        for(int i = 0; i< s.length(); i++) {
        	str = s.charAt(i);
        	if(str < 48 || str >58) {
        		chk += String.valueOf(str);
        	
        		for(String k : list.keySet()) {
        			if(k.equals(chk)) {
        				chk = "";
        				String find = list.get(k);
        				result += find;
        			}
        		}
        		
        	}else {
        		result += String.valueOf(str);
        	}
        	
        }
        
        int answer = Integer.parseInt(result);
        return answer;
    }

}