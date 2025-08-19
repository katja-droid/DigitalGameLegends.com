const privacyPolicyContent = {
  title: "Elvis Funny Face: Our Commitment to Your Privacy",
  sections: [
    {
      heading: "Our Promise to Protect Your Information in Elvis Funny Face",
      paragraphs: [
        `At **Digital Game Legends**, we are dedicated to protecting your personal information and respecting your privacy. This Privacy Policy outlines how we collect, use, share, and secure your data when you interact with Elvis Funny Face, our website, and any related digital services or applications (collectively, the “Site”). We encourage you to read this policy carefully. If you do not agree with any part of this policy, please do not use the site.`,
      ],
    },
    {
      heading: "Information We Collect for Elvis Funny Face",
      paragraphs: [
        `We may collect various types of data from you when you play Elvis Funny Face or interact with our Site. The information we might collect includes:`,
      ],
    },
    {
      heading: "Personal Information You Provide",
      paragraphs: [
        `Data that identifies you personally, such as your name, email address, and phone number, which you voluntarily provide when registering on the Site, submitting a funny face creation, or participating in Site activities like online chats or forums related to Elvis Funny Face.`,
      ],
    },
    {
      heading: "Automated Data Collection (Usage Data) for Elvis Funny Face",
      paragraphs: [
        `Information our servers automatically record when you access the Site or play Elvis Funny Face, including your IP address, browser type, operating system, access times, and the pages you visited before and after our Site, as well as game-specific usage data.`,
      ],
    },
    {
      heading: "Payment Details for Elvis Funny Face",
      paragraphs: [
        `Information related to your payment method (e.g., valid credit card number, card type, expiration date) that we may collect when you make purchases, orders, returns, exchanges, or inquiries about premium features or services related to Elvis Funny Face via the Site.`,
      ],
    },
    {
      heading: "How Your Information Is Used for Elvis Funny Face",
      paragraphs: [
        `Maintaining accurate information about you allows us to provide a smooth, efficient, and personalized experience when playing Elvis Funny Face. Specifically, data collected from the Site may be used to:`,
        `• Create and manage your account for Elvis Funny Face.<br>• Process transactions for in-game items or features and send confirmations.<br>• Handle customer service inquiries related to Elvis Funny Face.<br>• Send important administrative communications, such as updates, security alerts, and support messages for the game.<br>• Facilitate targeted advertising and promotional offers for Elvis Funny Face and other Digital Game Legends titles.<br>• Improve Elvis Funny Face gameplay and enhance your user experience.`,
      ],
    },
    {
      heading: "Sharing Your Data for Elvis Funny Face",
      paragraphs: [
        `In certain situations, we may share the information we have collected about you related to Elvis Funny Face. Your data may be disclosed as follows:`,
      ],
    },
    {
      heading: "Legal Requirements & Rights Protection",
      paragraphs: [
        `If we believe that disclosing your information is necessary to comply with legal processes, investigate potential policy violations related to Elvis Funny Face, or protect the rights, property, and safety of others, we may share your information as legally permitted or required.`,
      ],
    },
    {
      heading: "Third-Party Service Providers for Elvis Funny Face",
      paragraphs: [
        `We may share your information with third parties who perform services on our behalf for Elvis Funny Face, including payment processing, data analysis, email delivery, hosting, customer support, and marketing assistance.`,
      ],
    },
    {
      heading: "Affiliates for Elvis Funny Face",
      paragraphs: [
        `Your information related to Elvis Funny Face may be shared with our affiliated entities, in which case we will ensure they adhere to this Privacy Policy.`,
      ],
    },
    {
      heading: "Other Third Parties for Elvis Funny Face",
      paragraphs: [
        `We may share your information with advertisers and investors for general business analysis related to Elvis Funny Face. Additionally, we may share your data with such third parties for marketing purposes, in accordance with applicable law.`,
      ],
    },
    {
      heading: "Data Security for Elvis Funny Face",
      paragraphs: [
        `We implement administrative, technical, and physical security measures to protect your personal information collected from Elvis Funny Face. While we take reasonable steps to secure the data you provide, please be aware that no security system is entirely foolproof or impenetrable, and no data transmission method can be guaranteed against interception or misuse.`,
      ],
    },
    {
      heading: "Children's Privacy in Elvis Funny Face",
      paragraphs: [
        `We do not knowingly solicit or market information from individuals under 13 years of age. Elvis Funny Face is designed for kids, but parental consent is advised for any data submission. If you become aware that we have unintentionally collected data from a child under 13 without consent, please contact us immediately.`,
      ],
    },
    {
      heading: "Your Privacy Choices for Elvis Funny Face",
      paragraphs: [
        `You can review or modify your account information or close your account related to Elvis Funny Face at any time by:`,
        `• Accessing your account settings and updating your profile.<br>• Contacting us directly.`,
        `Upon your request to close your account, we will deactivate or remove your account and data from our active databases. However, certain information may be retained for purposes such as fraud prevention, problem resolution, assisting with investigations, enforcing our Terms of Use for Elvis Funny Face, and/or fulfilling legal obligations.`,
      ],
    },
    {
      heading: "Communications & Opt-Out for Elvis Funny Face",
      paragraphs: [
        `If you no longer wish to receive correspondence, emails, or other communications from us related to Elvis Funny Face, you may opt-out by:`,
        `• Following the unsubscribe instructions provided in our emails.<br>• Contacting us.`,
      ],
    },
    {
      heading: "Contact Us Regarding Elvis Funny Face Privacy",
      paragraphs: [
        `Should you have any questions or comments concerning this Privacy Policy for Elvis Funny Face, please feel free to contact us.`,
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
