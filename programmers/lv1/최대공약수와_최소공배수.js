function solution(n, m) {
  let 공약수 = Math.max(n, m);
  let 공배수 = 1;

  while (true) {
    if (n % 공약수 === 0 && m % 공약수 === 0) {
      break;
    }
    공약수--;
  }

  while (true) {
    if (공배수 % n === 0 && 공배수 % m === 0) {
      return [공약수, 공배수];
    }
    공배수++;
  }
}

//유클리드 호제법: num1를 num2로 나눈 나머지를 r이라고 했을 때, GCD(num1, num2) = GCD(num2, r)과 같다
// r이 0이라면, 그 때의 num2가 최대공약수
//num1=24, num2=16을 가정하면, GCD(24, 16) = GCD(16, 8) = GCD(8, 0)
//GCD = 8
//let getGCD = (num1, num2) => (num2 > 0 ? getGCD(num2, num1 % num2) : num1);

//최소공배수는 위에서 구했던 GCD(최대 공약수)를 응용해서 구할 수 있다.
//두 수 num1, num2의 최대공약수를 gcd라고 했을 때, 최소공배수 lcm = gcd * (num1/gcd) * (num2/gcd) 이다.
//num1 * num2 = gcd * lcm 과 같다는 원리를 이용하는 것이다.
// lcm = (num1*num2) / gcd 이다.

// 좋아요 👍🏼
function gcdlcm(a, b) {
  var r;
  for (var ab = a * b; (r = a % b); a = b, b = r) {
    console.log(a);
    console.log(b);
    console.log(ab);
    console.log(r);
  }
  return [b, ab / b];
}
console.log(gcdlcm(2, 5));
