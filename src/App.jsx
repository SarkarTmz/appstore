import {Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './components/molecules/Header/Header';
import Home from './pages/Home/Home';
import Games from './pages/Games/Games';
import Apps from './pages/Apps/Apps';
import Psp from './pages/Psp/Psp';
import Contact from './pages/Contact/Contact';
import MobileNav from './components/molecules/MobileNav/MobileNav';
import About from './pages/About/About';

function App() {
  return (
  <>
    <Header />
    <MobileNav />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/games' element={<Games/>} />
        <Route path='/apps' element={<Apps/>} />
        <Route path='/psp-games' element={<Psp/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
      </>
  );
}

export default App;
