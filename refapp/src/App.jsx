import { useState } from 'react'
import './App.css'
import Refapp from './components/Refapp'
import Videoapp from './components/Videoapp'
import Focusapp from './components/Focusapp'
import Counter from './components/counter'
const App = () => {
  const [box,setBox] = useState({
    backgroundColor : 'black',
    width : '150px',
    height : '150px'
  })

  const updateBox = () =>{
    setBox({
      backgroundColor : 'orange',
      width : '500px',
      height : '150px',
      transition : '2s'
    })
  }
  return (
    <div>
      <h1>Learn useRef () Hook</h1>
      <h2>Using useState () Hook</h2>
      <div style={box}></div>
      <br/>
      <button onClick={updateBox}>Update</button>
      <hr/>
      <Refapp/>
      <hr/>
      <Videoapp/>
      <hr/>
      <Focusapp/>
      <hr/>
      <Counter/>
    </div>
  )
}

export default App