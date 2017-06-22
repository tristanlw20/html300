const start = document.querySelector("button.start")
const stop = document.querySelector("button.stop")


const laplist = document.querySelector("#lapList")
const stopwatchTime = document.querySelector("#stopwatchTime")

const laps = []
const intervalRate = 10

let rawTime = 0
let intervalID = null


// turns the time into a human readable format
function formatTime (raw) {
  let seconds = Math.floor(raw / 1000)
  let fractionalSeconds = (raw % 1000) / 1000
  let minutes = Math.floor(seconds / 60)
  seconds = seconds - (60 * minutes) + fractionalSeconds

  return `${zeroPad(minutes)}:${zeroPad(seconds.toFixed(2))}`
}

function stopwatchStart(event){
	event.preventDefault()
	console.log("started!")
	intervalID = setInterval(stopwatchUpdate, intervalRate)
}

function stopwatchStop(event){
	event.preventDefault()
	console.log("stopped!")
	clearInterval(intervalID)
}
function stopwatchUpdate(){
	rawTime + intervalRate
	stopwatchTime.innerHTML = formatTime(rawTime)
}

// adds a leading zero because humans like them
function zeroPad (value) {
  let pad = value < 10 ? '0' : ''
  return `${pad}${value}`
}

document.addEventListener("DOMContentLoaded", function () {
  console.log('ready!')
  start.addEventListener("click", stopwatchStart)
  stop.addEventListener("click", stopwatchStop)
})
