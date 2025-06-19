
//import Home from './components/Home'
//import About from './components/About'
//import User from './components/User'
//import Emp from './components/Emp'
import Userdetails from './components/Userdetails'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
const App = () => {
  return (
    <div>
      <div className='myStyle'>
        <h1>Welcome to Skramby Family</h1>
      </div>
      {/* <Home />
      <About />
      <User/>
      <Emp/> */}
      <Userdetails/>
    </div>
  )
}

export default App