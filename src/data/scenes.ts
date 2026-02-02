import type { SceneInfo } from '../types/types';

export const scenes: SceneInfo[] = [
  {
    id: 'campfire',
    title: '모닥불 앞에서',
    description: '따뜻한 불꽃이 춤추는 고요한 밤',
    difficulty: 'medium',
    tags: ['밤', '불', '따뜻함', '고요'],
  },
  {
    id: 'forest',
    title: '깊은 숲 속',
    description: '바람에 흔들리는 나무들의 속삭임',
    difficulty: 'easy',
    tags: ['자연', '나무', '평화', '신선'],
  },
  {
    id: 'beach',
    title: '해변의 파도',
    description: '끝없이 밀려오는 파도 소리',
    difficulty: 'easy',
    tags: ['바다', '파도', '청량', '휴식'],
  },
  {
    id: 'starry-night',
    title: '별이 빛나는 밤',
    description: '무한한 우주를 바라보며',
    difficulty: 'medium',
    tags: ['밤', '별', '우주', '명상'],
  },
];
