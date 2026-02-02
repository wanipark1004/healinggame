/**
 * 3D 장면 템플릿
 * 
 * 이 파일을 복사해서 새로운 장면을 만드세요!
 * 예: CampfireScene.tsx, ForestScene.tsx 등
 */

import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import * as THREE from 'three';

/**
 * 3D 오브젝트 컴포넌트
 * 여기에 Three.js 3D 오브젝트들을 추가하세요
 */
function SceneContent() {
  const meshRef = useRef<THREE.Mesh>(null);

  return (
    <>
      {/* 조명 */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />

      {/* 예제: 간단한 큐브 */}
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="hotpink" />
      </mesh>

      {/* 바닥 */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#1e293b" />
      </mesh>

      {/* 카메라 컨트롤 (개발 중 테스트용) */}
      <OrbitControls />
    </>
  );
}

/**
 * 메인 장면 컴포넌트
 * App.tsx나 다른 컴포넌트에서 이 컴포넌트를 import해서 사용하세요
 */
export default function SceneTemplate() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas
        camera={{
          position: [0, 2, 5],
          fov: 75,
        }}
      >
        <SceneContent />
      </Canvas>

      {/* UI 오버레이 (선택사항) */}
      <div
        style={{
          position: 'absolute',
          top: 20,
          left: 20,
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <h2>장면 제목</h2>
        <p>장면 설명</p>
      </div>
    </div>
  );
}
