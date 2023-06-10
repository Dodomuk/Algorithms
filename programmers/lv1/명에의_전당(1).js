function solution(k, score) {
  return score.map(
    (e, idx) =>
      score.slice(0, idx + 1).sort((a, b) => b - a)[idx + 1 < k ? idx : k - 1]
  );
}
