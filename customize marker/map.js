//init map
var map = L.map('map').setView([10, 106], 13);

//add base map
L.tileLayer('https://maps.vietmap.vn/api/tm/{z}/{x}/{y}@2x.png?apikey=7747bad676aaa1fc9a57e869df967dc7e74430b22dca634a', {
    maxZoom: 19,
}).addTo(map);

//add full sreen control
map.addControl(new L.Control.Fullscreen());

//add marker
//create icon 
var parkingIcon = L.icon({
    iconUrl: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/parking_lot_maps.png',
    iconSize:     [38,38], // size of the icon
});
L.marker([10,106],{icon:parkingIcon}).addTo(map);