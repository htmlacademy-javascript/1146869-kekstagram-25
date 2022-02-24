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


const getMaxiLength = (testString, maximumString) => {
    if (testString.length <= maximumString) {
        return true;
    }
    return false;
}

getMaxiLength(100);
