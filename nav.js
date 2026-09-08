// Nav Component Data Structure
const navigationData = {
  primary: [
    { title: "Home", url: "index.html" },
    { title: "About", url: "about.html" },
    { title: "Services", url: "services.html" },
    { title: "Contact", url: "contact.html" }
  ],
  secondary: [
    { title: "Privacy Policy", url: "privacy.html" },
    { title: "Terms of Service", url: "terms.html" },
    { title: "FAQ", url: "faq.html" }
  ]
};

// Function to render Top Navigation
function renderTopNavigation() {
  const topNavContainer = document.getElementById("top-nav-container");
  if (!topNavContainer) return;

  const primaryLinksHTML = navigationData.primary
    .map(link => `<a href="${link.url}">${link.title}</a>`)
    .join(" | ");

  const secondaryLinksHTML = navigationData.secondary
    .map(link => `<a href="${link.url}">${link.title}</a>`)
    .join(" | ");

  topNavContainer.innerHTML = `
    <nav class="nav-bar">
      <div class="nav-link-row primary-nav">
        <strong>Primary navigation:</strong> ${primaryLinksHTML}
      </div>
      <div class="nav-link-row secondary-nav">
        <strong>Secondary navigation if needed:</strong> ${secondaryLinksHTML}
      </div>
    </nav>
  `;
}

// Function to render Left Sidebar Navigation
function renderSideNavigation() {
  const sideNavContainer = document.getElementById("side-nav-container");
  if (!sideNavContainer) return;

  const createList = (items) => 
    items.map(item => `<li><a href="${item.url}">${item.title}</a></li>`).join("");

  sideNavContainer.innerHTML = `
    <nav class="side-nav">
      <div class="side-nav-group">
        <h4>Primary Navigation</h4>
        <ul>${createList(navigationData.primary)}</ul>
      </div>
      <div class="side-nav-group">
        <h4>Secondary navigation if needed</h4>
        <ul>${createList(navigationData.secondary)}</ul>
      </div>
    </nav>
  `;
}

// Run functions on DOM load
document.addEventListener("DOMContentLoaded", () => {
  renderTopNavigation();
  renderSideNavigation();
});
