import { defineConfig } from 'astro/config';

export default defineConfig({
  // 실제 도메인. 대표 주소(canonical) 표시와 옛 /works/ 주소 자동 이동에 사용.
  site: 'https://www.studio-dal-ai.kr',
  // 예전 이름(Works → Shorts → Movies)의 주소로 들어와도 새 주소로 바로 이동
  redirects: {
    '/works': '/movies',
    '/works/category/[category]': '/movies/category/[category]',
    '/works/[slug]': '/movies/[slug]',
    '/shorts': '/movies',
    '/shorts/category/[category]': '/movies/category/[category]',
    '/shorts/[slug]': '/movies/[slug]',
  },
});
