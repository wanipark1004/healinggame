import { create } from 'zustand';
import type { GameState, SceneType } from '../types/types';

interface GameStore extends GameState {
  // Actions
  setCurrentScene: (scene: SceneType | null) => void;
  setIsPlaying: (isPlaying: boolean) => void;
  setMasterVolume: (volume: number) => void;
  setTimeOfDay: (time: GameState['timeOfDay']) => void;
  setWeather: (weather: GameState['weather']) => void;
  resetAudioSettings: () => void;
}

const defaultAudioSettings = {
  masterVolume: 0.7,
  ambientVolume: 0.8,
  effectsVolume: 0.6,
  musicVolume: 0.5,
};

export const useGameStore = create<GameStore>((set) => ({
  // Initial state
  currentScene: null,
  isPlaying: false,
  audioSettings: defaultAudioSettings,
  timeOfDay: 'day',
  weather: 'clear',

  // Actions
  setCurrentScene: (scene) => set({ currentScene: scene }),
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  setMasterVolume: (volume) =>
    set((state) => ({
      audioSettings: { ...state.audioSettings, masterVolume: volume },
    })),
  setTimeOfDay: (time) => set({ timeOfDay: time }),
  setWeather: (weather) => set({ weather }),
  resetAudioSettings: () => set({ audioSettings: defaultAudioSettings }),
}));
