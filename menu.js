const menu = document.getElementById("header-menu");
const burgers = document.querySelectorAll(".header-burger-btn");
const openLabel = document.querySelector(".js-header-burger-open-title");
const closeLabel = document.querySelector(".js-header-burger-close-title");

function setMenuOpen(isOpen) {
  burgers.forEach((burger) => {
    burger.classList.toggle("is-active", isOpen);
    burger.setAttribute("aria-expanded", String(isOpen));
  });

  menu.classList.toggle("is-open", isOpen);
  menu.setAttribute("aria-hidden", String(!isOpen));
  document.body.classList.toggle("menu-open", isOpen);

  if (openLabel && closeLabel) {
    openLabel.hidden = isOpen;
    closeLabel.hidden = !isOpen;
  }
}

burgers.forEach((burger) => {
  burger.addEventListener("click", () => {
    setMenuOpen(!menu.classList.contains("is-open"));
  });
});

menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenuOpen(false));
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    setMenuOpen(false);
  }
});
