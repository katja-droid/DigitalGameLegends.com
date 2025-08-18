const featuredGameContent = {
  title: "Explore the Summit of Skill: Domain.com",
  description:
    "Step into the arena of champions at Domain.com – your ultimate destination for mastering strategic challenges. No downloads needed, just pure skill and thrilling competition.",
  features: [
    "Engage in rapid-fire tactical gameplay",
    "Discover unique strategies and unlock new abilities",
    "Seamlessly optimized for all devices, from mobile to desktop",
  ],
};

const gameFeatures = [
  {
    title: "Strategic Showdowns",
    text: "Confront a variety of formidable opponents and develop winning tactics.",
  },
  {
    title: "Elite Skill Development",
    text: "Enhance your abilities and refine your approach with every challenge.",
  },
  {
    title: "Adaptable Playstyles",
    text: "Choose from diverse approaches and customize your experience – every session is unique.",
  },
  {
    title: "Daily Tactical Trials",
    text: "Participate in daily challenges, compete on global leaderboards, and earn exclusive rewards.",
  },
  {
    title: "Instant Access",
    text: "Jump directly into the action – no installation required.",
  },
];

const howToPlaySteps = [
  {
    step: "1",
    title: "Select Your Strategy",
    text: "Choose your approach, each offering distinct advantages and challenges.",
  },
  {
    step: "2",
    title: "Enter the Challenge",
    text: "Dive into diverse environments where strategic battles and rivals await.",
  },
  {
    step: "3",
    title: "Acquire Power-Ups & Boosts",
    text: "Overcome obstacles to collect enhancements and tokens, evolving your strategy mid-game.",
  },
  {
    step: "4",
    title: "Master the Gauntlet",
    text: "Adapt and unleash powerful combinations as new challenges emerge.",
  },
  {
    step: "5",
    title: "Achieve Mastery",
    text: "Climb the ranks and prove your strategic prowess.",
  },
];

const dailyRoutine = [
  {
    title: "Morning Skill Drills",
    text: "Start with a focused challenge – test your precision and speed with specific modifiers.",
  },
  {
    title: "Afternoon Competitive Engagements",
    text: "The competitive arena opens – test your strategies against other players in real-time.",
  },
  {
    title: "Evening High-Stakes Raids",
    text: "Confront advanced challenges and elite opponents in high-reward evening sessions.",
  },
];

const challengeStats = {
  title: "Apex Challenger Mode",
  description:
    "Ready to claim your place among the elite? Enter Apex Challenger Mode – timed strategic battles with advanced modifiers, boss encounters, and global rankings.",
  stats: [
    { value: "12:00", label: "Longest Session" },
    { value: "#1", label: "Global Skill Rank" },
    { value: "9,999", label: "Challenges Completed" },
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
