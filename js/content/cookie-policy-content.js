const cookiePolicyContent = {
  title: "GameLegendForge Data Privacy: Cookie Guidelines",
  sections: [
    {
      heading: "Introducing Our Digital Footprint Tracking",
      paragraphs: [
        `This Data Privacy Policy clarifies how we, GameLegendForge, utilize cookies and similar technologies to enhance your journey on our platform (referred to as the “Site”). It outlines what these digital trackers are, their purpose, and your control over their use.`,
      ],
    },
    {
      heading: "Demystifying Cookies",
      paragraphs: [
        `Cookies are tiny data packets stored on your device as you navigate a website. Their primary role is to ensure smooth site operations, improve user experience, and gather anonymous analytical data.`,
      ],
    },
    {
      heading: "Our Cookie Categories",
      paragraphs: [
        `<strong>Core Functionality Cookies:</strong> Essential for basic website operations, enabling features like seamless page transitions and secure account access.`,
        `<strong>Performance Analysis Cookies:</strong> These help us collect anonymous data on how visitors interact with our website, empowering us to continuously optimize its performance.`,
        `<strong>Personalization Cookies:</strong> These remember your preferences, such as language or regional settings, to deliver a more customized and immersive experience.`,
        `<strong>Tailored Advertising Cookies:</strong> Utilized to present advertisements that are more relevant to your interests, manage ad frequency, and measure the effectiveness of our promotional campaigns.`,
      ],
    },
    {
      heading: "Why We Implement Cookies",
      paragraphs: [
        `Our use of cookies is to:`,

        `• Ensure seamless website functionality<br>• Analyze user behavior to continuously improve our services<br>• Deliver personalized content and advertising<br>• Retain your personalized settings and preferences`,
      ],
    },
    {
      heading: "Your Control Over Cookies",
      paragraphs: [
        `You maintain the power to accept or decline cookies through your web browser settings. Be advised that adjusting these settings may impact the availability and performance of certain features on our platform.`,
      ],
    },
    {
      heading: "Managing Your Cookie Preferences",
      paragraphs: [
        `Most web browsers provide integrated tools for managing your cookie preferences. For popular browsers, refer to these guides:`,

        `• Google Chrome<br>• Mozilla Firefox<br>• Microsoft Edge<br>• Apple Safari`,
      ],
    },
    {
      heading: "Policy Revisions",
      paragraphs: [
        `This Data Privacy Policy may be periodically updated to reflect evolving operational practices or legal mandates. We encourage regular review to stay informed.`,
      ],
    },
    {
      heading: "Reaching Out",
      paragraphs: [
        `For any inquiries or concerns regarding this Data Privacy Policy, please do not hesitate to contact our support team.`,
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
