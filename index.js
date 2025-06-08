document.getElementById("mobile-menu").addEventListener("click", () => {
  document.getElementById("mobile-menu-panel").style.top = 0;
});

document.getElementById("mobile-menu-close").addEventListener("click", () => {
  document.getElementById("mobile-menu-panel").style.top = "-10000px";
});

document.getElementById("navigation-link").addEventListener("click", () => {
  document.getElementById("mobile-menu-panel").style.top = "-10000px";
});

document.getElementById("navigation-link-1").addEventListener("click", () => {
  document.getElementById("mobile-menu-panel").style.top = "-10000px";
});

document.getElementById("navigation-link-2").addEventListener("click", () => {
  document.getElementById("mobile-menu-panel").style.top = "-10000px";
});

document.getElementById("navigation-link-3").addEventListener("click", () => {
  document.getElementById("mobile-menu-panel").style.top = "-10000px";
});

document.getElementById("navigation-link-4").addEventListener("click", () => {
  document.getElementById("mobile-menu-panel").style.top = "-10000px";
});

document.getElementById("btn-readmore").addEventListener("click", () => {
  const element = document.getElementById("about-p2-1");
  const currunetProp = window
    .getComputedStyle(element)
    .getPropertyValue("display");
  if (currunetProp === "flex") {
    document.getElementById("btn-readmore").innerText = "read more";
    document.getElementById("about-p2-1").style.display = "none";
  } else {
    document.getElementById("btn-readmore").innerText = "read less";
    document.getElementById("about-p2-1").style.display = "flex";
  }
});
