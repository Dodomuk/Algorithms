function solution(envelopes) {
  envelopes.forEach(e, (index) => {
    if (index) {
        envelopes.findIndex(v => e[0] >= v[0] && e[1] >= v[1] )
    }
  });
}
