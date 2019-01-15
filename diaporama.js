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
        
        $(document).keydown(function(e){
            if(e.keyCode === 37) { //left
                self.tournerDiaporama(1);
            } else if (e.keyCode === 39) {
                self.tournerDiaporama();
            } 
        });

        self.autoDiaporama();
        
        
        
        $('.pause').click(function(){ 
            self.arreterDiaporama();
        });
        
        
        $('.lecture_sign').click(function(){
            self.relancerDiaporama(); //fonctionne une fois mais pas plus
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

    tournerDiaporama: function(sensRotation = 0) {

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
        var self = this;
        this.interval = setInterval(self.tournerDiaporama(), 5000) 
        $('.lecture_sign').hide(); 
        $('.pause_sign').show();
    },
    
   
}

// function pauseSlider(){
    
//     clearInterval(diapoAuto);
//     $('.container-slider .pause').hide(); // on cache le bouton pause



//faire un tableau d'objet ici 


// var imgItems = $('.sliders .slide').length;
// console.log(imgItems);

// var imgPosition = 1; // lorsque la page se charge, le slider est en position 1 - première image.


// //-----------------
// $('.sliders .slide').hide(); //on cache toutes les slides
// $('.sliders .slide:first').show(); // on montre juste la première


// // on execute toutes les fonctions 
// $('.next').click(nextSlider); 
// $('.prev').click(prevSlider); 


// var diapoAuto = setInterval(function(){
//                 nextSlider();
//             }, 5000);


// $('.pause').click(pauseSlider);

// /*$('document').keypress(keyboard);*/



// //FONCTIONS ====================================

// function nextSlider(){
//     if(imgPosition >= imgItems) {
//         imgPosition = 1;
//        } else {
//            imgPosition++;
//        }
    
//     $('.sliders .slide').hide(); //On cache toutes les slides
//     $('.sliders .slide:nth-child('+ imgPosition +')').fadeIn();
// }

// function prevSlider(){
//     if(imgPosition <= 1) {
//         imgPosition = imgItems;
//        } else {
//            imgPosition--;
//        }
    
//     $('.sliders .slide').hide(); //On cache toutes les slides
//     $('.sliders .slide:nth-child('+ imgPosition +')').fadeIn();
// }


// function pauseSlider(){
    
//     clearInterval(diapoAuto);
//     $('.container-slider .pause').hide(); // on cache le bouton pause
    
//     $('.container-slider').append('<span class="icon lecture fas fa-chevron-circle-right fa-5x"></span>'); //on rajout le bouton lecture
    
//     $('.lecture').click(lectureSlider); /*on déclare la prochaine fonction avec l'élément que l'on vient de créer*/
// }


// function lectureSlider(){
    
//     $('.container-slider .lecture').hide(); //si clic sur lecture, on cache le bouton 
    
//     $('.container-slider .pause').show(); //et on montre le bouton pause
    
//     diapoAuto = setInterval('nextSlider()', 5000) //la diapo repart mais voir soucis 
//  }   


/*function keyboard(e) {
        if(e.which === 39){
            alert('bonjour');
        } else if (e.which === 37) {
            alert('bonjour');
        }  
     e.preventDefault();
}*/


 


