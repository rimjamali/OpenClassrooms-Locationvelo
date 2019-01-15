$(function() {
    
    var diapoObj = Object.create(Diaporama);
    diapoObj.initialiser();
    
    var reservationObj = Object.create(Reservation);

    var mapsObj = Object.create(Maps);
    mapsObj.init(reservationObj);



   // var stationObj = Object.create(Station)
   // stationObj.recupererStations(mapsObj, reservationObj);

});
