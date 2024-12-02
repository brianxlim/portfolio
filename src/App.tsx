import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './pages/Home';
import CursorBackground from './components/CursorBackground';
import Archive from './pages/Archive';

function App() {
  return (
    <BrowserRouter>
      <CursorBackground />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archive" element={<Archive />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
