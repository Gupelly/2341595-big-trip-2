class Destination {
  constructor(name, descr, pictures) {
    this.description = descr;
    this.name = name;
    this.pictures = pictures;
  }
}

const destinations = [
  new Destination('Chamonix', 'Chamonix, is a beautiful city, a true asian pearl, with crowded streets.', [
    {
      'src': 'http://picsum.photos/300/200?r=0.0762563005163317',
      'description': 'Chamonix parliament building'
    }
  ]),
  new Destination('Amsterdam', 'Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.', [
    {
      'src': 'http://picsum.photos/248/152?r=21',
      'description': 'Fusce tristique felis at fermentum pharetra.'
    }
  ]),
  new Destination('Geneva', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget.', [
    {
      'src': 'http://picsum.photos/248/152?r=47',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget.'
    }
  ])
];

export {destinations};
