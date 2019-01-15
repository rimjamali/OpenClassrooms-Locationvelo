
var Countdown = {
	
	
	//propriétés
	minutes: null,
    secondes: null,
    timer: null,


	// Méthodes
    start: function() {
        this.timer = setInterval(this.decompte.bind(this), 1000);
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
        
        var secondesRestantes = 35 - secondesEcoulees
        var minutesRestantes = 00 - minutesEcoulees

        $('#minutes').html(minutesRestantes)
        $('#secondes').html(secondesRestantes)

        if (secondesRestantes === 0 && minutesRestantes === 0) {
            self.clearTimer(); 
            sessionStorage.clear();
            $('#messageResa').addClass('message-reservation');
            $('.message-fin-reservation').toggleClass('message-fin-reservation');
            
        }; 
		
	} 
}


