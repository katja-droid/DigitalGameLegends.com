const newsPosts = [
  {
    image: "./img/article1.jpg",
    date: "2025-03-22",
    comments: 734,
    title: "Domain.com: Where Strategic Minds Prevail",
    text: "Enter the realm of strategy where sharp minds and tactical brilliance lead to victory.",
    fullText: `
Domain.com redefines strategic challenges with its engaging gameplay and diverse set of skill-based activities.<br><br>

Every session is a test of intellect and quick thinking — from complex puzzles to rapid-fire decision-making. With dynamic challenges and evolving scenarios, no two experiences feel the same. Players must adapt on the fly, combining insight and practice to overcome obstacles.<br><br>

Our platform offers stunning visuals, fluid interactions, and deep, engaging content. Whether you're mastering a new skill or refining an old one, each challenge feels unique and rewarding.<br><br>

Domain.com now features weekly skill spotlights, top player strategies, and in-depth tactical guides. Because rising through the ranks takes more than intuition — it takes consistent mastery.
    `,
  },
  {
    image: "./img/article2.jpg",
    date: "2025-02-27",
    comments: 689,
    title: "Top Strategies Dominating the Leaderboards",
    text: "From precision plays to adaptable build-outs, the best performers are setting new standards at Domain.com.",
    fullText: `
The pursuit of excellence at Domain.com is intensifying, and cutting-edge strategies are emerging.<br><br>

Players are devising unique combinations of approaches, tools, and skill sets to excel in challenges and climb the mastery ladder. Some prefer rapid-execution methods, while others rely on sustained, methodical approaches to conquer complex tasks.<br><br>

Strategies like “Adaptive Flow” or “Precision Strike” are gaining notoriety across the leaderboards.<br><br>

Check out Domain.com’s weekly strategy breakdowns, where experts and analysts reveal their secrets to consistent improvement and top-tier performance. With new challenges and features incoming, staying ahead in the evolving skill-meta is crucial.
    `,
  },
  {
    image: "./img/article3.jpg",
    date: "2025-01-25",
    comments: 705,
    title: "Epic Moments: Best Plays Captured in Action",
    text: "From brilliant breakthroughs to stunning comebacks, Domain.com is becoming a hub for viral skill demonstrations.",
    fullText: `
Remarkable achievements and peak performance moments are flooding social media as players showcase their mastery.<br><br>

Clips of a player solving a complex puzzle in record time, or a tactical genius pulling off a flawless comeback, are garnering millions of views. The built-in replay and analysis features make it easy to capture highlight-worthy footage.<br><br>

Weekly challenge contests hosted on Domain.com offer rewards for categories like “Most Ingenious Solution” or “Ultimate Comeback.”<br><br>

Whether you're streaming your journey to mastery or just sharing a remarkable achievement, Domain.com is designed for moments that feel truly exceptional.
    `,
  },
];

const newsList = document.getElementById("news-list");

newsPosts.forEach((post, index) => {
  const li = document.createElement("li");
  li.classList.add("news-box");

  li.innerHTML = `
  <div class="news-meta">
      <span>📆 ${new Date(post.date).toDateString()}</span>

    </div>
    
    <div class="news-section">
    <div class="news-img">
      <img src="${post.image}" alt="${post.title}" />
    </div>
    <div>
    <h3 class="news-title">${post.title}</h3>
    <p class="news-text short-text">${post.text}</p>
    <p class="news-text full-text" style="display: none;">${post.fullText}</p>
    <button class="read-more-btn" data-index="${index}">Read more</button>
        </div>
    </div>
  `;

  newsList.appendChild(li);
});

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("read-more-btn")) {
    const btn = e.target;
    const card = btn.closest(".news-box");
    const shortText = card.querySelector(".short-text");
    const fullText = card.querySelector(".full-text");

    const isOpen = fullText.style.display === "block";

    fullText.style.display = isOpen ? "none" : "block";
    shortText.style.display = isOpen ? "block" : "none";
    btn.textContent = isOpen ? "Read more" : "Show less";
  }
});
