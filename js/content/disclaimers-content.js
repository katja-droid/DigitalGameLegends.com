const disclaimerContent = {
    title: "Website Disclaimers",
    sections: [
      {
        heading: "General Information Disclaimer",
        paragraphs: [
          `The content on <strong>Domain.com</strong> (referred to as the “Site”) is provided for informational purposes only.
           While we strive for accuracy, we offer no guarantees, express or implied, regarding the completeness, reliability, or suitability of the information herein.`
        ],
      },
      {
        heading: "No Professional Advice",
        paragraphs: [
          `This Site does not provide professional advice. All information is for general educational use only
           and should not replace consultation with qualified professionals. We advise seeking expert opinion before acting on any information from this Site.`
        ],
      },
      {
        heading: "Third-Party Links Disclaimer",
        paragraphs: [
          `The Site may feature links to external websites or content from third parties, including advertisements. These links are not reviewed,
           controlled, or guaranteed for accuracy, relevance, or completeness by us.`,
          `We do not endorse, guarantee, or assume responsibility for any information, products, or services offered by third-party websites
           linked from our Site or any advertisements. We are not involved in any transactions between you and external providers.`
        ],
      },
      {
        heading: "Limitation of Liability",
        paragraphs: [
          `Under no circumstances will we be liable for any damages or losses sustained from your use of, or reliance on, information provided on the Site.
           Your engagement with and reliance on this Site’s content is entirely at your own risk.`
        ],
      },
      {
        heading: "As Is and As Available Basis",
        paragraphs: [
          `The Site is offered on an “as is” and “as available” basis, without warranties of any kind, whether express or implied, including, but not limited to,
           warranties of merchantability, fitness for a particular purpose, or non-infringement.`,
          `We do not guarantee that the Site will be uninterrupted, secure, or available at all times and locations, or that errors or defects will be corrected.`
        ],
      },
      {
        heading: "Disclaimer Amendments",
        paragraphs: [
          `We reserve the right to modify this Disclaimer at any time without prior notification. It is your responsibility to periodically review this Disclaimer
           for any updates.`
        ],
      },
      {
        heading: "How to Contact Us",
        paragraphs: [
          `For questions about this Disclaimer, please reach out to us.`
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
  