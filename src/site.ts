// ─────────────────────────────────────────────────────────────
//  사이트 전역 설정 — 여기 값만 바꾸면 됩니다.
// ─────────────────────────────────────────────────────────────
export const site = {
  // 감독명 / 사이트 타이틀
  director: '스튜디오 달 에이아이',
  directorLatin: 'studio dal ai',

  // 랜딩 첫 화면(풀스크린) 한 줄. 작품 세계를 압축한 문장.
  tagline: '스토리텔링이 있는 영상을 만듭니다',

  // ── 쇼릴(showreel) 영상 ──────────────────────────────
  // mp4 파일을 public/ 폴더에 넣고 경로를 적으세요. 예: '/showreel.mp4'
  // 영상이 없으면 빈 문자열로 두세요 — 어두운 그라데이션 화면으로 대체됩니다.
  showreelVideo: '/showreel.mp4',
  // 영상 로드 전 잠시 보이는 정지 프레임(포스터). 예: '/showreel-poster.jpg'
  showreelPoster: '',

  // 연락 (푸터)
  contactEmail: 'byunginan@gmail.com',
  links: [
    { label: '@threads', href: 'https://www.threads.com/@droz99101'},
    { label: 'Instagram', href: 'https://www.instagram.com/studio_dal_ai/' },
    { label: 'Youtube', href: 'https://www.youtube.com/@studio_dal_ai' },
    
  ],
};
