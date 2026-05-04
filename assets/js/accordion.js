document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(function (item) {
    const button = item.querySelector(".faq-question");
    const icon = button ? button.querySelector("span") : null;
    if (!button) return;

    button.addEventListener("click", function () {
      const isOpen = item.classList.contains("open");

      faqItems.forEach(function (otherItem) {
        otherItem.classList.remove("open");
        const otherIcon = otherItem.querySelector(".faq-question span");
        if (otherIcon) otherIcon.textContent = "+";
      });

      if (!isOpen) {
        item.classList.add("open");
        if (icon) icon.textContent = "-";
      }
    });
  });
});
