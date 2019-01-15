var Maps = {

    // Propriétés
    map: null,
    stations: [],



    //Méthode

    init: function () {
        var self = this;
        var options = {
            center: {lat: 47.218371, lng: -1.553621},
            zoom: 13
        };

        var element = $('#map')[0]; /* 0 signifie qu'on passe l'élément en html au lieu de jquery : correspond à getElementById */
        this.map = new google.maps.Map(element, options);



        this.recupererStations();

        this.reservationClick();


    },

//----------- fonctions -----------

    recupererStations: function() {
        var self = this;

        $.getJSON("https://api.jcdecaux.com/vls/v1/stations?contract=Nantes&apiKey=453628a242d0db7b1d2972afa3421f5460dddc0d")
            .done(function(data) {
                console.log('reponse jcdecaux: ', data);
                self.stations = data;

                var markers = [];
                self.stations.forEach(function(station) {
                    var marker = new google.maps.Marker({
                        map: self.map,
                        position: station.position
                    });

                    marker.addListener('click', function() {

                        $('.label-ligne').show();

                        $('.adresse-station').html(station.address);


                        station.status = (station.status === 'OPEN') ? ' Ouverte' : ' Fermée';
                        /*
                        if (station.status === 'OPEN'){
                            station.status = ' Ouverte';
                        } else if (station.status === 'CLOSED') {
                            station.status = ' Fermée';
                        }
                        */

                        $('.etat-station').html( station.status);

                        $('.velos-disponibles').html(station.available_bikes);

                        $('.emplacements-libres').html(station.available_bike_stands);

                        //station.available_bikes = (station.available_bikes === 0) ? '$('.form-et-bouton').hide() : $('.form-et-bouton').show()';

                        if ((station.available_bikes === 0) || (station.status === 'CLOSED')) {
                            $('.form-et-bouton').hide();
                        } else {
                            $('.form-et-bouton').show();
                        }


                        //alert('Clic sur la station "' + station.name + '"');

                    });

                    markers.push(marker);


                });

                var markerCluster = new MarkerClusterer(self.map, markers, {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
            })

            .fail(function(err) {
                console.log('erreur: ', err)

            });

    }

    reservationClick: function() {
        var prenom = $('#prenom').val(); //.val takes the element from a form
        var nom = $('#nom').val();
        self.reservationObj.remplirIdentite(prenom, nom);
    }
}
