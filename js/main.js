const getRandomInt = (min, max) => {
  if (min < 0 || max < 0) {
    return -1;
  }
  if (min > max) {
    [min, max] = [max, min]; // Деструктуризация значений
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

getRandomInt(7,50);

const messageLine = 'Строка комментария';
const getMaxiLength = (testString, maximumString) => testString.length <= maximumString;

getMaxiLength(messageLine, 100);
