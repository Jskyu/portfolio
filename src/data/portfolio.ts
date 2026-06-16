export const portfolio = {
  name: '정성규',
  title: '백엔드 개발자',
  tagline: '데이터를 모르면\n서비스를 모릅니다',
  subTagline: '데이터를 제대로, 그것이 전부입니다',
  heroDesc: '공공기관 SI 20개+ 프로젝트를 수행한 백엔드 개발자입니다.',
  heroTechTags: ['Spring Boot', 'Mybatis/JPA/QueryDSL', 'OpenSearch', 'Mysql/Oracle/PostgreSQL'],
  github: 'https://github.com/Jskyu',
  email: 'hisunggyu@gmail.com',
  phone: '+82 10-8193-7533',

  stats: [
    { label: '수행 프로젝트', value: '20개+' },
    { label: '최적화 레코드', value: '200만+' },
    { label: '관리 데이터', value: '6TB+' },
  ],

  about: [
    '약 6년간 공공기관 SI 20개+ 프로젝트를 수행하며 백엔드 풀사이클(API 설계 · 서버 구축 · 데이터 연계)을 담당했습니다. 빅데이터 플랫폼, 병원 홈페이지, 데이터 개방시스템 등 다양한 도메인에서 데이터가 제대로 흐르는 시스템을 만들어왔습니다.',
    'AIDA 프로젝트에서 iRODS 분산 파일 스토리지를 Spring에서 파일시스템처럼 다루는 브릿지를 구현하고, 200만+ 건 데이터를 1초 이내에 조회하는 쿼리를 작성했습니다. OpenSearch 기반 사내 검색엔진은 아키텍처 설계에 크게 기여하고, 백엔드 개발·배포를 1인으로 담당해 5개+ 공공기관 프로젝트에 도입했습니다.',
    '㈜지오넷 개발1팀 부파트장으로 팀 기술 자문, 클라이언트 직접 커뮤니케이션, 시스템 연계 및 서버 구축을 리딩하고 하였습니다.',
  ],

  expertise: [
    { num: '01', title: '데이터 플랫폼·검색', tags: ['iRODS', 'OpenSearch'] },
    { num: '02', title: '공공 SI 백엔드', tags: ['Egovframework', 'Mybatis / JPA'] },
    { num: '03', title: '시스템 연계·서버구축', tags: ['Linux', 'API 설계'] },
    { num: '04', title: 'AI 도구 활용', tags: ['Claude', 'Gemini'] },
  ],

  skills: [
    { category: 'LANGUAGE', items: ['Java', 'Python', 'JavaScript', 'SQL'] },
    { category: 'FRAMEWORK', items: ['Spring Boot', 'MyBatis', 'JPA / QueryDSL', 'Spring Security', 'Egovframework', 'Thymeleaf'] },
    { category: 'DATA', items: ['Mysql', 'Oracle', 'PostgreSQL', 'RDBMS'] },
    { category: 'INFRA', items: ['Nginx', 'Apache', 'Tomcat', 'Linux', 'Docker', 'iRODS', 'OpenSearch'] },
    { category: 'TOOLING', items: ['Git', 'Maven', 'Gradle', 'IntelliJ', 'VS Code'] },
    { category: 'AI', items: ['Claude', 'Gemini', 'ChatGPT'] },
  ],

  career: [
    {
      company: '㈜지오넷',
      department: '플랫폼개발본부 개발1팀',
      role: '부파트장',
      period: '2024.10 ~ 2026.06',
      duration: '1년 8개월',
      description:
        'Egovframework 4.x 기반 백엔드 설계·개발은 물론, 클라이언트 직접 커뮤니케이션과 시스템 연계·서버 구축까지 풀사이클을 담당합니다.',
      projects: [
        {
          name: '제주대학교병원 홈페이지 구축',
          period: '2026.01 ~ 2026.06',
          link: 'https://www.jejunuh.co.kr/main/index.do'
        },
        {
          name: '서천군 통합 홈페이지 전면개편',
          period: '2026.01 ~ 2026.04',
          link: 'https://www.seocheon.go.kr/kor/index.do'
        },
        {
          name: '공주시 행복누림 홈페이지 구축',
          period: '2025.08 ~ 2025.12',
          link: 'https://www.gongju.go.kr/nurim/main/index.do',
        },
        { name: '사내 검색엔진 서버 구축 및 개발',
          period: '2025.06 ~ 2025.08',
          link: 'https://www.jejunuh.co.kr/main/search.do'
        },
        {
          name: '전북대학교병원 홈페이지 구축',
          period: '2025.02 ~ 2025.06',
          link: 'https://www.jbuh.co.kr/main/index.do',
        },
        {
          name: '서산 빅데이터 플랫폼 구축',
          period: '2024.10 ~ 2025.02',
          link: 'https://www.seosan.go.kr/dataportal',
        },
        {
          name: '홍성 빅데이터 플랫폼 구축',
          period: '2024.10 ~ 2025.02',
          link: 'https://www.hongseong.go.kr/dataportal',
        },
        {
          name: '그 외 서브 프로젝트 약 10건',
          period: '2024.10 ~ 2026.06'
        },
        { name: '사내 유지보수 팀 기술 자문',
          period: '2024.10 ~ 2026.06'
        },
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
          period: '2022.06 ~ 2023.11',
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
      note: 'SW 동아리 회장 역임 (2020.03 ~ 2021.02)',
    },
  ],

  projects: [
    {
      id: 'opensearch',
      label: 'SEARCH ENGINE',
      title: '사내 OpenSearch 검색엔진 구축',
      period: '2025.06 ~ 2025.08',
      company: '㈜지오넷',
      summary:
        '공공 프로젝트 전반에 도입 가능한 표준 검색엔진 아키텍처 설계에 크게 기여하고, 백엔드 개발·배포를 1인으로 담당해 5개+ 기관에 도입했습니다.',
      problem:
        '공공 프로젝트마다 DB 기반 검색을 반복 구현하는 비효율과 대용량 텍스트 검색 성능의 한계. 프로젝트별 검색 구현 비용이 높고 품질이 일정하지 않았습니다.',
      architectureDesc:
        '검색엔진 서버를 프로젝트 서버와 물리적으로 분리해 독립 배포했습니다. 프로젝트 서버는 인덱싱 대상 데이터를 수집해 OpenSearch에 저장하고, 검색 쿼리는 프로젝트 서버를 통해 중계합니다. 관리자 화면에서 인덱스 구조·수집 스케줄·검색 설정을 코드 수정 없이 제어할 수 있도록 설계했습니다.',
      architecture: 'flow.png',
      whyThisStack: [
        'OpenSearch — 오픈소스로 라이센스 비용 없이 Elasticsearch 수준의 전문 검색 기능 확보',
        'Docker — 검색엔진 서버를 프로젝트 서버와 분리해 독립 배포·관리 가능',
        '관리자 기능 자체 개발 — 코드를 다루지 못하는 클라이언트와 개발자 모두 인덱스 재구성·스케줄 조정 가능',
      ],
      troubleshoot: {
        problem:
          '프로젝트마다 인덱스 구조와 수집 설정이 달라 신규 도입 시 매번 코드를 직접 수정해야 했고, 클라이언트가 운영 중 설정을 변경하기 어려웠습니다.',
        solution:
          '인덱스 구조·수집 대상·스케줄·검색 필드를 DB로 관리하고 관리자 화면에서 제어할 수 있도록 설계했습니다. 신규 프로젝트는 설정값만 입력하면 동일 구조를 재사용할 수 있습니다.',
        result:
          '신규 프로젝트 세팅 시 코드 수정 없이 관리자 설정만으로 운영 가능. 5개+ 기관 도입.',
      },
      tags: ['Spring Boot', 'OpenSearch', 'Docker', 'Oracle', 'PostgreSQL'],
      results: [
        { value: '5개+', label: '공공기관 도입' },
        { value: '1인', label: '설계·개발·운영' },
      ],
      deployments: [
        '청양군 선비충의문화관',
        '차세대 융합기술연구원',
        '국가과학기술인력개발원(KCLUB)',
        '차세대 원자력 연구성과 공유 플랫폼(ngene)',
        '제주대학교병원 홈페이지',
      ],
      link: '',
    },
    {
      id: 'aida',
      label: 'DATA PLATFORM',
      title: '과학기술 AI 데이터 공유·활용 서비스 (AIDA)',
      period: '2022.06 ~ 2023.11',
      company: '㈜알투소프트 / KISTI',
      summary:
        '연구자 간 AI 데이터 공유·활용 플랫폼. iRODS 6TB/200만+ 건을 관리하는 MSA 환경에서 파일 연동·쿼리 최적화를 담당했습니다.',
      problem:
        'KISTI 연구 데이터 6TB+를 iRODS 분산 파일시스템으로 관리하면서, Spring 백엔드에서 가상 폴더를 실제 파일시스템처럼 다뤄야 했습니다. 또한 200만+ 건의 데이터셋 목록을 빠르게 조회해야 했습니다.',
      architectureDesc:
        'iRODS Cluster를 별도 서버로 분리하고, Tomcat 모듈(공통·관리자·사용자·데이터·OpenAPI 등)을 Docker 기반 MSA로 구성했습니다. Python iRODS 클라이언트를 브릿지 레이어로 연동하고, Spring Security + Redis 세션으로 인증을 처리했습니다.',
      architecture: 'aida-architecture.svg',
      whyThisStack: [
        'iRODS — 6TB/200만+ 건의 연구 데이터를 비용 효율적으로 분산 저장하기 위해 선택',
        'Python iRODS 클라이언트 — Java 클라이언트 대비 안정성이 높고 KISTI 서버 환경과 호환',
        'QueryDSL Projection — 대용량 조회에서 불필요한 컬럼 제거로 성능 최적화',
        'Docker MSA — 데이터셋·OpenAPI·관리자 등 복잡한 도메인을 모듈별로 독립 배포',
      ],
      troubleshoot: {
        problem:
          '초기 단일 Tomcat 구성에서 도메인별 서비스가 서로 영향을 주었고, 200만+ 건 목록 조회에서 수 초의 응답 지연이 발생했습니다.',
        solution:
          'Tomcat 모듈을 Docker로 분리해 서비스 간 격리를 확보하고, QueryDSL Projection·커버링 인덱스·페이징 방식 개선으로 조회 쿼리를 최적화했습니다.',
        result:
          '목록 조회 1초 이내 달성. MAU 4,000 → 40,000 (2년, ×10).',
      },
      tags: ['Spring Boot', 'JPA/QueryDSL', 'PostgreSQL', 'iRODS', 'Python', 'Docker', 'Redis'],
      results: [
        { value: '×10', label: 'MAU 4K → 40K · 2년' },
        { value: '200만+', label: '데이터셋 건수' },
        { value: '6TB+', label: 'iRODS 저장소' },
        { value: '8,000+', label: 'OpenAPI 외부 활용' },
      ],
      deployments: [],
      link: 'https://aida.kisti.re.kr',
    },
  ],

  troubleshooting: [
    {
      num: '01',
      title: 'iRODS 가상 폴더 Spring 연동',
      problem:
        'iRODS는 논리 경로 기반 가상 파일시스템이라 Java File API로 직접 접근이 불가능했습니다.',
      solution:
        'Python iRODS 클라이언트(python-irodsclient)를 Spring에서 Process로 실행하고 결과를 파싱하는 브릿지 레이어를 구현. 가상 경로를 물리 경로처럼 매핑해 기존 파일 처리 로직을 재사용했습니다.',
      result: 'iRODS 파일 read/write/list 구현 완료. 기존 API 구조 변경 없이 통합.',
    },
    {
      num: '02',
      title: '200만+ 건 데이터 조회 1초 이내 달성',
      problem:
        'AIDA 플랫폼 데이터 목록 조회 시 200만+ 건 기준 응답이 수 초 이상 걸려 UX 문제가 발생했습니다.',
      solution:
        'QueryDSL Projection으로 필요 컬럼만 조회, COUNT 쿼리 분리, 커버링 인덱스 적용, 페이징 방식 개선을 병행했습니다.',
      result: '200만+ 건 기준 1초 이내 응답 달성.',
    },
    {
      num: '03',
      title: 'OpenSearch 검색엔진 다중 프로젝트 도입을 위한 유연한 설계',
      problem:
        '검색엔진을 여러 공공 프로젝트에 반복 도입해야 했는데, 프로젝트마다 설정·운영 방식이 달라 매번 코드를 직접 수정해야 했습니다. 코드를 다루지 못하는 클라이언트와 개발자 모두의 운영 부담이 컸습니다.',
      solution:
        '인덱스 구조·수집 대상·스케줄 등을 코드 수정을 최소화해 설정할 수 있도록 유연하게 설계하고, 관리자 화면에서 직접 제어할 수 있는 기능을 추가했습니다. 각 프로젝트는 독립 서버에 개별 세팅하되, 동일한 구조를 재사용할 수 있도록 표준화했습니다.',
      result: '5개+ 프로젝트에 검색엔진 도입. 신규 프로젝트 세팅 시 코드 수정 없이 관리자 설정만으로 운영 가능.',
    },
  ],
} as const
