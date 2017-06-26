const start = document.querySelector("button.start")
const stop = document.querySelector("button.stop")
const lap = document.querySelector("button.lap")
const reset = document.querySelector("button.reset")

const lapList = document.querySelector("#lapList")
const stopwatchTime = document.querySelector("#stopwatchTime")

const intervalRate = 10

let laps = []
let rawTime = 0
let lapTime = 0
let intervalID = null

// turns the time into a human readable format
function formatTime (raw) {
  let seconds = Math.floor(raw / 1000)
  let fractionalSeconds = (raw % 1000) / 1000
  let minutes = Math.floor(seconds / 60)
  seconds = seconds - (60 * minutes) + fractionalSeconds

  return `${zeroPad(minutes)}:${zeroPad(seconds.toFixed(2))}`
}

function stopwatchStart(){
  stopwatchStop()
  rawTime = 0
	intervalID = setInterval(stopwatchUpdate, intervalRate)
}

function stopwatchStop(){
	
	clearInterval(intervalID)
}
function stopwatchUpdate(){
	rawTime += intervalRate
	stopwatchTime.innerHTML = formatTime(rawTime) 
}

// adds a leading zero because humans like them
function zeroPad (value) {
  let pad = value < 10 ? '0' : ''
  return `${pad}${value}`
}

function lapping(){
  clearInterval(intervalID)
  let lapTime = formatTime(rawTime)
  let lapName = prompt("First Name")
  laps.push({name: lapName, intervalID: intervalID, time: lapTime})
  lapList.innerHTML = ""
  for (var i = 0; i < laps.length; i++){
    var newNode = document.createElement("li")
    newNode.innerHTML= `${laps[i].name} ${laps[i].time}`
    lapList.appendChild(newNode)
  }
}

function resets(){
  rawTime = 0
  stopwatchTime.innerHTML = formatTime(rawTime)
  clearInterval(intervalID)
  laps = []
  lapList.innerHTML = ""
}

document.addEventListener("DOMContentLoaded", function () {
  console.log('ready!')
  start.addEventListener("click", stopwatchStart)
  stop.addEventListener("click", stopwatchStop)
  lap.addEventListener("click", lapping)
  reset.addEventListener("click", resets)
})


