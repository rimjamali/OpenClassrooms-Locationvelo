var Reservation = {

    // Propriétés
    identite: {
        prenom: '',
        nom: '',
    },
    signature: null,
    station: null,
    date: null,
    countdown: null,

    // Méthodes
    init: function(countdown) {
        var self = this;

        this.countdown = countdown
        
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

        $('#bouton-confirmer').click(this.completerResa.bind(this))
    },
    
    completerStation: function(station) {
        this.station = station;
        sessionStorage.setItem('station', JSON.stringify(station));
    },

    completerResa: function() {
        //$(window).on('beforeunload', function(){
        sessionStorage.setItem('dateResa', new Date()); 
        //});
        
        $('.message-reservation').toggleClass('message-reservation');
        this.countdown.start();
    },
    
    terminerResa: function() {
        if (sessionStorage.clear()) {
        
        $('.message-reservation').removeClass('message-reservation'); //ne fonctionne pas
            
        };
        
    },
    
    continuerResa: function() {
        
    }
    
  
}



