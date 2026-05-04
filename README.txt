NOVAEDU 학원 상담 신청형 홈페이지 수정본

실행 방법
1. ZIP 압축을 풉니다.
2. index.html 파일을 브라우저에서 엽니다.

반영 내용
- 히어로 영역을 사진 박스가 아닌 전체 배경 이미지 방식으로 수정했습니다.
- 히어로 배경은 background-size: cover로 화면을 꽉 채우게 구성했습니다.
- 텍스트/이미지/카드/버튼 외곽의 둥근 모서리를 제거하고 90도 각 형태로 변경했습니다.
- 우측 하단 플로팅 버튼은 카카오톡 상담하기 + 상담 신청하기 2개로 구성했습니다.
- 상담 신청하기 버튼은 모든 페이지에서 index.html#trial로 이동합니다.
- 카카오톡 상담하기 버튼은 https://pf.kakao.com/_xhDLjX 로 연결됩니다.
- 전화 상담 버튼은 플로팅 영역에서 제거했습니다.
- NOVAEDU / CAMPUS / VEHICLE TIME 상단 드롭다운 메뉴를 유지했습니다.
- VEHICLE TIME 하단 메뉴는 A CAMPUS, B CAMPUS, C CAMPUS 각각 별도 HTML로 분리했습니다.
- HTML, CSS, JS를 유지보수하기 쉽게 세분화했습니다.

파일 구조
novaedu-academy/
├── index.html
├── intro.html
├── notice.html
├── schedule.html
├── campus-a.html
├── campus-b.html
├── campus-c.html
├── vehicle-a.html
├── vehicle-b.html
├── vehicle-c.html
├── assets/
│   ├── images/
│   │   ├── logo.png
│   │   ├── hero-classroom.jpg
│   │   ├── classroom-lecture.jpg
│   │   ├── classroom-discussion.jpg
│   │   └── classroom-illustration.png
│   ├── css/
│   │   ├── variables.css
│   │   ├── base.css
│   │   ├── layout.css
│   │   ├── components.css
│   │   ├── pages.css
│   │   └── responsive.css
│   └── js/
│       ├── navigation.js
│       ├── accordion.js
│       ├── form.js
│       └── main.js

이미지 안내
- 로고: 사용자가 업로드한 로고 이미지를 사용했습니다.
- 학원/교실 관련 이미지는 Unsplash의 무료 사용 가능 이미지를 사용했습니다.
- 실제 고객 사이트 제작 시에는 고객사 학원 사진으로 교체하는 것을 권장합니다.
