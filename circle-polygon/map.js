//init map
var map = L.map("map").setView([10, 106], 11);

//add base map
L.tileLayer(
  "https://maps.vietmap.vn/api/tm/{z}/{x}/{y}@2x.png?apikey=7747bad676aaa1fc9a57e869df967dc7e74430b22dca634a",
  {
    maxZoom: 19,
  }
).addTo(map);

//add full sreen control
map.addControl(new L.Control.Fullscreen());

//add circle
var circle = L.circle([10, 106], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0.5,
  radius: 5000,
}).addTo(map);

//Adding a polygon
var polygon = L.polygon([
  [10.025991756804927, 106.05336586988864],
  [9.876699726821798, 106.05336586988864],
  [9.876699726821798, 106.26158668481776],
  [10.025991756804927, 106.26158668481776]
]).addTo(map);
