// =========================
// NAVBAR SCROLL EFFECT
// =========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.style.borderColor = "rgba(0,255,255,0.35)";
    } else {
        navbar.style.borderColor = "rgba(0,255,255,0.18)";
    }

});


// =========================
// CARD MOUSE EFFECT
// =========================

const cards = document.querySelectorAll(".template-card");

cards.forEach(card => {

    card.addEventListener("mousemove", (event) => {

        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);

    });

});


// =========================
// BUTTON EFFECT
// =========================

const buttons = document.querySelectorAll(".neon-btn, .outline-btn, .nav-btn");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        button.style.transform = "scale(0.97)";

        setTimeout(() => {
            button.style.transform = "";
        }, 120);

    });

});