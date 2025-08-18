const cookiePolicyContent = {
  title: "Cookie Usage Policy",
  sections: [
    {
      heading: "Introduction to Our Cookie Practices",
      paragraphs: [
        `This Cookie Usage Policy details how we, at <strong>Domain.com</strong>, utilize cookies and similar technologies to optimize your experience on our website (referred to as the “Site”). It clarifies what cookies are, why they are employed, and your options for managing their use.`,
      ],
    },
    {
      heading: "Understanding Cookies",
      paragraphs: [
        `Cookies are minor text files saved on your device when you browse a website. They are typically used to ensure efficient website operation, enhance user navigation, and gather data for analytics.`,
      ],
    },
    {
      heading: "Our Cookie Categories",
      paragraphs: [
        `<strong>Essential Cookies:</strong> These are crucial for the primary functions of the website, enabling features like page navigation and secure access.`,
        `<strong>Performance Cookies:</strong> These help us collect anonymous data on how visitors interact with our website, allowing us to enhance its performance.`,
        `<strong>Functionality Cookies:</strong> These recall your preferences, such as language or regional settings, to deliver a more tailored experience.`,
        `<strong>Targeting Cookies:</strong> Used to provide advertisements that are more relevant to your interests, manage ad frequency, and assess the effectiveness of our advertising campaigns.`,
      ],
    },
    {
      heading: "Why We Use Cookies",
      paragraphs: [
        `Our use of cookies is to:`,

        `• Ensure seamless website functionality<br>
         • Analyze user behavior to continuously improve our services<br>
         • Deliver personalized content and advertising<br>
         • Retain your personalized settings and preferences`,
      ],
    },
    {
      heading: "Your Cookie Management Options",
      paragraphs: [
        `You have the ability to accept or refuse cookies via your web browser settings. Please be aware that opting out of cookies may affect the availability and performance of certain features on our Site.`,
      ],
    },
    {
      heading: "How to Manage Your Cookies",
      paragraphs: [
        `Most web browsers offer tools for managing your cookie preferences. Here are links to popular browser guides:`,

        `• Google Chrome<br>
         • Mozilla Firefox<br>
         • Microsoft Edge<br>
         • Apple Safari`,
      ],
    },
    {
      heading: "Policy Updates",
      paragraphs: [
        `This Cookie Usage Policy may be updated periodically to reflect changes in our operational practices or legal requirements. We recommend reviewing it regularly to stay informed.`,
      ],
    },
    {
      heading: "Contacting Us",
      paragraphs: [
        `For any questions or concerns regarding this Cookie Usage Policy, please do not hesitate to contact us.`,
      ],
    },
  ],
};

function renderCookiePolicy() {
  const container = document.getElementById("cookie-policy-container");

  const titleEl = document.createElement("h2");
  titleEl.classList.add("title");
  titleEl.textContent = cookiePolicyContent.title;
  container.appendChild(titleEl);

  cookiePolicyContent.sections.forEach((section) => {
    const block = document.createElement("div");
    block.classList.add("cookie-policy-block");

    const heading = document.createElement("h3");
    heading.textContent = section.heading;
    block.appendChild(heading);

    section.paragraphs.forEach((text) => {
      const p = document.createElement("p");
      p.innerHTML = text;
      block.appendChild(p);
    });

    container.appendChild(block);
  });
}

document.addEventListener("DOMContentLoaded", renderCookiePolicy);
