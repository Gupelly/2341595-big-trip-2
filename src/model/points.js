import { offers } from './offers';
import { destinations } from './destinations';

const pointTypes = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];

class Point{
  constructor(price = 0, dateFrom = new Date().getTime(), dateTo = new Date().getTime(), destId = 0, offId = [], typeId = 0) {
    this.basePrice = price;
    this.dateFrom = dateFrom;
    this.dateTo = dateTo;
    this.destination = destinations[destId];
    this.offers = offId.map(id => offers[id]);
    this.type = pointTypes[typeId];
  }
}

const points = [
  new Point(1300, '2020-06-05T22:50:56.845Z', '2020-06-12T22:50:56.845Z', 0, [1, 3], 0),
  new Point(1100, '2021-06-05T22:50:56.845Z', '2021-06-12T22:50:56.845Z', 1, [3, 4], 1),
  new Point(1500, '2022-06-05T22:50:56.845Z', '2022-06-12T22:50:56.845Z', 2, [2, 5, 6], 2),
];

export {points};
