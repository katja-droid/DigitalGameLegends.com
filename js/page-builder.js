const setActiveLink = () => {
  const currentPath = window.location.pathname.split("/").pop() || "";
  const navLinks = document.querySelectorAll(".mobileMenuLink");

  navLinks.forEach((link) => {
    const linkPath = link.getAttribute("href").replace("./", "");
    if (linkPath === currentPath || (linkPath === "" && currentPath === "index.html")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
};

const loadHTML = (url, selector, callback) => {
  fetch(url)
    .then((response) => response.text())
    .then((html) => {
      document.querySelector(selector).innerHTML = html;
      if (callback) callback();
    });
};

loadHTML("header.html", ".header", () => {
  const mobileMenu = document.getElementById("mobileMenu");
  const menuToggle = document.querySelector(".menuToggle");

  if (!mobileMenu || !menuToggle) return;

  menuToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    mobileMenu.classList.toggle("open");
    document.body.classList.toggle("no-scroll");
    document.querySelector(".backdrop").classList.toggle("active");
  });

  mobileMenu.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      mobileMenu.classList.remove("open");
      document.body.classList.remove("no-scroll");
      document.querySelector(".backdrop").classList.remove("active");
    }
  });

  document.addEventListener("click", (e) => {
    if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
      mobileMenu.classList.remove("open");
      document.body.classList.remove("no-scroll");
      document.querySelector(".backdrop").classList.remove("active");
    }
  });

  setActiveLink();
});

loadHTML("footer.html", ".footer");

// Custom Fullscreen for iframe
const fullscreenButton = document.querySelector(".fullscreen-button");
const gameIframe = document.querySelector(".game-embed iframe");
const customFullscreenOverlay = document.getElementById("custom-fullscreen-overlay");
const exitCustomFullscreenButton = document.getElementById("exit-custom-fullscreen");
const customFullscreenContent = document.querySelector(".custom-fullscreen-content");
const originalGameEmbed = document.querySelector(".game-embed");
const mobilePlayButton = document.querySelector(".play-game-button");

const openFullscreenGame = () => {
  customFullscreenOverlay.classList.add("active");
  // Temporarily append the iframe to the fullscreen container
  // The iframe will be moved back when exiting fullscreen
  customFullscreenContent.appendChild(gameIframe);
};

const closeFullscreenGame = () => {
  customFullscreenOverlay.classList.remove("active");
  // Move the iframe back to its original parent
  originalGameEmbed.appendChild(gameIframe);
};

if (fullscreenButton && gameIframe && customFullscreenOverlay && exitCustomFullscreenButton && customFullscreenContent && originalGameEmbed) {
  fullscreenButton.addEventListener("click", openFullscreenGame);
  exitCustomFullscreenButton.addEventListener("click", closeFullscreenGame);
}

// Handle mobile play button
if (mobilePlayButton && gameIframe && customFullscreenOverlay && exitCustomFullscreenButton && customFullscreenContent && originalGameEmbed) {
  mobilePlayButton.addEventListener("click", openFullscreenGame);
}
