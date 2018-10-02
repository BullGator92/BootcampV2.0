   //Google Maps traffic layer
   function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 13,
      center: {lat: 33.77661467620815, lng: -84.39008474349977}
    });
}
    var trafficLayer = new google.maps.TrafficLayer();
    trafficLayer.setMap(map);





