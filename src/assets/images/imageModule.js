import bed from './tasks/bed.jpg';
import book from './tasks/book.jpg';
import flowers from './tasks/flowers.jpg';
import sweep from './tasks/sweep.jpg';
import teeth from './tasks/teeth.jpg';
import toys from './tasks/toys.jpg';
import trash from './tasks/trash.jpg';
import vacuum from './tasks/vacuum.jpg';
import robot from './imageRobot.png';
import sweets from './AwardsPage/1.jpg';
import cinema from './AwardsPage/2.jpg';
import gift from './AwardsPage/3.jpg';
import pizza from './AwardsPage/4.jpg';
import party from './AwardsPage/5.jpg';
import mcDonalds from './AwardsPage/6.jpg';
import desire from './AwardsPage/7.jpg';
import skates from './AwardsPage/8.jpg';

export default class CurrentImg {
  getImg = name => {
    const keys = Object.keys(this);

    if (keys.includes(name)) {
      return this[name];
    }
    return this.robot;
  };

  bed = bed;

  book = book;

  flowers = flowers;

  sweep = sweep;

  teeth = teeth;

  toys = toys;

  trash = trash;

  vacuum = vacuum;

  sweets = sweets;

  cinema = cinema;

  gift = gift;

  pizza = pizza;

  party = party;

  mcDonalds = mcDonalds;

  desire = desire;

  skates = skates;

  robot = robot;
}
