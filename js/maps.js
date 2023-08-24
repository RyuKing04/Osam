var mapa;
var marker;

var LatLng; //Latitud y Longitud 

var directionsDisplay;
var directionsService;


var geoLoc;

//Función que "enciende" el mapa
function initMap() {
  LatLng = { lat: 10.001758, lng: -83.031327 }; //Objeto Coordenadas de la UTN

  //Creamos el mapa que recibe del HTML y un objeto con el zoom y coordenadas
  mapa = new google.maps.Map(document.getElementById("map"), {
    center: LatLng,
    zoom: 17,
    mapTypeId: 'roadmap',
  });

  //marcador por defecto
  marker = new google.maps.Marker({
    position: LatLng,
    map: mapa,
    title: "Tienda OSAM",
  });

  directionsDisplay = new google.maps.DirectionsRenderer();
  directionsService = new google.maps.DirectionsService();

  directionsDisplay.setMap(mapa);
}

function btnCalcularRuta() {
  if (navigator.geolocation) {
    geoLoc = navigator.geolocation;
    watchID = geoLoc.watchPosition(calcRoute, errorHandler, {enableHighAccuracy: true,});
  } else {
    alert("Error: El navegador no soporta Geolocation");
  }
}

function calcRoute(position) {
  var request = {
    origin: {lat: position.coords.latitude, lng: position.coords.longitude},
    destination: {lat: 10.001758, lng: -83.031327 },
    travelMode: google.maps.TravelMode.DRIVING, //WALKING, BYCYCLING, TRANSIT
    unitSystem: google.maps.UnitSystem.METRIC
  }

  directionsService.route(request, function (result, status) {
    if (status == google.maps.DirectionsStatus.OK) {
        //Enseña la ruta
        directionsDisplay.setDirections(result);
    } else {
        //Se borra la ruta
        directionsDisplay.setDirections({ routes: [] });

        //Mensaje de error
        alert("Hubo un problema con la solicitud de ruta. Error: " + status);
    }
});

}

function errorHandler(err) {
  if (err.code == 1) {
    alert("Acceso a ubicación denegado.");
  } else if (err.code == 2) {
    alert("Posición no encontrada.");
  }
}

// 10.001758, -83.031327