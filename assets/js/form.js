document.addEventListener("DOMContentLoaded", function () {
  const consultForm = document.getElementById("consultForm");
  const formMessage = document.getElementById("formMessage");

  if (!consultForm) return;

  consultForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const parentName = getValue("parentName");
    const studentGrade = getValue("studentGrade");
    const phone = getValue("phone");
    const interest = getValue("interest");
    const consultType = getValue("consultType");
    const privacy = document.getElementById("privacy")?.checked;

    if (!parentName) return showFormMessage("학부모 성함을 입력해주세요.", "error");
    if (!studentGrade) return showFormMessage("학생 학년을 선택해주세요.", "error");
    if (!phone) return showFormMessage("연락처를 입력해주세요.", "error");
    if (!isValidPhone(phone)) return showFormMessage("연락처 형식을 확인해주세요. 예: 010-0000-0000", "error");
    if (!interest) return showFormMessage("관심 수업을 선택해주세요.", "error");
    if (!consultType) return showFormMessage("희망 상담 방식을 선택해주세요.", "error");
    if (!privacy) return showFormMessage("개인정보 수집 안내 확인에 체크해주세요.", "error");

    showFormMessage("상담 신청이 접수된 것처럼 표시되는 샘플 기능입니다. 실제 제작 시 관리자 이메일, 문자, DB 저장 등으로 연결할 수 있습니다.", "success");
    consultForm.reset();
  });

  function getValue(id) {
    return document.getElementById(id)?.value.trim() || "";
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
