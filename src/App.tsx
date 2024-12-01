import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './pages/Home';
import CursorBackground from './components/CursorBackground';

function App() {
  return (
    <BrowserRouter>
      <CursorBackground />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
