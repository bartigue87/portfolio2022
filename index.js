const data = [
  {
    id: 1,
    link: "https://www.verizon.com/business/solutions/industry/retail/digital-connectivity-in-business/",
    description:
      "Simulation built for Verizon showcasing their 'Connected Retail' product. Embedded on their website.",
    name: "Verizon Connected Retail 'Sim'",
    languages: "HTML/CSS/JavaScript",
  },
  {
    id: 2,
    link: "https://business.adobe.com/resources/personalization-at-scale-interactive-tour/thank-you.html?faas_unique_submission_id=092D4D24-1857-1562-A7CD-0BBB96609D2A",
    description:
      "Simulation built for Adobe showcasing their 'Adobe Experience Cloud' product. Embedded on their website.",
    name: "Adobe Experience Cloud 'Sim'",
    languages: "HTML/CSS/JavaScript",
  },
  {
    id: 3,
    link: "https://dfs-hive.web.app",
    description:
      "Fun personal website I am working on. Will host a bankroll manager tool and articles I write to help with daily fantasy sports and betting.",
    name: "DFS Hive",
    languages: "React/Node",
  },
  {
    id: 4,
    link: "https://bartigue87.github.io/planets-fact-site/html/saturn.html",
    description:
      "Multi-page responsive website that displays facts about the planets in the solar system.",
    name: "Planet Facts",
    languages: "HTML/CSS/JavaScript",
  },
  {
    id: 5,
    link: "https://nat-parks-journal.web.app/",
    description:
      "Personal journal documenting my visits to the National Parks in the USA",
    name: "National Park Checklist",
    languages: "React",
  },
  {
    id: 6,
    link: "https://bartigue87.github.io/coffeeroasters/",
    description:
      "3 page subscription site with responsiveness and an interactive subscription page.",
    name: "Coffeeroasters",
    languages: "HTML/CSS/JavaScript",
  },
  {
    id: 7,
    link: "https://www.poly.com/us/en/products/phones/sync",
    description:
      "Simulation built for Poly showcasing their 'Sync' product. Embedded on their website.",
    name: "Poly Sync 'Sim'",
    languages: "HTML/CSS/JavaScript",
  },
  {
    id: 8,
    link: "https://bartigue87.github.io/rock-paper-scissors-app/",
    description: "Rock Paper Scissors game",
    name: "Rock Paper Scissors App",
    languages: "HTML/CSS/JavaScript",
  },
  {
    id: 9,
    link: "https://country-api-app.web.app",
    description:
      "App displaying all countries with the use of an api and the ability to search and filter.",
    name: "Countries API app",
    languages: "React",
  },
];

const mySlider = document.querySelector(".my-slider");

const elements = data.map((element) => {
  return `<div class="slide">
  <div class="slider-img img-${element.id}">
      <a
          href=${element.link}>
          <p>${element.description}</p>
          <br>
          <p>Click to visit</p>
      </a>
  </div>
  <br>
  <div>
      <h3>${element.name}</h3>
      <p>${element.languages}</p>
  </div>
</div>`;
});

for (let i = 0; i < elements.length; i++) {
  let div = document.createElement("div");
  div.innerHTML = elements[i];
  mySlider.appendChild(div);
}

let slider = tns({
  container: ".my-slider",
  slideBy: "1",
  speed: 600,
  nav: false,
  autoplay: true,
  autoplayButtonOutput: false,
  responsive: {
    1600: {
      items: 4,
      gutter: 20,
    },
    1024: {
      items: 3,
      gutter: 20,
    },
    768: {
      items: 2,
      gutter: 20,
    },
    480: {
      items: 1,
    },
  },
});

let tnsControls = document.querySelector(".tns-controls");
tnsControls.firstChild.innerHTML = "<span>&#8592;</span>";
tnsControls.lastChild.innerHTML = "<span>&#8594;</span>";
