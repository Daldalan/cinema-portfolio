import { defineConfig } from 'astro/config';

export default defineConfig({
  // 실제 도메인이 생기면 주석을 풀고 바꾸세요. (RSS/사이트맵 등에 사용)
  // 임시 값을 넣어 두면 아래 redirects가 그 가짜 도메인으로 이동하므로 비워 둡니다.
  // site: 'https://your-domain.com',
  // Works → Shorts 이름 변경 전 주소로 들어와도 새 주소로 이동
  redirects: {
    '/works': '/shorts',
    '/works/category/[category]': '/shorts/category/[category]',
    '/works/[slug]': '/shorts/[slug]',
  },
});
