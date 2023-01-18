import './App.css'
import Navbar from './Navbar/Navbar';
import { BrowserRouter  } from 'react-router-dom';
import Home from './home/Home';
import Bnr from './home/Bnr2';
function App() {
  

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Home/>
    </BrowserRouter>
    </>
  )
}

export default App
