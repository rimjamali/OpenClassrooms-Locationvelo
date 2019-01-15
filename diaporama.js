var Diaporama = {

    // Propriétés
    slides: [],
    slideIx: 0,
    interval: null,

    // Méthodes
    initialiser: function() {
     
        var self = this;

        this.slides = $('.slide')

        // Ecouteurs d'évènements
        $('#flecheGauche').click(function() {
            self.tournerDiaporama(1)
        });
        
        $('#flecheDroite').click(function() {
            self.tournerDiaporama()
        });
        
        $(document).keydown(this.keydownHandler.bind(this));

        /*
         * Pour le contexte : quand on entre dans un nouveau bloc d'accolades, on perd le contexte parent (le this)
         * Pour retrouver le contexte parent, 2 solutions :
         *  - On est dans la fonction : dans ce cas on sauvegarde le contexte parent dans une varible (var self = this) et on 
         * utilise le self
         *  - On est hors de la fonction : dans ce cas on utilise la fonction bind pour transférer le contexte à la fonction 
         * appelée (this.nomFct.bind(this))
         */

        self.autoDiaporama();
        
        /*
        $(this.slides).mouseenter(function(){
            $('.pause').show();
        });
        
        $(this.slides).mouseleave(function(){
            $('.pause').hide();
        });
        */
        
        
        $('.pause').click(function(){ 
            self.arreterDiaporama();
        });
        
        
        $('.lecture_sign').click(function(){
            self.relancerDiaporama();
        });
        
        
        //versions mobiles
        
        /*
        
        $(document).on('pagecreate', '#page1', function(event) { 
            $('.slide').on('tap', function(event) { 
                alert('bonjour');
            }); 
        });
        
        */
    
    },

    keydownHandler: function(e) {
        var self = this
        switch(e.keyCode) {
            case 37: // LEFT
                this.tournerDiaporama(1);
                break;
            case 39: // RIGHT
                this.tournerDiaporama(0);
                break;
            // case xx: // SPACE
            //     if (!this.interval) {
            //         // Lancer diapo
            //         this.autoDiaporama().bind(self)
            //     } else {
            //         clearInterval(this.interval)
            //     }
            //     break;
            default:
                break;
        }

        // if(e.keyCode === 37) { //left
        //     this.tournerDiaporama(1);
        // } else if (e.keyCode === 39) {
        //     this.tournerDiaporama();
        // } 
    },

    tournerDiaporama: function(sensRotation = 0) {

        //console.log('this.slideIx: ', this.slideIx)

        if (sensRotation === 0) {
            // this.slideIx = this.slideIx === this.slides.length - 1 ? 0 : this.slideIx + 1;
            // variable = condition ? valeurSiConditionVraie : valeurSiConditionFausse

            if (this.slideIx === this.slides.length - 1) {
                this.slideIx = 0;
            } else {
                this.slideIx = this.slideIx + 1;
            }
        } else {
            this.slideIx = this.slideIx === 0 ? this.slides.length - 1 : this.slideIx - 1;
        }
        
        $('.sliders .slide').removeClass('active'); //On cache toutes les slides
        $('.sliders .slide:nth-child('+ (this.slideIx + 1) +')').addClass('active');
        //this.slides.removeClass('active');
       // $(this.slides[this.slideIx]).addClass('active');
    },

    autoDiaporama: function() {
        var self = this
        this.interval = setInterval(function() {
            self.tournerDiaporama();
        }, 5000)
    },

    arreterDiaporama: function(){
            clearInterval(this.interval);
            $('.pause_sign').hide(); 
            $('.lecture_sign').show();
    },
    
    relancerDiaporama: function(){
        var self = this
        this.autoDiaporama();
        // this.interval = setInterval(function() {
        //     self.tournerDiaporama()
        // }, 5000) 
        $('.lecture_sign').hide(); 
        $('.pause_sign').show();
    },
    
   
}




 



