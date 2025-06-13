document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("mobile-menu").addEventListener("click", () => {
    document.getElementById("mobile-menu-panel").style.top = 0;
    document.getElementById("home-img").style.opacity = 0;
    document.getElementById("home-img").style.pointerEvents = "none";
    document.getElementById("home-sub2").style.opacity = 0;
    document.getElementById("home-sub2").style.pointerEvents = "none";
    document.getElementById("about-main").style.opacity = 0;
    document.getElementById("about-main").style.pointerEvents = "none";
  });

  document.getElementById("mobile-menu-close").addEventListener("click", () => {
    document.getElementById("mobile-menu-panel").style.top = "-10000px";
    document.getElementById("home-img").style.opacity = 1;
    document.getElementById("home-img").style.pointerEvents = "auto";
    document.getElementById("home-sub2").style.opacity = 1;
    document.getElementById("home-sub2").style.pointerEvents = "auto";
    document.getElementById("about-main").style.opacity = 1;
    document.getElementById("about-main").style.pointerEvents = "auto";
  });

  document.getElementById("navigation-link").addEventListener("click", () => {
    document.getElementById("mobile-menu-panel").style.top = "-10000px";
    document.getElementById("home-img").style.opacity = 1;
    document.getElementById("home-img").style.pointerEvents = "auto";
    document.getElementById("home-sub2").style.opacity = 1;
    document.getElementById("home-sub2").style.pointerEvents = "auto";
    document.getElementById("about-main").style.opacity = 1;
    document.getElementById("about-main").style.pointerEvents = "auto";
  });

  document.getElementById("navigation-link-1").addEventListener("click", () => {
    document.getElementById("mobile-menu-panel").style.top = "-10000px";
    document.getElementById("home-img").style.opacity = 1;
    document.getElementById("home-img").style.pointerEvents = "auto";
    document.getElementById("home-sub2").style.opacity = 1;
    document.getElementById("home-sub2").style.pointerEvents = "auto";
    document.getElementById("about-main").style.opacity = 1;
    document.getElementById("about-main").style.pointerEvents = "auto";
  });

  document.getElementById("navigation-link-2").addEventListener("click", () => {
    document.getElementById("mobile-menu-panel").style.top = "-10000px";
    document.getElementById("home-img").style.opacity = 1;
    document.getElementById("home-img").style.pointerEvents = "auto";
    document.getElementById("home-sub2").style.opacity = 1;
    document.getElementById("home-sub2").style.pointerEvents = "auto";
    document.getElementById("about-main").style.opacity = 1;
    document.getElementById("about-main").style.pointerEvents = "auto";
  });

  document.getElementById("navigation-link-3").addEventListener("click", () => {
    document.getElementById("mobile-menu-panel").style.top = "-10000px";
    document.getElementById("home-img").style.opacity = 1;
    document.getElementById("home-img").style.pointerEvents = "auto";
    document.getElementById("home-sub2").style.opacity = 1;
    document.getElementById("home-sub2").style.pointerEvents = "auto";
    document.getElementById("about-main").style.opacity = 1;
    document.getElementById("about-main").style.pointerEvents = "auto";
  });

  document.getElementById("navigation-link-4").addEventListener("click", () => {
    document.getElementById("mobile-menu-panel").style.top = "-10000px";
    document.getElementById("home-img").style.opacity = 1;
    document.getElementById("home-img").style.pointerEvents = "auto";
    document.getElementById("home-sub2").style.opacity = 1;
    document.getElementById("home-sub2").style.pointerEvents = "auto";
    document.getElementById("about-main").style.opacity = 1;
    document.getElementById("about-main").style.pointerEvents = "auto";
  });

  document.getElementById("btn-readmore").addEventListener("click", () => {
    const element = document.getElementById("about-p2-1");
    const currunetProp = window
      .getComputedStyle(element)
      .getPropertyValue("max-height");
    if (currunetProp === "500px") {
      document.getElementById("btn-readmore").innerText = "read more";
      document.getElementById("about-p2-1").style.maxHeight = 0;
    } else {
      document.getElementById("btn-readmore").innerText = "read less";
      document.getElementById("about-p2-1").style.maxHeight = "500px";
    }
  });

  document
    .getElementById("portfolio-card-1")
    .addEventListener("mouseenter", () => {
      document.getElementById("portfolio-div-1").style.background =
        "rgba(0, 0, 0, 0.77)";
      document.getElementById("portfolio-div-1").style.opacity = 1;
    });

  document
    .getElementById("portfolio-card-1")
    .addEventListener("mouseleave", () => {
      document.getElementById("portfolio-div-1").style.background =
        "rgba(0, 0, 0, 0)";
      document.getElementById("portfolio-div-1").style.opacity = 0;
    });

  document
    .getElementById("portfolio-card-2")
    .addEventListener("mouseenter", () => {
      document.getElementById("portfolio-div-2").style.background =
        "rgba(0, 0, 0, 0.77)";
      document.getElementById("portfolio-div-2").style.opacity = 1;
    });

  document
    .getElementById("portfolio-card-2")
    .addEventListener("mouseleave", () => {
      document.getElementById("portfolio-div-2").style.background =
        "rgba(0, 0, 0, 0)";
      document.getElementById("portfolio-div-2").style.opacity = 0;
    });

  document
    .getElementById("portfolio-card-3")
    .addEventListener("mouseenter", () => {
      document.getElementById("portfolio-div-3").style.background =
        "rgba(0, 0, 0, 0.77)";
      document.getElementById("portfolio-div-3").style.opacity = 1;
    });

  document
    .getElementById("portfolio-card-3")
    .addEventListener("mouseleave", () => {
      document.getElementById("portfolio-div-3").style.background =
        "rgba(0, 0, 0, 0)";
      document.getElementById("portfolio-div-3").style.opacity = 0;
    });

  document
    .getElementById("portfolio-card-4")
    .addEventListener("mouseenter", () => {
      document.getElementById("portfolio-div-4").style.background =
        "rgba(0, 0, 0, 0.77)";
      document.getElementById("portfolio-div-4").style.opacity = 1;
    });

  document
    .getElementById("portfolio-card-4")
    .addEventListener("mouseleave", () => {
      document.getElementById("portfolio-div-4").style.background =
        "rgba(0, 0, 0, 0)";
      document.getElementById("portfolio-div-4").style.opacity = 0;
    });

  document
    .getElementById("portfolio-card-5")
    .addEventListener("mouseenter", () => {
      document.getElementById("portfolio-div-5").style.background =
        "rgba(0, 0, 0, 0.77)";
      document.getElementById("portfolio-div-5").style.opacity = 1;
    });

  document
    .getElementById("portfolio-card-5")
    .addEventListener("mouseleave", () => {
      document.getElementById("portfolio-div-5").style.background =
        "rgba(0, 0, 0, 0)";
      document.getElementById("portfolio-div-5").style.opacity = 0;
    });

  document
    .getElementById("portfolio-card-6")
    .addEventListener("mouseenter", () => {
      document.getElementById("portfolio-div-6").style.background =
        "rgba(0, 0, 0, 0.77)";
      document.getElementById("portfolio-div-6").style.opacity = 1;
    });

  document
    .getElementById("portfolio-card-6")
    .addEventListener("mouseleave", () => {
      document.getElementById("portfolio-div-6").style.background =
        "rgba(0, 0, 0, 0)";
      document.getElementById("portfolio-div-6").style.opacity = 0;
    });

  document
    .getElementById("portfolio-card-7")
    .addEventListener("mouseenter", () => {
      document.getElementById("portfolio-div-7").style.background =
        "rgba(0, 0, 0, 0.77)";
      document.getElementById("portfolio-div-7").style.opacity = 1;
    });

  document
    .getElementById("portfolio-card-7")
    .addEventListener("mouseleave", () => {
      document.getElementById("portfolio-div-7").style.background =
        "rgba(0, 0, 0, 0)";
      document.getElementById("portfolio-div-7").style.opacity = 0;
    });

  document
    .getElementById("portfolio-card-8")
    .addEventListener("mouseenter", () => {
      document.getElementById("portfolio-div-8").style.background =
        "rgba(0, 0, 0, 0.77)";
      document.getElementById("portfolio-div-8").style.opacity = 1;
    });

  document
    .getElementById("portfolio-card-8")
    .addEventListener("mouseleave", () => {
      document.getElementById("portfolio-div-8").style.background =
        "rgba(0, 0, 0, 0)";
      document.getElementById("portfolio-div-8").style.opacity = 0;
    });

  document
    .getElementById("portfolio-card-9")
    .addEventListener("mouseenter", () => {
      document.getElementById("portfolio-div-9").style.background =
        "rgba(0, 0, 0, 0.77)";
      document.getElementById("portfolio-div-9").style.opacity = 1;
    });

  document
    .getElementById("portfolio-card-9")
    .addEventListener("mouseleave", () => {
      document.getElementById("portfolio-div-9").style.background =
        "rgba(0, 0, 0, 0)";
      document.getElementById("portfolio-div-9").style.opacity = 0;
    });

  document
    .getElementById("portfolio-card-10")
    .addEventListener("mouseenter", () => {
      document.getElementById("portfolio-div-10").style.background =
        "rgba(0, 0, 0, 0.77)";
      document.getElementById("portfolio-div-10").style.opacity = 1;
    });

  document
    .getElementById("portfolio-card-10")
    .addEventListener("mouseleave", () => {
      document.getElementById("portfolio-div-10").style.background =
        "rgba(0, 0, 0, 0)";
      document.getElementById("portfolio-div-10").style.opacity = 0;
    });

  document
    .getElementById("portfolio-card-11")
    .addEventListener("mouseenter", () => {
      document.getElementById("portfolio-div-11").style.background =
        "rgba(0, 0, 0, 0.77)";
      document.getElementById("portfolio-div-11").style.opacity = 1;
    });

  document
    .getElementById("portfolio-card-11")
    .addEventListener("mouseleave", () => {
      document.getElementById("portfolio-div-11").style.background =
        "rgba(0, 0, 0, 0)";
      document.getElementById("portfolio-div-11").style.opacity = 0;
    });

  document
    .getElementById("portfolio-card-12")
    .addEventListener("mouseenter", () => {
      document.getElementById("portfolio-div-12").style.background =
        "rgba(0, 0, 0, 0.77)";
      document.getElementById("portfolio-div-12").style.opacity = 1;
    });

  document
    .getElementById("portfolio-card-12")
    .addEventListener("mouseleave", () => {
      document.getElementById("portfolio-div-12").style.background =
        "rgba(0, 0, 0, 0)";
      document.getElementById("portfolio-div-12").style.opacity = 0;
    });

  document
    .getElementById("portfolio-card-13")
    .addEventListener("mouseenter", () => {
      document.getElementById("portfolio-div-13").style.background =
        "rgba(0, 0, 0, 0.77)";
      document.getElementById("portfolio-div-13").style.opacity = 1;
    });

  document
    .getElementById("portfolio-card-13")
    .addEventListener("mouseleave", () => {
      document.getElementById("portfolio-div-13").style.background =
        "rgba(0, 0, 0, 0)";
      document.getElementById("portfolio-div-13").style.opacity = 0;
    });

  document
    .getElementById("portfolio-card-14")
    .addEventListener("mouseenter", () => {
      document.getElementById("portfolio-div-14").style.background =
        "rgba(0, 0, 0, 0.77)";
      document.getElementById("portfolio-div-14").style.opacity = 1;
    });

  document
    .getElementById("portfolio-card-14")
    .addEventListener("mouseleave", () => {
      document.getElementById("portfolio-div-14").style.background =
        "rgba(0, 0, 0, 0)";
      document.getElementById("portfolio-div-14").style.opacity = 0;
    });

  document.getElementById("home-main").addEventListener("mouseout", () => {
    document.getElementById("btn-up-arrow").style.opacity = 1;
  });
  document.getElementById("home-main").addEventListener("mouseover", () => {
    document.getElementById("btn-up-arrow").style.opacity = 0;
  });

  document.getElementById("btn-up-arrow").addEventListener("click", () => {
    document.querySelector(".main").scrollTo({ top: 0, behavior: "smooth" });
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show"); // for repeat
    }
  });
});
observer.observe(document.getElementById("home-img"));
observer.observe(document.getElementById("home-sub2"));
observer.observe(document.getElementById("about-p"));
observer.observe(document.getElementById("about-p1"));
observer.observe(document.getElementById("about-p2"));
observer.observe(document.getElementById("btn-readmore"));
observer.observe(document.getElementById("about-lbl"));
observer.observe(document.getElementById("lng-lbl1"));
observer.observe(document.getElementById("about-two-main-h"));
observer.observe(document.getElementById("about-main-p"));
observer.observe(document.getElementById("about-two-sub1"));
observer.observe(document.getElementById("portfolio-h1"));
observer.observe(document.getElementById("portfolio-sub2"));
observer.observe(document.getElementById("footer-sub2"));
observer.observe(document.getElementById("footer-sub3"));
observer.observe(document.getElementById("footer-link3"));
