import {Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Games from './pages/Games';
import Apps from './pages/Apps';
import Psp from './pages/Psp';
import Contact from './pages/Contact';
import MobileNav from './components/MobileNav';

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
      </Routes>
      </>
  );
}

export default App;
