import {render} from './render.js';
import {NewNavView} from './view/nav-view.js';
import {NewInfoView} from './view/info-view.js';
import {NewPointView} from "./view/point-view.js";
import {NewPointListView} from "./view/point-list-view.js";

const init = () => {
  const headerTrip = document.querySelector('.trip-main');
  const siteMenuElement = headerTrip.querySelector('.trip-controls__navigation');
  const mainEvents = document.querySelector('.trip-events');
  const eventsList = mainEvents.getElementsByClassName('trip-events__list');

  render(new NewInfoView(), headerTrip, 'afterbegin');
  render(new NewNavView(), siteMenuElement);
  render(new NewPointListView(), mainEvents);

  for (var i = 0; i < 3; i++) {
    render(new NewPointView(), eventsList[0]);
  }
};

export {init};

