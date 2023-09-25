const start = document.querySelector("#start");
const pause = document.querySelector("#pause");
const reset = document.querySelector("#reset")

const timer = document.querySelector("#timer");

let count = 0;
let timerId = ""

start.addEventListener("click", () => {
    timerId = setInterval(() => {
        console.log(count)
        count++;
        let minutes = Math.floor(count / 60);
        let seconds = count % 60;
        timer.innerText = `${minutes}:${seconds < 10 ? 0 : ""}${seconds}`;
    }, 1000)
    pause.disabled = false;
    timerId;
    pause.addEventListener('click', () => {
        clearInterval(timerId);
        console.log("Paused.")
        pause.disabled = true;
    })
    reset.addEventListener("click", () => {
        console.log("Resetted.")
        count = 0;
        clearInterval(timerId);
        timer.innerText = "0:00"
        pause.disabled = false;
    })
})

