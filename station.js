
var Station = {
    
    // Propriétés
    stations: [],


    // Méthodes
    init: function(mapObj, resaObj) {
        var self = this;

        $.getJSON('https://api.jcdecaux.com/vls/v1/stations?contract=Nantes&apiKey=453628a242d0db7b1d2972afa3421f5460dddc0d')
            .done(function(data) {
                console.log('reponse jcdecaux: ', data);
                self.stations = data;

                // Afficher les stations sur la carte
                var markers = [];
                self.stations.forEach(function(station, stationIx, stations) {
                    var marker = mapObj.addMarker(station.position.lat, station.position.lng);

                    mapObj.addEvent(marker, 'click', function() {
                        $('.message-station').hide();
                        $('.form-et-bouton').show();
                        $('.label-ligne').show();
                        $('.adresse-station').html(station.address);
                        station.status = (station.status === 'OPEN') ? ' Ouverte' : ' Fermée';
                        $('.etat-station').html( station.status);
                        $('.velos-disponibles').html(station.available_bikes);
                        $('.emplacements-libres').html(station.available_bike_stands);
                        if ((station.available_bikes === 0) || (station.status === ' Fermée')) {
                            $('.form-et-bouton').hide(); 
                        } else {
                            $('.form-et-bouton').show();
                        }

                        resaObj.completerStation(station);
                    })
                    markers.push(marker);
                })
                mapObj.addMarkerClusterer(markers);
            })
            .fail(function(err) {
                console.log('Les erreurs de JC Decaux sont les suivantes : ', err);
            })
    }
}
