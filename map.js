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
        
        //this.afficherMarqueurs(); 
            
    },
    
//----------- fonctions -----------
    
    recupererStations: function() {
         $.getJSON("https://api.jcdecaux.com/vls/v1/stations?contract=Nantes&apiKey=453628a242d0db7b1d2972afa3421f5460dddc0d")
            .done(function(data) {
                this.stations = data;
                console.log('reponse jcdecaux: ', data)
             
            })
        
            .fail(function(err) {
                console.log('erreur: ', err)
    
            })
            
            /*var stations = this.stations;
            
            var marker = new google.maps.Marker({
           
                reponsejcdecaux.forEach(function(i, data){
                    position: stations.location[i],
                    available: stations.available_bikes[i],
                    map : this.map
            }); 
            
          
        });*/
        
        
            /*var stations = this.stations;
            stations.forEach(function(i, data) {
            var location = new google.maps.LatLng(stations.lat, stations.lng);
            var marker = new google.maps.Marker({
                position: stations.location[i],
                title: stations.available_bikes[i],
                map: this.map
            })
        });*/
        
        
        /*var stations = this.stations;
            stations.forEach(function(i){
                data.available_bikes[i];
                var stationVelo = this.stations[x];
            var location = new google.maps.LatLng(stationVelo.lat, stationVelo.lng);
            var marker = new google.maps.Marker({
                position: location,
                title: stationVelo.name,
                map: this.map
            }); */
        
        /*for each (i=0; i < blabla)
        console.log('reponse jcdecaux'.name);
        reponse jcdecaux.availablebike [i];
        udemy json ajax */
        
    },
    
   
    
   /* afficherMarqueurs: function() {
        for (var x in this.stations) {
            var stationVelo = this.stations[x];
            var location = new google.maps.LatLng(stationVelo.lat, stationVelo.lng);
            var marker = new google.maps.Marker({
                position: location,
                title: stationVelo.name,
                map: this.map
            });
        }
    },
 */
      afficherMarqueurs: function() { 
          
           window.eqfeed_callback = function(recupererStations) {
            for (var i = 0; i < recupererStations.features.length; i++) {
              var coords = recupererStations.features[i].geometry.coordinates;
              var latLng = new google.maps.LatLng(coords[1],coords[0]);
              var marker = new google.maps.Marker({
                position: latLng,
                map: map
              });
            }
        }
    },
}



