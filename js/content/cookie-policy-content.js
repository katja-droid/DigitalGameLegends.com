const cookiePolicyContent = {
  title: "Our Cookie Policy for Elvis Funny Face",
  sections: [
    {
      heading: "Understanding Our Use of Cookies in Elvis Funny Face",
      paragraphs: [
        `This Cookie Policy explains how Digital Game Legends uses cookies and similar technologies to enhance your experience with Elvis Funny Face and our website (referred to as the “Site”). It clarifies what these technologies are, how we use them, and your choices regarding their use.`,
      ],
    },
    {
      heading: "What Are Cookies?",
      paragraphs: [
        `Cookies are small text files stored on your device when you visit a website. They help websites function efficiently, improve user experience, and gather anonymous data for analytics.`,
      ],
    },
    {
      heading: "Types of Cookies We Use in Elvis Funny Face",
      paragraphs: [
        `<strong>Essential Cookies:</strong> These are crucial for the basic operation of Elvis Funny Face, enabling features like seamless gameplay and secure access.`,
        `<strong>Analytics Cookies:</strong> We use these to collect anonymous information about how players interact with Elvis Funny Face and our site, which helps us improve its performance and design.`,
        `<strong>Preference Cookies:</strong> These cookies remember your settings and preferences within Elvis Funny Face, such as language or game display options, to provide a more personalized experience.`,
        `<strong>Advertising Cookies:</strong> Used to display advertisements that are more relevant to your interests, limit how often you see an ad, and measure the effectiveness of our advertising campaigns related to Elvis Funny Face.`,
      ],
    },
    {
      heading: "Why We Use Cookies in Elvis Funny Face",
      paragraphs: [
        `Our use of cookies is to:`,

        `• Ensure Elvis Funny Face functions correctly<br>• Understand how you use our services to make continuous improvements to the game<br>• Provide you with content and advertising tailored to your interests in funny face games<br>• Remember your personal settings and preferences within Elvis Funny Face`,
      ],
    },
    {
      heading: "Your Choices Regarding Cookies for Elvis Funny Face",
      paragraphs: [
        `You have the option to accept or decline cookies through your web browser settings. Please note that disabling cookies may affect the functionality and your experience on certain parts of Elvis Funny Face and our website.`,
      ],
    },
    {
      heading: "How to Manage Your Cookie Preferences for Elvis Funny Face",
      paragraphs: [
        `Most web browsers offer tools for managing your cookie settings. For more information on how to manage cookies in popular browsers, you can refer to their respective guides:`,

        `• Google Chrome<br>• Mozilla Firefox<br>• Microsoft Edge<br>• Apple Safari`,
      ],
    },
    {
      heading: "Updates to Our Policy for Elvis Funny Face",
      paragraphs: [
        `We may update this Cookie Policy from time to time to reflect changes in our practices or for legal reasons related to Elvis Funny Face. We encourage you to review this policy periodically to stay informed.`,
      ],
    },
    {
      heading: "Contacting Us About Elvis Funny Face Cookies",
      paragraphs: [
        `If you have any questions or concerns about this Cookie Policy, please feel free to contact our support team.`,
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
