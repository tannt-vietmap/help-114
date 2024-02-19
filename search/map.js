var apiKey =  '7747bad676aaa1fc9a57e869df967dc7e74430b22dca634a';

//init map
var map = L.map("map").setView([10, 106], 13);

//add base map
L.tileLayer(
  `https://maps.vietmap.vn/api/tm/{z}/{x}/{y}@2x.png?apikey=${apiKey}`,
  {
    maxZoom: 19,
  }
).addTo(map);

//add full sreen control
map.addControl(new L.Control.Fullscreen());

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

const processChange = debounce(() => {
  let inputText = document.getElementById("myInput").value;
  //call api search
  search(inputText);
});

const search = async (text) => {
    //Add marker to map
    const response = await fetch(
        `https://maps.vietmap.vn/api/autocomplete/v3?apikey=${apiKey}&text=${text}&layers=ADDRESS`
    );
    const myJson = await response.json();

    //display search
    let resultElm = document.getElementById('searchh-results');
    resultElm.style.display = 'block';
    let listElm = document.createElement('ul');
    listElm.className = 'results';
    for(let i =0; i < myJson.length; i++){
        let itemElm = document.createElement('li');
        itemElm.className = "autocomplete-items";
        itemElm.innerHTML = myJson[i].display;
        //add event click item
        itemElm.addEventListener('click',function(e){
            //call api detail place
            getPlace( myJson[i].ref_id);
        })
        listElm.appendChild(itemElm);
    }
    resultElm.appendChild(listElm);
};

const getPlace = async  (placeId) => {
    const response = await fetch(
        `https://maps.vietmap.vn/api/place/v3?apikey=${apiKey}&refid=${placeId}`
    );
    const myJson = await response.json();
    //add marker
    let marker = L.marker([myJson.lat, myJson.lng]).addTo(map);
    map.panTo([myJson.lat, myJson.lng]);
}
/*execute a function when someone clicks in the document:*/
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
function closeAllLists(elmnt) {
    let resultElm = document.getElementById('searchh-results');
    resultElm.innerHTML = '';
    resultElm.style.display = 'none';
  }