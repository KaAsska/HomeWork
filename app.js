document.getElementById("hideButton").addEventListener("click", () => {
    document.getElementById("text").style.display = "none";
});

let button = document.getElementById("button");
button.addEventListener("click", () => alert("1"));
button.removeEventListener("click", () => alert("1"));
button.onclick = () => alert(2);

document.querySelectorAll(".message").forEach(message => {
    const closeButton = document.createElement("button");
    closeButton.textContent = "×";
    closeButton.className = "close-button";
    closeButton.onclick = () => message.remove();
    message.appendChild(closeButton);
});

const track = document.querySelector(".carousel-track");
const items = document.querySelectorAll(".carousel-item");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let currentIndex = 0;

function updateCarousel() {
    const offset = -currentIndex * 300;
    track.style.transform = `translateX(${offset}px)`;
}

prev.onclick = () => {
    if (currentIndex > 0) currentIndex--;
    updateCarousel();
};

next.onclick = () => {
    if (currentIndex < items.length - 1) currentIndex++;
    updateCarousel();
};

document.getElementById("menuButton").addEventListener("click", () => {
    const menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "none" ? "block" : "none";
});
