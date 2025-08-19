const featuredGameContent = {
  title: "Elvis Funny Face: Unleash Your Creative Side!",
  description:
    "Step into the whimsical world of Elvis Funny Face, where laughter is the best game! Get ready to twist, stretch, and decorate Elvis's face to create the funniest expressions. With intuitive controls and endless possibilities, you'll be designing hilarious masterpieces in no time. Share your creations and challenge your friends to make even funnier faces!",
  features: [
    "Intuitive drag-and-drop controls",
    "Wide variety of accessories and features",
    "Endless combinations for unique faces",
    "Fun and engaging for all ages",
    "Share your funniest creations with friends",
  ],
};

// Removed as content moved to advantages.html
/*
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
*/

const dailyRoutine = [
  {
    title: "Morning Face-Offs",
    text: "Start your day by creating hilarious new expressions for Elvis, stretching your imagination to its limits.",
  },
  {
    title: "Afternoon Creativity Boost",
    text: "Dive into more intricate designs and discover new combinations for endless laughter as the day unfolds.",
  },
  {
    title: "Evening Funny Face Challenges",
    text: "Compete with friends or family to see who can make the funniest Elvis face before bedtime.",
  },
];

const challengeStats = {
  title: "The Ultimate Funny Face Challenge",
  description:
    "Think you're the master of funny faces? Test your creativity in Elvis Funny Face, where every twist and stretch brings new laughter! Share your most hilarious creations with the world and see if you can inspire the most smiles.",
  stats: [
    { value: "1,000,000+", label: "Faces Created" },
    { value: "#1", label: "Most Laughed At" },
    { value: "500+", label: "Accessories Unlocked" },
  ],
};



function renderFeaturedGame() {
  document.getElementById("game-title").textContent = featuredGameContent.title;
  document.getElementById("game-description-text").textContent =
    featuredGameContent.description;

  const featureList = document.getElementById("game-feature-list");
  featureList.innerHTML = ''; // Clear existing content
  featuredGameContent.features.forEach((feature) => {
    const li = document.createElement("li");
    li.textContent = feature;
    featureList.appendChild(li);
  });
}

// Removed renderFeatures function as content moved to advantages.html
/*
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
*/

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
    title: "Choose Your Elvis",
    text: "Select from a variety of Elvis templates to start your funny face creation.",
  },
  {
    step: "2",
    title: "Drag & Drop Features",
    text: "Pick hilarious eyes, noses, mouths, and accessories from the menu and drag them onto Elvis's face.",
  },
  {
    step: "3",
    title: "Resize & Rotate",
    text: "Adjust the size and angle of each feature to create the perfect comedic effect.",
  },
  {
    step: "4",
    title: "Add Props & Hair",
    text: "Accessorize with wacky hats, glasses, mustaches, and outrageous hairstyles to complete your look.",
  },
  {
    step: "5",
    title: "Save & Share",
    text: "Once your masterpiece is complete, save it to your gallery and share it with friends for a good laugh!",
  },
  {
    step: "6",
    title: "Challenge Friends",
    text: "Send your funniest creations to friends and challenge them to make an even more hilarious Elvis face!",
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
  // renderFeatures(gameFeatures); // Removed as content moved to advantages.html
  renderDailyRoutine(dailyRoutine);
  renderChallengeSection(challengeStats);
  renderHowToPlay(howToPlaySteps);
});
