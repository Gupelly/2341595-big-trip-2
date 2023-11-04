import {render} from './render.js';
import {NewNavView} from './view/nav-view.js';
import {NewInfoView} from './view/info-view.js';
import {NewPointView} from './view/point-view.js';
import {NewPointListView} from './view/point-list-view.js';
import { NewEmptyView } from './view/empty-list.js';
import { points } from './model/points.js';

const init = () => {
  const headerTrip = document.querySelector('.trip-main');
  const siteMenuElement = headerTrip.querySelector('.trip-controls__navigation');
  const mainEvents = document.querySelector('.trip-events');
  const eventsList = mainEvents.getElementsByClassName('trip-events__list');

  render(new NewInfoView(), headerTrip, 'afterbegin');
  render(new NewNavView(), siteMenuElement);
  render(new NewPointListView(), mainEvents);

  // pointList нужен для того, чтобы продемострировать сообщение при отсутсвии точек маршрута.
  // Чтобы увидеть сообщение, необходимо закоментить строку "pointList = points;".
  let pointList = [];
  pointList = points;
  if (pointList.length === 0) {
    render(new NewEmptyView(), mainEvents);
  }
  else {
    pointList.forEach((point) => {
      render(new NewPointView(point), eventsList[0]);
    });
  }
};

export {init};

