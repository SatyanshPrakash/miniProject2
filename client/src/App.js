import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './components/auth/Register';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Watch from './components/watch/Watch';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/watch' element={<Watch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
