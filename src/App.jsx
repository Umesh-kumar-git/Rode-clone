import './App.css'
import Navbar from './Navbar/Navbar';
import { BrowserRouter  } from 'react-router-dom';
import Home from './home/Home';
import Footer from './Footer/Footer';
function App() {
  

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Home/>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
