const projects = [

    {
      title: "Private Therapy Clinic",
      description: "Online Health services",
      image: "assets/img/portfolio/private-therapy.png",
      category: "Web App",
      url: "https://theprivatetherapyclinic.co.uk/",
      tag: "private-therapy-clinic"
    },
    
    {
      title: "ProspectX",
      description: "Real Estate Website",
      image: "assets/img/portfolio/prospectx.png",
      category: "Web App",
      url: "https://prospectx.com/",
      tag: "prospectx"
    },
    {
      title: "ConsoliADS",
      description: "Ads mediation for games",
      image: "assets/img/portfolio/consoliads.png",
      category: "Web App",
      url: "https://consoliads.com/",
      tag: "ConsoliADS"
    },
    {
      title: "Clothrealm",
      description: "NFT Marketplace for Clothing",
      image: "assets/img/portfolio/clothrealm.png",
      category: "Web App",
      url: "https://clotherealm.netlify.app/",
      tag: "Clothrealm"
    },
    {
      title: "Fliproom",
      description: "E-Commerce marketplace for buying and selling premium sneakers",
      image: "assets/img/portfolio/fliproom.jpeg",
      category: "Web App",
      url: "https://www.fliproom.io/",
      tag: "Fliproom"
    },
    {
      title: "Medicore",
      description: "Medicore is a combo app to find doctors, Pharmacies & Hospitals near you.",
      image: "assets/img/portfolio/medicore.png",
      category: "Web App",
      url: "https://medi-core.com/en/?ckattempt=1",
      tag: "medicore"
    },
    {
      title: "All In Academy",
      description: "Learning Management System",
      image: "assets/img/portfolio/all in academy.jpg",
      category: "Web App",
      url: "https://www.allin.academy/en/",
      tag: "all-in-academy"
    },
    
    {
      title: "Consortia",
      description: "Real Estate Platform",
      image: "assets/img/portfolio/consortia.png",
      category: "Web App",
      url: "https://reconsortia.com/",
      tag: "consortia"
    },
    
    {
      title: "Safetycheck",
      description: "Safety Management System for construction Industry",
      image: "assets/img/portfolio/safetycheck.jpeg",
      category: "Web App",
      url: "https://safetycheck.nz/",
      tag: "Safetycheck"
    },
    {
      title: "Healthread",
      description: "Healthread is a community sharing real experiences to better understand and manage health.",
      image: "assets/img/portfolio/healthread.png",
      category: "Mobile App",
      url: "https://apps.apple.com/us/app/healthread/id1498450688",
      tag: "Healthread"
    },
    {
      title: "Hamyk",
      description:"Hamyk is a campus social app where everyone’s posts get seen and students stay connected.",
      image: "assets/img/portfolio/hamyk.png",
      category: "Mobile App",
      url: "https://apps.apple.com/ro/app/hamyk/id1313026036",
      tag: "Hamyk"
    },
    
    {
      title: "Amply",
      description: "Amply by AiBorne streamlines field workflows with easy SOP creation and automation for any industry.",
      image: "assets/img/portfolio/amply.png",
      category: "Mobile App",
      url: "https://play.google.com/store/apps/details?id=com.aiborne.amplyv1&hl=en",
      tag: "Amply"
    },
    {
      title: "Pinoyaya",
      description: "Pinoyaya Care connects you with trusted babysitters and housekeepers, anytime you need them.",
      image: "assets/img/portfolio/pinoyaya.jpeg",
      category: "Mobile App",
      tag: "pinoyaya"
    },
    
    {
      title: "Tello Talk",
      description: "Chat Application",
      image: "assets/img/portfolio/tellotalk.jpeg",
      category: "Mobile App",
      url: "https://play.google.com/store/apps/details?id=com.udna.tellotalk&hl=en",
      tag: "tello-talk"
    },
    {
      title: "Mooner App",
      description: "Multi Service App",
      image: "assets/img/portfolio/mooner.png",
      category: "Mobile App",
      url: "https://play.google.com/store/apps/details?id=com.app.mooner&hl=en",
      tag: "mooner-app"
    },
    {
      title: "Preevo",
      description: "Car Hire Services App",
      image: "assets/img/portfolio/preevo.png",
      category: "Mobile App",
      url: "https://play.google.com/store/apps/details?id=com.preevoclient&hl=en",
      tag: "preevo"
    },
    {
      title: "Cal Ai",
      description: "Cal AI is a smart diet and nutrition app",
      image: "assets/img/portfolio/cal-ai.png",
      category: "Mobile App",
      tag: "Cal-ai"
    },
    {
      title: "Wild Chain",
      description: "Mobile Game for Users",
      image: "assets/img/portfolio/wildchain.jpeg",
      category: "Mobile App",
      url: "https://play.google.com/store/apps/details?id=io.wildchain.app",
      tag: "wild-chain"
    },
    
  ];

// Function to generate portfolio items
function generatePortfolioItems() {
  const portfolioContainer = document.querySelector(".isotope-container");
  portfolioContainer.innerHTML = ""; // Clear existing items

  projects.forEach((project) => {
    const projectElement = document.createElement("div");
    projectElement.classList.add("col-lg-4", "col-md-6", "portfolio-item", `filter-${project.category.toLowerCase().replace(" ", "-")}`);

    projectElement.innerHTML = `
      <div class="portfolio-content h-100">
        <img src="${project.image}" class="img-fluid" alt="${project.title}">
        <div class="portfolio-info">
          <h4>${project.title}</h4>
          <p>${project.description}</p>
          <a href="${project.image}" title="${project.title}" data-gallery="portfolio-gallery-${project.category.toLowerCase()}" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
          <a href="portfolio-details.html?tag=${project.tag}" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
        </div>
      </div>
    `;

    portfolioContainer.appendChild(projectElement);
  });

  portfolioContainer.style.height = "100vh !important";
  portfolioContainer.style['overflow-y'] = 'scroll'
  portfolioContainer.style.position = "static"
}

// Function to handle category filtering
function handleCategoryFilter() {
  const filters = document.querySelectorAll(".portfolio-filters li");
  filters.forEach(filter => {
    filter.addEventListener("click", function() {
      const filterValue = filter.getAttribute("data-filter");
      const items = document.querySelectorAll(".portfolio-item");
      items.forEach(item => {
        if (filterValue === "*" || item.classList.contains(filterValue.substring(1))) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
      filters.forEach(f => f.classList.remove("filter-active"));
      filter.classList.add("filter-active");
    });
  });
}

// Call functions on page load
document.addEventListener("DOMContentLoaded", function() {
  generatePortfolioItems(); // Dynamically generate the portfolio items
  handleCategoryFilter();   // Enable category filtering
});
