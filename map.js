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
                        
                        
                        $('.adresse-station').append('Adresse : ' + station.address);
                        
                         
                        if (station.status === 'OPEN'){
                            station.status = ' Ouverte';
                        } else if (station.status === 'CLOSED') {  
                            station.status = ' Fermée';
                        }
                        $('.etat-station').append('État de la station : '+ station.status);
    
                        
                        $('.velos-disponibles').append('Vélos disponibles : ' + station.available_bikes);
                        
                        $('.emplacements-libres').append('Emplacements libres : ' + station.available_bike_stands);
                        
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


}