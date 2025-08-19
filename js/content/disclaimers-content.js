const disclaimerContent = {
    title: "Elvis Funny Face: Legal Information & Disclaimers",
    sections: [
      {
        heading: "Important General Information for Elvis Funny Face",
        paragraphs: [
          `The content on the Elvis Funny Face website (referred to as the “Site”) is provided for general informational purposes only.
           While we strive for accuracy, we do not make any warranties, express or implied, about the completeness, reliability, or suitability of the information presented regarding the game.`
        ],
      },
      {
        heading: "Not Professional Advice",
        paragraphs: [
          `This Site does not offer professional advice. All information is for general educational use only
           and should not be taken as a substitute for professional consultation. We recommend seeking expert advice before acting on any information from this Site.`
        ],
      },
      {
        heading: "External Links & Third-Party Content for Elvis Funny Face",
        paragraphs: [
          `Our Site may contain links to external websites or content from third parties, including advertisements related to other games or services. We do not review,
           control, or guarantee the accuracy, relevance, or completeness of these external links.`,
          `We do not endorse or assume responsibility for any information, products, or services offered by third-party websites
           linked from our Site or any advertisements. We are not involved in any transactions between you and external providers.`
        ],
      },
      {
        heading: "Limitation of Liability for Elvis Funny Face",
        paragraphs: [
          `Under no circumstances will we be held responsible for any damages or losses resulting from your reliance on, or use of, information provided on the Site regarding Elvis Funny Face.
           Your use of and dependence on this Site’s content is entirely at your own risk.`
        ],
      },
      {
        heading: "As-Is & As-Available Basis for Elvis Funny Face",
        paragraphs: [
          `The Site and the Elvis Funny Face game are provided on an “as is” and “as available” basis, without warranties of any kind, whether express or implied, including,
           but not limited to, warranties of merchantability, fitness for a particular purpose, or non-infringement.`,
          `We do not guarantee that Elvis Funny Face or the Site will be uninterrupted, secure, or accessible at all times and locations, or that any errors or defects will be corrected.`
        ],
      },
      {
        heading: "Disclaimer Updates for Elvis Funny Face",
        paragraphs: [
          `We reserve the right to modify this Disclaimer at any time without prior notice. It is your responsibility to review this Disclaimer
           periodically for any updates.`
        ],
      },
      {
        heading: "Contact Us Regarding Elvis Funny Face Disclaimers",
        paragraphs: [
          `For any questions regarding this Disclaimer or Elvis Funny Face, please do not hesitate to contact our support team.`
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
  