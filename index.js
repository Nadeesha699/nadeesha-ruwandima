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

  document.getElementById("toggle-btn-2").addEventListener("click", () => {
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

  document.getElementById("btn-mobile-menu").addEventListener("click", () => {
    document.getElementById("mobile-menu-panel").style.top = 0;
    document.getElementById("home-main").style.opacity = 0;
    document.getElementById("home-main").style.pointerEvents = "none";
    document.getElementById("about-main").style.opacity = 0;
    document.getElementById("about-main").style.pointerEvents = "none";
  });
  document
    .getElementById("btn-mobile-menu-close")
    .addEventListener("click", () => {
      document.getElementById("mobile-menu-panel").style.top = "-2000px";
      document.getElementById("home-main").style.opacity = 1;
      document.getElementById("home-main").style.pointerEvents = "auto";
      document.getElementById("about-main").style.opacity = 1;
      document.getElementById("about-main").style.pointerEvents = "auto";
    });

  document.getElementById("navigation-link").addEventListener("click", () => {
    document.getElementById("mobile-menu-panel").style.top = "-2000px";
    document.getElementById("home-main").style.opacity = 1;
    document.getElementById("home-main").style.pointerEvents = "auto";
    document.getElementById("about-main").style.opacity = 1;
    document.getElementById("about-main").style.pointerEvents = "auto";
  });

  document.getElementById("navigation-link-1").addEventListener("click", () => {
    document.getElementById("mobile-menu-panel").style.top = "-2000px";
    document.getElementById("home-main").style.opacity = 1;
    document.getElementById("home-main").style.pointerEvents = "auto";
    document.getElementById("about-main").style.opacity = 1;
    document.getElementById("about-main").style.pointerEvents = "auto";
  });

  document.getElementById("navigation-link-2").addEventListener("click", () => {
    document.getElementById("mobile-menu-panel").style.top = "-2000px";
    document.getElementById("home-main").style.opacity = 1;
    document.getElementById("home-main").style.pointerEvents = "auto";
    document.getElementById("about-main").style.opacity = 1;
    document.getElementById("about-main").style.pointerEvents = "auto";
  });

  document.getElementById("navigation-link-3").addEventListener("click", () => {
    document.getElementById("mobile-menu-panel").style.top = "-2000px";
    document.getElementById("home-main").style.opacity = 1;
    document.getElementById("home-main").style.pointerEvents = "auto";
    document.getElementById("about-main").style.opacity = 1;
    document.getElementById("about-main").style.pointerEvents = "auto";
  });

  document.getElementById("navigation-link-4").addEventListener("click", () => {
    document.getElementById("mobile-menu-panel").style.top = "-2000px";
    document.getElementById("home-main").style.opacity = 1;
    document.getElementById("home-main").style.pointerEvents = "auto";
    document.getElementById("about-main").style.opacity = 1;
    document.getElementById("about-main").style.pointerEvents = "auto";
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

  const buttons = document.querySelectorAll("button[id^='btn-']");
  const cards = document.querySelectorAll(".portfolio-card");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.id.replace("btn-", "");

      buttons.forEach((btn) => {
        if (btn === button) {
          btn.classList.add(
            "bg-blue-600",
            "dark:bg-yellow-400",
            "text-white",
            "dark:text-black"
          );
          btn.classList.remove("transparent", "text-blue-600");
        } else {
          btn.classList.remove(
            "bg-blue-600",
            "dark:bg-yellow-400",
            "text-white",
            "dark:text-black"
          );
          btn.classList.add(
            "transparent",
            "text-blue-600",
            "dark:text-yellow-400",
            "border",
            "border-2",
            "border-blue-600",
            "dark:border-yellow-400"
          );
        }
      });

      cards.forEach((card) => {
        if (category === "all" || card.dataset.category === category) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});
