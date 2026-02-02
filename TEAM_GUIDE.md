# 👥 Healing Moments - 팀 작업 가이드

## 🎯 작업 분배

각 팀원은 **2개의 장면**을 담당합니다.

### 장면 목록 (14개)

1. 🔥 **모닥불 앞에서** - 미배정
2. 🌲 **깊은 숲 속** - 미배정
3. 🌊 **해변의 파도** - 미배정
4. ⛵ **요트 위에서** - 미배정
5. 🌸 **꽃이 가득한 언덕** - 미배정
6. ⭐ **별이 빛나는 밤** - 미배정
7. 🚌 **버스 창가에서** - 미배정
8. 🚶 **산책길** - 미배정
9. 🌾 **갈대밭** - 미배정
10. ♨️ **노천 온천** - 미배정
11. ✈️ **비행기 창문** - 미배정
12. 🌸 **벚꽃 길** - 미배정
13. 🌃 **도심 야경** - 미배정
14. 🌱 **초원** - 미배정

### 팀원별 담당 (예시)

```
팀원 A: 1. 모닥불 앞에서, 2. 깊은 숲 속
팀원 B: 3. 해변의 파도, 4. 요트 위에서
팀원 C: 5. 꽃이 가득한 언덕, 6. 별이 빛나는 밤
...
```

---

## 📝 새 장면 만들기 (단계별 가이드)

### 1단계: 장면 파일 생성

`src/scenes/` 폴더에 새 파일을 만듭니다.

**파일명 규칙**: `{장면이름}Scene.tsx`

```bash
# 예시
src/scenes/CampfireScene.tsx      # 모닥불 장면
src/scenes/ForestScene.tsx        # 숲 장면
src/scenes/BeachScene.tsx         # 해변 장면
```

### 2단계: 템플릿 복사

`SceneTemplate.tsx` 파일을 복사해서 시작하세요:

```tsx
// src/scenes/CampfireScene.tsx
import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function CampfireContent() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      
      {/* 여기에 3D 오브젝트 추가 */}
      
      <OrbitControls />
    </>
  );
}

export default function CampfireScene() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ position: [0, 2, 5], fov: 75 }}>
        <CampfireContent />
      </Canvas>
    </div>
  );
}
```

### 3단계: 장면을 App에 연결 (테스트용)

임시로 `App.tsx`를 수정해서 작업 중인 장면을 바로 볼 수 있습니다:

```tsx
// src/App.tsx
import CampfireScene from './scenes/CampfireScene';

function App() {
  // 테스트를 위해 장면을 직접 렌더링
  return <CampfireScene />;
}
```

**⚠️ 주의**: 작업 완료 후에는 이 부분을 원래대로 되돌리고, 대신 장면 ID를 통해 접근하도록 해야 합니다.

### 4단계: 개발 서버에서 확인

```bash
npm run dev
# http://localhost:5173/ 에서 확인
```

---

## 🛠 Three.js 기본 사용법

### 기본 3D 오브젝트

#### 1. 박스 (Cube)
```tsx
<mesh position={[0, 0, 0]}>
  <boxGeometry args={[1, 1, 1]} />
  <meshStandardMaterial color="hotpink" />
</mesh>
```

#### 2. 구 (Sphere)
```tsx
<mesh position={[0, 0, 0]}>
  <sphereGeometry args={[1, 32, 32]} />
  <meshStandardMaterial color="#ff6347" />
</mesh>
```

#### 3. 평면 (Plane) - 바닥이나 바다
```tsx
<mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
  <planeGeometry args={[10, 10]} />
  <meshStandardMaterial color="#2196f3" />
</mesh>
```

#### 4. 원기둥 (Cylinder) - 나무 기둥
```tsx
<mesh position={[0, 1, 0]}>
  <cylinderGeometry args={[0.5, 0.5, 2, 32]} />
  <meshStandardMaterial color="#8b4513" />
</mesh>
```

### 조명 (Lighting)

```tsx
{/* 주변광 - 전체적인 밝기 */}
<ambientLight intensity={0.5} />

{/* 방향광 - 태양광 */}
<directionalLight 
  position={[10, 10, 5]} 
  intensity={1} 
  castShadow 
/>

{/* 점광원 - 모닥불, 전구 */}
<pointLight 
  position={[0, 2, 0]} 
  intensity={1} 
  color="#ff6347" 
/>

{/* 스포트라이트 */}
<spotLight 
  position={[0, 10, 0]} 
  angle={0.3} 
  intensity={1} 
/>
```

### 카메라 위치 설정

```tsx
<Canvas
  camera={{
    position: [0, 2, 5],  // [x, y, z]
    fov: 75,              // Field of View (시야각)
  }}
>
```

### 애니메이션

```tsx
import { useFrame } from '@react-three/fiber';

function RotatingBox() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      // 회전
      meshRef.current.rotation.y += delta;
      
      // 위아래 움직임
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.5;
    }
  });
  
  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}
```

---

## 🎨 장면별 구현 힌트

### 🔥 모닥불 앞에서
- `<pointLight>` - 불꽃 빛 (주황색, 깜빡임 효과)
- 원기둥 + 막대기로 장작 표현
- Particle System으로 연기 효과

### 🌲 깊은 숲 속
- 많은 원기둥으로 나무 표현
- `<fog>` 효과로 안개
- 바람에 흔들리는 애니메이션

### 🌊 해변의 파도
- 평면 + 애니메이션으로 파도
- 파란색 그라디언트
- 위아래 움직임

### 🌸 꽃이 가득한 언덕
- Instanced Mesh로 많은 꽃 표현
- 언덕은 PlaneGeometry + 높낮이
- 바람에 흔들리는 효과

### ⭐ 별이 빛나는 밤
- 많은 작은 구로 별 표현
- 어두운 배경 (`<color attach="background" args={['#000000']} />`)
- 반짝이는 애니메이션

---

## 📦 유용한 @react-three/drei 헬퍼

### Sky (하늘)
```tsx
import { Sky } from '@react-three/drei';

<Sky 
  sunPosition={[100, 10, 100]} 
  turbidity={10}
  rayleigh={2}
/>
```

### Stars (별)
```tsx
import { Stars } from '@react-three/drei';

<Stars 
  radius={100} 
  depth={50} 
  count={5000} 
  factor={4} 
/>
```

### Environment (환경 맵)
```tsx
import { Environment } from '@react-three/drei';

<Environment preset="sunset" />
// presets: sunset, dawn, night, warehouse, forest, apartment
```

### Cloud (구름)
```tsx
import { Cloud } from '@react-three/drei';

<Cloud 
  position={[0, 10, 0]}
  args={[3, 2]}
  opacity={0.5}
/>
```

---

## 🐛 디버깅 팁

### 1. 오브젝트가 안 보일 때

```tsx
// 카메라 위치 조정
<Canvas camera={{ position: [0, 5, 10] }}>

// OrbitControls 추가해서 카메라 자유롭게 움직이기
<OrbitControls />
```

### 2. 조명이 너무 어두울 때

```tsx
<ambientLight intensity={1} />  // 강도 높이기
```

### 3. 오브젝트 위치 확인

```tsx
<mesh position={[0, 0, 0]}>
  {/* x: 좌우, y: 상하, z: 앞뒤 */}
</mesh>
```

### 4. 콘솔에서 오브젝트 확인

```tsx
useEffect(() => {
  console.log(meshRef.current);
}, []);
```

---

## 📚 학습 리소스

### Three.js 기초
- [Three.js Journey](https://threejs-journey.com/) - 최고의 Three.js 강좌
- [Three.js 예제](https://threejs.org/examples/) - 공식 예제 모음

### React Three Fiber
- [R3F 공식 문서](https://docs.pmnd.rs/react-three-fiber/)
- [Drei 헬퍼 문서](https://github.com/pmndrs/drei)

### 예제 코드
- [Codesandbox 예제](https://codesandbox.io/examples/package/react-three-fiber)
- [PMNDRS 데모](https://pmnd.rs/)

---

## 🔄 Git 워크플로우

### 1. 브랜치 생성

```bash
# 본인 이름이나 장면 이름으로 브랜치 생성
git checkout -b feature/campfire-scene
```

### 2. 작업 중 커밋

```bash
git add .
git commit -m "feat: 모닥불 장면 기본 구조 구현"
```

### 3. 푸시

```bash
git push origin feature/campfire-scene
```

### 4. Pull Request 생성

GitHub/GitLab에서 PR 생성 후 팀원 리뷰 요청

---

## ✅ 체크리스트

장면 완성 시 확인할 것들:

- [ ] 3D 오브젝트가 올바르게 렌더링됨
- [ ] 조명이 적절함
- [ ] 카메라 위치가 자연스러움
- [ ] 애니메이션이 부드럽게 동작함 (있는 경우)
- [ ] 브라우저 콘솔에 오류 없음
- [ ] TypeScript 오류 없음
- [ ] 파일명이 규칙에 맞음 (`{Name}Scene.tsx`)
- [ ] 코드에 간단한 주석 추가
- [ ] Git 커밋 메시지 명확함

---

## 💬 소통

질문이나 도움이 필요하면:
1. 팀 채팅방에 질문
2. 코드와 오류 메시지 스크린샷 첨부
3. 시도해본 방법 공유

**함께 멋진 힐링 게임을 만들어봅시다! 🌿✨**

---

*마지막 업데이트: 2026-02-02*
