# Vibe Coding Blog PRD (Product Requirements Document)

## 1. 프로젝트 개요

- **목표:**
  - 프론트엔드 개발자로서의 역량을 어필할 수 있는 포트폴리오 겸 블로그 사이트 구축
  - 최신 Next.js 15, SSR 100%, FSD 구조, 클린코드, 커스텀 MDX, 자동화된 협업 프로세스 등 최신 기술과 구조 적용

## 2. 주요 기능

- 블로그 포스트 목록/상세/작성/수정/삭제 (MDX 기반)
- 태그 시스템 및 태그별 필터링
- 검색 기능 (포스트/태그/내용)
- 반응형 레이아웃, 다크모드
- 코드 하이라이팅, 이미지/미디어 지원
- SEO/OG 태그, 소셜 공유
- 포트폴리오 소개/프로젝트/이력 페이지
- (선택) 댓글, 방문자 통계, RSS 등

## 3. 기술 스택

- **Framework:** Next.js 15 (App Router, SSR 100%)
- **언어:** TypeScript
- **스타일:** Tailwind CSS, shadcn/ui 일부
- **마크다운:** MDX, remark-gfm, gray-matter
- **상태관리:** React Context (필요시)
- **배포:** Vercel (예정)
- **패키지 매니저:** pnpm
- **테스트:** Jest, React Testing Library (예정)

## 4. 개발 원칙 및 규칙

- FSD(Feature Sliced Design) 폴더 구조
- 커서 룰, 클린코드, 한글 주석/문서화
- GitHub 이슈-브랜치-PR-머지 프로세스 준수
- 브랜치: `feature/이슈번호-설명` 규칙
- PR 템플릿, 이슈 템플릿 활용
- SSR 100% 유지, Client 컴포넌트 최소화

## 5. 마일스톤

1. 프로젝트 초기 세팅 및 FSD 구조 적용
2. MDX 기반 블로그 포스트 시스템 구축
3. 기본 레이아웃/메인/소개 페이지 구현
4. 태그/검색/코드 하이라이팅 등 부가 기능
5. 포트폴리오/이력/프로젝트 페이지 추가
6. 배포 및 문서화

## 6. 폴더 구조 예시

```
src/
  app/           # Next.js App Router
  entities/      # 도메인 엔티티(포스트, 태그 등)
  features/      # 주요 기능 단위(검색, 태그 등)
  shared/        # 공통 컴포넌트, 유틸, 훅
  widgets/       # 복합 UI 블록
  pages/         # (필요시) 라우트 단위
  content/posts/ # MDX 포스트
```

---

> 본 문서는 지속적으로 업데이트됩니다. (최종 수정: 2025-05-20)
