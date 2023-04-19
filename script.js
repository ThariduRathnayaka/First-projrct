// Open the mobile navigation menu
const openNav = () => {
  const navLinks = document.querySelector(".nav-links");
  navLinks.style.display = "flex";
  navLinks.style.top = "0";
};

// Close the mobile navigation menu
const closeNav = () => {
  const navLinks = document.querySelector(".nav-links");
  navLinks.style.display = "none";
  navLinks.style.top = "-100%";
};

// Add event listeners to open and close the mobile navigation menu
const menuIcon = document.querySelector(".fa-bars");
const closeIcon = document.querySelector(".fa-times");
menuIcon.addEventListener("click", openNav);
closeIcon.addEventListener("click", closeNav);

// Smooth scrolling to sections of the page
const links = document.querySelectorAll(".nav-links ul li a");
for (const link of links) {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;
    scroll({
      top: offsetTop,
      behavior: "smooth"
    });
  });
}
