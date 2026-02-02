# 🚀 Healing Moments - 팀원 설치 가이드

## 📋 필수 사전 요구사항

### 1. Node.js 설치
- **권장 버전**: Node.js v18 이상 (LTS 버전)
- [Node.js 공식 사이트](https://nodejs.org/)에서 다운로드

#### 설치 확인
```bash
node --version  # v18.0.0 이상이어야 함
npm --version   # 9.0.0 이상 권장
```

### 2. Git 설치
- [Git 공식 사이트](https://git-scm.com/)에서 다운로드

#### 설치 확인
```bash
git --version
```

### 3. 코드 에디터
- **권장**: Visual Studio Code (VSCode)
- [VSCode 다운로드](https://code.visualstudio.com/)

#### 권장 VSCode 확장 프로그램
- **ESLint** - 코드 품질 검사
- **Prettier** - 코드 포맷팅
- **TypeScript** - TypeScript 지원 (기본 내장)
- **ES7+ React/Redux/React-Native snippets** - React 코드 스니펫

---

## 📦 프로젝트 설치 방법

### 1단계: 프로젝트 클론 또는 다운로드

#### Git을 사용하는 경우
```bash
# 프로젝트 저장소 클론 (저장소 URL은 팀에서 공유)
git clone <저장소-URL>
cd healinggame
```

#### 압축 파일로 받은 경우
1. 압축 파일 압축 해제
2. 터미널/명령 프롬프트에서 프로젝트 폴더로 이동
```bash
cd healinggame
```

### 2단계: 의존성 패키지 설치

```bash
npm install
```

이 명령어는 다음 패키지들을 자동으로 설치합니다:
- ✅ React 19.2.0
- ✅ TypeScript 5.9.3
- ✅ Three.js 0.182.0
- ✅ React Three Fiber 9.5.0
- ✅ @react-three/drei 10.7.7
- ✅ Zustand 5.0.11
- ✅ Vite 7.2.4

**⏱️ 예상 소요 시간**: 2-5분 (인터넷 속도에 따라 다름)

### 3단계: 개발 서버 실행

```bash
npm run dev
```

터미널에 다음과 같은 메시지가 나타나면 성공:
```
VITE v7.3.1  ready in 416 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

### 4단계: 브라우저에서 확인

브라우저를 열고 다음 주소로 접속:
```
http://localhost:5173/
```

**✨ 성공 화면**: 보라색/핑크 그라디언트 배경에 "Healing Moments" 제목이 보이면 성공!

---

## 🛠 유용한 명령어

### 개발 모드
```bash
npm run dev       # 개발 서버 시작 (Hot Reload 지원)
```

### 빌드
```bash
npm run build     # 프로덕션 빌드 생성
npm run preview   # 빌드된 파일 미리보기
```

### 코드 품질
```bash
npm run lint      # ESLint로 코드 검사
```

---

## 📁 프로젝트 구조 이해하기

```
healinggame/
├── src/
│   ├── components/         # React UI 컴포넌트
│   │   ├── LandingPage.tsx # 랜딩 페이지
│   │   └── LandingPage.css
│   ├── scenes/            # 🎯 3D 장면 구현 (여기서 작업!)
│   ├── store/             # 전역 상태 관리
│   ├── types/             # TypeScript 타입 정의
│   ├── data/              # 장면 데이터
│   ├── App.tsx            # 메인 앱
│   └── main.tsx           # 엔트리 포인트
├── public/                # 정적 파일 (이미지, 오디오 등)
├── package.json           # 프로젝트 정보 및 의존성
└── README.md             # 프로젝트 문서
```

### 🎯 팀 작업 시 주요 폴더

**각 팀원은 `src/scenes/` 폴더에서 작업하게 됩니다:**
- 장면 2개씩 담당
- 각 장면은 별도의 `.tsx` 파일로 생성
- 예: `CampfireScene.tsx`, `ForestScene.tsx`

---

## 🔧 문제 해결 (Troubleshooting)

### ❌ 문제 1: `npm install` 실패

**증상**: 패키지 설치 중 오류 발생

**해결 방법**:
```bash
# npm 캐시 정리
npm cache clean --force

# node_modules 삭제 후 재설치
rm -rf node_modules package-lock.json
npm install
```

### ❌ 문제 2: 화면이 하얀색으로 나옴

**증상**: http://localhost:5173/ 접속 시 빈 화면

**해결 방법**:
1. **브라우저 콘솔 확인** (F12 또는 Cmd+Option+I)
   - 빨간색 오류 메시지 확인
   
2. **서버 재시작**
   ```bash
   # Ctrl+C로 서버 중지
   npm run dev
   ```

3. **브라우저 캐시 삭제**
   - Chrome: Cmd+Shift+Delete (Mac) / Ctrl+Shift+Delete (Windows)
   - "캐시된 이미지 및 파일" 체크 후 삭제

4. **하드 리프레시**
   - Mac: Cmd+Shift+R
   - Windows/Linux: Ctrl+Shift+R

### ❌ 문제 3: 포트 5173이 이미 사용 중

**증상**: `Port 5173 is already in use`

**해결 방법**:
```bash
# Mac/Linux
lsof -ti:5173 | xargs kill -9

# Windows (PowerShell)
Get-Process -Id (Get-NetTCPConnection -LocalPort 5173).OwningProcess | Stop-Process
```

### ❌ 문제 4: TypeScript 오류

**증상**: `.tsx` 파일에서 빨간 밑줄

**해결 방법**:
1. VSCode 재시작
2. TypeScript 서버 재시작: Cmd+Shift+P → "TypeScript: Restart TS Server"

---

## 👥 팀 작업 워크플로우

### 1. 첫 시작 시

```bash
# 프로젝트 클론
git clone <저장소-URL>
cd healinggame

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

### 2. 매일 작업 시작 전

```bash
# 최신 코드 받아오기
git pull origin main

# 의존성 업데이트 (필요시)
npm install
```

### 3. 새 장면 만들기

```bash
# 1. scenes 폴더에 새 파일 생성
touch src/scenes/YourScene.tsx

# 2. 코드 작성
# 3. 테스트
npm run dev

# 4. 커밋 및 푸시
git add .
git commit -m "feat: YourScene 구현"
git push origin your-branch
```

---

## 📚 학습 리소스

### Three.js & React Three Fiber
- [Three.js 공식 문서](https://threejs.org/docs/)
- [React Three Fiber 문서](https://docs.pmnd.rs/react-three-fiber/)
- [Three.js 예제](https://threejs.org/examples/)

### React & TypeScript
- [React 공식 문서](https://react.dev/)
- [TypeScript 핸드북](https://www.typescriptlang.org/docs/)

### Vite
- [Vite 가이드](https://vitejs.dev/guide/)

---

## 💡 개발 팁

### Hot Module Replacement (HMR)
- 코드를 수정하고 저장하면 **자동으로 브라우저가 새로고침**됩니다
- 서버를 재시작할 필요 없음!

### 브라우저 개발자 도구
- **F12** 또는 **Cmd+Option+I** (Mac)로 열기
- **Console 탭**: 오류 및 로그 확인
- **Elements 탭**: HTML/CSS 검사
- **Network 탭**: 리소스 로딩 확인

### TypeScript 자동 완성
- VSCode에서 `.`을 입력하면 자동 완성 메뉴 표시
- `Ctrl+Space`로 수동으로 자동 완성 트리거

---

## 📞 도움이 필요하면?

1. **README.md** 파일 확인
2. **브라우저 콘솔** 오류 메시지 캡처
3. **팀 채팅방**에 오류 메시지와 함께 질문
4. **Stack Overflow** 또는 **Three.js Discord** 커뮤니티 활용

---

## ✅ 설치 완료 체크리스트

설치가 완료되었는지 확인하세요:

- [ ] Node.js 설치 확인 (`node --version`)
- [ ] npm 설치 확인 (`npm --version`)
- [ ] 프로젝트 폴더로 이동
- [ ] `npm install` 완료
- [ ] `npm run dev` 실행 성공
- [ ] http://localhost:5173/ 접속
- [ ] "Healing Moments" 랜딩 페이지 확인
- [ ] 브라우저 개발자 도구에서 오류 없음 확인

**모두 체크되었다면 개발 시작 준비 완료! 🎉**

---

*마지막 업데이트: 2026-02-02*
