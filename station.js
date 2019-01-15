
var Station = {

    stations: [],
    reservationObj: null,
    mapsObj: null,

    recupererStations: function(mapsObj, reservationObj) {
        var self = this;

        self.mapsObj = mapsObj
        self.reservationObj = reservationObj

        $.getJSON("https://api.jcdecaux.com/vls/v1/stations?contract=Nantes&apiKey=453628a242d0db7b1d2972afa3421f5460dddc0d")
            .done(function(data) {
                console.log('reponse jcdecaux: ', data);
                self.stations = data;

                var markers = [];
                self.stations.forEach(function(station) {
                    var marker = self.mapsObj.addMarker(self.map, station.position.lat, station.position.lng)

                    self.mapsObj.addEvent(marker, 'click', function() {

                        $('.label-ligne').show();
                        $('.adresse-station').html(station.address);
                        station.status = (station.status === 'OPEN') ? ' Ouverte' : ' Fermée';
                        $('.etat-station').html(station.status);
                        $('.velos-disponibles').html(station.available_bikes);
                        $('.emplacements-libres').html(station.available_bike_stands);

                        if ((station.available_bikes === 0) || (station.status === 'CLOSED')) {
                            $('.form-et-bouton').hide();
                        } else {
                            $('.form-et-bouton').show();
                        }
                    });

                    $('#btnReserver').click(self.reservationClick.bind(self));
                    
                    markers.push(marker);
                });

                self.mapsObj.cluster(markers, self.map)
            })
            .fail(function(err) {
                console.log('erreur: ', err)
            });
    },
    reservationClick: function() {
        var prenom = $('#prenom').val()
        var nom = $('#nom').val()
        self.reservationObj.remplirIdentite(prenom, nom)
    }
}


