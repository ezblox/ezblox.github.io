const textArray = ["Best website", "For free lol", "Sub to olix"];
let textIndex = 0;

function changeText() {
    document.getElementById("changing-text").textContent = textArray[textIndex];
    textIndex = (textIndex + 1) % textArray.length;
}

// Change text every 15 seconds
setInterval(changeText, 15000);
changeText(); // Initialize the text immediately

// Optional: Button click animation
document.getElementById("animated-button").addEventListener("click", function () {
    this.style.backgroundColor = "#2980b9";
    setTimeout(() => {
        this.style.backgroundColor = "#3498db";
    }, 300);
});
