import './App.css';
import LeftComponent from './components/left';
import RightComponent from './components/right';

function App() {
  return (
    <>
      <div className="w-full h-screen bg-[#212121] text-white">
        <div className="flex">
          <div className="w-[18vw]">
            <LeftComponent />
          </div>
          <div className="w-[82vw]">
            <RightComponent />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
