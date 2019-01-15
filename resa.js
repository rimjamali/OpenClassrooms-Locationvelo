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

        this.countdown = countdown;
        
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

        if (!!sessionStorage.getItem('station')) { //revoir les deux points d'exclam.
            // J'ai rafraichi ma page et une résa est en cours
            var station = JSON.parse(sessionStorage.getItem('station'))
            $('#station-name').html(station.name)
            $('#messageResa').removeClass('message-reservation');
            this.countdown.start();
        }
    },
    
    completerStation: function(station) {
        this.station = station;
        sessionStorage.setItem('station', JSON.stringify(station));
    },

    completerResa: function() {
        $('#station-name').html(this.station.name);
        sessionStorage.setItem('dateResa', new Date()); 
        
        
        $('#messageResa').removeClass('message-reservation');
        this.countdown.start();
    }
  
}



