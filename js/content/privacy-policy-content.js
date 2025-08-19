const privacyPolicyContent = {
  title: "GameLegendForge: Your Data Security Protocol",
  sections: [
    {
      heading: "Our Pledge to Safeguard Your Information",
      paragraphs: [
        `At **GameLegendForge**, we are deeply committed to protecting your personal information and upholding your right to privacy. This Data Security Protocol outlines our practices for collecting, using, sharing, and securing your data when you interact with our platform, including any linked digital services or applications (collectively, the “Site”). We strongly encourage you to review this policy in detail. If you find any aspect of this protocol disagreeable, please refrain from using the site.`,
      ],
    },
    {
      heading: "Information We Collect",
      paragraphs: [
        `We may gather various forms of data about you. The information we might collect on the Site includes:`,
      ],
    },
    {
      heading: "Directly Identifiable Information",
      paragraphs: [
        `Data that personally identifies you, such as your name, email address, and phone number, which you voluntarily provide when registering on the Site or participating in Site activities like online chats or forums.`,
      ],
    },
    {
      heading: "Automated Data Collection (Derivative Data)",
      paragraphs: [
        `Information our servers automatically log when you access the Site, including your IP address, browser type, operating system, access times, and the pages visited immediately before and after your Site access.`,
      ],
    },
    {
      heading: "Financial Details",
      paragraphs: [
        `Information related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or inquire about our services via the Site.`,
      ],
    },
    {
      heading: "How Your Information Is Utilized",
      paragraphs: [
        `Maintaining precise information about you enables us to deliver a seamless, efficient, and tailored experience. Specifically, data gathered from the Site may be used to:`,
        `• Establish and manage your account.<br>• Process transactions and issue confirmations.<br>• Handle customer service inquiries.<br>• Send crucial administrative communications, such as updates, security alerts, and support messages.<br>• Facilitate targeted advertising and promotional offers.<br>• Enhance our platform and enrich your user experience.`,
      ],
    },
    {
      heading: "Sharing Your Data",
      paragraphs: [
        `In specific situations, we may share the information we have collected about you. Your data may be disclosed as follows:`,
      ],
    },
    {
      heading: "Legal Compliance & Rights Protection",
      paragraphs: [
        `Should we determine that disclosing your information is essential to comply with legal procedures, investigate potential policy violations, or safeguard the rights, assets, and safety of others, we may share your information as legally permissible or mandated.`,
      ],
    },
    {
      heading: "Third-Party Service Collaborators",
      paragraphs: [
        `We may share your information with third parties who provide services on our behalf, including payment processing, data analytics, email distribution, hosting, customer support, and marketing assistance.`,
      ],
    },
    {
      heading: "Affiliated Entities",
      paragraphs: [
        `Your information may be shared with our affiliated entities, in which case we will ensure they comply with this Data Security Protocol.`,
      ],
    },
    {
      heading: "Other External Parties",
      paragraphs: [
        `We may share your information with advertisers and investors for general business analysis. Additionally, we may share your data with such third parties for marketing purposes, in accordance with applicable law.`,
      ],
    },
    {
      heading: "Data Security Measures",
      paragraphs: [
        `We implement administrative, technical, and physical security measures to protect your personal information. While we take reasonable steps to secure the data you provide, please be aware that no security system is entirely foolproof or impenetrable, and no data transmission method can be guaranteed against interception or misuse.`,
      ],
    },
    {
      heading: "Children's Data",
      paragraphs: [
        `We do not knowingly solicit or market information from individuals under 13 years of age. If you discover that we have unintentionally collected data from a child under 13, please contact us immediately.`,
      ],
    },
    {
      heading: "Your Data Preferences",
      paragraphs: [
        `You can review or modify your account information or close your account at any time by:`,
        `• Accessing your account settings and updating your profile.<br>• Reaching out to us directly.`,
        `Upon your request to close your account, we will deactivate or remove your account and data from our active databases. However, certain information may be retained for purposes such as fraud prevention, problem resolution, assisting with investigations, enforcing our Terms of Use, and/or fulfilling legal obligations.`,
      ],
    },
    {
      heading: "Communications & Opt-Out Options",
      paragraphs: [
        `If you no longer wish to receive correspondence, emails, or other communications from us, you may opt-out by:`,
        `• Following the unsubscribe instructions provided in our emails.<br>• Contacting us.`,
      ],
    },
    {
      heading: "Connect With Us",
      paragraphs: [
        `Should you have any questions or comments concerning this Data Security Protocol, please feel free to contact us.`,
      ],
    },
  ],
};

function renderPrivacyPolicy() {
  const container = document.getElementById("privacy-policy-container");

  const titleEl = document.createElement("h2");
  titleEl.classList.add("title");
  titleEl.textContent = privacyPolicyContent.title;
  container.appendChild(titleEl);

  privacyPolicyContent.sections.forEach((section) => {
    const block = document.createElement("div");
    block.classList.add("privacy-policy-block");

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

document.addEventListener("DOMContentLoaded", renderPrivacyPolicy);
