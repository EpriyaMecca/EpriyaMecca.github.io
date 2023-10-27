AOS.init();
new Typed("#typed", {
  strings: ["Software Developer", "Web Development", "Graphic Design", "Freelancer"],
  typeSpeed: 50,
  backDelay: 2500,
  loop: true,
  backSpeed: 50,
  startDelay: 1500,
});

// =========================Scroll Sections Ovtive Link ======
let Sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  Sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
      });
    }
  });
};
