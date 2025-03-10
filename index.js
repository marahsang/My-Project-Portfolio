const projects = [
    {
      name: "Leads Tracker",
      codeUrl: "https://github.com/marahsang/abel-tracker",
      livePreview: " https://marahsang.github.io/abel-tracker/",
    },
    {
      name: "Black Jack",
      codeUrl: "https://github.com/marahsang/black-jack",
      livePreview: "https://marahsang.github.io/black-jack/",
    },
    {
      name: "Dashboard",
      codeUrl: "https://github.com/marahsang/Odin-Grid-Project",
      livePreview: "https://marahsang.github.io/Odin-Grid-Project/",
    },
    {
      name: "Landing Page",
      codeUrl: "https://github.com/marahsang/odin-lpage",
      livePreview: "https://marahsang.github.io/odin-lpage/",
    },
    {
      name: "Calculator",
      codeUrl: "https://github.com/marahsang/Calculator_Odin_Project",
      livePreview: "https://marahsang.github.io/Calculator_Odin_Project/",
    },
    {
    name: "Rock Paper Scissors",
    codeUrl: "https://github.com/marahsang/rock_paper_scissors",
    livePreview: "https://marahsang.github.io/rock_paper_scissors/",
    },
    {
        name: "Etch a Sketch",
    codeUrl: "https://github.com/marahsang/Etch-a-Sketch",
    livePreview: "https://marahsang.github.io/Etch-a-Sketch/",
    },
    {
        name: "Odin Recipes",
    codeUrl: "https://github.com/marahsang/odin-recipes",
    livePreview: "https://marahsang.github.io/odin-recipes/",
    },
    {
      name: "Passenger App",
      codeUrl: "https://github.com/marahsang/psngr_app",
      livePreview: "https://marahsang.github.io/psngr_app/",
    },
    {
    name: "Tribute Page",
    codeUrl: "https://github.com/marahsang/tribute-page",
    livePreview: "https://marahsang.github.io/tribute-page/",
    },
    {
      name: "Personal Portfolio Webpage",
      codeUrl: "https://github.com/marahsang/personal-portfolio-webpage",
      livePreview: "https://marahsang.github.io/personal-portfolio-webpage/",
    },
    {
      name: "Technical Documentation",
      codeUrl: "https://github.com/marahsang/tech-doc",
      livePreview: "https://marahsang.github.io/tech-doc/",
    },
    {
      name: "Product Landing Page",
      codeUrl: "https://github.com/marahsang/product-landing-page",
      livePreview: "https://marahsang.github.io/product-landing-page/",
    },
    {
      name: "Skyline",
      codeUrl: "https://github.com/marahsang/skyline",
      livePreview: "https://marahsang.github.io/skyline/",
    },
    {
      name: "Penguin",
      codeUrl: "https://github.com/marahsang/penguin",
      livePreview: "https://marahsang.github.io/penguin/",
    },
    
    {
      name: "Assembly Endgame",
      codeUrl: "https://github.com/marahsang/assembly-endgame",
      livePreview: "https://marahsang.github.io/assembly-endgame/",
    },
    {
      name: "Meme Generator",
      codeUrl: "https://github.com/marahsang/meme-gene",
      livePreview: " https://marahsang.github.io/meme-gene/",
    },
    {
      name: "Tenzies",
      codeUrl: "https://github.com/marahsang/tenzies-app",
      livePreview: "https://marahsang.github.io/tenzies-app/",
    },
    {
      name: "Survey Form",
      codeUrl: "https://github.com/marahsang/forms",
      livePreview: "https://marahsang.github.io/forms/",
    },
    {
      name: "Chrome Ext Mobile App",
      codeUrl: "https://github.com/marahsang/chrome-ext-mobile-app",
      livePreview: "https://chrome-ext-mobile-app.netlify.app",
    },

    {
      name: "Fiverr Gig",
      livePreview: "https://www.fiverr.com/s/bdGeQwq",
    }
  ];
  
    const projectList = document.getElementById("projectList");
  
  projects.forEach((project) => {
    const projectItem = document.createElement("div");
    projectItem.classList.add("project-item");
    projectItem.innerHTML = `
      <span>${project.name}</span>
      <a href="${project.codeUrl}" target="_blank">View Code</a>
      <a href="${project.livePreview}" target="_blank">Live Preview</a>
    `;
    projectList.appendChild(projectItem);
  });