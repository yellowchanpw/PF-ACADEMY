document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".mobile-menu-button");
  const mainNav = document.querySelector(".main-nav");
  const navLinks = document.querySelectorAll(".main-nav a");
  const faqItems = document.querySelectorAll(".faq-item");
  const consultForm = document.getElementById("consultForm");
  const formMessage = document.getElementById("formMessage");
  const phoneButtons = document.querySelectorAll(".js-phone-button");
  const kakaoButtons = document.querySelectorAll(".js-kakao-button");
  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  /* 모바일 메뉴 */
  if (menuButton && mainNav) {
    menuButton.addEventListener("click", function () {
      const isOpen = mainNav.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "메뉴 닫기" : "메뉴 열기");
    });

    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        mainNav.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "메뉴 열기");
      });
    });
  }

  /* 현재 섹션 메뉴 활성화 */
  const sections = Array.from(navLinks)
    .map(function (link) {
      const id = link.getAttribute("href");
      if (!id || !id.startsWith("#")) return null;
      return document.querySelector(id);
    })
    .filter(Boolean);

  if ("IntersectionObserver" in window && sections.length > 0) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            navLinks.forEach(function (link) {
              link.classList.remove("active");

              if (link.getAttribute("href") === "#" + entry.target.id) {
                link.classList.add("active");
              }
            });
          }
        });
      },
      {
        rootMargin: "-30% 0px -60% 0px",
        threshold: 0
      }
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  /* FAQ 아코디언 */
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
      } else {
        item.classList.remove("open");
        if (icon) icon.textContent = "+";
      }
    });
  });

  /* 전화 상담 버튼 샘플 동작 */
  phoneButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      alert("포트폴리오 샘플입니다. 실제 제작 시 학원 전화번호로 연결됩니다.");
    });
  });

  /* 카카오 상담 버튼 샘플 동작 */
  kakaoButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      alert("포트폴리오 샘플입니다. 실제 제작 시 카카오채널 상담 링크로 연결됩니다.");
    });
  });

  /* 상담 신청 폼 검증 */
  if (consultForm) {
    consultForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const parentName = document.getElementById("parentName").value.trim();
      const studentGrade = document.getElementById("studentGrade").value;
      const phone = document.getElementById("phone").value.trim();
      const interest = document.getElementById("interest").value;
      const privacy = document.getElementById("privacy").checked;

      if (!parentName) {
        showFormMessage("학부모 성함을 입력해주세요.", "error");
        return;
      }

      if (!studentGrade) {
        showFormMessage("학생 학년을 선택해주세요.", "error");
        return;
      }

      if (!phone) {
        showFormMessage("연락처를 입력해주세요.", "error");
        return;
      }

      if (!isValidPhone(phone)) {
        showFormMessage("연락처 형식을 확인해주세요. 예: 010-0000-0000", "error");
        return;
      }

      if (!interest) {
        showFormMessage("관심 수업을 선택해주세요.", "error");
        return;
      }

      if (!privacy) {
        showFormMessage("개인정보 수집 안내 확인에 체크해주세요.", "error");
        return;
      }

      showFormMessage(
        "상담 신청이 접수된 것처럼 표시되는 샘플 기능입니다. 실제 제작 시 관리자 이메일, 문자, DB 저장 등으로 연결할 수 있습니다.",
        "success"
      );

      consultForm.reset();
    });
  }

  function showFormMessage(message, type) {
    if (!formMessage) return;

    formMessage.textContent = message;
    formMessage.className = "form-message " + type;
  }

  function isValidPhone(phone) {
    const phonePattern = /^01[0-9]-?\d{3,4}-?\d{4}$/;
    return phonePattern.test(phone);
  }
});