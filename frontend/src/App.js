import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/layouts/Header';
import Home from './Components/layouts/Home';
import Footer from './Components/layouts/Footer';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/header" element={<Header />} />
        <Route path="/footer" element={<Footer />} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
