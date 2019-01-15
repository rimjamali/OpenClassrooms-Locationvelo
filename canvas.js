var Dessin = {
    
    canvasEl: null,
    context: null,
    isDrawing: false,
    lastX: null,
    lastY: null,
    positions: [],


    init: function() {
        var canvasEl = document.getElementById('canvas');
        this.context = canvasEl.getContext('2d');
        this.context.lineJoin = 'round';
        this.context.lineCap = 'round';
        this.context.lineWidth = 5;
        this.context.strokeStyle = "#000000";

        // Init events

        canvasEl.addEventListener('mousedown', this.mousedown.bind(this)) 
        canvasEl.addEventListener('touchstart', this.mousedown.bind(this)) 
        canvasEl.addEventListener('mousemove', this.mousemove.bind(this))
        canvasEl.addEventListener('touchmove', this.mousemove.bind(this))
        canvasEl.addEventListener('mouseup', this.mouseup.bind(this))
        canvasEl.addEventListener('touchend', this.mouseup.bind(this))
    },


     mousedown: function(ev) {
        this.lastX = ev.offsetX;
        this.lastY = ev.offsetY;
        this.isDrawing = true;
        this.positions.push({x: ev.offsetX, y: ev.offsetY})
    },


    mousemove: function(ev) {
        var self = this;
        if (this.isDrawing === true) {
            self.context.beginPath();
            self.context.moveTo(this.lastX, this.lastY);
            self.context.lineTo(ev.offsetX, ev.offsetY);
            self.context.stroke();
            this.lastX = ev.offsetX;
            this.lastY = ev.offsetY; 
            this.positions.push({x: ev.offsetX, y: ev.offsetY})
        }
    },


    mouseup: function(ev) {
        var self = this; 
        self.isDrawing = false;
        this.lastX = null;
        this.lastY = null;
    },

    isEmpty: function() {
        return this.positions.length === 0
    }
}
