import { useState } from 'react';
import { scenes } from '../data/scenes';
import type { SceneType } from '../types/types';
import { useGameStore } from '../store/gameStore';
import './LandingPage.css';

export const LandingPage = () => {
  const [selectedScene, setSelectedScene] = useState<SceneType | null>(null);
  const { setCurrentScene, setIsPlaying } = useGameStore();

  const handleSceneClick = (sceneId: SceneType) => {
    setSelectedScene(sceneId);
  };

  const handleStartExperience = () => {
    if (selectedScene) {
      setCurrentScene(selectedScene);
      setIsPlaying(true);
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return '#4ade80';
      case 'medium':
        return '#fbbf24';
      case 'hard':
        return '#f87171';
      default:
        return '#9ca3af';
    }
  };

  return (
    <div className="landing-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-main">Healing Moments</span>
            <span className="title-sub">순간의 평화를 경험하세요</span>
          </h1>
          <p className="hero-description">
            바쁜 일상에서 벗어나 자연과 함께하는 힐링 경험.
            <br />
            당신만의 평화로운 순간을 찾아보세요.
          </p>
        </div>
        
        <div className="hero-gradient"></div>
      </div>

      {/* Scene Selection */}
      <div className="scene-selection">
        <h2 className="section-title">어떤 순간을 경험하시겠어요?</h2>
        
        <div className="scenes-grid">
          {scenes.map((scene) => (
            <div
              key={scene.id}
              className={`scene-card ${selectedScene === scene.id ? 'selected' : ''}`}
              onClick={() => handleSceneClick(scene.id)}
            >
              <div className="scene-card-content">
                <div className="scene-header">
                  <h3 className="scene-title">{scene.title}</h3>
                  <div
                    className="scene-difficulty"
                    style={{ backgroundColor: getDifficultyColor(scene.difficulty) }}
                  >
                    {scene.difficulty === 'easy' && '쉬움'}
                    {scene.difficulty === 'medium' && '보통'}
                    {scene.difficulty === 'hard' && '어려움'}
                  </div>
                </div>
                
                <p className="scene-description">{scene.description}</p>
                
                <div className="scene-tags">
                  {scene.tags.map((tag) => (
                    <span key={tag} className="scene-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {selectedScene === scene.id && (
                <div className="scene-selected-indicator">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Start Button */}
        {selectedScene && (
          <div className="start-button-container">
            <button className="start-button" onClick={handleStartExperience}>
              <span className="start-button-text">경험 시작하기</span>
              <svg
                className="start-button-icon"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Features Section */}
      <div className="features-section">
        <div className="feature">
          <div className="feature-icon">🎵</div>
          <h3 className="feature-title">입체 음향</h3>
          <p className="feature-description">실제 현장에 있는 듯한 생생한 사운드</p>
        </div>
        
        <div className="feature">
          <div className="feature-icon">🌈</div>
          <h3 className="feature-title">시간의 흐름</h3>
          <p className="feature-description">시간에 따라 변화하는 빛과 분위기</p>
        </div>
        
        <div className="feature">
          <div className="feature-icon">✨</div>
          <h3 className="feature-title">미세한 움직임</h3>
          <p className="feature-description">실제 시선처럼 움직이는 1인칭 시점</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="landing-footer">
        <p>© 2026 Healing Moments. Made with ❤️ for your peace of mind.</p>
      </footer>
    </div>
  );
};
