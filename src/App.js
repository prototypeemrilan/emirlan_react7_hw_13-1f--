import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AboutPage from './pages/aboutPage/AboutPage';
import MainPage from './pages/mainPage/MainPage';
import PortfolioPage from './pages/portfolioPage/PortfolioPage';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';


function App() {
  return (
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route index element={<MainPage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/portfolio' element={<PortfolioPage/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>

  );
}

export default App;