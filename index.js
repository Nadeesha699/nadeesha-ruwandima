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

  document.getElementById("btn-all").addEventListener("click", () => {
    document.getElementById("btn-mobile").classList.add("transparent");
    document.getElementById("btn-mobile").classList.remove("bg-blue-600");
    document
      .getElementById("btn-mobile")
      .classList.remove("dark:bg-yellow-400");
    document.getElementById("btn-mobile").classList.add("text-blue-600");
    document.getElementById("btn-mobile").classList.remove("text-white");
    document.getElementById("btn-mobile").classList.remove("dark:text-black");

    document.getElementById("btn-web").classList.remove("bg-blue-600");
    document.getElementById("btn-web").classList.remove("dark:bg-yellow-400");
    document.getElementById("btn-web").classList.add("transparent");
    document.getElementById("btn-web").classList.remove("text-white");
    document.getElementById("btn-web").classList.remove("dark:text-black");
    document.getElementById("btn-web").classList.add("text-blue-600");

    document.getElementById("btn-game").classList.remove("bg-blue-600");
    document.getElementById("btn-game").classList.remove("dark:bg-yellow-400");
    document.getElementById("btn-game").classList.add("transparent");
    document.getElementById("btn-game").classList.remove("text-white");
    document.getElementById("btn-game").classList.remove("dark:text-black");
    document.getElementById("btn-game").classList.add("text-blue-600");

    document.getElementById("btn-all").classList.add("bg-blue-600");
    document.getElementById("btn-all").classList.add("dark:bg-yellow-400");
    document.getElementById("btn-all").classList.remove("transparent");
    document.getElementById("btn-all").classList.add("text-white");
    document.getElementById("btn-all").classList.add("dark:text-black");
    document.getElementById("btn-all").classList.remove("text-blue-600");
    document.getElementById("btn-all").classList.remove("dark:text-yellow-400");
    document.getElementById("btn-all").classList.remove("border");
    document.getElementById("btn-all").classList.remove("border-2");
    document.getElementById("btn-all").classList.remove("border-blue-600");
    document
      .getElementById("btn-all")
      .classList.remove("dark:border-yellow-400");

    document.getElementById("portfolio-card-1").style.display = "block";
    document.getElementById("portfolio-card-2").style.display = "block";
    document.getElementById("portfolio-card-3").style.display = "block";
    document.getElementById("portfolio-card-4").style.display = "block";
    document.getElementById("portfolio-card-5").style.display = "block";
    document.getElementById("portfolio-card-6").style.display = "block";
    document.getElementById("portfolio-card-7").style.display = "block";
    document.getElementById("portfolio-card-8").style.display = "block";
    document.getElementById("portfolio-card-9").style.display = "block";
    document.getElementById("portfolio-card-10").style.display = "block";
    document.getElementById("portfolio-card-11").style.display = "block";
    document.getElementById("portfolio-card-12").style.display = "block";
    document.getElementById("portfolio-card-13").style.display = "block";
    document.getElementById("portfolio-card-14").style.display = "block";
    document.getElementById("portfolio-card-15").style.display = "block";
    document.getElementById("portfolio-card-16").style.display = "block";
    document.getElementById("portfolio-card-17").style.display = "block";
    document.getElementById("portfolio-card-18").style.display = "block";
    document.getElementById("portfolio-card-19").style.display = "block";
    document.getElementById("portfolio-card-20").style.display = "block";
  });

  document.getElementById("btn-game").addEventListener("click", () => {
    document.getElementById("btn-mobile").classList.add("transparent");
    document.getElementById("btn-mobile").classList.remove("bg-blue-600");
    document
      .getElementById("btn-mobile")
      .classList.remove("dark:bg-yellow-400");
    document.getElementById("btn-mobile").classList.add("text-blue-600");
    document.getElementById("btn-mobile").classList.remove("text-white");
    document.getElementById("btn-mobile").classList.remove("dark:text-black");

    document.getElementById("btn-web").classList.remove("bg-blue-600");
    document.getElementById("btn-web").classList.remove("dark:bg-yellow-400");
    document.getElementById("btn-web").classList.add("transparent");
    document.getElementById("btn-web").classList.remove("text-white");
    document.getElementById("btn-web").classList.remove("dark:text-black");
    document.getElementById("btn-web").classList.add("text-blue-600");

    document.getElementById("btn-game").classList.add("bg-blue-600");
    document.getElementById("btn-game").classList.add("dark:bg-yellow-400");
    document.getElementById("btn-game").classList.remove("transparent");
    document.getElementById("btn-game").classList.add("text-white");
    document.getElementById("btn-game").classList.add("dark:text-black");
    document.getElementById("btn-game").classList.remove("text-blue-600");

    document.getElementById("btn-all").classList.remove("bg-blue-600");
    document.getElementById("btn-all").classList.remove("dark:bg-yellow-400");
    document.getElementById("btn-all").classList.add("transparent");
    document.getElementById("btn-all").classList.remove("text-white");
    document.getElementById("btn-all").classList.remove("dark:text-black");
    document.getElementById("btn-all").classList.add("text-blue-600");
    document.getElementById("btn-all").classList.add("dark:text-yellow-400");
    document.getElementById("btn-all").classList.add("border");
    document.getElementById("btn-all").classList.add("border-2");
    document.getElementById("btn-all").classList.add("border-blue-600");
    document.getElementById("btn-all").classList.add("dark:border-yellow-400");

    document.getElementById("portfolio-card-1").style.display = "none";
    document.getElementById("portfolio-card-2").style.display = "none";
    document.getElementById("portfolio-card-3").style.display = "none";
    document.getElementById("portfolio-card-4").style.display = "none";
    document.getElementById("portfolio-card-5").style.display = "none";
    document.getElementById("portfolio-card-6").style.display = "none";
    document.getElementById("portfolio-card-7").style.display = "block";
    document.getElementById("portfolio-card-8").style.display = "none";
    document.getElementById("portfolio-card-9").style.display = "block";
    document.getElementById("portfolio-card-10").style.display = "none";
    document.getElementById("portfolio-card-11").style.display = "block";
    document.getElementById("portfolio-card-12").style.display = "none";
    document.getElementById("portfolio-card-13").style.display = "none";
    document.getElementById("portfolio-card-14").style.display = "none";
    document.getElementById("portfolio-card-15").style.display = "none";
    document.getElementById("portfolio-card-16").style.display = "none";
    document.getElementById("portfolio-card-17").style.display = "none";
    document.getElementById("portfolio-card-18").style.display = "none";
    document.getElementById("portfolio-card-19").style.display = "none";
    document.getElementById("portfolio-card-20").style.display = "none";
  });

  document.getElementById("btn-web").addEventListener("click", () => {
    document.getElementById("btn-mobile").classList.remove("bg-blue-600");
    document
      .getElementById("btn-mobile")
      .classList.remove("dark:bg-yellow-400");
    document.getElementById("btn-mobile").classList.add("transparent");
    document.getElementById("btn-mobile").classList.remove("text-white");
    document.getElementById("btn-mobile").classList.remove("dark:text-black");
    document.getElementById("btn-mobile").classList.add("text-blue-600");

    document.getElementById("btn-web").classList.remove("transparent");
    document.getElementById("btn-web").classList.add("bg-blue-600");
    document.getElementById("btn-web").classList.add("dark:bg-yellow-400");
    document.getElementById("btn-web").classList.remove("text-blue-600");
    document.getElementById("btn-web").classList.add("text-white");
    document.getElementById("btn-web").classList.add("dark:text-black");

    document.getElementById("btn-game").classList.remove("bg-blue-600");
    document.getElementById("btn-game").classList.remove("dark:bg-yellow-400");
    document.getElementById("btn-game").classList.add("transparent");
    document.getElementById("btn-game").classList.remove("text-white");
    document.getElementById("btn-game").classList.remove("dark:text-black");
    document.getElementById("btn-game").classList.add("text-blue-600");

    document.getElementById("btn-all").classList.remove("bg-blue-600");
    document.getElementById("btn-all").classList.remove("dark:bg-yellow-400");
    document.getElementById("btn-all").classList.add("transparent");
    document.getElementById("btn-all").classList.remove("text-white");
    document.getElementById("btn-all").classList.remove("dark:text-black");
    document.getElementById("btn-all").classList.add("text-blue-600");
    document.getElementById("btn-all").classList.add("dark:text-yellow-400");
    document.getElementById("btn-all").classList.add("border");
    document.getElementById("btn-all").classList.add("border-2");
    document.getElementById("btn-all").classList.add("border-blue-600");
    document.getElementById("btn-all").classList.add("dark:border-yellow-400");

    document.getElementById("portfolio-card-1").style.display = "none";
    document.getElementById("portfolio-card-2").style.display = "block";
    document.getElementById("portfolio-card-3").style.display = "block";
    document.getElementById("portfolio-card-4").style.display = "none";
    document.getElementById("portfolio-card-5").style.display = "block";
    document.getElementById("portfolio-card-6").style.display = "block";
    document.getElementById("portfolio-card-7").style.display = "none";
    document.getElementById("portfolio-card-8").style.display = "block";
    document.getElementById("portfolio-card-9").style.display = "none";
    document.getElementById("portfolio-card-10").style.display = "block";
    document.getElementById("portfolio-card-11").style.display = "none";
    document.getElementById("portfolio-card-12").style.display = "block";
    document.getElementById("portfolio-card-13").style.display = "block";
    document.getElementById("portfolio-card-14").style.display = "none";
    document.getElementById("portfolio-card-15").style.display = "block";
    document.getElementById("portfolio-card-16").style.display = "block";
    document.getElementById("portfolio-card-17").style.display = "block";
    document.getElementById("portfolio-card-18").style.display = "block";
    document.getElementById("portfolio-card-19").style.display = "none";
    document.getElementById("portfolio-card-20").style.display = "block";
  });

  document.getElementById("btn-mobile").addEventListener("click", () => {
    document.getElementById("btn-mobile").classList.remove("transparent");
    document.getElementById("btn-mobile").classList.add("bg-blue-600");
    document.getElementById("btn-mobile").classList.add("dark:bg-yellow-400");
    document.getElementById("btn-mobile").classList.remove("text-blue-600");
    document.getElementById("btn-mobile").classList.add("text-white");
    document.getElementById("btn-mobile").classList.add("dark:text-black");

    document.getElementById("btn-web").classList.remove("bg-blue-600");
    document.getElementById("btn-web").classList.remove("dark:bg-yellow-400");
    document.getElementById("btn-web").classList.add("transparent");
    document.getElementById("btn-web").classList.remove("text-white");
    document.getElementById("btn-web").classList.remove("dark:text-black");
    document.getElementById("btn-web").classList.add("text-blue-600");

    document.getElementById("btn-game").classList.remove("bg-blue-600");
    document.getElementById("btn-game").classList.remove("dark:bg-yellow-400");
    document.getElementById("btn-game").classList.add("transparent");
    document.getElementById("btn-game").classList.remove("text-white");
    document.getElementById("btn-game").classList.remove("dark:text-black");
    document.getElementById("btn-game").classList.add("text-blue-600");

    document.getElementById("btn-all").classList.remove("bg-blue-600");
    document.getElementById("btn-all").classList.remove("dark:bg-yellow-400");
    document.getElementById("btn-all").classList.add("transparent");
    document.getElementById("btn-all").classList.remove("text-white");
    document.getElementById("btn-all").classList.remove("dark:text-black");
    document.getElementById("btn-all").classList.add("text-blue-600");
    document.getElementById("btn-all").classList.add("dark:text-yellow-400");
    document.getElementById("btn-all").classList.add("border");
    document.getElementById("btn-all").classList.add("border-2");
    document.getElementById("btn-all").classList.add("border-blue-600");
    document.getElementById("btn-all").classList.add("dark:border-yellow-400");

    document.getElementById("portfolio-card-1").style.display = "block";
    document.getElementById("portfolio-card-2").style.display = "none";
    document.getElementById("portfolio-card-3").style.display = "none";
    document.getElementById("portfolio-card-4").style.display = "none";
    document.getElementById("portfolio-card-5").style.display = "none";
    document.getElementById("portfolio-card-6").style.display = "none";
    document.getElementById("portfolio-card-7").style.display = "none";
    document.getElementById("portfolio-card-8").style.display = "none";
    document.getElementById("portfolio-card-9").style.display = "none";
    document.getElementById("portfolio-card-10").style.display = "none";
    document.getElementById("portfolio-card-11").style.display = "none";
    document.getElementById("portfolio-card-12").style.display = "none";
    document.getElementById("portfolio-card-13").style.display = "none";
    document.getElementById("portfolio-card-14").style.display = "block";
    document.getElementById("portfolio-card-15").style.display = "none";
    document.getElementById("portfolio-card-16").style.display = "none";
    document.getElementById("portfolio-card-17").style.display = "none";
    document.getElementById("portfolio-card-18").style.display = "none";
    document.getElementById("portfolio-card-19").style.display = "block";
    document.getElementById("portfolio-card-20").style.display = "none";
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
