function solution(n) {
  for (let index = 1; index < n + 1; index++) {
    if (index * index === n) return (index + 1) * (index + 1);
  }
  return -1;
}

// 좋아요 👍🏼
// function nextSqaure(n){
//     var result = 0;
//      var x = 0;
//      while ( x*x < n)
//      {
//        x++;
//      }
//      if (x*x == n)
//      {
//        x++;
//        result = x*x;
//      }else{
//        result = 'no';
//      }
//      return result;

//    }
