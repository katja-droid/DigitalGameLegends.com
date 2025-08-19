const heroContent = {
  badge: "GameLegendForge - Adrenaline Rush",
  title: "Ride the Waves. Conquer the Chaos. Become the Champion.",
  subtitle: "Master the Tides. Unleash Your Speed. Claim Victory.",
  description:
    "Welcome to GameLegendForge – where raw power meets strategic precision! Choose your custom jet ski, brave treacherous waters, and outmaneuver rivals in a relentless race for glory. Are you ready to feel the spray and seize the championship?",
};

function renderHeroSection() {
  const hero = document.getElementById("hero-section");

  document.getElementById("hero-title").textContent = heroContent.title;
  document.getElementById("hero-subtitle").textContent = heroContent.subtitle;
  document.getElementById("hero-desc").textContent = heroContent.description;
}

document.addEventListener("DOMContentLoaded", renderHeroSection);
