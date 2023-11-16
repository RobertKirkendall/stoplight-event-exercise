//Declare variables for HTML elements
let stopButton = document.getElementById('stopButton')
let stopLight = document.getElementById('stopLight')
let slowButton = document.getElementById('slowButton')
let slowLight = document.getElementById('slowLight')
let goButton = document.getElementById('goButton')
let goLight = document.getElementById('goLight')

//Function invocation
mouseOverEvents()
clickEvents()

//Global functions
function changeColor(light,state) {
  light.classList.toggle(state)
}

function mouseOverEvents() {
  stopButton.addEventListener('mouseleave', () => {console.log(`Left stop button`)})
  stopButton.addEventListener('mouseenter', () => { console.log(`Entered stop button`)})
  slowButton.addEventListener('mouseleave', () => {console.log(`Left slow button`)})
  slowButton.addEventListener('mouseenter', () => { console.log(`Entered slow button`)})
  goButton.addEventListener('mouseleave', () => {console.log(`Left go button`)})
  goButton.addEventListener('mouseenter', () => { console.log(`Entered go button`)})
}

function clickEvents() {
  stopButton.addEventListener("click",() =>{ changeColor(stopLight,"stop")});
  slowButton.addEventListener("click", () => { changeColor(slowLight,"slow")});
  goButton.addEventListener("click",() =>{ changeColor(goLight,"go")});
}
