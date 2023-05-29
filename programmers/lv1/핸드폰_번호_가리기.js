function solution(phone_number) {
  return phone_number.slice(-4).padStart(phone_number.length, '*');
}

// 좋아요 👍🏼 (정규표현식)
// function hide_numbers(s){
//     return s.replace(/\d(?=\d{4})/g, "*"); //?= 뒤의 조건과 일치되는 경우 예외처리 , d{4} = digit 4개. 뒤 4자리를 제외하고 적용한다는 뜻
//   }
