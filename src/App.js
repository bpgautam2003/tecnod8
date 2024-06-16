import './App.css';
import Benefits from './components/Benefits';
import Contact from './components/Contact';
import Deliverables from './components/Deliverables';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Partners from './components/Partners';
import Products from './components/Products';
import Team from './components/Team';

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Deliverables/>
    <Products/> 
    <Benefits />
    <Contact/>
    <Team/> 
    <Partners/>
    <Footer/>
    </>
  );
}

export default App;
