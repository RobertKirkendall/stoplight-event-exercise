//declare variables for HTML elements
let stopButton = document.getElementById('stopButton')
let stopLight = document.getElementById('stopLight')
let slowButton = document.getElementById('slowButton')
let slowLight = document.getElementById('slowLight')
let goButton = document.getElementById('goButton')
let goLight = document.getElementById('goLight')
//event listeners waiting for buttons to be clicked
stopButton.addEventListener("click",() =>{ changeColor(stopLight,"stop")});
slowButton.addEventListener("click", () => { changeColor(slowLight,"slow")});
goButton.addEventListener("click",() =>{ changeColor(goLight,"go")});
//global on/off function
function changeColor(light,state) {
  light.classList.toggle(state)
}
