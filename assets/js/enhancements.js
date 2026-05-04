document.addEventListener("DOMContentLoaded", function () {
  initTabs();
  initCalendarDetail();
  initNoticeFilter();

  function initTabs() {
    const buttons = document.querySelectorAll(".js-tab-button[data-tab-group][data-tab-target]");
    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        const group = button.dataset.tabGroup;
        const target = button.dataset.tabTarget;
        document.querySelectorAll('.js-tab-button[data-tab-group="' + group + '"]').forEach(function (item) {
          item.classList.toggle("is-active", item === button);
        });
        document.querySelectorAll('.tab-panel[data-tab-group="' + group + '"]').forEach(function (panel) {
          panel.classList.toggle("is-active", panel.dataset.tabPanel === target);
        });
      });
    });
  }

  function initCalendarDetail() {
    const detail = document.getElementById("calendarDetail");
    const events = document.querySelectorAll(".calendar-event");
    if (!detail || !events.length) return;

    events.forEach(function (eventButton) {
      eventButton.addEventListener("click", function () {
        detail.innerHTML = "<span>" + escapeHtml(eventButton.dataset.date || "선택 일정") + "</span>" +
          "<h3>" + escapeHtml(eventButton.dataset.title || eventButton.textContent.trim()) + "</h3>" +
          "<p>" + escapeHtml(eventButton.dataset.desc || "상세 안내가 준비 중입니다.") + "</p>";
      });
    });
  }

  function initNoticeFilter() {
    const buttons = document.querySelectorAll(".notice-filter-button");
    const cards = document.querySelectorAll("[data-notice-card]");
    const search = document.getElementById("noticeSearch");
    const empty = document.getElementById("noticeEmpty");
    if (!cards.length) return;

    let currentFilter = "all";

    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        currentFilter = button.dataset.noticeFilter || "all";
        buttons.forEach(function (item) { item.classList.toggle("is-active", item === button); });
        applyNoticeFilter();
      });
    });

    if (search) {
      search.addEventListener("input", applyNoticeFilter);
    }

    function applyNoticeFilter() {
      const keyword = (search ? search.value : "").trim().toLowerCase();
      let visibleCount = 0;

      cards.forEach(function (card) {
        const category = card.dataset.category || "";
        const text = (card.dataset.title + " " + card.textContent).toLowerCase();
        const matchesCategory = currentFilter === "all" || category === currentFilter;
        const matchesKeyword = !keyword || text.includes(keyword);
        const isVisible = matchesCategory && matchesKeyword;
        card.style.display = isVisible ? "grid" : "none";
        if (isVisible) visibleCount += 1;
      });

      if (empty) empty.classList.toggle("show", visibleCount === 0);
    }
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
});
