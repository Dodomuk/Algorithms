function solution(s) {
  return s
    .split(' ')
    .map((e) =>
      [...e]
        .map((x, idx) => (idx % 2 ? x.toLowerCase() : x.toUpperCase()))
        .join('')
    )
    .join(' ');
}

// 좋아요 👍🏼
// function toWeirdCase(s){
//     //함수를 완성해주세요
//     return s.toUpperCase().replace(/(\w)(\w)/g, function(a){return a[0].toUpperCase()+a[1].toLowerCase();})

//   }
