import { defineCollection, z } from 'astro:content';

// 작품 하나 = src/content/works/ 폴더의 마크다운 파일 하나.
// 아래 frontmatter 필드를 채우면 그리드와 상세 페이지가 자동 생성됩니다.
const works = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),                 // 작품 제목
    // 공개일. '2026-05' 또는 '2026-05-10'. 그리드는 이 값의 최신순으로 자동 정렬.
    date: z.preprocess(
      (v) => (v instanceof Date ? v.toISOString().slice(0, 10) : v),
      z.string().regex(/^\d{4}-\d{2}(-\d{2})?$/, "date는 '2026-05' 또는 '2026-05-10' 형식"),
    ),
    logline: z.string().optional(),    // 한 줄 설명 (카드 / 상세 상단)
    runtime: z.string().optional(),    // 예: '8 min'
    role: z.string().optional(),       // 예: 'Director'
    tools: z.array(z.string()).optional(), // 예: ['Seedance 2.0', 'Kling']

    poster: z.string().optional(),     // 카드/상세 대표 이미지. 예: '/works/inumbra.jpg'
    video: z.string().optional(),      // 상세 페이지 mp4. 예: '/works/inumbra.mp4'
    embed: z.string().optional(),      // 또는 YouTube/Vimeo URL (video보다 우선 낮음)
    stills: z.array(z.string()).optional(), // 추가 스틸 이미지 경로들

    featured: z.boolean().optional(),  // true면 그리드 상단에 강조
    draft: z.boolean().optional(),     // true면 사이트에서 숨김
  }).transform((data) => ({ ...data, year: Number(data.date.slice(0, 4)) })), // 연도는 date에서 자동 추출
});

export const collections = { works };
