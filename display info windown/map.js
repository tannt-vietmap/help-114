//init map
var map = L.map('map').setView([10, 106], 13);

//add base map
L.tileLayer('https://maps.vietmap.vn/api/tm/{z}/{x}/{y}@2x.png?apikey=7747bad676aaa1fc9a57e869df967dc7e74430b22dca634a', {
    maxZoom: 19,
}).addTo(map);

//add full sreen control
map.addControl(new L.Control.Fullscreen());

//add marker
var marker = L.marker([10,106]).addTo(map);

//add popup
const contentString =
'<div id="content">' +
'<div id="siteNotice">' +
"</div>" +
'<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
'<div id="bodyContent">' +
"<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
"sandstone rock formation in the southern part of the " +
"Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
"south west of the nearest large town, Alice Springs; 450&#160;km " +
"(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
"features of the Uluru - Kata Tjuta National Park. Uluru is " +
"sacred to the Pitjantjatjara and Yankunytjatjara, the " +
"Aboriginal people of the area. It has many springs, waterholes, " +
"rock caves and ancient paintings. Uluru is listed as a World " +
"Heritage Site.</p>" +
'<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
"https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
"(last visited June 22, 2009).</p>" +
"</div>" +
"</div>";

marker.bindPopup(contentString).openPopup();
