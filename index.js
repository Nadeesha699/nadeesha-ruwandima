window.addEventListener("load", () => {
  setTimeout(() => {
    const loader = document.getElementById("loader");

    if (loader) {
      loader.classList.add("fade-out");
    }
  }, 1000);
});

document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;

  // DARK MODE
  const toggleBtn = document.getElementById("toggle-btn-1");

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      if (localStorage.getItem("theme") === "dark") {
        root.classList.add("dark");
        localStorage.removeItem("theme");
        localStorage.setItem("con", "1");
      } else {
        root.classList.remove("dark");
        localStorage.setItem("theme", "dark");
        localStorage.removeItem("con");
      }
    });
  }

  // MOBILE MENU
  const openBtn = document.getElementById("btn-mobile-menu");
  const closeBtn = document.getElementById("btn-mobile-menu-close");
  const closeBtn1 = document.getElementById("btn-mobile-menu-close-1");
  const closeBtn2 = document.getElementById("btn-mobile-menu-close-2");
  const closeBtn3 = document.getElementById("btn-mobile-menu-close-3");
  const closeBtn4 = document.getElementById("btn-mobile-menu-close-4");
  const closeBtn5 = document.getElementById("btn-mobile-menu-close-5");

  const panel = document.getElementById("mobile-menu-panel");
  const content = document.getElementById("mobile-menu-content");

  function openMenu() {
    if (panel && content) {
      panel.classList.remove("hidden");

      setTimeout(() => {
        content.classList.remove("translate-x-full");
      }, 10);
    }
  }

  function closeMenu() {
    if (panel && content) {
      content.classList.add("translate-x-full");

      setTimeout(() => {
        panel.classList.add("hidden");
      }, 300);
    }
  }

  if (openBtn) openBtn.addEventListener("click", openMenu);

  if (closeBtn) closeBtn.addEventListener("click", closeMenu);
  if (closeBtn1) closeBtn1.addEventListener("click", closeMenu);
  if (closeBtn2) closeBtn2.addEventListener("click", closeMenu);
  if (closeBtn3) closeBtn3.addEventListener("click", closeMenu);
  if (closeBtn4) closeBtn4.addEventListener("click", closeMenu);
  if (closeBtn5) closeBtn5.addEventListener("click", closeMenu);

  // CLOSE WHEN CLICKING OUTSIDE
  if (panel) {
    panel.addEventListener("click", (e) => {
      if (e.target === panel.firstElementChild) {
        closeMenu();
      }
    });
  }

  // UP ARROW
  const upArrow = document.getElementById("btn-up-arrow");

  if (upArrow) {
    upArrow.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  // TITLE CHANGES
  const home = document.getElementById("home");
  const about = document.getElementById("about");
  const skills = document.getElementById("skills");
  const services = document.getElementById("services");
  const portfolio = document.getElementById("portfolio");
  const contact = document.getElementById("contact");

  if (home) {
    home.addEventListener("mouseenter", () => {
      document.title = "Nadeesha Ruwandima | Home";
    });
  }

  if (about) {
    aboutMain.addEventListener("mouseenter", () => {
      document.title = "Nadeesha Ruwandima | About";
    });
  }

  if (skills) {
    skills.addEventListener("mouseenter", () => {
      document.title = "Nadeesha Ruwandima | Skills";
    });
  }

  if (services) {
    services.addEventListener("mouseenter", () => {
      document.title = "Nadeesha Ruwandima | Services";
    });
  }

  if (portfolio) {
    portfolio.addEventListener("mouseenter", () => {
      document.title = "Nadeesha Ruwandima | Portfolio";
    });
  }

  if (contact) {
    contact.addEventListener("mouseenter", () => {
      document.title = "Nadeesha Ruwandima | Contact";
    });
  }
});