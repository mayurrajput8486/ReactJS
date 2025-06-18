import { Fragment } from "react"
import Home from './components/Home'
import About from './components/About'
import User from './components/User'
import Emp from './components/Emp'
import './App.css'
const App = () => {
  return (

    // Array Method - [ele1, ele2, ele3 ]
    /* [
      <h1>Welcome to Skramby Family</h1>,
      <h2>Good Afternoon....</h2>,
      <h3>Hello Everyone...</h3>
    ] */

    // fragment 
    /* <Fragment>
     <h1>Welcome to Skramby Family</h1>
     <h2>Good Evening....</h2>
    </Fragment> */

    //using div tag
    <div>
      <div className='myStyle'>
        <h1>Welcome to Skramby Family</h1>
        <h2>I am App Comp</h2>
        <h2>Good Morning...</h2>
      </div>
      <Home />
      <About />
      <User/>
      <Emp/>
    </div>

    // Sugar syntax <> </>
    /* < >
        <h1>Welcome to Skramby Family</h1>
        <h2>Have a Nice Day...</h2>
    </> */



  )
}

export default App