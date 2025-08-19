const newsPosts = [
  {
    image: "./img/article1.jpg",
    date: "2025-03-22",
    comments: 734,
    title: "Elvis Funny Face: Where Every Smile Counts!",
    text: "Dive into the hilarious world where creativity and laughter lead to ultimate funny face glory.",
    fullText: `
Elvis Funny Face redefines kids' gaming with its captivating mechanics and diverse range of creative challenges.<br><br>

Every session is an exhilarating test of imagination and quick decisions — from creating intricate facial expressions to decorating with massive accessories. With dynamic options and ever-changing themes, no two faces feel the same. Players must adapt on the fly, combining artistic flair and humor to conquer every design.<br><br>

Our platform delivers stunning visuals, intuitive controls, and deep, engaging content. Whether you're mastering a new face-making technique or refining an old one, each game feels unique and rewarding.<br><br>

Elvis Funny Face now features weekly face spotlights, top player creations, and in-depth tutorial guides. Because rising through the ranks takes more than raw speed — it takes consistent mastery of hilarious expressions.
    `,
  },
  {
    image: "./img/article2.jpg",
    date: "2025-02-27",
    comments: 689,
    title: "Top Face-Making Strategies Dominating the Leaderboards",
    text: "From hilarious twists to outrageous decorations, the best players are setting new funny face trends in Elvis Funny Face.",
    fullText: `
The pursuit of excellence in Elvis Funny Face is intensifying, and cutting-edge face-making tactics are emerging.<br><br>

Players are devising unique combinations of feature placements, accessory timings, and expression-creating techniques to excel in challenges and climb the championship ladder. Some prefer rapid-fire decoration methods, while others rely on sustained, methodical approaches to craft complex and comical faces.<br><br>

Strategies like “Expressive Overload” or “Minimalist Mayhem” are gaining notoriety across the leaderboards.<br><br>

Check out Elvis Funny Face’s weekly strategy breakdowns, where experts and top players reveal their secrets to consistent improvement and top-tier performance. With new accessories and features incoming, staying ahead in the evolving funny-face-meta is crucial.
    `,
  },
  {
    image: "./img/article3.jpg",
    date: "2025-01-25",
    comments: 705,
    title: "Epic Laugh Moments: Best Faces Captured in Action",
    text: "From breathtakingly funny combos to improbable expressions, Elvis Funny Face is becoming the hub for viral laughter highlights.",
    fullText: `
Remarkable achievements and peak humor moments are flooding social media as players showcase their mastery.<br><br>

Clips of a player executing a perfect combination to create the most absurd face at the last second, or a tactical genius pulling off an impossible expression, are garnering millions of views. The built-in replay and analysis features make it easy to capture highlight-worthy footage.<br><br>

Weekly game contests hosted on Elvis Funny Face offer rewards for categories like “Most Outrageous Face” or “Ultimate Hilarious Combo.”<br><br>

Whether you're streaming your journey to the championship or just sharing a remarkable achievement, Elvis Funny Face is designed for moments that feel truly exceptional.
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
