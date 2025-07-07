import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import Navbar from './layout/Navbar'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Register from './pages/Register'
import Error from './pages/Error.jsx'
const App = () => {
  return (
    <div>
      <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='*' element={<Error/>}/>
          </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App