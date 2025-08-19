const featuredGameContent = {
  title: "Play Monster Heroes Of Myths Now",
  description:
    "Enter the realm of ancient power in Monster Heroes Of Myths — a mythic battle arena where gods clash with monsters in legendary combat. No downloads, just raw might and strategy.",
  features: [
    "Fast-paced mythological combat gameplay",
    "Unlock divine powers, ancient beasts, and legendary warriors",
    "Optimized for smooth play on mobile & desktop",
  ],
};

const gameFeatures = [
  {
    title: "Mythic Battles",
    text: "Face waves of monstrous foes and rival heroes drawn from ancient legends and dark realms.",
  },
  {
    title: "Legendary Heroes & Beasts",
    text: "Unlock and upgrade gods, titans, mythical creatures, and cursed champions.",
  },
  {
    title: "Divine Abilities",
    text: "Choose between lightning strikes, healing blessings, infernal roars, and more — each run is unique.",
  },
  {
    title: "Daily Mythic Trials",
    text: "Challenge yourself in rotating myth-based scenarios with global scoreboards and epic loot.",
  },
  {
    title: "Instant Play",
    text: "Summon your hero and dive into battle instantly — no install required.",
  },
];

const howToPlaySteps = [
  {
    step: "1",
    title: "Choose Your Champion",
    text: "Pick a mythological hero or monster, each with unique stats and divine abilities.",
  },
  {
    step: "2",
    title: "Enter the Arena",
    text: "Step into ancient battlegrounds where waves of enemies and rival champions await.",
  },
  {
    step: "3",
    title: "Collect Power & Relics",
    text: "Defeat enemies to gather relics, power orbs, and upgrade tokens to evolve mid-fight.",
  },
  {
    step: "4",
    title: "Survive the Onslaught",
    text: "Adapt and unleash powerful combos as elite enemies and bosses appear.",
  },
  {
    step: "5",
    title: "Ascend the Pantheon",
    text: "Climb the divine leaderboard and prove you're the true mythic warrior.",
  },
];

const dailyRoutine = [
  {
    title: "Morning Trial of Gods",
    text: "Begin with a themed challenge — Olympus vs Underworld, with limited skills and random buffs.",
  },
  {
    title: "Twilight Arena Clash",
    text: "PvP arena opens — fight other players’ heroes in real-time mythic duels.",
  },
  {
    title: "Nightfall of Beasts",
    text: "Face mutated mythic beasts and corrupted titans in high-reward night raids.",
  },
];

const challengeStats = {
  title: "Pantheon Challenge Mode",
  description:
    "Think you're worthy of legend? Enter the Pantheon Challenge — time-based mythic battles with elite modifiers, boss encounters, and divine rankings.",
  stats: [
    { value: "09:26", label: "Longest Arena Run" },
    { value: "#3", label: "Global Hero Rank" },
    { value: "7,845", label: "Battles Fought" },
  ],
};



function renderFeaturedGame() {
  document.getElementById("game-title").textContent = featuredGameContent.title;
  document.getElementById("game-description-text").textContent =
    featuredGameContent.description;

  const featureList = document.getElementById("game-feature-list");
  featuredGameContent.features.forEach((feature) => {
    const li = document.createElement("li");
    li.textContent = feature;
    featureList.appendChild(li);
  });
}

function renderFeatures(features) {
  const container = document.querySelector(".features__grid");
  features.forEach((feature) => {
    const item = document.createElement("li");
    item.className = "feature-card";
    item.innerHTML = `
      <h3 class="subtitle">${feature.title}</h3>
      <p class="feature-card__text">${feature.text}</p>
    `;
    container.appendChild(item);
  });
}

function renderHowToPlay(steps) {
  const container = document.querySelector(".how-to-play__grid");
  steps.forEach((step) => {
    const item = document.createElement("li");
    item.className = "how-step";
    item.innerHTML = `
      <div class="how-step__circle">${step.step}</div>
      <h3 class="subtitle">${step.title}</h3>
      <p class="how-step__text">${step.text}</p>
    `;
    container.appendChild(item);
  });
}

function renderDailyRoutine(routineItems) {
  const container = document.querySelector(".daily-routine__list");
  routineItems.forEach((item) => {
    const block = document.createElement("li");
    block.className = "routine-item";
    block.innerHTML = `
      <h3 class="subtitle">${item.title}</h3>
      <p class="routine-item__text">${item.text}</p>
    `;
    container.appendChild(block);
  });
}

function renderChallengeSection(challengeStats) {
  document.getElementById("challenge-title").textContent = challengeStats.title;
  document.getElementById("challenge-desc").textContent =
    challengeStats.description;

  const statsContainer = document.getElementById("challenge-stats");
  challengeStats.stats.forEach((item) => {
    const stat = document.createElement("div");
    stat.className = "challenge__stat";
    stat.innerHTML = `
      <div class="challenge__value">${item.value}</div>
      <div class="challenge__label">${item.label}</div>
    `;
    statsContainer.appendChild(stat);
  });
}

// INIT BOTH SECTIONS ON PAGE LOAD
document.addEventListener("DOMContentLoaded", () => {
  renderFeaturedGame();
  renderFeatures(gameFeatures);
  renderHowToPlay(howToPlaySteps);
  renderDailyRoutine(dailyRoutine);
  renderChallengeSection(challengeStats);
});
