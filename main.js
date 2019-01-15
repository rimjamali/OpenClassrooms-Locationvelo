$(function() {
    
    var canvasObj = Object.create(Dessin);
    canvasObj.init();
    
    var diapoObj = Object.create(Diaporama);
    diapoObj.initialiser();

    var mapObj = Object.create(Carte);
    mapObj.init();

    var countdownObj = Object.create(Countdown);

    var resaObj = Object.create(Reservation);
    resaObj.init(countdownObj);

    var stationObj = Object.create(Station);
    stationObj.init(mapObj, resaObj);


})
