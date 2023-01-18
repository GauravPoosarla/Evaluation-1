const getScoreOneGame= (rolls) => {
  let score = 0;
  let lengthOfRolls = rolls.length;
  if(lengthOfRolls > 21) {
    return 'Invalid, length cannot be more than 21';
  }
  let idx = 0
  for (idx=0; idx<18; idx++) { // handling first 9 frames
    if((rolls[idx] < 10) && (idx + 1 < rolls.length && rolls[idx] + rolls[idx + 1]) != 10) { // open frame
      // console.log(1);
      score += rolls[idx];
      // console.log(score);
    }
    else if((rolls[idx] < 10) && (idx + 2 < 18 && rolls[idx] + rolls[idx + 1]) == 10) { // spare case
      // console.log(2);
      score += 10 + rolls[idx + 2];
      idx++;
      // console.log(score);
    }
    else if (rolls[idx] == 10 && idx + 2 < 18) { // strike case
      // console.log(3);
      score += 10 + rolls[idx + 1] + rolls[idx + 2];
      // console.log(score);
    }
    // console.log(score);
  }
  // console.log(score);
  for(;idx < lengthOfRolls; idx++) // handling for 10th frame
  {
    if(rolls[idx] < 10) // open in 10th frame
    {
      score += rolls[idx];
    }
    else if((rolls[idx] + rolls[idx + 1]) == 10) // spare in 10th frame
    {
      score += rolls[idx] + rolls[idx + 1];
    }
    else if(rolls[idx] == 10) // strike in 10th frame
    {
      // console.log(rolls[idx], rolls[idx + 1], rolls[idx + 2]);
      score += rolls[idx] + rolls[idx + 1]; + rolls[idx + 2];
      break;
    }
  }
  return score;
}
console.log(getScoreOneGame([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])); 
console.log(getScoreOneGame([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10]));
console.log(getScoreOneGame([6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])); 

const bestScoreCalculator = (allRolls) => {
  let scores = [];
  for(let idx = 0; idx < allRolls.length; idx++)
  {
    let score = getScoreOneGame(allRolls[idx]);
    scores.push(score);
  }
  scores.sort();
  return scores[scores.length - 1];
}

module.exports = {getScoreOneGame, bestScoreCalculator};