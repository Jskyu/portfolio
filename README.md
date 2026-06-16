# 정성규 · Backend Engineer Portfolio

공공기관 SI 20개+ 프로젝트를 수행한 백엔드 개발자 정성규의 포트폴리오 사이트.

- 운영 도메인: <https://Jskyu.github.io/portfolio/>
- 케이스 스터디: 사내 OpenSearch 검색엔진 구축 (5개+ 기관 도입) · 과학기술 AI 데이터 공유·활용 서비스 (AIDA / KISTI · iRODS 6TB · MAU ×10)

## 스택

| 영역 | 기술 |
|------|------|
| UI | React 19 · TypeScript |
| 빌드 | Vite 8 |
| 스타일 | Tailwind CSS v4 |
| 애니메이션 | Framer Motion |
| 테스트 | Vitest · Testing Library |
| 배포 | GitHub Pages (GitHub Actions) |

## 구조

```
src/
├── main.tsx                  # React 루트 마운트
├── App.tsx                   # 섹션 조합 + 스크롤 애니메이션
├── data/
│   └── portfolio.ts          # 모든 콘텐츠 데이터 (as const)
└── components/
    ├── Navbar.tsx             # 스크롤 감지 · 고정 헤더
    ├── Hero.tsx               # 타이틀 · 기술태그 · 통계
    ├── About.tsx              # 2컬럼 소개 + 전문분야 리스트
    ├── Career.tsx             # 경력·학력 row형 타임라인
    ├── Skills.tsx             # 6카테고리 Tech Stack 그리드
    ├── Projects.tsx           # 케이스 스터디 아코디언 카드
    ├── Troubleshooting.tsx    # 기술 문제 해결 사례
    └── Contact.tsx            # 이메일 · GitHub

public/
├── flow.png                  # OpenSearch 검색엔진 아키텍처 다이어그램
└── favicon.svg
```

## 개발

```bash
npm install
npm run dev       # Vite 개발 서버 → http://localhost:5173
npm run build     # 프로덕션 빌드 → dist/
npm test          # Vitest 단위 테스트
```

## 배포

`master` 브랜치에 push하면 GitHub Actions가 자동으로 빌드 후 GitHub Pages에 배포한다.

```
.github/workflows/deploy.yml
```

## 콘텐츠 갱신

모든 콘텐츠는 `src/data/portfolio.ts` 하나에 집중되어 있다.

| 항목 | 필드 |
|------|------|
| 기본 정보 | `name` · `email` · `github` · `tagline` |
| 소개 문단 | `about` |
| 전문분야 | `expertise` |
| 경력 | `career` (회사 · 기간 · 역할 · 프로젝트 목록) |
| 기술 스택 | `skills` (카테고리 · 배지 목록) |
| 케이스 스터디 | `projects` (문제 · 아키텍처 · 결과 · 트러블슈팅) |
| 트러블슈팅 | `troubleshooting` (문제 · 해결 · 결과) |

## 디자인 원칙

- 흰 배경 + 인디고(`indigo-500/600`) 단일 액센트
- 시스템 산세리프 본문, `font-mono`로 라벨·수치·코드 강조
- 섹션 레이블 `01 — ABOUT` 포맷, 헤어라인 구분선
- Framer Motion 스크롤 페이드업, `viewport: { once: true }`
