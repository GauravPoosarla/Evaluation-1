const getScoreOneGame= (rolls) => {
  let score = 0;
  let lengthOfRolls = rolls.length;
  if(lengthOfRolls > 21) {
    return 'Invalid, length cannot be more than 21';
  }
  for (let idx=0; idx<rolls.length; idx++) {
    if((rolls[idx] < 10) && (idx + 1 < rolls.length && rolls[idx] + rolls[idx + 1]) != 10) { // open frame
      // console.log(1);
      score += rolls[idx];
    }
    else if((rolls[idx] < 10) && (idx + 2 < rolls.length && rolls[idx] + rolls[idx + 1]) == 10) { // spare case
      // console.log(2);
      score += 10 + rolls[idx + 2];
      idx++;
      // console.log(score);
    }
    else if (rolls[idx] == 10 && idx + 2 < rolls.length) { // strike case
      // console.log(3);
      score += 10 + rolls[idx + 1] + rolls[idx + 2];
    }
    // console.log(score);
  }
  return score;
}
console.log(getScoreOneGame([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])); 
console.log(getScoreOneGame([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10]));
console.log(getScoreOneGame([6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])); 