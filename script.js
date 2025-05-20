let theme_button = document.getElementById("theme")
let theme = false


//világos mód
theme_button.addEventListener("click", function(){
    if (theme) {
        document.body.style.backgroundColor = "#242424"
        document.body.style.color = "white" 
        theme_button.innerHTML="Világos mód"
        theme = false
    }
    else{
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black"
        theme_button.innerHTML="Sötét mód"
        theme = true
    }
});
var element = document.getElementById('map');

// Height has to be set. You can do this in CSS too.
element.style = 'height:500px;';

// Create Leaflet map on map element.
var map = L.map(element);

// Add OSM tile layer to the Leaflet map.
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Target's GPS coordinates.
var target = L.latLng('46.650994637726946','20.25513063585885');

// Set map's center to target with zoom 14.
map.setView(target, 14);


L.marker(target).addTo(map).on('click', function() {
    
});
