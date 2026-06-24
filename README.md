# 시네마 포트폴리오 — 출발점 스캐폴드

작품 세계를 보여주는 쇼케이스용 정적 사이트. 풀스크린 쇼릴 랜딩 + 작품
그리드 + 작품별 상세 페이지. 콘텐츠(작품)는 코드에서 분리되어 있어,
**신작 추가는 마크다운 파일 하나만 더하면 됩니다.**

---

## 1. 실행

```bash
npm install
npm run dev
```

→ http://localhost:4321 접속. (영상·이미지를 아직 안 넣어도 어두운
플레이스홀더로 구조가 그대로 보입니다.)

---

## 2. 가장 먼저 바꿀 것 — `src/site.ts`

감독명, 한 줄 태그라인, 쇼릴 영상 경로, 연락처가 여기 모여 있습니다.

쇼릴 영상은 `public/` 폴더에 mp4를 넣고 경로를 적으세요:

```ts
showreelVideo: '/showreel.mp4',
showreelPoster: '/showreel-poster.jpg',
```

---

## 3. 신작 추가하는 법 (핵심)

`src/content/works/` 에 마크다운 파일을 하나 만들면 끝입니다.
그리드와 상세 페이지가 자동 생성되고, 연도 최신순으로 정렬됩니다.

```md
---
title: "작품 제목"
year: 2026
logline: "한 줄 설명."
runtime: "9 min"
role: "각본 · 연출"
tools: ["Seedance 2.0", "Kling"]
poster: "/works/my-film.jpg"     # 대표 이미지 (public/works/ 에 넣기)
video: "/works/my-film.mp4"      # 상세 페이지 영상 (mp4)
# 또는 embed: "https://vimeo.com/123456789"  (YouTube/Vimeo URL)
stills: ["/works/still-1.jpg", "/works/still-2.jpg"]
featured: false                  # true면 그리드 상단 강조
draft: false                     # true면 사이트에서 숨김
---

여기 본문이 작품 상세의 '디렉터스 노트'가 됩니다.
연출 의도를 마크다운으로 자유롭게.
```

- 이미지·영상은 `public/works/` 폴더에 넣고, 위처럼 `/works/...` 경로로 참조.
- `video`(mp4)가 있으면 그걸 쓰고, 없으면 `embed`(유튜브/비메오)를 씁니다.
- 둘 다 없으면 `poster` 이미지가, 그것도 없으면 어두운 플레이스홀더가 표시됩니다.

샘플로 `inumbra.md`, `ash-harbor.md`, `yeonhwa-gut.md` 세 개가 들어
있습니다. 내용 확인 후 지우거나 덮어쓰세요.

---

## 4. 디자인 손보기

- **색**: `src/styles/global.css` 상단의 `:root` 변수만 바꾸면 전체에 반영됩니다.
  (`--ember`가 유일한 강조색 — 촛불 오커. 절제해서 쓰세요.)
- **폰트**: `src/layouts/Base.astro`의 Google Fonts 링크와 global.css의
  `--serif-display / --serif-body / --mono` 변수.
- **랜딩 등장 연출**: `src/components/Hero.astro`.
- **필름 그레인**: global.css의 `.grain`. 강도는 `opacity` 값으로 조절.

---

## 5. 배포 (Vercel 권장 — git push 시 자동 재배포)

1. 이 폴더를 GitHub 저장소로 올립니다.
2. [vercel.com](https://vercel.com) → New Project → 저장소 선택.
   Astro는 자동 인식됩니다 (Build: `astro build`, Output: `dist`).
3. 배포 완료. 이후로는 **새 작품 .md 추가 → `git push` → 자동 배포.**
   AI를 다시 부르거나 코드를 건드릴 필요 없습니다.

> `astro.config.mjs`의 `site` 값을 실제 도메인으로 바꿔두세요.

---

## 구조

```
src/
  site.ts                  ← 전역 설정 (제일 먼저 수정)
  content/
    config.ts              ← 작품 데이터 스키마
    works/*.md             ← 작품 1편 = 파일 1개
  layouts/Base.astro       ← 공통 head·폰트·그레인
  components/
    Hero.astro             ← 풀스크린 쇼릴 랜딩
    WorkCard.astro         ← 그리드 카드
  pages/
    index.astro            ← 랜딩 + 그리드 + About + 푸터
    works/[slug].astro     ← 작품 상세 (자동 생성)
    404.astro
  styles/global.css        ← 토큰·그레인·타이포
public/                    ← 영상·이미지 (showreel.mp4, works/ 등)
```
