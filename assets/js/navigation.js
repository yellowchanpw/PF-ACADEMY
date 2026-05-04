document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".mobile-menu-button");
  const mainNav = document.querySelector(".main-nav");
  const dropdownItems = document.querySelectorAll(".nav-item.has-dropdown");

  if (menuButton && mainNav) {
    menuButton.addEventListener("click", function () {
      const isOpen = mainNav.classList.toggle("open");
      document.body.classList.toggle("menu-open", isOpen);
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "메뉴 닫기" : "메뉴 열기");
    });
  }

  dropdownItems.forEach(function (item) {
    const trigger = item.querySelector(".nav-trigger");
    if (!trigger) return;

    trigger.addEventListener("click", function () {
      if (window.innerWidth > 768) return;

      const isOpen = item.classList.contains("open");
      dropdownItems.forEach(function (other) {
        other.classList.remove("open");
        const otherTrigger = other.querySelector(".nav-trigger");
        if (otherTrigger) otherTrigger.setAttribute("aria-expanded", "false");
      });

      item.classList.toggle("open", !isOpen);
      trigger.setAttribute("aria-expanded", String(!isOpen));
    });
  });

  document.querySelectorAll(".dropdown-menu a").forEach(function (link) {
    link.addEventListener("click", function () {
      if (!mainNav || !menuButton) return;
      mainNav.classList.remove("open");
      document.body.classList.remove("menu-open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "메뉴 열기");
    });
  });
});
