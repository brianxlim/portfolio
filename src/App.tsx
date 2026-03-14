import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './pages/Home';
import CursorBackground from './components/CursorBackground';
import Archive from './pages/Archive';
import Skills from './pages/Skills';

function App() {
  return (
    <BrowserRouter>
      <CursorBackground />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
