const getRandomNumber = ((min, max) => {
  if (min < 0 || max < 0) {
    return 0;
  }

  if (min === max ) {
    return min;
  }

  if (min > max) {
    [min, max] = [max, min];
  }

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
});

const getUniqNumber = (maxMove) => {
  let currentNumber = 0;
  if (maxMove === 1) {
    currentNumber += getRandomNumber(1, maxMove);
  }
  return ++currentNumber;
};

export {getRandomNumber};
export {getUniqNumber};
