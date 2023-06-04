function solution(price, money, count) {
  const res = Math.floor((price * count + price) * (count / 2)) - money;
  return res < 0 ? 0 : res;
}
