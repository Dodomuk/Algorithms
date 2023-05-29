function solution(s) {
  const arr = s.toLowerCase().split('');
  return arr.filter((e) => e === 'p').length ===
    arr.filter((e) => e === 'y').length
    ? true
    : false;
}

// 좋아요 👍🏼
// function numPY(s){
//     //함수를 완성하세요
//       return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
//   }
