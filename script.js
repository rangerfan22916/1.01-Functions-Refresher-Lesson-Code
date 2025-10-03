// Helper function: writes any HTML into the #out div
function render (html) {
  document.getElementById('out').innerHTML = html
}

/* 
  Function 1 — greet()
  ---------------------
  - Prompt the user for their name
  - If they type something, display "Hello, NAME!"
  - If they cancel or leave blank, show a friendly message
*/
function greet () {
  const name = prompt('What is your name?')
  if (!name) {
    render("<p> No name given!</p>")
    return
  }
render (`<p>Hello, ${name}. Nice to see you today!</p>`)
}
/* 
  Function 2 — averageNumbers()
  ------------------------------
  - Prompt the user for a list of numbers separated by commas
  - Split the input into an array, turn into numbers
  - Calculate the average
  - Display the average AND the list of numbers
*/
function averageNumbers () {
  const input = prompt('Enter a list of numbers, separated by commas:')
  if (!input) {
    render('<p>No numbers provided!</p>')
    return
  }
  const numStrings = input.split(',')
  const numbers = numStrings.map(numStr => parseFloat(numStr.trim()))
  const validNumbers = numbers.filter(num => !isNaN(num))
  if (validNumbers.length === 0) {
    render('<p>No valid numbers provided!</p>')
    return
  }
  const sum = validNumbers.reduce((acc, num) => acc + num, 0)
  const average = sum / validNumbers.length
  render(`<p> ${average}</p>`)
}


/* 
  Function 3 — timeOfDay()
  -------------------------
  - Get the current hour from the computer clock
  - Decide whether it's morning, afternoon, or evening
  - Display a message like "Good morning!" 
*/
function timeOfDay () {
  const now = new Date()
  const hour = now.getHours()
  let message = ''
  if (hour < 12) {
    message = 'Good morning!'
  } else if (hour < 18) {
    message = 'Good afternoon!'
  } else {
    message = 'Good evening!'
  }
  render(`<p>${message}</p>`)
}

/* 
  Function 4 — randomBetween()
  -----------------------------
  - Prompt the user for a minimum and maximum number
  - Generate a random number between them
  - Display the result
  - Handle invalid input (like blanks or min >= max)
*/
function randomBetween () {
  const minInput = prompt('Enter the minimum number:')
  const maxInput = prompt('Enter the maximum number:')
  const min = parseFloat(minInput)
  const max = parseFloat(maxInput)

  if (isNaN(min) || isNaN(max)) {
    render('<p>Please enter valid numbers for both minimum and maximum.</p>')
    return
  }
  if (min >= max) {
    render('<p>The minimum must be less than the maximum.</p>')
    return
  }
  const randomNum = Math.random() * (max - min+1) + min
  render(`<p>Your random number between ${min} and ${max} is ${randomNum.toFixed(2)}.</p>`)
}

/* 
  Function 5 — clearOutput()
  ---------------------------
  - Clear whatever is inside #out
  - Replace it with a placeholder message like "Output cleared."
*/
function clearOutput () {
  render('<p>Output cleared.</p>')
}

// ---- Event listeners for the demo buttons ----
document.getElementById('btnGreet').addEventListener('click', greet)
document.getElementById('btnAvg').addEventListener('click', averageNumbers)
document.getElementById('btnTime').addEventListener('click', timeOfDay)
document.getElementById('btnRandom').addEventListener('click', randomBetween)
document.getElementById('btnClear').addEventListener('click', clearOutput)

// Function 6 — changeTitle()
// ----------------------------
// Change the page <title> text and also the <h1> in header
function changeTitle () {
  const newTitle = prompt('Enter a new page title:')
  if (!newTitle) {
    render('<p>No title entered.</p>')
    return
  }
  document.title = newTitle
  document.querySelector('header h1').textContent = newTitle
  render(`<p>Page title changed to: ${newTitle}</p>`)
}

// Function 7 — cycleTextColor()
// ------------------------------
// Cycle through a set of colors each time the button is clicked
let colorIndex = 0
const colors = ['#b45309', '#15803d', '#d97706', '#dc2626', '#1d4ed8'] // fall + blue
function cycleTextColor () {
  colorIndex = (colorIndex + 1) % colors.length
  document.getElementById('out').style.color = colors[colorIndex]
  render(`<p>Text color changed to ${colors[colorIndex]}</p>`)
}

// Function 8 — changeTextAndBackground()
// ---------------------------------------
// Change both text and background color of #out
function changeTextAndBackground () {
  const out = document.getElementById('out')
  out.style.color = '#fff'
  out.style.backgroundColor = '#4338ca' // indigo
  out.innerHTML = '<p>Both text and background colors changed!</p>'
}


// Event listeners for new buttons
document.getElementById('btnTitle').addEventListener('click', changeTitle)
document.getElementById('btnCycle').addEventListener('click', cycleTextColor)
document.getElementById('btnChangeBoth').addEventListener('click', changeTextAndBackground)
