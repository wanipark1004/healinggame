// 장면 타입 정의
export type SceneType = 
  | 'campfire'
  | 'forest'
  | 'beach'
  | 'starry-night';

// 장면 정보 인터페이스
export interface SceneInfo {
  id: SceneType;
  title: string;
  description: string;
  thumbnail?: string;
  difficulty: 'easy' | 'medium' | 'hard';
  tags: string[];
}

// 오디오 설정 인터페이스
export interface AudioSettings {
  masterVolume: number;
  ambientVolume: number;
  effectsVolume: number;
  musicVolume: number;
}

// 게임 상태 인터페이스
export interface GameState {
  currentScene: SceneType | null;
  isPlaying: boolean;
  audioSettings: AudioSettings;
  timeOfDay: 'dawn' | 'day' | 'dusk' | 'night';
  weather: 'clear' | 'cloudy' | 'rainy' | 'snowy';
}
