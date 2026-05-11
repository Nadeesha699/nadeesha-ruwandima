document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;

  document.getElementById("toggle-btn-1").addEventListener("click", () => {
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
    panel.classList.remove("hidden");
    setTimeout(() => {
      content.classList.remove("translate-x-full");
    }, 10);
  }

  function closeMenu() {
    content.classList.add("translate-x-full");
    setTimeout(() => {
      panel.classList.add("hidden");
    }, 300);
  }

  openBtn.addEventListener("click", openMenu);
  closeBtn.addEventListener("click", closeMenu);
  closeBtn1.addEventListener("click", closeMenu);
  closeBtn2.addEventListener("click", closeMenu);
  closeBtn3.addEventListener("click", closeMenu);
  closeBtn4.addEventListener("click", closeMenu);
  closeBtn5.addEventListener("click", closeMenu);

  // close when clicking outside
  panel.addEventListener("click", (e) => {
    if (e.target === panel.firstElementChild) {
      closeMenu();
    }
  });

  document.getElementById("home-main").addEventListener("mouseout", () => {
    document.getElementById("btn-up-arrow").style.opacity = 1;
  });
  document.getElementById("home-main").addEventListener("mouseover", () => {
    document.getElementById("btn-up-arrow").style.opacity = 0;
  });

  document.getElementById("home-main").addEventListener("touchstart", () => {
    document.getElementById("btn-up-arrow").style.opacity = 0;
  });

  document.getElementById("home-main").addEventListener("touchend", () => {
    document.getElementById("btn-up-arrow").style.opacity = 1;
  });

  document.getElementById("btn-up-arrow").addEventListener("click", () => {
    document.querySelector(".main").scrollTo({ top: 0, behavior: "smooth" });
  });

  document.getElementById("home-main").addEventListener("mouseenter", () => {
    document.title = "Nadeesha Ruwandima | Home";
  });

  document.getElementById("about-main").addEventListener("mouseenter", () => {
    document.title = "Nadeesha Ruwandima | About";
  });

  document.getElementById("lng-main").addEventListener("mouseenter", () => {
    document.title = "Nadeesha Ruwandima | Skills";
  });

  document
    .getElementById("about-two-main")
    .addEventListener("mouseenter", () => {
      document.title = "Nadeesha Ruwandima | What I do";
    });

  document
    .getElementById("portfolio-main")
    .addEventListener("mouseenter", () => {
      document.title = "Nadeesha Ruwandima | Portfolio";
    });

  document.getElementById("footer-main").addEventListener("mouseenter", () => {
    document.title = "Nadeesha Ruwandima | Contact";
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });

  [
    "home-div",
    "home-img",
    "about-h1",
    "about-p",
    "about-div",
    "lng-h1",
    "about-two-h1",
    "about-two-p",
    "portfolio-div",
    "portfolio-div-1",
    "about-two-div",
    "footer-div-1",
    "footer-div-2",
    "footer-div-3",
    "footer-div-4",
    "downlaod-img",
    "downlaod-div",
  ].forEach((id) => {
    observer.observe(document.getElementById(id));
  });
});
