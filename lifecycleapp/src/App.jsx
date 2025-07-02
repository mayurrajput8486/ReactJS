import { useState } from "react"


import Counter from "./components/Counter"
const App = () => {
  const [show,setShow] = useState(true)
  return (
    <div>
      <h1>Learn useEffect() Hook</h1>
      <button style={{backgroundColor : 'black', fontSize : '30px', padding : '10px', marginBottom : '10px', color : 'yellow'}} onClick={()=>setShow(!show)}>Click Me</button>
      {
        show ? <Counter/> : <h2>Comp Unmounted</h2>
      }
      
    </div>
    
  )
}

export default App