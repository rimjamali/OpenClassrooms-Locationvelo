var Dessin = {
    
    canvasEl: null,
    context: null,
    paint: false,

    init: function() {
        var canvasEl = document.getElementById('canvas');
        this.context = canvasEl.getContext('2d');
        this.context.lineJoin = 'round';
        this.context.lineCap = 'round';
        this.context.lineWidth = 5;
        this.context.strokeStyle = "#000000";

        // Init events

        canvasEl.addEventListener('mousedown', this.mousedown.bind(this)) // pourquoi il faut binder alors que ce ne sont pas des propriétés de mon objet ??
        canvasEl.addEventListener('touchstart', this.mousedown.bind(this)) // pourquoi avec touchstart on bind mousedown ???
        canvasEl.addEventListener('mousemove', this.mousemove.bind(this))
        canvasEl.addEventListener('touchmove', this.mousemove.bind(this))
        canvasEl.addEventListener('mouseup', this.mouseup.bind(this))
        canvasEl.addEventListener('touchend', this.mouseup.bind(this))
    },


     mousedown: function(ev) {
        [lastX, lastY] = [ev.offsetX, ev.offsetY];
        console.log('mouse down');
    },


    mousemove: function(ev) {
       
        var self = this;
        console.log('mouse move')
        
        self.context.beginPath();
        self.context.moveTo(lastX, lastY);
        self.context.lineTo(ev.offsetX, ev.offsetY);
        self.context.stroke();
        [lastX, lastY] = [ev.offsetX, ev.offsetY];   
    },


    mouseup: function(ev) {
        var self = this;
        console.log('mouse up');  
        

        
    }
}
