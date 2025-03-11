let hrs = document.querySelector("#hours");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");

setInterval(() => {
    let today = new Date();
    let currentHour = today.getHours();
    let displayHour;

    if (currentHour < 12) {
        displayHour = currentHour;
    } else {
        displayHour = currentHour - 12;
    }
    
    // Optional: if you want to display 12 instead of 0 for midnight/noon
    if (displayHour === 0) {
        displayHour = 12;
    }

    hrs.innerText = (displayHour < 10 ? "0" : "") + displayHour;
    min.innerText = (today.getMinutes() < 10 ? "0" : "") + today.getMinutes();
    sec.innerText = (today.getSeconds() < 10 ? "0" : "") + today.getSeconds();
}, 1000);
