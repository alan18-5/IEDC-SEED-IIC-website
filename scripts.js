document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('show');
});



const updateCountdown = () => {
    const now = new Date();
    let target = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 30, 0);

    // If the current time is past 12:30 PM, set target to 12:30 PM the next day
    if (now > target) {
        target.setDate(target.getDate() + 1);
    }

    const diff = target - now;
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('countdown-timer').innerText =
        `${hours}h ${minutes}m ${seconds}s`;

    if (diff < 0) {
        clearInterval(countdownInterval);
        document.getElementById('countdown-timer').innerText = "Time is up!";
    }
};

const countdownInterval = setInterval(updateCountdown, 1000);

window.onload = () => {
    fetchQuote();
    updateCountdown();
};
;
