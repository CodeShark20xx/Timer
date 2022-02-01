let hours = 0;
let minutes = 1;
let seconds = 11;

const timeFormatter = (hours, minutes, seconds) => {
    let formattedTime = '';
    formattedTime = addLeadingZero(hours);
    formattedTime += ":" + addLeadingZero(minutes);
    formattedTime += ":" + addLeadingZero(seconds);
    return formattedTime;
}

const addLeadingZero = (num) => {
    return (num < 10) ? `0${num}` : num.toString();
}

const stopCountDown = (timer) => {
    clearInterval(timer);
}


let timerHandler = (hours, minutes, seconds) => {
    if(hours !== 0 || minutes !== 0 || seconds !== 0){
        console.clear;
        console.log(`Tick: ${hours} ${minutes} ${seconds}`);
        seconds--;
    } else {
        console.log('Time Up!');
        stopCountDown(intervalID);
    }
}

let intervalID = setInterval(() => {
    timerHandler(hours, minutes, seconds)
}, 1000);