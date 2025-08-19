const disclaimerContent = {
    title: "GameLegendForge Legal Notices & Disclaimers",
    sections: [
      {
        heading: "General Information Advisory",
        paragraphs: [
          `The content provided on GameLegendForge (referred to as the “Site”) is solely for informational purposes.
           While we endeavor to maintain accuracy, we provide no guarantees, explicit or implicit, regarding the completeness, dependability, or suitability of the information presented herein.`
        ],
      },
      {
        heading: "No Professional Counsel",
        paragraphs: [
          `This Site does not offer professional advice. All information is intended for general educational use only
           and should not substitute consultation with qualified professionals. We recommend seeking expert opinions before acting on any information from this Site.`
        ],
      },
      {
        heading: "External Links & Third-Party Content Advisory",
        paragraphs: [
          `The Site may include links to external websites or content from third parties, including advertisements. We do not review,
           control, or guarantee the accuracy, relevance, or completeness of these external links.`,
          `We do not endorse, warrant, or assume responsibility for any information, products, or services offered by third-party websites
           linked from our Site or any advertisements. We are not involved in transactions between you and external providers.`
        ],
      },
      {
        heading: "Limitation of Responsibility",
        paragraphs: [
          `Under no circumstances will we be held liable for any damages or losses incurred from your reliance on, or use of, information provided on the Site.
           Your engagement with and dependence on this Site’s content is entirely at your own discretion.`
        ],
      },
      {
        heading: "As-Is & As-Available Basis",
        paragraphs: [
          `The Site is provided on an “as is” and “as available” basis, without warranties of any kind, whether express or implied, including, but not limited to,
           warranties of merchantability, fitness for a particular purpose, or non-infringement.`,
          `We do not guarantee that the Site will operate without interruptions, be secure, or remain accessible at all times and locations, or that errors or defects will be corrected.`
        ],
      },
      {
        heading: "Disclaimer Updates",
        paragraphs: [
          `We reserve the right to modify this Disclaimer at any time without prior notification. It is your responsibility to periodically review this Disclaimer
           for any updates.`
        ],
      },
      {
        heading: "How to Reach Us",
        paragraphs: [
          `For inquiries regarding this Disclaimer, please do not hesitate to contact our support.`
        ],
      },
    ],
  };

  function renderDisclaimerSection() {
    const container = document.querySelector(".disclaimer-section .container");
    const titleEl = document.createElement("h2");
    titleEl.classList.add("title");
    titleEl.textContent = disclaimerContent.title;
    container.appendChild(titleEl);
  
    disclaimerContent.sections.forEach((section) => {
      const block = document.createElement("div");
      block.classList.add("disclaimer-block");
  
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
  
  document.addEventListener("DOMContentLoaded", renderDisclaimerSection);
  