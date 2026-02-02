// 장면 타입 정의
export type SceneType = 
  | 'campfire'          // 불 앞에서
  | 'forest'            // 숲에서 나무 흔들리는 곳
  | 'beach'             // 바닷가에서 파도
  | 'starry-night';     // 밤하늘의 별

// 장면 정보 타입
export interface SceneInfo {
  id: SceneType;
  title: string;
  description: string;
  thumbnail?: string;
  difficulty: 'easy' | 'medium' | 'hard';
  tags: string[];
}

// 오디오 설정 타입
export interface AudioSettings {
  masterVolume: number;
  ambientVolume: number;
  effectsVolume: number;
  musicVolume: number;
}

// 게임 상태 타입
export interface GameState {
  currentScene: SceneType | null;
  isPlaying: boolean;
  audioSettings: AudioSettings;
  timeOfDay: 'dawn' | 'day' | 'dusk' | 'night';
  weather: 'clear' | 'cloudy' | 'rainy' | 'snowy';
}
