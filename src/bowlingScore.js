const getTenthFrameScore = (rolls) => {
  let scoreOfTenth = 0;
  if(rolls[18] == 10) {
    scoreOfTenth = rolls[18] + rolls[19] + rolls[20];
  }
  else if((rolls[18] + rolls[19]) == 10) {
    scoreOfTenth = rolls[18] + rolls[19] + rolls[20];
  }
  else {
    scoreOfTenth = rolls[18] + rolls[19];
  }
  return scoreOfTenth;
};

const getScore = (rolls) => {
  let score = 0;
  const lengthOfRolls = rolls.length;
  if (lengthOfRolls > 21) {
    return "Invalid, length cannot be more than 21";
  }
  let idx = 0;
  for (idx = 0; idx < 18; idx++) { // handling first 9 frames
    if ((rolls[idx] < 10) && (idx + 1 < 18 && rolls[idx] + rolls[idx + 1]) != 10) { // open frame
      score += rolls[idx];
    }
    else if ((rolls[idx] < 10) && (idx + 2 < 18 && rolls[idx] + rolls[idx + 1]) == 10) { // spare case
      score += 10 + rolls[idx + 2];
      idx++;
    }
    else if (rolls[idx] == 10 && idx + 2 < 18) { // strike case
      score += 10 + rolls[idx + 1] + rolls[idx + 2];
    }
  }
  let tenthFrameScore = getTenthFrameScore(rolls);
  return score + tenthFrameScore;
};
// console.log(getScoreOneGame([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])); 
// console.log(getScoreOneGame([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10]));
// console.log(getScoreOneGame([6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])); 

const getBestScore = (allRolls) => {
  let bestScore = 0;
  allRolls.forEach((roll) => {
    let score = getScore(roll);
    bestScore = Math.max(score, bestScore);
  });
  return bestScore;
};

module.exports = { getScore, getBestScore };