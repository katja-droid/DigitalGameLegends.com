const privacyPolicyContent = {
  title: "Data Privacy Statement",
  sections: [
    {
      heading: "Our Commitment to Your Privacy",
      paragraphs: [
        `At <strong>Domain.com</strong>, we are dedicated to safeguarding your personal information and upholding your right to privacy. This Data Privacy Statement explains our methods for collecting, utilizing, disclosing, and protecting your data when you engage with our website, including any associated digital platforms or applications (collectively, the “Site”). We urge you to review this policy thoroughly. If you disagree with any part of this statement, please refrain from using the site.`,
      ],
    },
    {
      heading: "Information We Gather",
      paragraphs: [
        `We may collect various types of information about you. The data we might gather on the Site includes:`,
      ],
    },
    {
      heading: "Personal Identifiable Information",
      paragraphs: [
        `Information that identifies you personally, such as your name, email address, and phone number, which you provide voluntarily when registering on the Site or participating in Site activities like online chats or forums.`,
      ],
    },
    {
      heading: "Automatically Collected Data (Derivative Data)",
      paragraphs: [
        `Data our servers automatically record when you access the Site, including your IP address, browser type, operating system, access times, and the pages visited immediately before and after your Site access.`,
      ],
    },
    {
      heading: "Financial Information",
      paragraphs: [
        `Details related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you acquire, order, return, exchange, or inquire about our services via the Site.`,
      ],
    },
    {
      heading: "How Your Information is Used",
      paragraphs: [
        `Maintaining accurate information about you enables us to provide a seamless, efficient, and tailored experience. Specifically, information gathered from the Site may be used to:`,
        `• Create and manage your account.<br>
           • Process transactions and send confirmations.<br>
           • Address customer service inquiries.<br>
           • Deliver essential administrative communications, such as updates, security alerts, and support.<br>
           • Facilitate targeted advertising and promotional offers.<br>
           • Enhance our website and improve your user experience.`,
      ],
    },
    {
      heading: "Sharing Your Information",
      paragraphs: [
        `In certain circumstances, we may share the information we have collected about you. Your information may be disclosed as follows:`,
      ],
    },
    {
      heading: "Legal Compliance and Protection of Rights",
      paragraphs: [
        `Should we determine that disclosing your information is necessary to comply with legal processes, investigate potential policy breaches, or protect the rights, property, and safety of others, we may share your information as legally permitted or required.`,
      ],
    },
    {
      heading: "Third-Party Service Providers",
      paragraphs: [
        `We may share your information with third parties who provide services on our behalf, including payment processing, data analytics, email distribution, hosting, customer support, and marketing assistance.`,
      ],
    },
    {
      heading: "Affiliated Entities",
      paragraphs: [
        `Your information may be shared with our affiliated entities, in which case we will ensure they adhere to this Data Privacy Statement.`,
      ],
    },
    {
      heading: "Other Third Parties",
      paragraphs: [
        `We may share your information with advertisers and investors for general business analysis. Additionally, we may share your data with such third parties for marketing purposes, in accordance with applicable law.`,
      ],
    },
    {
      heading: "Information Security",
      paragraphs: [
        `We employ administrative, technical, and physical security measures to safeguard your personal information. While we take reasonable steps to secure the data you provide, please be aware that no security system is entirely flawless or impenetrable, and no data transmission method can be guaranteed against interception or misuse.`,
      ],
    },
    {
      heading: "Children's Privacy",
      paragraphs: [
        `We do not knowingly request or market information from children under 13 years of age. If you discover that we have inadvertently collected data from a child under 13, please contact us immediately.`,
      ],
    },
    {
      heading: "Your Data Options",
      paragraphs: [
        `You can review or modify your account information or close your account at any time by:`,
        `• Accessing your account settings and updating your profile.<br>
           • Reaching out to us directly.`,
        `Upon your request to close your account, we will deactivate or remove your account and data from our active databases. However, certain information may be retained for purposes such as fraud prevention, problem resolution, assisting with investigations, enforcing our Terms of Use, and/or fulfilling legal obligations.`,
      ],
    },
    {
      heading: "Communications and Opt-Out",
      paragraphs: [
        `If you no longer wish to receive correspondence, emails, or other communications from us, you may opt-out by:`,
        `• Following the unsubscribe instructions provided in our emails.<br>
           • Contacting us.`,
      ],
    },
    {
      heading: "Reach Out to Us",
      paragraphs: [
        `Should you have any questions or remarks concerning this Data Privacy Statement, please contact us.`,
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
