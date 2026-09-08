(() => {
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-link");
  const header = document.getElementById("header");
  const yearEl = document.getElementById("year");

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const closeMenu = () => {
    navMenu.classList.remove("active");
    navToggle.classList.remove("active");
    navToggle.setAttribute("aria-expanded", "false");
  };

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const isActive = navMenu.classList.toggle("active");
      navToggle.classList.toggle("active", isActive);
      navToggle.setAttribute("aria-expanded", String(isActive));
    });

    navLinks.forEach((link) => link.addEventListener("click", closeMenu));

    document.addEventListener("click", (event) => {
      const clickedInsideNav = navMenu.contains(event.target) || navToggle.contains(event.target);
      if (!clickedInsideNav && navMenu.classList.contains("active")) {
        closeMenu();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && navMenu.classList.contains("active")) {
        closeMenu();
      }
    });
  }

  if (header) {
    const toggleHeaderShadow = () => {
      header.style.boxShadow = window.scrollY > 8 ? "0 8px 24px rgba(0, 0, 0, 0.28)" : "none";
    };
    toggleHeaderShadow();
    window.addEventListener("scroll", toggleHeaderShadow, { passive: true });
  }
})();
