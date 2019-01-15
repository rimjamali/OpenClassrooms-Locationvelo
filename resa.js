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
        $('#bookingBtn').click(function() {
            self.identite.prenom = $('#prenom').val();
            self.identite.nom = $('#nom').val();

            // Sauvegarder l'identité et la station dans le local storage
            if ((self.identite.prenom === '') || (self.identite.nom === '')) {
                $('#message-erreur').show(); 
                $('#canvas-click').hide();
            } else {
                $('#message-erreur').hide(); 
                $('#message-signature').show();
                $('#canvas-click').show();
                localStorage.setItem('identite', JSON.stringify(self.identite));
            }

        })
    },
    
    completerStation: function(station) {
        this.station = station;
        sessionStorage.setItem('station', JSON.stringify(station))
    }

/*
    canvasSignature: function(signature) {
        this.signature = signature
        var self = this;
        signature = $('.cnvs'); 
        var ctx = signature.getContext('2d');

        signature.mousedown(function (e){

        });
        

    }
*/
  
}


