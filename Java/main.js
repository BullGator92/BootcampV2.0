var map, infoWindow;
function initMap() {
    var directionsDisplay = new google.maps.DirectionsRenderer();
    var mapOptions = {
        zoom:7,
        center: {lat: 33.77661467620815, lng: -84.39008474349977}
    };
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    directionsDisplay.setMap(map);
    directionsDisplay.setPanel(document.getElementById('directions'));
    calcRoute(directionsDisplay);
}

function calcRoute(directionsDisplay) {
    var end = new google.maps.LatLng(33.77661467620815, -84.39008474349977);
    navigator.geolocation.getCurrentPosition(function (position) {
        var start = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };

        var request = {
            origin: start,
            destination: end,
            travelMode: 'DRIVING',
            drivingOptions: {
                departureTime: new Date(),
                trafficModel: 'pessimistic'
            }
        };

        new google.maps.DirectionsService().route(request, function(result, status) {
            if (status == 'OK') {
                directionsDisplay.setDirections(result);
            }
        });
    });
}
// TRAFFIC OVERLAY
// function initMap() {
//   var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 13,
//     center: {lat: 33.77661467620815, lng: -84.39008474349977}
//   });

//   var trafficLayer = new google.maps.TrafficLayer();
//   trafficLayer.setMap(map);
// }




