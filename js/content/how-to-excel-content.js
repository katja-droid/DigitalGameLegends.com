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
  {
    step: "6",
    title: "Refine Your Skills",
    text: "Continuously improve through advanced drills and practice sessions.",
  },
  {
    step: "7",
    title: "Compete Globally",
    text: "Test your abilities against players worldwide on competitive leaderboards.",
  },
  {
    step: "8",
    title: "Unlock New Challenges",
    text: "Access exclusive content and higher difficulty levels as you progress.",
  },
  {
    step: "9",
    title: "Claim Your Legacy",
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

document.addEventListener("DOMContentLoaded", () => {
  renderHowToPlay(howToPlaySteps);
});


