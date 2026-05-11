const leapYears = function(year) {
    const four = year % 4 === 0;
    const century = year % 100 === 0;
    const fourHundred = year % 400 === 0;

  if (
    four &&
    (!century || fourHundred)
  ) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;
