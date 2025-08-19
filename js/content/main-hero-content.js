const heroContent = {
  badge: "Elvis Funny Face - Unleash Your Inner Comedian!",
  title: "Laugh Out Loud. Get Creative. Design the Funniest Elvis Faces.",
  subtitle: "Twist. Stretch. Decorate. Your Imagination is the Limit.",
  description:
    "Welcome to Elvis Funny Face – the ultimate online game for kids who love to laugh and get creative! Dive into a world of endless fun where you can transform Elvis into the most hilarious characters. Are you ready to unleash your inner comedian and make everyone smile?",
};

function renderHeroSection() {
  const hero = document.getElementById("hero-section");

  document.getElementById("hero-title").textContent = heroContent.title;
  document.getElementById("hero-subtitle").textContent = heroContent.subtitle;
  document.getElementById("hero-desc").textContent = heroContent.description;
}

document.addEventListener("DOMContentLoaded", renderHeroSection);
