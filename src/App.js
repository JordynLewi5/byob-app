import { Routes, Route, Navigate } from 'react-router-dom';
import './styles/App.css';
import Home from './js/Home';
import UserProfile from './js/UserProfile';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
