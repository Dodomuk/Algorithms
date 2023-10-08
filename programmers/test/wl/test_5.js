function solution(p, n) {
  const timeObj = {};

  let [dayUnit, time] = p.split(' ');
  if (dayUnit === 'PM' && parseInt(time.slice(0, 2)) < 12) {
    time = time.slice(0, 2) * 1 + 12 + time.slice(2);
  } else if (parseInt(time.slice(0, 2)) >= 12) {
    time = '0' + (time.slice(0, 2) * 1 - 12) + time.slice(2);
  }
  let [hour, min, sec] = time.split(':').map((e) => parseInt(e));
  let total = hour * 3600 + min * 60 + sec + n;
  timeObj['h'] = ~~(total / 3600);
  timeObj['m'] = ~~((total - timeObj['h'] * 3600) / 60);
  timeObj['s'] = ~~(total - timeObj['h'] * 3600 - timeObj['m'] * 60);
  const result = [timeObj['h'], timeObj['m'] % 60, timeObj['s'] % 60].map(
    (e) => {
      return (e < 10 ? '0' : '') + e;
    }
  );
  return result.join(':');
}

console.log(solution('PM 01:00:00', 10));
