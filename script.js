function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 2 + 3) + "s";
    document.querySelector(".hearts").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 300);

document.addEventListener("DOMContentLoaded", () => {
    const img = document.querySelector(".manda-img");
    img.addEventListener("click", () => {
        img.classList.add("clicked");
        setTimeout(() => img.classList.remove("clicked"), 600);
    });
});
