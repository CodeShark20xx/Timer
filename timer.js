
const addLeadingZero = (num) => {
    return (num < 10) ? `0${num}` : num.toString();
}

const stopCountDown = (timerID) => {
    clearInterval(timerID);
}

const displayTimeUnit = (timeUnit, value) => {
    document.getElementById('display' + timeUnit).innerText = addLeadingZero(value);
}

const renderTime = (hours, minutes, seconds) => {
    displayTimeUnit('Hours', hours);
    displayTimeUnit('Minutes', minutes);
    displayTimeUnit('Seconds', seconds);
}

const resetTo59 = (num) => {
    return num >= 0 ? num : 59;
}

const timerHandler = () => {
    let hours = Number.parseInt(document.getElementById('displayHours').innerText);
    let minutes = Number.parseInt(document.getElementById('displayMinutes').innerText);
    let seconds = Number.parseInt(document.getElementById('displaySeconds').innerText);

    if(hours !== 0 || minutes !== 0 || seconds !== 0){
        seconds = resetTo59(seconds - 1);
        console.log('Tick...');
    }
    if((hours !== 0 || minutes !== 0) && seconds === 59){
        minutes = resetTo59(minutes - 1);
    }
    if((hours !== 0 && minutes === 59) && seconds === 59){
        hours = resetTo59(hours - 1);
    }

    renderTime(hours, minutes, seconds);

    if(hours === 0 && minutes === 0 && seconds === 0){
        stopCountDown(intervalID);
    }
}

let intervalID = setInterval(() => {
    timerHandler();
}, 1000);