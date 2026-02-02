# 🌿 Healing Moments

웹 기반 1인칭 힐링 게임 - React + TypeScript + Three.js

## 📖 프로젝트 소개

**Healing Moments**는 바쁜 일상에서 벗어나 평화로운 순간을 경험할 수 있는 웹 기반 힐링 게임입니다.  
단순한 영상 재생이 아닌, 3D 공간에서 직접 체험하는 몰입형 힐링 경험을 제공합니다.

### 🎯 핵심 컨셉

- **1인칭 시점**: 실제로 그 장소에 있는 듯한 몰입감
- **입체 음향**: Web Audio API를 활용한 현장감 있는 사운드
- **시간의 흐름**: 동적으로 변화하는 빛과 분위기
- **미세한 움직임**: 자연스러운 카메라 워킹과 호흡 효과

## 🎬 구현 예정 장면

- 🔥 **모닥불 앞에서** - 따뜻한 불꽃이 춤추는 고요한 밤
- 🌲 **깊은 숲 속** - 바람에 흔들리는 나무들의 속삭임
- 🌊 **해변의 파도** - 끝없이 밀려오는 파도 소리
- ⛵ **요트 위에서** - 넓은 바다를 가로지르는 여유로운 항해
- 🌸 **꽃이 가득한 언덕** - 맨발로 느끼는 부드러운 풀과 흔들리는 꽃들
- ⭐ **별이 빛나는 밤** - 무한한 우주를 바라보며
- 🚌 **버스 창가에서** - 지나가는 풍경을 바라보는 여행
- 🚶 **산책길** - 천천히 걷는 길, 변화하는 풍경
- 🌾 **갈대밭** - 바람에 물결치는 은빛 갈대
- ♨️ **노천 온천** - 눈 내리는 겨울, 따뜻한 온천에서
- ✈️ **비행기 창문** - 구름 위를 나는 평화로운 순간
- 🌸 **벚꽃 길** - 바람에 흩날리는 봄날의 꽃잎
- 🌃 **도심 야경** - 반짝이는 불빛들의 향연
- 🌱 **초원** - 끝없이 펼쳐진 풀밭과 흐르는 구름

## 🛠 기술 스택

### Core
- **React 19** - UI 프레임워크
- **TypeScript** - 타입 안정성
- **Vite** - 빌드 도구

### 3D & Graphics
- **Three.js** - 3D 렌더링 엔진
- **React Three Fiber** - React에서 Three.js 사용
- **@react-three/drei** - R3F 유틸리티 라이브러리

### State Management
- **Zustand** - 경량 상태 관리

### 향후 추가 예정
- **GLSL Shaders** - 커스텀 비주얼 이펙트
- **Web Audio API** - 입체 음향 구현
- **Post Processing** - Bloom, Color Grading, Vignette 등

## 📁 프로젝트 구조

```
healinggame/
├── src/
│   ├── components/         # React 컴포넌트
│   │   └── LandingPage.tsx # 랜딩 페이지
│   ├── scenes/            # 3D 장면들 (향후 구현)
│   ├── store/             # Zustand 스토어
│   │   └── gameStore.ts   # 게임 상태 관리
│   ├── types/             # TypeScript 타입 정의
│   │   └── index.ts
│   ├── data/              # 정적 데이터
│   │   └── scenes.ts      # 장면 정보
│   ├── App.tsx            # 메인 앱 컴포넌트
│   └── main.tsx           # 엔트리 포인트
├── public/                # 정적 리소스
└── package.json
```

## 🚀 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

### 빌드

```bash
npm run build
```

### 프리뷰

```bash
npm run preview
```

## 📝 개발 로그

### 2026-02-02 (오후) - 장면 4개로 축소 및 문제 해결

#### ✅ 완료된 작업

1. **장면 수 조정**
   - 14개 → 4개로 축소 (나중에 추가 가능하도록)
   - 선택된 장면:
     - 🔥 모닥불 앞에서
     - 🌲 깊은 숲 속
     - 🌊 해변의 파도
     - ⭐ 별이 빛나는 밤

2. **화면 문제 해결**
   - 브라우저 캐시 및 Vite 캐시 문제 확인
   - 테스트 모드로 React 정상 작동 확인
   - 원래 랜딩 페이지로 복구

3. **타입 정의 업데이트**
   - `SceneType` 4개 장면으로 축소
   - `src/data/scenes.ts` 업데이트

### 2026-02-02 (오후) - 팀원 온보딩 준비

#### ✅ 완료된 작업

1. **팀원 설치 가이드 작성** (`SETUP.md`)
   - Node.js, Git, VSCode 설치 가이드
   - 단계별 프로젝트 설정 방법
   - 트러블슈팅 가이드
   - 팀 작업 워크플로우
   - 학습 리소스 링크
   - 개발 팁 모음

2. **프로젝트 메타데이터 개선**
   - `index.html` 제목 업데이트: "Healing Moments - 당신의 평화로운 순간"

3. **서버 안정화**
   - 개발 서버 재시작
   - 포트 충돌 해결

#### 📋 팀원이 설치해야 할 것

**필수 소프트웨어:**
- Node.js v18 이상 (LTS 버전)
- Git
- 코드 에디터 (VSCode 권장)

**프로젝트 의존성 (자동 설치):**
```bash
npm install  # 한 번만 실행하면 모든 패키지 설치
```

**설치되는 주요 패키지:**
- React 19.2.0
- Three.js 0.182.0
- React Three Fiber
- @react-three/drei
- Zustand
- TypeScript

**👉 상세 가이드**: `SETUP.md` 파일 참조

#### 🔧 화면이 하얀색일 때 해결 방법

1. **하드 리프레시** (브라우저 캐시 무시)
   - Mac: `Cmd + Shift + R`
   - Windows: `Ctrl + Shift + R`

2. **브라우저 개발자 도구 확인** (F12)
   - Console 탭에서 오류 확인
   - 빨간색 오류 메시지 캡처

3. **Vite 캐시 삭제 및 서버 재시작**
   ```bash
   # 터미널에서 Ctrl+C로 서버 중지
   rm -rf node_modules/.vite
   npm run dev
   ```

4. **브라우저 캐시 완전 삭제**
   - Chrome: 설정 → 개인정보 보호 → 인터넷 사용 기록 삭제
   - "캐시된 이미지 및 파일" 체크

#### 🐛 해결한 오류

**오류**: `The requested module '/src/types/index.ts' does not provide an export named 'SceneInfo'`
- **원인**: Vite dev 서버 캐시 문제
- **해결**: Vite 캐시 삭제 (`node_modules/.vite`) 후 서버 재시작

### 2026-02-02 (오전) - 프로젝트 초기 설정

#### ✅ 완료된 작업

1. **프로젝트 초기화**
   - Vite + React + TypeScript 템플릿으로 프로젝트 생성
   - 필요한 의존성 패키지 설치

2. **라이브러리 설치**
   - `three` - 3D 그래픽 라이브러리
   - `@react-three/fiber` - React에서 Three.js 사용을 위한 라이브러리
   - `@react-three/drei` - R3F 헬퍼 및 유틸리티
   - `zustand` - 상태 관리 라이브러리
   - `@types/three` - Three.js TypeScript 타입 정의

3. **프로젝트 구조 생성**
   - `src/components/` - UI 컴포넌트 폴더
   - `src/scenes/` - 3D 장면 폴더 (향후 구현)
   - `src/store/` - 상태 관리 폴더
   - `src/types/` - TypeScript 타입 정의 폴더
   - `src/data/` - 정적 데이터 폴더

4. **타입 정의 작성** (`src/types/index.ts`)
   - `SceneType` - 14개 장면 타입 정의
   - `SceneInfo` - 장면 정보 인터페이스
   - `AudioSettings` - 오디오 설정 인터페이스
   - `GameState` - 게임 상태 인터페이스

5. **상태 관리 구현** (`src/store/gameStore.ts`)
   - Zustand를 사용한 글로벌 상태 관리
   - 현재 장면, 재생 상태, 오디오 설정 등 관리
   - 상태 업데이트 액션 함수들 구현

6. **장면 데이터 작성** (`src/data/scenes.ts`)
   - 14개 힐링 장면 정보 배열
   - 각 장면의 제목, 설명, 난이도, 태그 정의

7. **랜딩 페이지 구현** (`src/components/LandingPage.tsx`, `LandingPage.css`)
   - Hero 섹션 - 그라디언트 애니메이션과 타이틀
   - 장면 선택 그리드 - 14개 장면 카드 레이아웃
   - 난이도 표시 - 색상으로 구분 (쉬움/보통/어려움)
   - 선택 인터랙션 - 클릭으로 장면 선택 및 체크 표시
   - "경험 시작하기" 버튼 - 선택 시 나타나는 애니메이션
   - Features 섹션 - 입체 음향, 시간의 흐름, 미세한 움직임 소개
   - 반응형 디자인 - 모바일/태블릿/데스크톱 대응
   - 부드러운 애니메이션 효과들

8. **메인 앱 컴포넌트 구현** (`src/App.tsx`)
   - 랜딩 페이지와 장면 컨테이너 전환 로직
   - Zustand 스토어 연결
   - Coming Soon 화면 (3D 장면 구현 전)

9. **전역 스타일 설정** (`src/index.css`, `src/App.css`)
   - 다크 테마 색상 스키마
   - 커스텀 스크롤바 스타일링
   - 반응형 타이포그래피
   - 리셋 CSS 및 기본 스타일

#### 📋 팀원용 문서

1. **SETUP.md** - 설치 및 환경 설정 가이드
   - Node.js, Git 설치
   - 프로젝트 클론 및 의존성 설치
   - 개발 서버 실행 방법
   - 트러블슈팅 가이드

2. **TEAM_GUIDE.md** - 팀 작업 가이드
   - 장면 배정 및 파일 생성 규칙
   - Three.js 기본 사용법
   - 장면별 구현 힌트
   - Git 워크플로우

3. **SceneTemplate.tsx** - 장면 개발 템플릿
   - 복사해서 새 장면 만들기
   - 기본 3D 구조 포함
   - 주석으로 설명 추가

#### 📦 설치된 패키지

```json
{
  "dependencies": {
    "@react-three/drei": "^10.7.7",
    "@react-three/fiber": "^9.5.0",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "three": "^0.182.0",
    "zustand": "^5.0.11"
  },
  "devDependencies": {
    "@types/three": "latest"
  }
}
```

#### 🎨 디자인 특징

- **색상 팔레트**: 
  - 배경: `#0f172a` (다크 네이비) → `#1e293b` (슬레이트)
  - 액센트: `#a78bfa` (퍼플) + `#ec4899` (핑크) 그라디언트
  - 텍스트: `#f1f5f9` (밝은 회색)
  - 서브텍스트: `#94a3b8` (중간 회색)

- **애니메이션**:
  - Hero 그라디언트 시프트 (8초 루프)
  - 펄스 효과
  - 호버 변환 효과
  - 팝인 애니메이션
  - 슬라이드업 애니메이션
  - 플로팅 아이콘

#### 🎯 다음 단계

1. **첫 번째 3D 장면 구현** (예: 갈대밭)
   - Three.js 기본 씬 설정
   - 1인칭 카메라 컨트롤
   - 기본 라이팅

2. **Shader 학습 및 적용**
   - Wind Shader로 갈대 흔들림 구현
   - 커스텀 머티리얼 제작

3. **오디오 시스템 구축**
   - Web Audio API 통합
   - 배경음악 및 앰비언트 사운드
   - 볼륨 컨트롤 UI

4. **카메라 워킹**
   - 미세한 호흡 움직임 (Head Bobbing)
   - 마우스 인터랙션
   - 부드러운 전환

5. **시간/날씨 시스템**
   - 동적 라이팅 변화
   - 하늘 색상 전환
   - 날씨 효과 (비, 눈 등)

## 🎓 학습 리소스

- [Three.js Documentation](https://threejs.org/docs/)
- [React Three Fiber Documentation](https://docs.pmnd.rs/react-three-fiber/)
- [Three.js Journey](https://threejs-journey.com/) - Three.js 학습 코스
- [The Book of Shaders](https://thebookofshaders.com/) - GLSL Shader 학습

## 📄 라이센스

개인 프로젝트 - MIT License

## 👤 개발자

힐링이 필요한 모든 분들을 위해 ❤️

---

**Made with React, Three.js, and lots of ☕️**
