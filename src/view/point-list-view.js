import {createElement} from '../render.js';

const createPointListTemplate = () =>
  `
<ul class="trip-events__list">

</ul>`;

class NewPointListView {
  getTemplate() {
    return createPointListTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}

export {NewPointListView};