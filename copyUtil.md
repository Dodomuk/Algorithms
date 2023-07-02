### 🔮 Template (Programmers 복습용)

- 좋아요 多
  // 좋아요 👍🏼

- 미흡
  //🧐 다시 풀어보기 ( )

---

## 🔮 Template (백준 Node.js 입력 받기)

JS는 브라우저 환경에서 작동하므로 백준 사이트의 문제를 풀기 위해서는 Node JS 를 사용해야 합니다.
Node JS로 코드를 작성하기 위해 다음의 두 가지 템플릿을 권장드립니다.
basic

### 📌 한 줄 입력(basic)

```

const fs = require('fs');
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync('test.txt').toString().trim().split('\n');

// 풀이
function solution(arr) {
  const [a, b] = arr[0].split(' ');
  return Number(a) + Number(b);
}

console.log(solution(input));

```

### 📌 여러 줄 입력(extended)

```

const fs = require('fs');
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync('test.txt').toString().trim().split('\n');
// 정리
/* ex.
const x = Number(input[0]);
const [y, z] = input[1].split(' ').map(v => Number(v));
const arr = input[2].split(' ');
*/
// 풀이
function solution(x, y, z, arr) {
  const answer = [];
  return answer.join('\n');
}

console.log(solution(x, y, z, arr));

```
