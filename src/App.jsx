import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from "./Pages/About"
import Shop from "./Pages/Shop"
import Contact from "./Pages/Contact"
import Login from './Pages/Login'
import NavBar from './components/NavBar'

function App() {
  return (
    <>
    <NavBar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
