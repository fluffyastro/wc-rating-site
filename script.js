var map = L.map('map').setView([46.65083796932437, 20.255141364694648], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.marker([46.65083796932437, 20.255141364694648]).addTo(map)
    .bindPopup('Szent Erszébet alsós wc<hr>Valaki Vildikó   2025 május 10 <br> <br>Blast to the past 2/10<hr>Joe Mama 2025 május 24 <br> <br>Nagyon tiszta 8/10');