document.addEventListener("DOMContentLoaded", () => {

  const root = document.documentElement;

  localStorage.setItem("theme", "dark");

  document.getElementById("toggle-btn-1").addEventListener("click", () => {
    
    if (localStorage.getItem("theme") == "dark") {
      root.classList.add("dark");
      localStorage.setItem("theme", "light");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "dark");
    }
  });

  document.getElementById("toggle-btn-2").addEventListener("click", () => {
    if (localStorage.getItem("theme") == "dark") {
      root.classList.add("dark");
      localStorage.setItem("theme", "light");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "dark");
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
    document.title = "nadeesha-ruwandima | Home";
  });

  document.getElementById("about-main").addEventListener("mouseenter", () => {
    document.title = "nadeesha-ruwandima | About";
  });

  document.getElementById("lng-main").addEventListener("mouseenter", () => {
    document.title = "nadeesha-ruwandima | Skills";
  });

  document
    .getElementById("about-two-main")
    .addEventListener("mouseenter", () => {
      document.title = "nadeesha-ruwandima | What I do";
    });

  document
    .getElementById("portfolio-main")
    .addEventListener("mouseenter", () => {
      document.title = "nadeesha-ruwandima | Portfolio";
    });

  document.getElementById("footer-main").addEventListener("mouseenter", () => {
    document.title = "nadeesha-ruwandima | Contact";
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
    "downlaod-div"
  ].forEach((id) => {
    observer.observe(document.getElementById(id));
  });
});
