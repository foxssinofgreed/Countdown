const maxHearts = 100; // Maximum number of hearts to display
const hearts = []; // Array to store heart elements

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 98 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    heart.style.setProperty('--rx', Math.random());
    hearts.push(heart);
    document.body.appendChild(heart);
}

function updateHearts() {
    for (let i = 0; i < hearts.length; i++) {
        const heart = hearts[i];
        const bottom = heart.offsetTop + heart.clientHeight;
        if (bottom >= window.innerHeight - 100) {
            heart.classList.add("heart-pileup");
            if (bottom >= window.innerHeight) {
                heart.remove();
                hearts.splice(i, 1);
                i--;
                continue;
            }
        }
        heart.style.setProperty('--ry', bottom / window.innerHeight);
    }
    if (hearts.length > maxHearts) {
        hearts[0].remove();
        hearts.splice(0, 1);
    }
}

setInterval(createHeart, 500); // Create a new heart every second
setInterval(updateHearts, 1000); // Update the hearts every 100 milliseconds
