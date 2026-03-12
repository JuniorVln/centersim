import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import QuemSomos from './pages/QuemSomos';
import Contato from './pages/Contato';
import SejaParceiro from './pages/SejaParceiro';
import JaSouParceiro from './pages/JaSouParceiro';

function App() {
  return (
    <div className="app-container">
      <ScrollToTop />
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quem-somos" element={<QuemSomos />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/seja-parceiro" element={<SejaParceiro />} />
          <Route path="/ja-sou-parceiro" element={<JaSouParceiro />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
