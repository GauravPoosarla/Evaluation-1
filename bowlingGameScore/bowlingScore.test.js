const { getScoreOneGame } = require('./bowlingScore');
const { bestScoreCalculator } = require('./bowlingScore');

describe('calculates score of one game', () => {
  it('should return 90 when input is [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]', () => {
    expect(getScoreOneGame([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toBe(90);
  });
  it('should return 30 when input is [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10]', () => {
    expect(getScoreOneGame([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10])).toBe(30);
  });
  it('should return 16 when input is [6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]', () => {
    expect(getScoreOneGame([6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])).toBe(16);
  });
});

describe('changing the capitalisation of every letter using arrow function', () => {
  test('"MeRRy hAD a LITTle lAMp" should result in "mErrY Had A littLE LamP"', () => {
    expect(changeCapitalisationUsingArrowFunction('MeRRy hAD a LITTle lAMp')).toBe('mErrY Had A littLE LamP');
  });
  test('"I am Gaurav Poosarla" should result in "i AM gAURAV pOOSARLA"', () => {
    expect(changeCapitalisationUsingArrowFunction('I am Gaurav Poosarla')).toBe('i AM gAURAV pOOSARLA');
  });
  test('"IWorkAtMcKinsey" should result in "iwORKaTmCkINSEY"', () => {
    expect(changeCapitalisationUsingArrowFunction('IWorkAtMcKinsey')).toBe('iwORKaTmCkINSEY');
  });
});