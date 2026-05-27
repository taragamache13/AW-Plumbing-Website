console.log("SCRIPT LOADED");

const startTime = Date.now();

const form = document.querySelector(".contact-form");


window.formStartTime = Date.now();

if (form) {
    form.addEventListener("submit", async (e) => {

        e.preventDefault();

        console.log("Form submitted");

        const formData = new FormData(form);

        //Honeypot
        formData.append("company", "");

        //Timing Check
        formData.append("startTime", window.formStartTime);

        try {
            await fetch(
                "https://script.google.com/macros/s/AKfycbwN_9ubZ9QNNyVx28cyJaVmHGnHrL76yxysOr-yFTvvske1I2UUADA_8xU25opVQkpOPA/exec",
                {
                    method: "POST",
                    body: formData,
                    mode: "no-cors"
                }
            );

            alert("Message sent successfully!");

            form.reset();

            window.formStartTime = Date.now();

        } catch (error) {

            alert("Something went wrong.");

            console.error(error);
        }
    });
}

const faders = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});
faders.forEach(el => observer.observe(el));

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});
document.addEventListener("DOMContentLoded", () => {
    window.addEventListener("scroll", () => {
        const nav = document.querySelector("nav");

        if (nav) {
            nav.classList.toggle("scrolled", window.scrollY > 50);
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const reviews = document.querySelectorAll(".review");

    if (reviews.length === 0) return;

    let index = 0;

    setInterval(() => {
        reviews[index].classList.remove("active");

        index = (index + 1) % reviews.length;

        reviews[index].classList.add("active");
    }, 4500);
});

const reviewsContainer = document.querySelector(".reviews");
const reviews = document.querySelectorAll(".review");

function setHeight() {
    let maxHeight = 0;

    reviews.forEach(r => {
        r.style.position = "relative";
        r.style.opacity = "1";
        r.style.visibility = "hidden";

        maxHeight = Math.max(maxHeight, r.offsetHeight);
    });

    reviews.forEach(r => {
        r.style.position = "absolute";
        r.style.opacity = "";
        r.style.visibility = "";
    });

    reviewsContainer.style.height = maxHeight + "px";
}

window.addEventListener("load", setHeight);
window.addEventListener("resize", setHeight);

