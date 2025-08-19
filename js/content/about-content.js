const aboutContent = {
  title: "About Elvis Funny Face",
  sections: [
    {
      heading: "Our Mission: Laugh, Create, Connect!",
      paragraphs: [
        `At Digital Game Legends, we're on a mission to bring endless laughter and creative joy to players worldwide through games like Elvis Funny Face. We believe in crafting experiences that are easy to pick up, highly engaging, and perfect for sparking imagination. Our goal is to provide a fun and rewarding escape, one hilarious face at a time!`,
      ],
    },
    {
      heading: "The Team Behind the Smiles",
      paragraphs: [
        `We are a passionate team of game developers, artists, and humor enthusiasts dedicated to bringing you the most entertaining face-making action. With a shared love for creativity and fun, we pour our expertise into every aspect of Elvis Funny Face.`,
        `From designing a wide array of funny features to perfecting intuitive drag-and-drop controls, our focus is on delivering a polished and enjoyable creative experience. We constantly listen to player feedback to refine and expand the game, ensuring it remains fresh and exciting.`,
      ],
    },
    {
      heading: "Our Values: Creativity, Joy, Community",
      paragraphs: [
        `• **Creativity Unleashed:** We prioritize providing tools that allow players to express their unique sense of humor and artistic flair.
        <br>• **Pure Joy:** Our games are designed to be genuinely enjoyable and provide a great way to unwind and laugh.
        <br>• **Player Community:** We value our players and aim to build a welcoming community where shared creations and feedback help shape the future of Elvis Funny Face.`,
      ],
    },
    {
      heading: "Join the Laughter!",
      paragraphs: [
        `Thank you for being a part of the Elvis Funny Face journey. We invite you to join our growing community, share your funniest creations, and inspire smiles around the world. Get ready for an explosion of giggles!`,
      ],
    },
  ],
};

function renderAboutSection() {
  const container = document.getElementById("about-container");

  const titleEl = document.createElement("h2");
  titleEl.classList.add("title");
  titleEl.textContent = aboutContent.title;
  container.appendChild(titleEl);

  aboutContent.sections.forEach((section) => {
    const block = document.createElement("div");
    block.classList.add("about-block");

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

document.addEventListener("DOMContentLoaded", renderAboutSection);
