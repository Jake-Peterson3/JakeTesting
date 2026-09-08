// Centralized Navigation Data Structure
const navItems = {
  primary: [
    { label: "About Me", url: "#about" },
    { label: "Education", url: "#education" },
    { label: "Experience", url: "#experience" },
    { label: "Leadership", url: "#leadership" },
    { label: "Honors", url: "#honors" }
  ],
  secondary: [
    { label: "Resume", url: "resume.pdf" },
    { label: "Contact", url: "mailto:jake@example.com" },
    { label: "Iowa State Ivy", url: "https://www.ivybusiness.iastate.edu" }
  ]
};

// Render Horizontal Top Navigation Bars
function renderTopNav() {
  const primaryContainer = document.getElementById("primary-nav-top");
  const secondaryContainer = document.getElementById("secondary-nav-top");

  if (primaryContainer) {
    const primaryLinks = navItems.primary
      .map(item => `<li><a href="${item.url}">${item.label}</a></li>`)
      .join("");
    primaryContainer.innerHTML = `<ul class="nav-horizontal-list">${primaryLinks}</ul>`;
  }

  if (secondaryContainer) {
    const secondaryLinks = navItems.secondary
      .map(item => `<li><a href="${item.url}">${item.label}</a></li>`)
      .join("");
    secondaryContainer.innerHTML = `<ul class="nav-horizontal-list">${secondaryLinks}</ul>`;
  }
}

// Render Vertical Left Sidebar Navigation
function renderSideNav() {
  const sideContainer = document.getElementById("side-nav-container");
  if (!sideContainer) return;

  const renderList = (items) =>
    items.map(item => `<li><a href="${item.url}">${item.label}</a></li>`).join("");

  sideContainer.innerHTML = `
    <nav>
      <div class="side-nav-group">
        <h4>Primary Navigation</h4>
        <ul>${renderList(navItems.primary)}</ul>
      </div>
      <div class="side-nav-group">
        <h4>Secondary Navigation</h4>
        <ul>${renderList(navItems.secondary)}</ul>
      </div>
    </nav>
  `;
}

// Initialize Navigation on DOM Load
document.addEventListener("DOMContentLoaded", () => {
  renderTopNav();
  renderSideNav();
});
