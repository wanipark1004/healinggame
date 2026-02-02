import { LandingPage } from './components/LandingPage';
import { useGameStore } from './store/gameStore';
import './App.css';

function App() {
  const { isPlaying, currentScene } = useGameStore();

  return (
    <div className="app">
      {!isPlaying ? (
        <LandingPage />
      ) : (
        <div className="scene-container">
          <div className="coming-soon">
            <h2>Coming Soon</h2>
            <p>장면: {currentScene}</p>
            <p>3D 힐링 경험이 곧 구현됩니다...</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
