var Maps = {

    // Propriétés
    map: null,
    stations : null,
    
    //Méthode 
    
    init: function () {
        var options = {
            center: {lat: 47.218371, lng: -1.553621},
            zoom: 14
        };

        var element = $('#map')[0]; /* 0 signifie qu'on passe l'élément en html au lieu de jquery : correspond à getElementById */
        this.map = new google.maps.Map(element, options);
    },
    
    function afficher(reponse) {
        console.log(reponse);
    }

    this.stations = ajaxGet("https://api.jcdecaux.com/vls/v1/stations?contract={Nantes.json}&apiKey={453628a242d0db7b1d2972afa3421f5460dddc0d}", afficher);
}




/*

var Maps = {
    
    map : null;
    //Méthode 
    
    init: function () {
        var options = {
            center: {lat: 47.218371, lng: -1.553621},
            zoom: 14
        }
        var element = document.getElementById('map'),
        map = new google.maps.Map(element, options);       
    },
}


*/
