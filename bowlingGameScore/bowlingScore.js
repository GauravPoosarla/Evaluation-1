const getScoreOneGame= (rolls) => {
  let score = 0;
  if(rolls.length > 21) {
    return 'Invalid, length cannot be more than 21';
  }
  for (let idx=0; idx<rolls.length; idx++) {
    if((rolls[idx] < 10) && (rolls[idx] + rolls[idx + 1]) != 10) { // open frame
      score += rolls[idx];
    }
    else if((rolls[idx] < 10) && (rolls[idx] + rolls[idx + 1])) { // spare case
      score += 10 + rolls[idx + 2];
    }
    else if (rolls[idx] == 10) {
      score += 10 + rolls[idx + 1] + rolls[idx + 2];
    }
    console.log(score);
  }
  return score;
}
// console.log(getScoreOneGame([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]));
console.log(getScoreOneGame([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10]));