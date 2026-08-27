# 찜콩
<img width="1200" height="672" alt="image" src="https://github.com/user-attachments/assets/1f650a14-cb59-462a-893e-490b2563f7aa" />

**[찜콩 바로가기(개발중)](https://jjimkong.vercel.app)**
<br />

## 프로젝트 개요

**찜콩**은 내가 다녀온 장소를 기록하고, 원할 때 편하게 꺼내볼 수 있는 개인 리뷰 저장소입니다.

기존 리뷰 플랫폼에는 몇 가지 아쉬운 점이 있었습니다.

1. 비추천 리뷰가 지워지는 **리뷰 클렌징** 때문에, 정작 필요한 솔직한 후기를 남기거나 찾기 어려움
2. 다녀온 장소를 기억에만 의존하게 되어, 별로였던 곳을 다시 방문하거나 친구에게 추천할 곳이 떠오르지 않음

찜콩은 이 문제를 해결하기 위해 다음을 제공합니다.

1. 남의 눈치를 볼 필요 없는, **나만 볼 수 있는 솔직한 기록 공간**
2. 카테고리·지역·정렬 필터로 **내 기록을 한눈에 탐색**하고 필요할 때 **공유**할 수 있는 리스트

"내가 좋아하는 장소를 특별히 저장해두고 싶다"는 생각에서 출발해, *찜콩!* 하고 도장을 찍는 느낌을 살린 이름과 로고를 만들었습니다.

### 📅 개발 기간

2025.10.02 ~ (진행 중)

### 👥 팀원

| 역할 | 이름 | GitHub |
| --- | --- | --- |
| Frontend | 강하영 | [@Hayoung0708](https://github.com/Hayoung0708) |
| Backend | 문재경 | [@MoonJaeGyeong](https://github.com/MoonJaeGyeong) |

### 🛠 기술 스택

| 항목 | 사용 기술 |
| --- | --- |
| Language | ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white) |
| Library | ![React](https://img.shields.io/badge/React_19-61DAFB?style=flat&logo=react&logoColor=black) ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat&logo=reactrouter&logoColor=white) |
| Build | ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white) |
| State | ![Zustand](https://img.shields.io/badge/Zustand-433E38?style=flat&logo=react&logoColor=white) |
| Style | ![TailwindCSS](https://img.shields.io/badge/Tailwind_v4-06B6D4?style=flat&logo=tailwind-css&logoColor=white) ![Lucide](https://img.shields.io/badge/Lucide-F56565?style=flat&logo=lucide&logoColor=white) |
| Convention | ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat&logo=eslint&logoColor=white) |
| Deploy | ![Vercel](https://img.shields.io/badge/Vercel-20232a?style=flat&logo=vercel&logoColor=white) |

<br />

## 주요 기능

### 🏠 홈 — 내 리뷰 모아보기
내가 작성한 리뷰를 카드 리스트로 확인합니다.

- **검색** — 가게 이름, 리뷰 내용으로 검색
- **카테고리** — 전체 / 식당 / 카페 / 숙소 / 액티비티 (가로 스크롤, 확장 가능)
- **필터 & 정렬** — 지역 다중 선택, 최신순 등 정렬 기준 선택
- **스크롤 인터랙션** — 스크롤 시 헤더 축소, 플로팅 필터 버튼 이동, Top 버튼 노출

### ✍️ 리뷰 작성 — 퍼널 모델
한 화면에 많은 정보를 요구하지 않도록, **한 스텝당 하나의 정보만** 입력하는 퍼널 구조를 적용했습니다.

- 입력한 정보가 화면에 쌓이며 보여져, 다음 스텝으로 넘어가도 **언제든 이전 정보를 확인하고 수정** 가능
- 별점 선택 시 "최고예요", "평범해요" 같은 **안내 코멘트**를 함께 노출해 점수 기준을 명확히 함

### 🔧 리뷰 수정 — 단일 페이지
퍼널은 작성에는 유리하지만 수정에는 비효율적이라는 판단에 따라, 수정 화면은 **모든 정보를 한 페이지에서 확인하고 필요한 부분만 바로 고칠 수 있도록** 분리해 설계했습니다.

### 👤 마이페이지
- 함께 쓰기(공동 편집), 리스트 공유, 찜한 리뷰 관리
- 테마 설정, 약관 및 개인정보 처리방침, 서비스 정보

<br />

## 프로젝트 구조
라우팅 로직은 `routes` 폴더에서 관리하며, 하단 네비게이션(Gnb)을 공유하는 페이지는 `RootLayout` 하위에 배치했습니다. PC 환경에서도 모바일과 유사한 비율로 보이도록 최대 너비를 제한했습니다.

```
/                      Home        홈 (리뷰 리스트)
/login                 Login       로그인
/mypage                Mypage      마이페이지
  ├─ /collaborate      Collaborate 함께 쓰기
  ├─ /share            Share       공유
  ├─ /likes            Likes       찜 목록
  ├─ /theme            Theme       테마 설정
  ├─ /terms-of-service TermsOfService
  ├─ /privacy-policy   PrivacyPolicy
  └─ /information      Information
/review/:placeId       Review      리뷰 상세
/write                 Write       리뷰 작성
/edit/:postId          Edit        리뷰 수정
*                      NotFound
```

## 개발 기록
- [[찜콩] 프로젝트 기획과 디자인, UX를 향한 작은 고민들](https://velog.io/@rkdgkdudsam/%EC%B0%9C%EC%BD%A9-1-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EA%B8%B0%ED%9A%8D%EA%B3%BC-%EB%94%94%EC%9E%90%EC%9D%B8-UX%EB%A5%BC-%ED%96%A5%ED%95%9C-%EC%9E%91%EC%9D%80-%EA%B3%A0%EB%AF%BC%EB%93%A4)
- [[찜콩] 라우팅, Home 페이지 퍼블리싱과 Sticky, Modal Animation Issue](https://velog.io/@rkdgkdudsam/%EC%B0%9C%EC%BD%A9-2-Home-%ED%8E%98%EC%9D%B4%EC%A7%80-%ED%8D%BC%EB%B8%94%EB%A6%AC%EC%8B%B1)
