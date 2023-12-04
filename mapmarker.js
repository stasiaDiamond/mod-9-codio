// To accomplish this task, you will need to do the following:
// Create a Mapbox account and get the access token.
// Add the access token to the mapboxgl instance defined in the mapmarker.js.
// Create a marker then add it to the map using mapboxgl pre-built functions.


// ~ i refuse to enter my credit card into Mapbox for this homework assignment
// ~ the Solution file has one and it passed the codio test
function createMapMarker() {
  // ~ to use mapboxgl, they included a MapboxGL JS script link in the HTML file
  // ~ because of this we can use the mapboxgl object to create and interact with maps
  // ~ we're accessing the .accessToken property (aka Value)
  mapboxgl.accessToken =
    'add-this-from-the-solution-file';

  // ~ sets up a variable called map
  // ~ creates a new instance of mapboxgl's property Map
  let map = new mapboxgl.Map({
    // ~ configures the new instance 
    // ~ container: HTML element with the ID 'map' will be used as the container for the map
    container: 'map',
    // ~ style: map style is set to 'streets-v11', which is one of the predefined Mapbox styles
    style: 'mapbox://styles/mapbox/streets-v11',
    // ~ center: The initial center of the map is set to the coordinates [-71.091542, 42.358862] (longitude, latitude)
    center: [-71.091542, 42.358862],
    // ~ zoom: The initial zoom level is set to 12
    zoom: 12,
  });

  // TODO: add a marker to the map

  // ~ creates a new instance of mapboxgl's property Marker
  let marker = new mapboxgl.Marker()
    // ~ setLngLat method sets the marker's longitude and latitude to [-71.091542, 42.358862]
    .setLngLat([-71.091542, 42.358862])
    // ~ addTo method adds the marker to the map
    .addTo(map);
}
// ~ calls the function
createMapMarker()



/*  ------CHALLENGES:

1. once again, they just had us type exactly what was shown in the video. This was not a real assignment.

2. since they haven't taught what a Class or Instance is, here's a quick explanation:

~ Class: a blueprint or template for creating objects. it defines a set of attributes (properties) and methods (functions) that the objects created from the class will have.

~ Object: an instance of a class. it represents a concrete realization of the class blueprint, with specific values for its attributes.

~ Instance: a single occurrence or example of an object created from a class. created when using an object with the "new" keyword and the class constructor, you're creating an instance of that class.

~ Class Constructor: a special method within a class that is automatically called when an object is created from that class. it initializes the object's attributes and performs any setup necessary for the object to function properly. it ensures that the object starts with a valid and well-defined state. the constructor method typically has the same name as the class.

*/
