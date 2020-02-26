function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 6,
        center: {
            lat: 50.482831,
            lng: -3.531916
        }
    });


    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var locations = [
        { lat: 50.43216, lng: -3.68391 },
        { lat: 50.375, lng: -3.581 },
        { lat: 50.5402, lng: -3.505 }
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });
    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });

}