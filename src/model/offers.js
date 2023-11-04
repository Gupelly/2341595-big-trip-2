class Offer {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }
}

const offers = [
  new Offer('Upgrade to a business class', 100),
  new Offer('Taxi from airport', 30),
  new Offer('Breakfast', 20),
  new Offer('Lunch', 40),
  new Offer('Dinner', 30),
  new Offer('Coffee', 15),
  new Offer('Visit showplace', 30)
];

export{offers};
