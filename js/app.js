// On initialise la map et on peut cibler un endroit en particulier
var mymap = L.map('mapid')


L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYmVuNjgxMDAiLCJhIjoiY2tpc200NG96MGZ1NTJ1bW1zNHR1d3loYiJ9.1FO-f1sFcmsAASkJs0q4ww'
}).addTo(mymap);


// On associe une icon à un marker
var myIcon = L.icon({
    iconUrl: 'https://cdn.iconscout.com/icon/free/png-256/mcdonalds-2-569493.png',
    iconSize: [50, 50],
})

// Tableau JSON des marker Mcdonald's

var restaurants = {
    "Mcdonald's Mulhouse": {
        "adresse": "1 Rue du fou",
        "coords": [47.750246234122145, 7.3395284207514315]
     },

    "Mcdonald's Mulhouse2": {
        "adresse": "2 Rue du fou",
        "coords": [47.73499733447565, 7.318573606684962]
    },

    "Mcdonald's Mulhouse3": {
        "adresse": "3 Rue du fou",
        "coords": [47.791560429242054, 7.316731983932968]
    },

    "Mcdonald's Mulhouse4": {
        "adresse": "4 Rue du fou",
        "coords": [47.76106252907419, 7.294381368232028]
    }
}


// Afficher l'ensemble des markers sur la map
var arrayMarkers = []

for(restaurant in restaurants){
    m = new L.marker(restaurants[restaurant].coords, {icon: myIcon}).addTo(mymap)
    m.bindPopup("<strong>"+ restaurant +"</strong><br>" + restaurants[restaurant].adresse)
    arrayMarkers.push(m)
    console.log(arrayMarkers)
}

// Cadrer l'affichage des marker de manière automatique

var featureGroup = L.featureGroup(arrayMarkers).addTo(mymap)
mymap.fitBounds(featureGroup.getBounds(), {padding: [50, 50]})