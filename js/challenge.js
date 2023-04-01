const minusBtn = document.getElementById("minus")
const plusBtn = document.getElementById("plus")
const counter = document.getElementById("counter")
const pauseBtn = document.getElementById("pause")
const myForm = document.querySelector("form")
const restartBtn = document.getElementById("restart")
const likeBtn = document.getElementById("heart")
let myNumbah = 0
let timerId = startTimer()

likeBtn.addEventListener("click" , handleLike)
minusBtn.addEventListener("click" , decrementCounter)
plusBtn.addEventListener("click" , incrementCounter)
pauseBtn.addEventListener("click" , handlePause)
restartBtn.addEventListener("click" , handleRestart)
myForm.addEventListener("submit" , createComment)

//see the timer increment every second once the page has loaded
function startTimer () {
    return setInterval(incrementCounter , 1000)
}

//manually decrement and increment the counter using the plus and minus buttons
function decrementCounter(){
   if (myNumbah > 0)
    counter.textContent = --myNumbah
}

function incrementCounter(){
    counter.textContent = ++myNumbah
}

//"like" an individual number of the counter. i should the see the count of the number of "likes" associated with that number displayed
//i'm trying to
function handleLike() {
    if (document.getElementById(`${myNumbah}`) !== undefined){
        const likeCounter = document.getElementById(`${myNumbah}`)
        likeCounter.textContent = "poop"
    }
    else {
    const likeCounter = document.createElement("li")
    const 
    document.querySelector("ul").appendChild(likeCounter)
    likeCounter.id = `${myNumbah}`
    }
    likeCounter.textContent = `${myNumbah} has been liked 1 time`
    
}

//pause the counter, disable all buttons except pause and restart, switch label on button from "pause" to "resume"
function handlePause(){
    clearInterval(timerId)
    minusBtn.disabled = true
    plusBtn.disabled = true
    likeBtn.disabled = true
    pauseBtn.textContent = "resume"
    pauseBtn.addEventListener("click" , handleResume)
}

function handleResume() {
    minusBtn.disabled = false
    plusBtn.disabled = false
    likeBtn.disabled = false
    timerId = startTimer()
    pauseBtn.textContent = "pause"
    pauseBtn.removeEventListener("click" , handleResume)
}

//click the "restart" button to restart the counter and re-enable the buttons
function handleRestart(){
    myNumbah = 0
    counter.textContent = myNumbah
}
//leave comments on my gameplay, such as: "Wow, what a fun game this is!"
function createComment(event){
    event.preventDefault()
    const newP = document.createElement("p")
    newP.textContent = event.target.children[0].value
    document.getElementById("list").append(newP)
    myForm.reset()
}