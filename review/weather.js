const weather = document.querySelector(".weather");

const COORDS = "coords";

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoError() {
    console.log("Cannot access geo location");
}

function handleGeoSuccess(position) {
    // console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude: latitude,
        longitude: longitude
    };
    saveCoords(coordsObj);
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);

    if (loadedCoords === null) {
        askForCoords();
    } else {
        // getweather
    }
}

function init() {
    loadCoords();
}
init();