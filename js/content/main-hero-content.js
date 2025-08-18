const heroContent = {
  badge: "Domain.com - Skill Mastery",
  title: "Elevate Your Strategy. Dominate Every Challenge.",
  subtitle: "Insight. Practice. Victory. Your Path to Excellence.",
  description:
    "Welcome to Domain.com — your premier platform for refining strategic skills and overcoming complex challenges. Select your training, hone your tactics, and rise through the ranks. Are you ready to achieve true mastery?",
};

function renderHeroSection() {
  const hero = document.getElementById("hero-section");

  document.getElementById("hero-title").textContent = heroContent.title;
  document.getElementById("hero-subtitle").textContent = heroContent.subtitle;
  document.getElementById("hero-desc").textContent = heroContent.description;
}

document.addEventListener("DOMContentLoaded", renderHeroSection);
