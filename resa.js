var Reservation = {

    // Propriétés
    identite: {
        prenom: '',
        nom: '',
    },
    signature: null,
    station: null,
    date: null,

    // Méthodes
    init: function() {
        var self = this;
        $('#bouton-reserver').click(function() {
            self.identite.prenom = $('#prenom').val();
            self.identite.nom = $('#nom').val();


            // Sauvegarder l'identité et la station dans le local storage
            if ((self.identite.prenom === '') || (self.identite.nom === '')) {
                 $('#message-erreur').show(); 
                 $('#canvas').hide();
            } else {
                 $('#message-erreur').hide(); 
                 $('#message-signature').show();
                 $('#canvas').show();
                 $('#bouton-reserver').hide();
                 $('#bouton-confirmer').show();  
                localStorage.setItem('identite', JSON.stringify(self.identite));

            }
         
        
        })
    },
    
    completerStation: function(station) {
        this.station = station;
        sessionStorage.setItem('station', JSON.stringify(station))
    }


  
}


