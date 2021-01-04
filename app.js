
let toggle = document.querySelector('.toggle');
let nav = document.querySelector('.nav');
let navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll(".nav-item");

function displayNav() {
    nav.classList.toggle("navmobile");
    navbar.classList.toggle('styleNav');
}

navLinks.forEach(element => {
    element.addEventListener("click", () => {
        nav.classList.remove("navmobile");
        navbar.classList.remove('styleNav');

    })
});
console.log(navLinks)

toggle.addEventListener('click', displayNav);

feather.replace({ width: '1em', height: '1em' });
