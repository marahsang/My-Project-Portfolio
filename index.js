const projects = [
    {
      name: "Abel Tracker",
      codeUrl: "https://github.com/marahsang/abel-tracker",
      livePreview: "#",
    },
    {
      name: "Black Jack",
      codeUrl: "https://github.com/marahsang/black-jack",
      livePreview: "#",
    },
    {
      name: "Odin Grid Project",
      codeUrl: "https://github.com/marahsang/Odin-Grid-Project",
      livePreview: "#",
    },
    {
      name: "Landing Page",
      codeUrl: "https://github.com/marahsang/odin-lpage",
      livePreview: "#",
    },
    {
      name: "Calculator",
      codeUrl: "https://github.com/marahsang/Calculator_Odin_Project",
      livePreview: "#",
    },
    {
    name: "Rock Paper Scissors",
    codeUrl: "https://github.com/marahsang/rock_paper_scissors",
    livePreview: "#",
    },
    {
        name: "Etch a Sketch",
    codeUrl: "https://github.com/marahsang/Etch-a-Sketch",
    livePreview: "#",
    },
    {
        name: "Odin Recipes",
    codeUrl: "https://github.com/marahsang/odin-recipes",
    livePreview: "#",
    }
  ];
  
  // Get the project list container
  const projectList = document.getElementById("projectList");
  
  // Populate projects dynamically
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