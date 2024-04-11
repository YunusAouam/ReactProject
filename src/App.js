import './input.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Header from './components/ui/header';
import Footer from './components/ui/footer';
import Login from './login';
import Aos from 'aos';
import { useEffect } from 'react';
import ContactUs from './pages/contactUs';
import Portfolio from './pages/Portfolio';
import SpeedDialComponent from './components/utils/speedDial';
import AboutUs from './pages/AboutUs';
function App() {
  useEffect(() => {        
    Aos.init({
        duration: 500,
        easing: 'ease-in-out',})
  
    // return () => {
    //   second
    // }
  }, [])
  
  return (
      <BrowserRouter>
          <Header />
          <Routes>
              <Route path='/' element={ <Home /> } />
              <Route path='/login' element={ <Login /> } />
              <Route path='/contact' element={ <ContactUs /> } />
              <Route path='/portfolio' element={ <Portfolio /> } />
              <Route path='/about' element={ <AboutUs /> } />
          </Routes>
          <SpeedDialComponent />
          <Footer />
      </BrowserRouter>
  );
}

export default App;
