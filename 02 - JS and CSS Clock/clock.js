const hourHand = document.querySelector(".hour-hand");
const minutesHand = document.querySelector(".min-hand");
const secondsHand = document.querySelector(".second-hand");

function startClock() {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let hoursPosition = hours * 360/12 + ((minutes * 360/60)/12) ;
    let minutesPosition = (minutes * 360/60) + (seconds * 360/60)/60;
    let secondsPosition = seconds * 360/60;

    hourHand.style.transform = "rotate(" + hoursPosition + "deg)";
    minutesHand.style.transform = "rotate(" + minutesPosition + "deg)";
    secondsHand.style.transform = "rotate(" + secondsPosition + "deg)";
}

setInterval(startClock, 1000);