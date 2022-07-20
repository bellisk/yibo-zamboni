const zamboniTime = new luxon.DateTime.fromObject({
    year: 2022,
    month: 8,
    day: 5,
    hour: 0,
    minute: 0
}, {zone: 'Asia/Shanghai'});

// Run myfunc every second
const myfunc = setInterval(function () {
    const now = new luxon.DateTime.local();
    const timeleft = zamboniTime.diff(now);

    // Calculating the days, hours, minutes and seconds left
    const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    // Result is output to the specific element
    document.getElementById("days").innerHTML = days
    document.getElementById("hours").innerHTML = hours
    document.getElementById("mins").innerHTML = minutes
    document.getElementById("secs").innerHTML = seconds

    // Display the message when countdown is over
    if (timeleft <= 0) {
        clearInterval(myfunc);
        document.getElementById("answer").innerHTML = "YES!"
        document.getElementById("days").innerHTML = ""
        document.getElementById("hours").innerHTML = ""
        document.getElementById("mins").innerHTML = ""
        document.getElementById("secs").innerHTML = ""
    }
}, 1000);
