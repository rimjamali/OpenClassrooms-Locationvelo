$(function() {

    var diapoObj = Object.create(Diaporama);
    diapoObj.initialiser();

    var mapObj = Object.create(Carte);
    mapObj.init();

    var countdownObj = Object.create(Countdown);

    var canvasObj = Object.create(Dessin);
    canvasObj.init();

    var resaObj = Object.create(Reservation);
    resaObj.init(countdownObj, canvasObj);

    var stationObj = Object.create(Station);
    stationObj.init(mapObj, resaObj);


})
