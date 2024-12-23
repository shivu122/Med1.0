import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import ImageUpload from './components/ImageUpload';
import MedicineDetails from './pages/MedicineDetails';
import About from './pages/About';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import MedicalDisclaimer from './pages/MedicalDisclaimer';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-purple-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/identify" element={<ImageUpload />} />
            <Route path="/details" element={<MedicineDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/disclaimer" element={<MedicalDisclaimer />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;