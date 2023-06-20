//🧐 다시 풀어보기 ( 정규표현식 )
function solution(babbling) {
  const babyWordList = ['aya', 'ye', 'woo', 'ma'];
  let res = 0;
  for (let index = 0; index < babbling.length; index++) {
    let babblingWord = babbling[index];
    babyWordList.forEach((word) => {
      babblingWord = babblingWord.replace(word, '');
    });
    if (!babblingWord.trim().length) {
      res++;
    }
  }
  return res;
}

console.log(solution(['aya', 'yee', 'u', 'maa']));

// 좋아요 👍🏼
function solution(babbling) {
  const regexp1 = /(aya|ye|woo|ma)\1+/;
  const regexp2 = /^(aya|ye|woo|ma)+$/;

  return babbling.reduce(
    (ans, word) => (!regexp1.test(word) && regexp2.test(word) ? ++ans : ans),
    0
  );
}

// 좋아요 👍🏼
function solution(babbling) {
  let answer = 0;

  // forEach() 메서드로 babbling을 하나씩 확인합니다.
  for (let word of babbling) {
    // 정규식을 이용하여 연속된 같은 발음이 있는지 체크합니다.
    // 연속된 같은 발음이 있다면 continue를 통해 다음 단어로 넘어갑니다.
    if (/(aya|ye|woo|ma)\1+/g.test(word)) continue;

    // 정규식을 이용해 발음할 수 있는 단어만 있는지 체크합니다.
    // 발음할 수 있는 단어만 있다면 answer을 1 증가시킵니다.
    if (/^(aya|ye|woo|ma)+$/g.test(word)) {
      answer++;
    }
  }

  return answer;
}
