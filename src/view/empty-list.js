import {createElement} from '../render.js';

const createEmptyTemplate = () =>
  `<p class="trip-events__msg">
    Click New Event to create your first point
  </p>`;

class NewEmptyView {
  getTemplate() {
    return createEmptyTemplate();
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

export {NewEmptyView};
