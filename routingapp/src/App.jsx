import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.min.css'
import Navbar from './layout/Navbar'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
//import Register from './pages/Register'
import Error from './pages/Error.jsx'
import Footer from './layout/Footer.jsx'
import Studetails from './pages/Studetails.jsx'
import Update from './pages/Update.jsx'
import Delete from './pages/Delete.jsx'
import Admin from './pages/Admin.jsx'
import Success from './pages/Success.jsx'
import Registerform from './pages/Registerform.jsx'
import Stulogin from './pages/Stulogin.jsx'
import Studashboard from './pages/Studashboard.jsx'

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
            {/* <Route path='/register' element={<Register/>}/> */}
            <Route path='/register' element={<Registerform/>}/>
            <Route path='/studetails' element={<Studetails/>}/>
            <Route path='/update/:stuId' element={<Update/>}/>
            <Route path='/delete/:stuId' element={<Delete/>}/>
            <Route path='/admin' element={<Admin/>}/>
            <Route path='/success' element={<Success/>}/>
            <Route path='/stulogin' element={<Stulogin/>}/>
            <Route path='/studashboard' element={<Studashboard/>}/>
            <Route path='*' element={<Error/>}/>
          </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}

export default App