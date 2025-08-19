const newsPosts = [
  {
    image: "./img/article1.jpg",
    date: "2025-03-22",
    comments: 734,
    title: "GameLegendForge: Where Legends Are Forged on Waves",
    text: "Dive into the aquatic arena where sharp minds and lightning reflexes lead to ultimate hydro glory.",
    fullText: `
GameLegendForge redefines jet ski racing with its captivating gameplay and diverse range of skill-based challenges.<br><br>

Every session is an exhilarating test of agility and split-second decisions — from navigating treacherous courses to outmaneuvering fierce rivals. With dynamic challenges and ever-changing water conditions, no two races feel the same. Pilots must adapt on the fly, combining instinct and precision to conquer every wave.<br><br>

Our platform delivers stunning visuals, fluid controls, and deep, engaging content. Whether you're mastering a new technique or refining an old one, each race feels unique and rewarding.<br><br>

GameLegendForge now features weekly race spotlights, top pilot strategies, and in-depth tactical guides. Because rising through the ranks takes more than raw speed — it takes consistent mastery of the waves.
    `,
  },
  {
    image: "./img/article2.jpg",
    date: "2025-02-27",
    comments: 689,
    title: "Top Hydro Tactics Dominating the Leaderboards",
    text: "From precision turns to aggressive boost lines, the best pilots are setting new speed records in GameLegendForge.",
    fullText: `
The pursuit of excellence in GameLegendForge is intensifying, and cutting-edge racing tactics are emerging.<br><br>

Pilots are devising unique combinations of jet ski setups, boost timings, and wave-riding techniques to excel in challenges and climb the championship ladder. Some prefer rapid-burst acceleration methods, while others rely on sustained, methodical approaches to conquer complex tracks.<br><br>

Strategies like “Tidal Dash” or “Apex Drift” are gaining notoriety across the leaderboards.<br><br>

Check out GameLegendForge’s weekly strategy breakdowns, where experts and top racers reveal their secrets to consistent improvement and podium-tier performance. With new tracks and features incoming, staying ahead in the evolving hydro-meta is crucial.
    `,
  },
  {
    image: "./img/article3.jpg",
    date: "2025-01-25",
    comments: 705,
    title: "Epic Hydro Moments: Best Races Captured in Action",
    text: "From breathtaking overtakes to improbable comebacks, GameLegendForge is becoming the hub for viral racing highlights.",
    fullText: `
Remarkable achievements and peak performance moments are flooding social media as pilots showcase their mastery.<br><br>

Clips of a racer executing a perfect hydro-drift to overtake at the last second, or a tactical genius pulling off an impossible comeback, are garnering millions of views. The built-in replay and analysis features make it easy to capture highlight-worthy footage.<br><br>

Weekly race contests hosted on GameLegendForge offer rewards for categories like “Most Daring Maneuver” or “Ultimate Comeback.”<br><br>

Whether you're streaming your journey to the championship or just sharing a remarkable achievement, GameLegendForge is designed for moments that feel truly exceptional.
    `,
  },
];

function estimateReadingTime(textHtml) {
  const plainText = textHtml
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const words = plainText ? plainText.split(" ").length : 0;
  const minutes = Math.max(1, Math.round(words / 200));
  return minutes;
}

const newsList = document.getElementById("news-list");

newsPosts.forEach((post, index) => {
  const li = document.createElement("li");
  li.classList.add("news-box");

  const readingMinutes = estimateReadingTime(post.fullText || post.text || "");

  li.innerHTML = `
    <ul class="news-meta" aria-label="Post metadata">
      <li class="meta-item">
        <span class="meta-icon">📆</span>
        <span class="meta-label">Date</span>
        <span class="meta-value">${new Date(post.date).toDateString()}</span>
      </li>
      
      <li class="meta-item">
        <span class="meta-icon">⏱️</span>
        <span class="meta-label">Read</span>
        <span class="meta-value">${readingMinutes} min</span>
      </li>
    </ul>
    <div class="news-img">
      <img src="${post.image}" alt="${post.title}" />
    </div>
    <div class="news-content">
      <h3 class="news-title">${post.title}</h3>
      <p class="news-text short-text">${post.text}</p>
      <p class="news-text full-text" style="display: none;">${post.fullText}</p>
      <button class="read-more-btn" data-index="${index}">Read more</button>
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
