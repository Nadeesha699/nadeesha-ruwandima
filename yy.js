document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn-mobile-menu").addEventListener("click", () => {
    document.getElementById("mobile-menu-panel").style.top = 0;
    document.getElementById("home-img").style.opacity = 0;
    document.getElementById("home-img").style.pointerEvents = "none";
    document.getElementById("home-sub2").style.opacity = 0;
    document.getElementById("home-sub2").style.pointerEvents = "none";
    document.getElementById("about-main").style.opacity = 0;
    document.getElementById("about-main").style.pointerEvents = "none";
  });
  document
    .getElementById("btn-mobile-menu-close")
    .addEventListener("click", () => {
      document.getElementById("mobile-menu-panel").style.top = "-2000px";
      document.getElementById("home-img").style.opacity = 1;
      document.getElementById("home-img").style.pointerEvents = "auto";
      document.getElementById("home-sub2").style.opacity = 1;
      document.getElementById("home-sub2").style.pointerEvents = "auto";
      document.getElementById("about-main").style.opacity = 1;
      document.getElementById("about-main").style.pointerEvents = "auto";
    });

  document.getElementById("navigation-link").addEventListener("click", () => {
    document.getElementById("mobile-menu-panel").style.top = "-2000px";
    document.getElementById("home-img").style.opacity = 1;
    document.getElementById("home-img").style.pointerEvents = "auto";
    document.getElementById("home-sub2").style.opacity = 1;
    document.getElementById("home-sub2").style.pointerEvents = "auto";
    document.getElementById("about-main").style.opacity = 1;
    document.getElementById("about-main").style.pointerEvents = "auto";
  });

  document.getElementById("navigation-link-1").addEventListener("click", () => {
    document.getElementById("mobile-menu-panel").style.top = "-2000px";
    document.getElementById("home-img").style.opacity = 1;
    document.getElementById("home-img").style.pointerEvents = "auto";
    document.getElementById("home-sub2").style.opacity = 1;
    document.getElementById("home-sub2").style.pointerEvents = "auto";
    document.getElementById("about-main").style.opacity = 1;
    document.getElementById("about-main").style.pointerEvents = "auto";
  });

  document.getElementById("navigation-link-2").addEventListener("click", () => {
    document.getElementById("mobile-menu-panel").style.top = "-2000px";
    document.getElementById("home-img").style.opacity = 1;
    document.getElementById("home-img").style.pointerEvents = "auto";
    document.getElementById("home-sub2").style.opacity = 1;
    document.getElementById("home-sub2").style.pointerEvents = "auto";
    document.getElementById("about-main").style.opacity = 1;
    document.getElementById("about-main").style.pointerEvents = "auto";
  });

  document.getElementById("navigation-link-3").addEventListener("click", () => {
    document.getElementById("mobile-menu-panel").style.top = "-2000px";
    document.getElementById("home-img").style.opacity = 1;
    document.getElementById("home-img").style.pointerEvents = "auto";
    document.getElementById("home-sub2").style.opacity = 1;
    document.getElementById("home-sub2").style.pointerEvents = "auto";
    document.getElementById("about-main").style.opacity = 1;
    document.getElementById("about-main").style.pointerEvents = "auto";
  });

  document.getElementById("navigation-link-4").addEventListener("click", () => {
    document.getElementById("mobile-menu-panel").style.top = "-2000px";
    document.getElementById("home-img").style.opacity = 1;
    document.getElementById("home-img").style.pointerEvents = "auto";
    document.getElementById("home-sub2").style.opacity = 1;
    document.getElementById("home-sub2").style.pointerEvents = "auto";
    document.getElementById("about-main").style.opacity = 1;
    document.getElementById("about-main").style.pointerEvents = "auto";
  });

  document.getElementById("home-main").addEventListener("mouseout", () => {
    document.getElementById("btn-up-arrow").style.opacity = 1;
  });
  document.getElementById("home-main").addEventListener("mouseover", () => {
    document.getElementById("btn-up-arrow").style.opacity = 0;
  });

  document.getElementById("home-main").addEventListener("touchmove", () => {
    document.getElementById("btn-up-arrow").style.opacity = 0;
  });

  document.getElementById("about-main").addEventListener("touchmove", () => {
    document.getElementById("btn-up-arrow").style.opacity = 1;
  });

  document.getElementById("lng-main").addEventListener("touchmove", () => {
    document.getElementById("btn-up-arrow").style.opacity = 1;
  });

  document
    .getElementById("about-two-main")
    .addEventListener("touchmove", () => {
      document.getElementById("btn-up-arrow").style.opacity = 1;
    });

  document
    .getElementById("portfolio-main")
    .addEventListener("touchmove", () => {
      document.getElementById("btn-up-arrow").style.opacity = 1;
    });

  document.getElementById("footer-main").addEventListener("touchmove", () => {
    document.getElementById("btn-up-arrow").style.opacity = 1;
  });

  document.getElementById("btn-up-arrow").addEventListener("click", () => {
    document.querySelector(".main").scrollTo({ top: 0, behavior: "smooth" });
  });
});
