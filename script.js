var map = L.map('map').setView([46.65083796932437, 20.255141364694648], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let listofitems = [
    [46.649504282444674, 20.252777546667907, "Valaki Ildikó", "Szentesi központ", "Ez nagyon jó", 10],
    [46.25860483177105, 20.12769534636876, "Marsos Géza", "Szegedi Szeged ház", "Rohadtjo", 7],
    [47.58665608196328, 18.394022235020717, "Nader", "Tatabánya", "Megkergettek", 1],
    [47.48551545525022, 19.091400361901847, "Petőfi Sándor", "Pilvax", "Nagyon jó hely!!", 10],
    [-79.70747890319251, 32.273013771361306, "Pingvin", "Déli Sarok", "Noot noot", 10],
    [46.739180099775076, 21.375868290776246, "Híres sárga", "Sarkad", "Megsarkaltak", 2],
    [47.95323946282742, 21.717393434823222, "Kenguru", "Nyíregyháza", "Elegem van a sok anomáliából. Elakarok költözni. Tegnap valami fekete árnyék elkapott és elrángatott Debrecenre (nehezen éltem túl)", 0],
    [48.44857424591003, 22.729192281817994, "Árpád", "Munkács", "A turul madár elkapott", 10],
    [48.09637077350096, 19.80208979424953, "Salgótarján kapitány", "Salgótarján", "Salgó szív, tarján lélek. Salgón szarok amíg élek!", 10],
    [47.17274649943241, 20.17955479329528, "A Szolnoki vadászgépek", "Szolnok", "Sötét felhőn állnak!", 7]
]

function AddMarkers() {
    for (let index = 0; index < listofitems.length; index++) {
        const element = listofitems[index];
        L.marker([element[0],element[1]]).addTo(map)
        .bindPopup("<h1>"+element[3]+"</h1><p>"+element[2]+"</p><hr><p>"+element[4]+"</p><p>"+element[5]+"/10</p>")
        .openPopup();
        
    }
}
AddMarkers()
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


let themeselect = false
document.getElementById("theme").addEventListener("click", function (params) {
    if (themeselect) {
        document.body.style.backgroundColor = "#242424"
        document.body.style.color = "white"
        themeselect = false
    }
    else{
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black"
        themeselect = true
    }
})
  