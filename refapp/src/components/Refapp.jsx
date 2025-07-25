import { useRef } from "react"

const Refapp = () => {
    const boxRef = useRef()

    const updateStyle = () =>{
        boxRef.current.style.cssText = "background-color : orange; width : 500px; transition : 3s; height : 150px"
    }
  return (
    <div>
        <h1>Using useRef () Hook</h1>
        <div style={{backgroundColor : 'black', width : '150px', height : '150px'}} ref={boxRef}></div>
        <br/>
        <button onClick={updateStyle}>Update</button>
    </div>
  )
}

export default Refapp