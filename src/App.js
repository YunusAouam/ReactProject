import './input.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home';
import Header from './components/ui/header';
import Footer from './components/ui/footer';
import Login from './login';
import Aos from 'aos';
import { useEffect } from 'react';

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
          </Routes>
          <Footer />
      </BrowserRouter>
  );
}

export default App;
