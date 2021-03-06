package programmers;

import java.util.HashMap;
import java.util.Map;

public class Marathon {

	public static void main(String[] args) {

		Marathon marathon = new Marathon();
		String[] participant = {"ab","cd","ef","gh","ig"};
		String[] completion = {"ab","cd","ef"};
		
		System.out.println(marathon.solution(participant,completion));
		
	}

	    public String solution(String[] participant, String[] completion) {
	       
	    	Map<String, Integer> list = new HashMap<String,Integer>();
	    	String res = "";
                for(String player : participant)
	    		list.put(player, list.getOrDefault(player, 0) + 1);
	    		for(String finish : completion)
	    	    list.put(finish, list.get(finish) -1);
			  
	    		for (String player : list.keySet()) {
					if(list.get(player)>0) {
					 res += player + " ";
					}
				}
	    	
	    	String answer = res;
	        return answer;
	    
	}
	
}
