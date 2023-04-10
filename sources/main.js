// Set the date you want the countdown to end
const countdownDate = new Date("2023-04-10T21:59:59").getTime();

// Update the countdown every second
const countdownInterval = setInterval(function() {
    // Get the current date and time
    const now = new Date().getTime();

    // Find the distance between now and the countdown date
    const distance = countdownDate - now;

    // Calculate the days, hours, minutes, and seconds remaining
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Add leading zeros to days, hours, and minutes when they are less than 10
    const daysString = days < 10 ? "0" + days : days;
    const hoursString = hours < 10 ? "0" + hours : hours;
    const minutesString = minutes < 10 ? "0" + minutes : minutes;
    const secondsString = seconds < 10 ? "0" + seconds : seconds;

    // Output the result in an element with id="countdown"
    const countdownElement = document.getElementById("countdown");
    countdownElement.innerHTML = "<b>" + daysString + ":" + hoursString + ":"
        + minutesString + ":" + secondsString + "</b>";

    // If the countdown is finished, clear the interval and display a message
    if (distance < 0) {
        clearInterval(countdownInterval);
        countdownElement.innerHTML = "გახსენი ყუთი";
    }
}, 1000);
