// =========================
// Sunesh Shah Uikey Website
// script.js
// =========================

// Welcome Message
window.addEventListener("load", function () {
    console.log("Welcome to Sunesh Shah Uikey Official Website");
});

// Fade Animation
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
});

cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.8s ease";
    observer.observe(card);
});

// Back To Top Button
const btn = document.createElement("button");

btn.innerHTML = "⬆";

btn.style.position = "fixed";
btn.style.bottom = "20px";
btn.style.right = "20px";
btn.style.width = "50px";
btn.style.height = "50px";
btn.style.border = "none";
btn.style.borderRadius = "50%";
btn.style.background = "#198754";
btn.style.color = "#fff";
btn.style.fontSize = "22px";
btn.style.cursor = "pointer";
btn.style.display = "none";
btn.style.boxShadow = "0 5px 15px rgba(0,0,0,.3)";

document.body.appendChild(btn);

window.addEventListener("scroll", () => {
    if(window.scrollY > 300){
        btn.style.display = "block";
    }else{
        btn.style.display = "none";
    }
});

btn.addEventListener("click", () => {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});

// Gallery Effect
const images = document.querySelectorAll(".gallery img");

images.forEach(img=>{
    img.addEventListener("click",()=>{
        window.open(img.src,"_blank");
    });
});
