import { Route, Routes } from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import RequestCallPopup from './components/RequestCallPopup';
import Consultation from './components/Consultation';

import RightBottomButtons from './components/RightBottomButtons';

import ContactPage from './pages/ContactPage';
import OnlineBooking from './pages/OnlineBooking';
import OurMasters from './pages/OurMasters';
import Price from './pages/Price';
import ReviewPage from './pages/ReviewPage';
import MainPage from './pages/MainPage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <RequestCallPopup />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/address" element={<ContactPage />} />
        <Route path="/online-booking" element={<OnlineBooking />} />
        <Route path="/price" element={<Price />} />
        <Route path="/our-masters" element={<OurMasters />} />
        <Route path="/reviews" element={<ReviewPage />} />
      </Routes>

      <Consultation />
      <RightBottomButtons />
      <Footer />
    </div>
  );
}

export default App;
