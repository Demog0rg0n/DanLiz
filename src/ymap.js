function mapInit() {
  // eslint-disable-next-line no-undef
  let myMap = new ymaps.Map('map', {
    center: [55.67410271, 37.50458485],
    zoom: 17,
  });

  // eslint-disable-next-line no-undef
  var myPlacemark = new ymaps.Placemark(
    [55.67410271, 37.50458485],
    {
      balloonContent: `
        <h3>Контент</h3>
      `,
    },
    {},
  );
  myMap.geoObjects.add(myPlacemark);
}

// eslint-disable-next-line no-undef
ymaps.ready(mapInit);
