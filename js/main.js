// eslint-disable-next-line no-unused-vars
const NAME_USERS = [
  'Арнольд',
  'Сильвестр',
  'Чак',
  'Джейсон',
  'Вандам',
  'Лунгрен',
  'Ли',
];

// eslint-disable-next-line no-unused-vars
const COMMENT_USERS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];


// eslint-disable-next-line no-unused-vars
const DESCRIPTION_PHOTO = 25;

const stringLength = (string, maxlength) => string.length <= maxlength;
stringLength('комментарий', 140);

// eslint-disable-next-line no-unused-vars
const getRandomNumber = (min, max) => {
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
};

const getUniqNumber = (maxMove) => {
  let currentNumber = 0;

  const getNextNumber = () => {
    if (maxMove === 1) {
      return ++currentNumber;
    }
    currentNumber += getRandomNumber(1, maxMove);
    return currentNumber;
  };
  return getNextNumber;
};

const commentId = getUniqNumber(30);

const getComments = () => ({
  id: commentId(),
  // eslint-disable-next-line no-template-curly-in-string
  avatar: 'img/avatar-${getRandomNumber(1, 6)}.svg',
  message: COMMENT_USERS[getRandomNumber(0, COMMENT_USERS.length - 1)],
  name: NAME_USERS[getRandomNumber(0, NAME_USERS.length - 1)]
});

const getDescriptionPhoto = (id) => ({
  id,
  // eslint-disable-next-line no-template-curly-in-string
  url: 'photos/${id}.jpg',
  description: 'Отлично покатались на лыжах',
  likes: getRandomNumber(10, 150),
  comments: Array.from({length: getRandomNumber(1, 2)}, getComments),
});

const mainDescriptionPhoto = Array.from({length: DESCRIPTION_PHOTO},
  (_, index) => getDescriptionPhoto(++index));
mainDescriptionPhoto();

