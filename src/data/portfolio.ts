export const portfolio = {
  name: '정성규',
  title: '백엔드 개발자',
  subtitle:
    '경력 6년차 백엔드 개발자로, 20개+ 공공기관 SI 프로젝트를 수행했습니다.',
  github: 'https://github.com/Jskyu',
  email: 'hisunggyu@gmail.com',
  phone: '+82 10-8193-7533',

  stats: [
    { label: '경력', value: '6년' },
    { label: '프로젝트', value: '20개+' },
    { label: '재직 회사', value: '3곳' },
  ],

  about: [
    '약 5년 5개월간 20개+ 공공기관 SI 프로젝트를 수행하며, 백엔드 풀사이클(API 설계 · 서버 구축 · 데이터 연계)을 맡았습니다. 빅데이터 플랫폼, 병원 홈페이지, 데이터 개방시스템 등 다양한 도메인 경험이 저의 강점입니다.',
    'Java · Spring Boot를 주력으로, JPA/QueryDSL · MyBatis · Oracle/PostgreSQL을 실무에서 폭넓게 활용합니다. 최근 Claude · Gemini 등 AI 도구를 개발 워크플로에 적극 도입해 생산성을 높이고 있습니다.',
    '현재 ㈜지오넷 개발1팀 부파트장으로 팀 기술 자문, 클라이언트 직접 커뮤니케이션, 시스템 연계 및 서버 구축을 리딩하고 있습니다.',
  ],

  skills: [
    {
      category: '언어',
      items: ['Java', 'JavaScript', 'Python', 'HTML', 'SQL'],
    },
    {
      category: '프레임워크',
      items: [
        'Spring Framework',
        'Spring Boot',
        'JPA',
        'QueryDSL',
        'MyBatis',
        'Thymeleaf',
        'Egovframework',
      ],
    },
    {
      category: 'DB / 인프라',
      items: ['RDBMS', 'Oracle', 'PostgreSQL', 'Linux'],
    },
    {
      category: '도구',
      items: ['Git', 'JSP'],
    },
    {
      category: 'AI 도구',
      items: ['Claude', 'Gemini', 'ChatGPT'],
    },
  ],

  career: [
    {
      company: '㈜지오넷',
      department: '플랫폼개발본부 개발1팀',
      role: '부파트장',
      period: '2024.10 ~ 재직중',
      duration: '1년 6개월',
      description:
        'Egovframework 4.x 기반 백엔드 설계·개발은 물론, 클라이언트 직접 커뮤니케이션과 시스템 연계·서버 구축까지 풀사이클을 담당합니다.',
      projects: [
        { name: '제주대학교병원 홈페이지 구축', period: '2026.01 ~ 현재' },
        {
          name: '공주시 행복누림 홈페이지 구축',
          period: '2025.08 ~ 2025.12',
          link: 'https://www.gongju.go.kr/nurim/html/intro.jsp',
        },
        { name: '사내 검색엔진 서버 구축 및 개발', period: '2025.06 ~ 2025.08' },
        {
          name: '전북대학교병원 홈페이지 구축',
          period: '2025.02 ~ 2025.06',
          link: 'https://www.jbuh.co.kr/main.do',
        },
        {
          name: '서산 빅데이터 플랫폼 구축',
          period: '2024.10 ~ 2025.02',
          link: 'https://www.seosan.go.kr/dataportal/index.jsp',
        },
        {
          name: '홍성 빅데이터 플랫폼 구축',
          period: '2024.10 ~ 2025.02',
          link: 'https://www.hongseong.go.kr/dataportal/index.jsp',
        },
        { name: '사내 유지보수 팀 기술 자문', period: '2024.10 ~ 현재' },
      ],
    },
    {
      company: '㈜알투소프트',
      department: '솔루션사업부',
      role: '백엔드 개발자',
      period: '2021.03 ~ 2024.06',
      duration: '3년 3개월',
      description:
        '전자정부프레임워크 기반 공공기관 SI 프로젝트를 5개 이상 수행하며 SpringBoot 2/3 · JPA(QueryDSL) · MyBatis를 활용한 백엔드 개발을 전담하였습니다. Python 기반 데이터 정제 및 AI Fine Tuning까지 업무 영역을 확장하였습니다.',
      projects: [
        { name: '사내 base project 개발', period: '2024.01 ~ 2024.05' },
        {
          name: '과학기술 기계학습 데이터 서비스 구축·운영',
          period: '2023.06 ~ 2023.11',
          link: 'https://aida.kisti.re.kr',
        },
        {
          name: '과학기술 기계학습 데이터 서비스 구축',
          period: '2022.06 ~ 2022.11',
          link: 'https://aida.kisti.re.kr',
        },
        {
          name: '수자원공사 공공데이터개방포털시스템 고도화',
          period: '2021.11 ~ 2022.05',
          link: 'https://opendata.kwater.or.kr/main.do',
        },
        { name: '수면장애 영상·음성 질환 데이터 구축', period: '2021.08 ~ 2021.11' },
      ],
    },
    {
      company: '㈜에이리스',
      department: '개발부',
      role: '수습·인턴',
      period: '2020.07 ~ 2020.12',
      duration: '6개월',
      description:
        '소규모 포털 프로젝트에서 SpringBoot 2 · JPA 기반 API 구현부터 JEUS8 · Tibero 환경 운영까지 경험하였습니다.',
      projects: [],
    },
  ],

  education: [
    {
      school: '목원대학교',
      major: 'IT융합전자공학과',
      period: '2016.03 ~ 2022.02',
      note: 'SW 동아리 회장 역임 (2020.03 ~ 2020.06)',
    },
  ],
} as const
