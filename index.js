document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("mobile-menu").addEventListener("click", () => {
    document.getElementById("mobile-menu-panel").style.top = 0;
    document.getElementById("home-img").style.opacity = 0;
    document.getElementById("home-sub2").style.opacity = 0;
  });

  document.getElementById("mobile-menu-close").addEventListener("click", () => {
    document.getElementById("mobile-menu-panel").style.top = "-10000px";
    document.getElementById("home-img").style.opacity = 1;
    document.getElementById("home-sub2").style.opacity = 1;
  });

  document.getElementById("navigation-link").addEventListener("click", () => {
    document.getElementById("mobile-menu-panel").style.top = "-10000px";
    document.getElementById("home-img").style.opacity = 1;
    document.getElementById("home-sub2").style.opacity = 1;
  });

  document.getElementById("navigation-link-1").addEventListener("click", () => {
    document.getElementById("mobile-menu-panel").style.top = "-10000px";
    document.getElementById("home-img").style.opacity = 1;
    document.getElementById("home-sub2").style.opacity = 1;
  });

  document.getElementById("navigation-link-2").addEventListener("click", () => {
    document.getElementById("mobile-menu-panel").style.top = "-10000px";
    document.getElementById("home-img").style.opacity = 1;
    document.getElementById("home-sub2").style.opacity = 1;
  });

  document.getElementById("navigation-link-3").addEventListener("click", () => {
    document.getElementById("mobile-menu-panel").style.top = "-10000px";
    document.getElementById("home-img").style.opacity = 1;
    document.getElementById("home-sub2").style.opacity = 1;
  });

  document.getElementById("navigation-link-4").addEventListener("click", () => {
    document.getElementById("mobile-menu-panel").style.top = "-10000px";
    document.getElementById("home-img").style.opacity = 1;
    document.getElementById("home-sub2").style.opacity = 1;
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
