const mapBase = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather"
const myKey = "&APPID=4f990a49c6ef8f08d61e20c7cb8df62c"
const docList =document.getElementById("cc")

const lonCrd = { lat: 51.5074, lon: 0.1278}
const seaCrd = {lat: 47.6762, lon: -122.3182}

function geoLoc(){
	return navigator.geolocation.getCurrentPosition(success, onerrorFunc)
}

function success(pos){
	let myCrd = {lat: pos.coords.latitude, lon: pos.coords.longitude}
	loadLoc(myCrd)
}

function loadLoc(Object){
	let mapURI = `${mapBase}?lat=${Object.lat}&lon=${Object.lon}${myKey}`
	let request = new XMLHttpRequest()
	request.open("GET", mapURI,true)
	request.onload = onloadFunc
	request.onerror = onerrorFunc
	request.send()
}

function onloadFunc(){
	let resp = JSON.parse(this.response) 
	console.log(resp)
	let newLi = document.createElement("li")
	newLi.innerHTML = `There is currently ${resp.weather[0].description} in ${resp.name}`
	docList.appendChild(newLi)
}
function onerrorFunc(){
		console.log("error!!")
	}