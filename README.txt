NOVAEDU 학원 상담 신청형 홈페이지 확장본

실행 방법
1. ZIP 압축을 풉니다.
2. index.html 파일을 브라우저에서 엽니다.

이번 확장 반영 내용
- schedule.html 일정표 페이지에 2026년 5월 월간 달력 UI를 추가했습니다.
- 달력 일정 클릭 시 우측 상세 안내 패널이 바뀌는 JavaScript 기능을 추가했습니다.
- schedule.html에 캠퍼스별 주간 시간표 탭과 시험 대비 4주 로드맵을 추가했습니다.
- notice.html을 검색, 카테고리 필터, 고정 공지, 카드형 게시판 구조로 확장했습니다.
- intro.html에 학원 공간 구성도, 학습관리 루프, 학생별 관리 대시보드, 운영 원칙 카드를 추가했습니다.
- campus-a/b/c.html에 캠퍼스 프로필 표, 집중 관리 카드, 하루 수업 흐름, 대표 시간표, 공간 갤러리를 추가했습니다.
- vehicle-a/b/c.html에 차량 노선 탭, CSS 노선도, 등원·하원 상세 시간표, 안전 안내 카드를 추가했습니다.
- index.html에 운영 현황판, 학습 리포트 미리보기, 캠퍼스 비교표, 월간 이벤트 영역을 추가했습니다.
- assets/css/enhancements.css 파일을 새로 추가해 확장 콘텐츠 스타일을 분리했습니다.
- assets/js/enhancements.js 파일을 새로 추가해 탭, 달력 상세, 공지 필터 기능을 분리했습니다.

기존 유지 내용
- 전체 화면 히어로 배경 이미지 구조를 유지했습니다.
- 텍스트/이미지/카드/버튼 외곽은 기존 요청대로 둥근 모서리 없이 90도 각 형태를 유지했습니다.
- 우측 하단 플로팅 버튼은 카카오톡 상담하기 + 상담 신청하기 2개로 유지했습니다.
- 상담 신청하기 버튼은 모든 페이지에서 index.html#trial로 이동합니다.
- 카카오톡 상담하기 버튼은 https://pf.kakao.com/_xhDLjX 로 연결됩니다.
- NOVAEDU / CAMPUS / VEHICLE TIME 상단 드롭다운 메뉴를 유지했습니다.
- VEHICLE TIME 하단 메뉴는 A CAMPUS, B CAMPUS, C CAMPUS 각각 별도 HTML로 유지했습니다.

파일 구조
학원 - 노바에듀 확장본/
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
├── README.txt
├── assets/
│   ├── images/
│   ├── css/
│   │   ├── variables.css
│   │   ├── base.css
│   │   ├── layout.css
│   │   ├── components.css
│   │   ├── pages.css
│   │   ├── responsive.css
│   │   └── enhancements.css
│   └── js/
│       ├── navigation.js
│       ├── accordion.js
│       ├── form.js
│       ├── main.js
│       └── enhancements.js

주의
- 본 페이지는 포트폴리오용 샘플 사이트이며 실제 연락처, 실제 주소, 실제 학원 정보가 아닙니다.
- 실제 고객 사이트 제작 시 일정, 공지, 차량 노선, 캠퍼스 이미지, 학부모 후기 등은 고객사 자료로 교체하는 것을 권장합니다.
