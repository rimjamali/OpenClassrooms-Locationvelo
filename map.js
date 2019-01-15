var Carte = {

    // Propriétés
    carte: null,
    defaultZoom: 13,
    defaultCenter: {lat: 47.218371, lng: -1.553621},

    // Méthodes
    init: function() {

        this.carte = new google.maps.Map($('#map')[0], {
            zoom: this.defaultZoom,
            center: this.defaultCenter,
        });
        
    },

    addMarker: function(lat, lng) {
        var marker = new google.maps.Marker({
            map: this.carte,
            position: {lat: lat, lng: lng},
        });
        return marker;
    },

    addMarkerClusterer: function(markers) {
        var markerClusterer = new MarkerClusterer(
            this.carte, 
            markers, 
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'}
        );
        return markerClusterer;
    },

    addEvent: function(obj, type, callback) {
        obj.addListener(type, callback);
    },
}
