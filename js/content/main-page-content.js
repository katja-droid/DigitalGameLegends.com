const featuredGameContent = {
  title: "Game Legend Forge: Aqua Adrenaline",
  description:
    "Dive into the thrilling world of GameLegendForge, a meme-fueled jet ski racer! Navigate wild waters, hit every checkpoint, and dodge chaotic obstacles in a quest for hydro supremacy. Experience over-the-top visuals and sounds as you master the waves, deploy turbo boosts, and become the ultimate champion of the liquid tracks.",
  features: [
    "High-speed jet ski action",
    "Unforgettable meme characters",
    "Dynamic water environments with hazards",
    "Strategic turbo boost deployment",
    "Race to claim the top trophy",
  ],
};

const gameFeatures = [
  {
    title: "Wave-Riding Showdowns",
    text: "Engage in intense jet ski duels against challenging AI and real players.",
  },
  {
    title: "Hydro Maneuver Mastery",
    text: "Hone your skills and perfect your turns to dominate the aquatic courses.",
  },
  {
    title: "Customizable Rides",
    text: "Personalize your jet ski with unique skins and performance upgrades.",
  },
  {
    title: "Daily Challenge Cascades",
    text: "Compete in fresh daily races, climb global leaderboards, and unlock exclusive rewards.",
  },
  {
    title: "Instant Splash Access",
    text: "Jump straight into the action – no downloads, just pure racing fun.",
  },
  {
    title: "Performance Insights",
    text: "Analyze your race data with detailed metrics to improve your hydro tactics.",
  },
  {
    title: "Community Currents",
    text: "Connect with fellow racers, share winning strategies, and participate in lively events.",
  },
  {
    title: "Frequent Content Surges",
    text: "Enjoy new tracks, jet skis, and features added regularly.",
  },
  {
    title: "Dedicated Support Crew",
    text: "Get prompt assistance from our team for any queries or issues.",
  },
];

const dailyRoutine = [
  {
    title: "Morning Tidal Drills",
    text: "Start your day with focused challenges – test your precision and speed in various water conditions.",
  },
  {
    title: "Afternoon Apex Competitions",
    text: "Enter the competitive arena to test your racing strategies against other players in real-time battles.",
  },
  {
    title: "Evening Turbo Tournaments",
    text: "Confront advanced challenges and elite opponents in high-stakes evening sessions for ultimate rewards.",
  },
];

const challengeStats = {
  title: "Hydro Gauntlet Mode",
  description:
    "Ready to prove your hydro supremacy? Enter Hydro Gauntlet Mode – timed, high-speed races with extreme weather conditions, boss encounters, and global rankings that push your skills to the limit.",
  stats: [
    { value: "15:00", label: "Longest Ride" },
    { value: "#1", label: "Global Racer Rank" },
    { value: "10,000+", label: "Races Completed" },
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

const howToPlaySteps = [
  {
    step: "1",
    title: "Select Your Craft",
    text: "Choose your jet ski, each with unique handling and speed attributes.",
  },
  {
    step: "2",
    title: "Hit the Water",
    text: "Launch into diverse aquatic environments where thrilling races and rivals await.",
  },
  {
    step: "3",
    title: "Grab Boosts & Power-ups",
    text: "Collect special items to gain temporary advantages and turn the tide of the race.",
  },
  {
    step: "4",
    title: "Master the Course",
    text: "Adapt to unpredictable waves and unleash powerful maneuvers to overcome obstacles.",
  },
  {
    step: "5",
    title: "Achieve Victory",
    text: "Cross the finish line first, climb the ranks, and prove your jet ski prowess.",
  },
  {
    step: "6",
    title: "Refine Your Technique",
    text: "Continuously improve your racing lines and boost timing through practice runs.",
  },
  {
    step: "7",
    title: "Compete Worldwide",
    text: "Challenge players globally and dominate the competitive leaderboards.",
  },
  {
    step: "8",
    title: "Unlock New Tracks",
    text: "Gain access to exclusive courses and higher difficulty races as you progress.",
  },
  {
    step: "9",
    title: "Forge Your Legend",
    text: "Cement your name in the hall of champions with consistent top performance.",
  },
];

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

// INIT BOTH SECTIONS ON PAGE LOAD
document.addEventListener("DOMContentLoaded", () => {
  renderFeaturedGame();
  renderFeatures(gameFeatures);
  renderDailyRoutine(dailyRoutine);
  renderChallengeSection(challengeStats);
  renderHowToPlay(howToPlaySteps);
});
