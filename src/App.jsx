import "./App.css";
import {Routes, Route} from 'react-router-dom';
import Mockman from 'mockman-js';

function App() {
  return (
    <div>
      <h1>Video Library</h1>
      <Routes>
        <Route path="/mock" element={<Mockman/>} />
        <Route path="/" element={<div>Home</div>}/>
        <Route path="/video" element={<div>Video</div>} />
      </Routes>
    </div>
  );
}

export default App;
