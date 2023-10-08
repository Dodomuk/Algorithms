function solution(vote) {
  const voteList = vote.split('');
  const abList = voteList.filter((e) => e !== 'C');
  if (abList.length <= voteList.length / 2) {
    return 'C';
  } else {
    const aList = abList.filter((e) => e === 'A');
    if (aList.length > abList.length / 2) {
      return 'A';
    } else if (aList.length < abList.length / 2) {
      return 'B';
    } else {
      return 'AB';
    }
  }
}
