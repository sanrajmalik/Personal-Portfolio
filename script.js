let themeDots = document.getElementsByClassName("theme-dot");

for (let theme = 0; themeDots.length > theme; theme++) {
    themeDots[theme].addEventListener("click", function () {
        let mode = this.dataset.mode;
        setTheme(mode);
    });
}

class Project {
  constructor({
                projectName,
                projectDescription,
                projectImage,
                codeLink,
                demoLink
              }) {
    this.title = this.createHeadingTag({
      headingType: "h6",
      className: "post-title",
      text: projectName
    });

    this.description = this.createParaTag({
      className: "post-intro",
      text: projectDescription
    });

    this.demo = this.createAttributeTag({
      href: demoLink,
      text: "Live Demo"
    });

    this.code = this.createAttributeTag({
      href: codeLink,
      text: "Source Code"
    });

    this.projectImage = this.createImageTag({
      className: "thumbnail",
      src: projectImage,
      alt: projectName
    });

    this.sourceCodeDiv = this.createDiv({
      className: "source-code",
      childElements: [this.demo, this.code]
    });

    this.cardHeaderDiv = this.createDiv({
      className: "post-preview",
      childElements: [this.title, this.description, this.sourceCodeDiv]
    });

    this.cardComponent = this.createDiv({
      className: "post",
      childElements: [this.projectImage, this.cardHeaderDiv]
    });
  }

  createAttributeTag({ href = "", target = "_blank", text }) {
    const tagDocument = document.createElement("a");
    tagDocument.href = href;
    tagDocument.target = target;
    const tagTextElement = document.createTextNode(text);
    tagDocument.appendChild(tagTextElement);
    return tagDocument;
  }

  createParaTag({ className = null, text = "" }) {
    const paraElement = document.createElement("p");
    if (className) paraElement.className = className;

    const paraText = document.createTextNode(text);
    paraElement.appendChild(paraText);
    return paraElement;
  }

  createDiv({ className = null, childElements = [] }) {
    const divElement = document.createElement("div");
    if (className) divElement.className = className;
    childElements.forEach(element => {
      divElement.appendChild(element);
    });
    return divElement;
  }

  createHeadingTag({ headingType = "h1", className = null, text = "" }) {
    const headingTag = document.createElement(headingType);
    if (className) headingTag.className = className;
    const headingText = document.createTextNode(text);
    headingTag.appendChild(headingText);
    return headingTag;
  }

  createImageTag({ className = null, src = "", alt = "" }) {
    const imageTag = document.createElement("img");
    if (className) imageTag.className = className;
    imageTag.src = src;
    imageTag.alt = alt;
    return imageTag;
  }

  createProjectCard() {
    return this.cardComponent;
  }
}

const projects = [
  {
    projectName: "Shopping Cart Using Javascript",
    projectDescription:
      "Plain simple HTML, CSS, JavaScript Project",
    projectImage: "images/ecomjs.jpg",
    codeLink: "https://github.com/sanrajmalik/Ecommerce-Project",
    demoLink: "https://ecommerce-project.sanrajmalik.repl.co/product.html"
  },
  {
    projectName: "Shopping Cart Using Javascript",
    projectDescription:
      "Plain simple HTML, CSS, JavaScript Project",
    projectImage: "images/ecomjs.jpg",
    codeLink: "https://github.com/sanrajmalik/Ecommerce-Project",
    demoLink: "https://ecommerce-project.sanrajmalik.repl.co/product.html"
  },
  
];

const createCards = () => {
  projects.map(project => {
      const projectCard = new Project({
        projectName: project.projectName,
        projectDescription: project.projectDescription,
        projectImage: project.projectImage,
        codeLink: project.codeLink,
        demoLink: project.demoLink
      }).createProjectCard();
      document.getElementById("post-wrapper-id").appendChild(projectCard);
    }
  );
};
createCards();


