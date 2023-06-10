function solution(array, commands) {
  return commands.map(
    (e) => array.slice(e[0] - 1, e[1]).sort((a, b) => a - b)[e[2] - 1]
  );
}
