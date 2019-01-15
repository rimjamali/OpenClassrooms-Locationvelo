
var Countdown = {
	
	
	//propriétés
	delay : 1200000,
	minutes: null,
	secondes: null,


	// Méthodes
    init: function() {
        var self = this;
        $('#bouton-confirmer').click(function() {
           
        	var x = setTimeout('decompte', 1000);
        	console.log('fjdslfl');


        // Sauvegarder l'identité et la station dans le local storage
    	//localStorage.setItem('identite', JSON.stringify(self.identite));
         
        
        })

    },    

	decompte: function() {
		var self = this;
		self.minutes = Math.floor((delay % (1000 * 60 * 60)) / (1000 * 60));
		self.secondes = Math.floor((delay % (1000 * 60)) / 1000);
		
	} 
}


