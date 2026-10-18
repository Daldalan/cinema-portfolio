import { defineConfig } from 'astro/config';

export default defineConfig({
  // 실제 도메인. 대표 주소(canonical) 표시와 옛 /works/ 주소 자동 이동에 사용.
  site: 'https://www.studio-dal-ai.kr',
  // Works → Shorts 이름 변경 전 주소로 들어와도 새 주소로 이동
  redirects: {
    '/works': '/shorts',
    '/works/category/[category]': '/shorts/category/[category]',
    '/works/[slug]': '/shorts/[slug]',
  },
});
