var apiKey = "7747bad676aaa1fc9a57e869df967dc7e74430b22dca634a";

//init map
var map = L.map("map").setView([10, 106], 13);

//add base map
L.tileLayer(
  `https://maps.vietmap.vn/api/tm/{z}/{x}/{y}@2x.png?apikey=${apiKey}`,
  {
    maxZoom: 19,
  }
).addTo(map);

//delay keyup input
function debounce(func, timeout = 400) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

//Create route
const route = () => {
  let startText = document.getElementById("from").value;
  let endText = document.getElementById("to").value;
  //remove space
  let startCoor = startText.replace(/\s/g, "");
  let endCoor = endText.replace(/\s/g, "");
  console.log(startCoor);
  //call api routing
  callRouting(startCoor, endCoor);
};

const callRouting = async (from, to) => {
  const response = await fetch(
    `https://maps.vietmap.vn/api/route?api-version=1.1&apikey=${apiKey}&point=${from}&point=${to}&vehicle=car`
  );
  const myJson = await response.json();
  if (myJson.paths.length > 0) {
    let points = myJson.paths[0].points;
    let polyline = L.Polyline.fromEncoded(points).addTo(map);
    map.fitBounds(polyline.getBounds());

    let iconStart =  L.icon({
      iconUrl: 'start.png',
      iconSize:     [38,38],
      iconAnchor:   [19, 38] 
  });
  let iconEnd =  L.icon({
    iconUrl: 'end.png',
    iconSize:     [38,38],
     iconAnchor:   [19, 38]  
  });
    let startMarker = L.marker([from.split(',')[0],from.split(',')[1]],{icon:iconStart}).addTo(map);
    let endMarker  = L.marker([to.split(',')[0],to.split(',')[1]],{icon:iconEnd}).addTo(map);
  }
  
};
