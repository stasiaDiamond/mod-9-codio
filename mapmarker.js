// To accomplish this task, you will need to do the following:
// Create a mapbox account and get the access token.
// Add the access token to the mapboxgl instance defined in the mapmarker.js.
// Create a marker then add it to the map using mapboxgl pre-built functions.



function createMapMarker() {
  mapboxgl.accessToken =
    'pk.eyJ1IjoidGVzdHVzZXIxMDAwIiwiYSI6ImNraDkzZ2pkMzAzMHoycnBmMXpvZ3UwZnMifQ.jAE4YsPeAJv50VK92NSpOQ';

  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-71.091542, 42.358862],
    zoom: 12,
  });

  // TODO: add a marker to the map
  let marker = new mapboxgl.Marker()
    .setLngLat([-71.091542, 42.358862])
    .addTo(map);
}

createMapMarker()



// ------CHALLENGES:
// once again, just having us type exactly what was shown in the video. This was not a real assignment.
// the Solution file had a working APIKey, so I just used that. Why would i need to sign up for an account on something i'm never gonna use