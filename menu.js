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
  document.body.classList.toggle("header--menu-open", isOpen);

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

function getContainerWidth() {
  const gutter = window.innerWidth * 0.02;
  return Math.min(2560, window.innerWidth - gutter * 2);
}

function updateHeroImageSize() {
  const container = document.querySelector(".fe-block-image .fluid-image-container");
  const block = document.querySelector(".fe-block-image");
  const heading = document.querySelector(".fe-block-heading");

  if (!container || !block) {
    return;
  }

  if (window.innerWidth < 768) {
    container.style.removeProperty("width");
    container.style.removeProperty("height");
    return;
  }

  const rowMin = getContainerWidth() * 0.0215;
  const headingHeight = heading ? heading.getBoundingClientRect().height : 0;
  const nominalHeadingHeight = 5 * rowMin + 4 * 11;
  const headingBoost = Math.max(0, headingHeight - nominalHeadingHeight);
  const imageSize = Math.round(15 * rowMin + 14 * 11 + headingBoost);
  const blockWidth = block.clientWidth;
  const size = Math.min(imageSize, blockWidth);

  container.style.width = `${size}px`;
  container.style.height = `${size}px`;
}

window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    setMenuOpen(false);
  }

  updateHeroImageSize();
});

window.addEventListener("load", updateHeroImageSize);

if (document.fonts) {
  document.fonts.ready.then(updateHeroImageSize);
} else {
  updateHeroImageSize();
}
