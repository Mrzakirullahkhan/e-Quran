import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import About from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs/ContactUs';
import Courses from './Pages/Courses';
import FAQs from './Pages/FAQs/FAQs';
import Home from './Pages/Home';
import Pricing from './Pages/Pricing/Pricing';
// import Modal from './Components/Modal';
import './App.css';
function App() {
  return (
    <Router>
      {/* Navbar will be present on all pages */}
      <Navbar />
{/* <div className="fixed top-[85px] left-0 w-full bg-[#1C8E5A] px-2 py-1 z-50"><marquee
  direction="right"
  className="font-bold text-white"
  style={{ wordSpacing: '10px' }}
>
  اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ, اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ
</marquee>
</div> */}

      {/* Define routes for each page */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/faqs' element={<FAQs />} />

      </Routes>
    </Router>
  );
}

export default App;
