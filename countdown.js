
var Countdown = {
	
	
	//propriétés
	delay : 1200000, // 20min * 60sec * 1000ms
	minutes: null,
    secondes: null,
    timer: null,


	// Méthodes
    
    start: function() {
        
        this.timer = setInterval(this.decompte, 1000);
    },

    clearTimer: function() {
        clearInterval(this.timer);
    },

	
    decompte: function() {
        var self = this;
        
        var dateNow = new Date();
        var dateResa = new Date(sessionStorage.getItem('dateResa'));

        var difference = dateNow - dateResa;

        var secondesEcoulees = Math.trunc(difference / 1000) % 60
        var minutesEcoulees = Math.trunc((difference / 1000) / 60.0)

        //var secondesRestantes = 59 - secondesEcoulees
        //var minutesRestantes = 19 - minutesEcoulees
        
        var secondesRestantes = 05 - secondesEcoulees
        var minutesRestantes = 00 - minutesEcoulees

        $('#minutes').html(minutesRestantes)
        $('#secondes').html(secondesRestantes)

        if (secondesRestantes === 0 && minutesRestantes === 0) {
            self.clearTimer; //ne fonctionne pas, le timer se met à -25000000
            sessionStorage.clear();
             $('.message-reservation').removeClass('message-reservation'); //ne //fonctionne pas
            $('.message-fin-reservation').toggleClass('message-fin-reservation');
            
        }; // else if (on rafraichit la page) {
        //    self.start;
    //    } else if (on ferme la page) {
      //      self.clearTimer;
        //    annuler résa
       // }
		
	} 
}


