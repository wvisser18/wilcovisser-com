document.addEventListener("DOMContentLoaded", function () {
  var navToggle = document.getElementById("navToggle");
  var siteNav = document.getElementById("siteNav");

  navToggle.addEventListener("click", function () {
    var isOpen = siteNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen);
  });

  siteNav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      siteNav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
