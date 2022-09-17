import Home from './pages/home/home';
import Profile from './pages/profile/profile';
import Login from './pages/login/login';
import Register from './pages/Register/Register';
// domのインモート
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    // Routerで囲む
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
