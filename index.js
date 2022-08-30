 //build map 
  var map = L.map('map').setView([33.9547,-118.2120 ], 13);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
     attribution: '© OpenStreetMap'
  }).addTo(map);
  var marker = L.marker([33.9460,-118.1852 ]).addTo(map);
  marker.bindPopup("<b>South Gate Park !</b><br> You are here.").openPopup();




