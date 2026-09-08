document.addEventListener("DOMContentLoaded", function () {
  // 1. Create Navigation Container Element
  const navElement = document.createElement("nav");
  navElement.className = "top-nav";

  // 2. Define Navigation Tabs
  const links = [
    { name: "Home", href: "index.html" },
    { name: "Education", href: "education.html" },
    { name: "Experience", href: "experience.html" },
    { name: "Leadership", href: "leadership.html" },
    { name: "Honors", href: "honors.html" }
  ];

  // 3. Get Current Page Filename for Active Tab Highlight
  let currentPage = window.location.pathname.split("/").pop();
  if (!currentPage || currentPage === "") {
    currentPage = "index.html";
  }

  // 4. Build Navigation HTML List
  let navHTML = '<ul class="nav-list">';
  links.forEach(link => {
    const isActive = (currentPage === link.href) ? 'active' : '';
    navHTML += `<li><a href="${link.href}" class="nav-link ${isActive}">${link.name}</a></li>`;
  });
  navHTML += '</ul>';

  navElement.innerHTML = navHTML;

  // 5. Inject Navigation into #nav-placeholder or Top of Page
  const targetContainer = document.getElementById("nav-placeholder");
  if (targetContainer) {
    targetContainer.appendChild(navElement);
  } else {
    document.body.insertBefore(navElement, document.body.firstChild);
  }
});
