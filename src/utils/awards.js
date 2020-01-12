import shortid from 'shortid';

const awardsCards = [
  {
    title: 'Солодощі',
    imgName: 'sweets',
    taskPoints: 15,
    _id: shortid.generate(),
    isSelected: false,
  },
  {
    title: 'Похід у кіно',
    imgName: 'cinema',
    taskPoints: 90,
    _id: shortid.generate(),
    isSelected: false,
  },
  {
    title: 'Подарунок',
    imgName: 'gift',
    taskPoints: 100,
    _id: shortid.generate(),
    isSelected: false,
  },
  {
    title: 'Вечір піцци',
    imgName: 'pizza',
    taskPoints: 80,
    _id: shortid.generate(),
    isSelected: false,
  },
  {
    title: 'Вечірка з друзями',
    imgName: 'party',
    taskPoints: 120,
    _id: shortid.generate(),
    isSelected: false,
  },
  {
    title: 'Похід у Макдональдс',
    imgName: 'mcDonalds',
    taskPoints: 80,
    _id: shortid.generate(),
    isSelected: false,
  },
  {
    title: 'Бажання',
    imgName: 'desire',
    taskPoints: 200,
    _id: shortid.generate(),
    isSelected: false,
  },
  {
    title: 'Похід на ковзанку',
    imgName: 'skates',
    taskPoints: 100,
    _id: shortid.generate(),
    isSelected: false,
  },
];

export default awardsCards;
