var map = L.map('map').setView([46.65083796932437, 20.255141364694648], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let listofitems = [
    [46.649504282444674, 20.252777546667907, "Te", "Szentesi szentes", "Ez nagyon jó"]
]

for (let index = 0; index < listofitems.length; index++) {
    const element = listofitems[index];
    let marker = L.marker([listofitems[0][0],listofitems[0][1]]).addTo(map)
    
}

function AddMarkers() {
    for (let index = 0; index < listofitems.length; index++) {
        const element = listofitems[index];
        l.marker([element[0],element[1]]).addTp(map)
        
    }
}

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  